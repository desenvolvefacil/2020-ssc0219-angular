import { Title } from '@angular/platform-browser';
import { PedidoModel } from './../../../model/PedidoModel';
import { Router } from '@angular/router';
import { UtilModel } from './../../../model/UtilModel';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  constructor(public ps: PedidoService, public util: UtilModel, public router: Router,
    public pServ: PedidoService,private titleService: Title
  ) {
    this.u = util.getUsuario();
    this.pedidos = new Array<PedidoModel>();

    this.titleService.setTitle("Meus Pedidos")
  }

  u;

  pedidos;

  ngOnInit(): void {

    if (this.u == null) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['entrar']);
      });
    }

    this.pServ.listarPedidos(this.u.Data.Email).subscribe(data => {

      data.docs.forEach((doc:any) => {
        
        let p = new PedidoModel();

        p.IdPedido = doc.id;

        p.Data.DataHora = doc.data().DataHora;
        p.Data.ValorTotal = doc.data().ValorTotal;


        this.pedidos.push(p);

      });

      //console.info(this.pedidos);

    });


  }

}
