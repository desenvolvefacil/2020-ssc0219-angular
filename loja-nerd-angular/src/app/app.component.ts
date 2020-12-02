import { UtilModel } from './../model/UtilModel';
import { CategoriaService } from './services/categoria.service';
import { CategoriaModel } from './../model/CategoriaModel';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'loja-nerd-angular';

  //categorias = [{ Nome: "Canecas", Alias: "alias" }, { Nome: "Camisas", Alias: "camisa" }];


  public categorias: Array<CategoriaModel>;

  classeMenu = "topnav";


  constructor(private catService: CategoriaService, private router: Router, public util: UtilModel,) {

    this.categorias = new Array<CategoriaModel>();

  }


  ngOnInit() {
    

    //this.indexAtivo = UtilModel.IndexAtivo;

    //alert(this.util.getIndexAtivo());

    this.catService.lisarCategorias().subscribe((data: any) => {
      this.categorias = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Nome: e.payload.doc.data()['Nome'],
          Alias: e.payload.doc.data()['Alias'],
          //Description: e.payload.doc.data()['Description'],
        };
      })
      //console.log(this.categorias);
    });

  }

  abrirUrl(cat: CategoriaModel|null, i: number) {
    //alert(cat.Nome);

    //muda o menu ativo
    //this.util.IndexAtivo = i;
    this.util.setIndexAtivo(i.toString());


    //alert(UtilModel.IndexAtivo);

    //this.router.navigateByUrl("/categoria/"+cat.Alias);

    //this.router.navigate(['/categoria', cat.Alias]);

    //    return false;


    if (cat != null && cat != undefined) {
      //evita o reload
      setTimeout(() => {
        this.router.navigateByUrl('/categoria', { skipLocationChange: false }).then(() =>
          this.router.navigate(['/categoria', cat.Alias])
        );
      }, 500);
    }
  }

  abrirMenu() {

    //alert("");

    if (this.classeMenu == "topnav") {
      this.classeMenu = "topnav responsive";
    } else {
      this.classeMenu = "topnav";
    }

    /*
  var x = document.getElementById("myTopnav");
  
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
*/

  }



}




