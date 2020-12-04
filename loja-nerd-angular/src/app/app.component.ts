import { environment } from './../environments/environment';
import { UtilModel } from './../model/UtilModel';
import { CategoriaService } from './services/categoria.service';
import { CategoriaModel } from './../model/CategoriaModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'Loja Nerd ANgular';

  q: string = "";

  //@Input() inputPesquisar!: string;

  //@ViewChild('inputPesquisar') inputPesquisar: ElementRef;
  //palavraPesquisa = "sss";
  //categorias = [{ Nome: "Canecas", Alias: "alias" }, { Nome: "Camisas", Alias: "camisa" }];


  public categorias: Array<CategoriaModel>;

  classeMenu = "topnav";


  constructor(private catService: CategoriaService, public router: Router, public util: UtilModel,) {

    this.categorias = new Array<CategoriaModel>();

  }


  ngOnInit() {

    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }

    //this.indexAtivo = UtilModel.IndexAtivo;

    //alert(this.util.getIndexAtivo());

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



  abrirMenu() {

    //alert("");

    if (this.classeMenu == "topnav") {
      this.classeMenu = "topnav responsive";
    } else {
      this.classeMenu = "topnav";
    }

  }


  atualizarQ(inp: KeyboardEvent | null) {
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;

      this.q = input.value;

    }
  }

  AbrirPesquisa() {
    //let currentUrl = this.router.url;
    if (this.q != '') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/q/' + this.q]);
      });
    }
  }


}




