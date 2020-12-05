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

}
