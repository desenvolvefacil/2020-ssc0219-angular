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
    public route: ActivatedRoute,
    private prodService: ProdutoService,
    private catService: CategoriaService,
    public util: UtilModel

  ) {
    this.produtos = new Array<ProdutoModel>();
    this.cat = new CategoriaModel();
  }

  produtos: Array<ProdutoModel>;

  alias: string | null = null;

  cat: CategoriaModel;

  q: string | null = null;

  Banner1 = "themes/images/carousel/banner-1.jpg";

  ngOnInit() {


    //verifica se é pesquisa
    if (this.route.routeConfig?.path === "q/:q") {
      this.q = this.route.snapshot.paramMap.get('q');

    } else {
      this.alias = this.route.snapshot.paramMap.get('alias');
    }

    //alert(this.q)
    //alert(this.alias)

    if (this.alias != null) {

      this.util.setIndexAtivo(this.alias);

      //busca produtos de uma categoria especifica
      this.prodService.lisarPorAlias(this.alias).subscribe((ss: any) => {

        ss.docs.forEach((doc: any) => {
          //console.info(doc.data());
          let pr = new ProdutoModel();

          pr.IdProduto = doc.id;

          pr.Data = doc.data();

          this.produtos.push(pr);
        })


      });

      //console.log(this.produtos);


      this.catService.buscarCategoria(this.alias as string).subscribe((data: any) => {


        this.cat.Data = data.docs[0].data();


      })
      //console.log(this.categorias);

    } else if (this.q != null) {

      //significa que vem busca


      this.cat.Data.Alias = "";
      this.cat.Data.Nome = "Resultados para: " + this.q;

      //let retorno = new Array<Produ>

      this.prodService.listarPorQ(this.q).subscribe((ss: any) => {

        ss.docs.forEach((doc: any) => {
          //console.info(doc.data());
          let opc = new ProdutoModel();

          opc.IdProduto = doc.id;
          opc.Data = doc.data();

          this.q = this.q?.toLowerCase() as string;

          //alert((this.q))

          console.info(opc.Data.Nome.toLowerCase().search(this.q))

          if(opc.Data.Nome.toLowerCase().search(this.q)>=0){

            this.produtos.push(opc);

          }

        })

      });

    } else {
      //busca 6 produtos aleatorios

      this.util.setIndexAtivo("home");

      this.prodService.listarHomePage().subscribe((ss: any) => {

        ss.docs.forEach((doc: any) => {
          //console.info(doc);

          let pr = new ProdutoModel();

          pr.IdProduto = doc.id;

          pr.Data = doc.data();

          this.produtos.push(pr);
        })

      });


      this.cat.Data.Nome = "Novidades";
      this.cat.Data.Alias = "";

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
