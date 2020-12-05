import { UtilModel } from './../../../model/UtilModel';
import { PedidoModel } from './../../../model/PedidoModel';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.css']
})
export class PedidosAdmComponent implements OnInit {

  constructor(public ps: PedidoService,public util:UtilModel) { 
    this.pedidos = new Array<PedidoModel>();
  }

  pedidos;

  ngOnInit(): void {
    
    this.ps.listarTodos().subscribe((data: any) => {
      this.pedidos = data.map((e: any) => {
        return {
          //Data["Nome"]: e.payload.doc.data()['Nome'],
          //Data["Alias"]: e.payload.doc.data()['Alias'],
          //Description: e.payload.doc.data()['Description'],
          Data : e.payload.doc.data(),
          IdPedido:  e.payload.doc.id
        };
      })

      //console.info(this.categorias)
    });

  }

}
