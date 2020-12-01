import { UtilModel } from './../../model/UtilModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private firestore: AngularFirestore) { }

  lisarPorAlias(aliasCategoria:string):any {
    //return  this.firestore.collection(UtilModel.ProdutosDB).ref.where('AliasCategoria', '==', 'canecas');

    return this.firestore.collection('testCollection', ref => ref.where("AliasCategoria", "==", aliasCategoria)).get();
  }
  

}
