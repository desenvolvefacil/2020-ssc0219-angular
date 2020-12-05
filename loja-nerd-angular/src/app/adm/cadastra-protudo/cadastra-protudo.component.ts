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
    this.catService.lisarCategorias().subscribe((ss: any) => {

      ss.docs.forEach((doc: any) => {
        //console.info(doc.data());
        let pr = new CategoriaModel();

        pr.IdCategoria = doc.id;

        pr.Data = doc.data();

        this.categorias.push(pr);

      })

      if(this.produto.Data.AliasCategoria==""){
        this.produto.Data.AliasCategoria = this.categorias[0].Data.Alias;
      }

    });
  }

  /*
  updateCategoria(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLSelectElement;
  
      this.produto.Data.AliasCategoria = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  */

 updateCategoria(){
   alert(this.produto.Data.AliasCategoria);
 }

  atualizarFoto1(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Data.Foto1 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto2(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Data.Foto2 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto3(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Data.Foto3 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  
    atualizarFoto4(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;
  
      this.produto.Data.Foto4 = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }

  

}
