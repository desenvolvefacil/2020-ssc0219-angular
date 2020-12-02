import { UtilModel } from './../../model/UtilModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private firestore: AngularFirestore,private util:UtilModel) { }

  lisarPorAlias(aliasCategoria:string):any {
    //return  this.firestore.collection(UtilModel.ProdutosDB).ref.where('AliasCategoria', '==', 'canecas');

    return this.firestore.collection(this.util.ProdutosDB, ref => ref.where("AliasCategoria", "==", aliasCategoria).orderBy("Nome") ).get();
  }
  
  listarHomePage(){
    return this.firestore.collection(this.util.ProdutosDB, ref =>ref.limit(6).orderBy('DataCadastro','desc')).get();
    //.get();
  }

  

}
