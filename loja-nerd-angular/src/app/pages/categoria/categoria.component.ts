import { CategoriaService } from './../../services/categoria.service';
import { CategoriaModel } from './../../../model/CategoriaModel';
import { UtilModel } from './../../../model/UtilModel';
import { ProdutoModel } from './../../../model/ProdutoModel';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})



export class CategoriaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private prodService: ProdutoService, 
    private catService:CategoriaService,
    public util:UtilModel
    
    ) {
    this.produtos = new Array<ProdutoModel>();
    this.cat = new CategoriaModel();
  }

  produtos: Array<ProdutoModel>;

  alias: string | null = null;

  cat:CategoriaModel;

  ngOnInit() {
    this.alias = this.route.snapshot.paramMap.get('alias');

    if (this.alias != null) {
      //busca produtos de uma categoria especifica
      this.prodService.lisarPorAlias(this.alias).subscribe((ss: any) => {

        ss.docs.forEach((doc: any) => {
          //console.info(doc.data());
          this.produtos.push(doc.data() as ProdutoModel);
        })

      });

      //this.catService.buscarCategoria(this.alias).sub



    }else{
      //busca 6 produtos aleatorios

      this.util.setIndexAtivo('0');

      this.prodService.listarHomePage().subscribe((ss: any) => {

        ss.docs.forEach((doc: any) => {
          //console.info(doc.data());
          this.produtos.push(doc.data() as ProdutoModel);
        })

      }); 

      
      this.cat.Nome = "Novidades";
      this.cat.Alias = "";

    }

    /*this.firestore.collection('Produtos', ref => ref.where("AliasCategoria", "==", this.alias)).get()
        .subscribe(ss => {
         
            ss.docs.forEach(doc => {
              //console.info(doc.data());
              this.produtos.push(doc.data() as ProdutoModel );
            })
          
        })*/

  }

}
