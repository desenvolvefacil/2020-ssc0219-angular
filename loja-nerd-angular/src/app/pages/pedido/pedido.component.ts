import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './../../services/pedido.service';
import { UtilModel } from './../../../model/UtilModel';
import { PedidoModel } from './../../../model/PedidoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public util:UtilModel, private pServ:PedidoService, private route:ActivatedRoute) {
    this.p = new PedidoModel();
   }

  p

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id!=null){
      this.p.IdPedido = id;

      let inf = this.pServ.buscarPedido(id).get().subscribe((o:any)=>{
        this.p.Data = o.data();
      }
      );

    }
  }

}
