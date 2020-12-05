import { ProdutoModel } from 'src/model/ProdutoModel';
import { UtilModel } from './../../model/UtilModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private firestore: AngularFirestore, private util: UtilModel) { }

  lisarPorAlias(aliasCategoria: string): any {
    //return  this.firestore.collection(UtilModel.ProdutosDB).ref.where('AliasCategoria', '==', 'canecas');

    return this.firestore.collection(this.util.ProdutosDB, ref => ref.where("AliasCategoria", "==", aliasCategoria).orderBy("Nome")).get();
  }

  listarTodos() {
    return this.firestore.collection(this.util.ProdutosDB, ref => ref.orderBy('Alias', 'asc')).snapshotChanges()
  }

  listarHomePage() {
    return this.firestore.collection(this.util.ProdutosDB, ref => ref.limit(6).orderBy('DataCadastro', 'desc')).get();
    //.get();
  }

  listarPorQ(q: string) {
    return this.firestore.collection(this.util.ProdutosDB, ref => ref.orderBy("Alias")).get();
  }

  buscarProduto(alias: string) {
    return this.firestore.collection(this.util.ProdutosDB, ref => ref.where('Alias', '==', alias)).get()
  }

  buscarProdutoId(id: string) {
    return this.firestore.collection(this.util.ProdutosDB).doc(id)
  }

  inserirProduto(p: ProdutoModel) {

    return this.firestore.collection(this.util.ProdutosDB).add(JSON.parse(JSON.stringify(p.Data)));
  }

  alterarProduto(p: ProdutoModel) {
    return this.firestore.collection(this.util.ProdutosDB).doc(p.IdProduto).update(JSON.parse(JSON.stringify(p.Data)));
  }
}


