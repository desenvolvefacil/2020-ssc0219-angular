import { AngularFirestore } from '@angular/fire/firestore';
import { PedidoModel } from './../../model/PedidoModel';
import { UtilModel } from './../../model/UtilModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private util: UtilModel, private firestore: AngularFirestore) { }

  cadastraPedido(p: PedidoModel) {
    return this.firestore.collection(this.util.PedidosDB).add(JSON.parse(JSON.stringify(p.Data)));
  }

  listarPedidos(email:string){
    return  this.firestore.collection(this.util.PedidosDB,ref=>ref.where('Cliente.Data.Email','==',email)).get()
  }

  listarTodos(){
    return  this.firestore.collection(this.util.PedidosDB,ref=>ref.orderBy('DataHora','desc')).snapshotChanges()
  }

  buscarPedido(id:string){
    return this.firestore.collection(this.util.PedidosDB).doc(id);
  }

}
