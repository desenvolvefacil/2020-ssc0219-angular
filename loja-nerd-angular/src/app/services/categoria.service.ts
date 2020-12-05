import { UtilModel } from './../../model/UtilModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriaModel } from 'src/model/CategoriaModel';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private firestore: AngularFirestore, private util:UtilModel) { }


  lisarCategorias():any {
    return  this.firestore.collection(this.util.CategoriaDB).get();
  }

  listarCategoriasMenu():any{
    return  this.firestore.collection(this.util.CategoriaDB,ref=>ref.orderBy('Alias','asc')).snapshotChanges();
  }

  buscarCategoria(Alias:string):any{
    
    return  this.firestore.collection(this.util.CategoriaDB,ref=>ref.where('Alias','==',Alias)).get()

    ;
  }

  buscarCategoriaId(id:string){
    return this.firestore.collection(this.util.CategoriaDB).doc(id);
  }

  Inserir(cat:CategoriaModel):any{
    
      return this.firestore.collection(this.util.CategoriaDB).add(JSON.parse(JSON.stringify(cat.Data)));
    
  }

  Alterar(cat:CategoriaModel){
    return this.firestore.collection(this.util.CategoriaDB).doc(cat.IdCategoria).update(JSON.parse(JSON.stringify(cat.Data)));
  }

}
