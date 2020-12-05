import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from 'src/model/CategoriaModel';
import { ProdutoModel } from 'src/model/ProdutoModel';

@Component({
  selector: 'app-cadastra-protudo',
  templateUrl: './cadastra-protudo.component.html',
  styleUrls: ['./cadastra-protudo.component.css']
})
export class CadastraProtudoComponent implements OnInit {

  constructor(private catService: CategoriaService) {
    this.categorias = new Array();
    this.produto = new ProdutoModel();
  }

  categorias: Array<CategoriaModel>;

  produto:ProdutoModel;



  ngOnInit(): void {
    this.catService.lisarCategorias().subscribe((data: any) => {
      this.categorias = data.map((e: any) => {
        return {
          Nome: e.payload.doc.data()['Nome'],
          Alias: e.payload.doc.data()['Alias'],
          //Description: e.payload.doc.data()['Description'],
        };
      })
      //console.log(this.categorias);
    });
  }

  updateCategoria(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLSelectElement;
  
      this.produto.AliasCategoria = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }

  atualizarFoto1(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Foto1 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto1(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Foto2 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto1(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Foto3 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto1(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Foto4 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }

  

}
