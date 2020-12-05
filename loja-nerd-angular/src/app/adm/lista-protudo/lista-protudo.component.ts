import { ProdutoService } from './../../services/produto.service';
import { ProdutoModel } from 'src/model/ProdutoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-protudo',
  templateUrl: './lista-protudo.component.html',
  styleUrls: ['./lista-protudo.component.css']
})
export class ListaProtudoComponent implements OnInit {

  constructor(private pSer: ProdutoService) {
    this.produtos = new Array<ProdutoModel>();
  }

  produtos

  ngOnInit(): void {

    this.pSer.listarTodos().subscribe((data: any) => {
      this.produtos = data.map((e: any) => {
        return {
          //Data["Nome"]: e.payload.doc.data()['Nome'],
          //Data["Alias"]: e.payload.doc.data()['Alias'],
          //Description: e.payload.doc.data()['Description'],
          Data : e.payload.doc.data(),
          IdProduto:  e.payload.doc.id
        };
      })

      //console.info(this.categorias)
    });

  }

}
   
