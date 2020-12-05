import { PedidoModel } from './../../../model/PedidoModel';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './../../services/pedido.service';
import { UtilModel } from './../../../model/UtilModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-adm',
  templateUrl: './pedido-adm.component.html',
  styleUrls: ['./pedido-adm.component.css']
})
export class PedidoAdmComponent implements OnInit {

  constructor(private pServ:PedidoService,public util:UtilModel,private route:ActivatedRoute) {

    this.p = new PedidoModel();
   }

   p

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id!=null){
      this.p.IdPedido = id;

      this.pServ.buscarPedido(id).get().subscribe((o:any)=>{
        this.p.Data = o.data();
      }
      );

    }
  }



}
