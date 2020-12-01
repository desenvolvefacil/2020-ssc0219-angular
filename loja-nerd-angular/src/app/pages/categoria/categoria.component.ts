import { ProdutoModel } from './../../../model/ProdutoModel';
import { ProdutoService } from './../../services/produto.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})



export class CategoriaComponent implements OnInit {

  constructor( private route: ActivatedRoute, private firestore: AngularFirestore) {
    this.produtos = new Array<ProdutoModel>();
   }

   produtos:Array<ProdutoModel>;

  alias:string="";

  ngOnInit() {
    this.alias = this.route.snapshot.paramMap.get('alias') as string;


    this.firestore.collection('Produtos', ref => ref.where("AliasCategoria", "==", this.alias)).get()
        .subscribe(ss => {
         
            ss.docs.forEach(doc => {
              //console.info(doc.data());
              this.produtos.push(doc.data() as ProdutoModel );
            })
          
        })
      
  }

}
