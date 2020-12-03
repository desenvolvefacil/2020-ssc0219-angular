import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { UtilModel } from './../../../model/UtilModel';
import { ProdutoModel } from './../../../model/ProdutoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(
    public util:UtilModel,
    private prodService:ProdutoService,
    public route: ActivatedRoute
    ) { 

    this.prod = new ProdutoModel();
      
  }

  prod:ProdutoModel;
  alias: string | null = null;


  ngOnInit(): void {

    this.alias = this.route.snapshot.paramMap.get('alias');

    
    this.prodService.buscarProduto(this.alias as string).subscribe((data: any) => {

      this.prod = data.docs[0].data();

      this.prod.ID = data.docs[0].id;

      //this.cat = data.docs[0].data();

      //Description: e.payload.doc.data()['Description'],

      //console.info(data.docs[0].data())


    });


  }

}
