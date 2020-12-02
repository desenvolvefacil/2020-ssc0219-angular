import { UtilModel } from './../../model/UtilModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private firestore: AngularFirestore, private util:UtilModel) { }


  lisarCategorias():any {
    return  this.firestore.collection(this.util.CategoriaDB).snapshotChanges();
  }

  buscarCategoria(Alias:string):any{
    return  this.firestore.collection(this.util.CategoriaDB,ref=>ref.where('Alias','==',Alias)).doc().get()
    
    //sdasdasd
    
    ;
  }


}
