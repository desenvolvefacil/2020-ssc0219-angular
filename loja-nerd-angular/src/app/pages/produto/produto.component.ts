import { UtilModel } from './../../../model/UtilModel';
import { ProdutoModel } from './../../../model/ProdutoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(public util:UtilModel) {

    this.prod = new ProdutoModel();

   }

  prod:ProdutoModel;

  ngOnInit(): void {

    

  }

}
