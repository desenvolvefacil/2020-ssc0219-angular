import { CategoriaModel } from './../../model/CategoriaModel';
import { UtilModel } from './../../model/UtilModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private firestore: AngularFirestore) { }


  lisarCategorias():any {
    return  this.firestore.collection(UtilModel.CategoriaDB).snapshotChanges();
  }


}
