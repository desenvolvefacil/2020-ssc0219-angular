import { Router } from '@angular/router';
import { CategoriaModel } from './CategoriaModel';
import { Injectable } from '@angular/core';

export const teste ="";



//cria uma LocaStorafe
@Injectable()
export class UtilModel{

    
    constructor(){
        //this.IndexAtivo = -1;
    }

    //parametros para moedas e idioma
    /**************Lembrar de Alterar no Index.php */
    public Idioma = "pt-BR";
    public Moeda = "BRL";

    public  CategoriaDB:string = "Categorias";
    public  ProdutosDB:string = "Produtos";

    public  getIndexAtivo():string{

        //alert( localStorage.getItem("IndexAtivo"))
        return localStorage.getItem("IndexAtivo") as string;
    }

    public setIndexAtivo(IndexAtivo:string):void{
        localStorage.setItem("IndexAtivo",IndexAtivo);
    }

    
    /*
    AbrirUrl(cat: CategoriaModel|null,router: Router) {
        //alert(cat.Nome);
    
        //muda o menu ativo
        //this.util.IndexAtivo = i;
        
    
        if (cat != null && cat != undefined) {
            this.setIndexAtivo(cat.Alias);

          //evita o reload
          setTimeout(() => {
            router.navigateByUrl('/categoria', { skipLocationChange: false }).then(() =>
              router.navigate(['/categoria', cat.Alias])
            );
          }, 500);
        }else{
            this.setIndexAtivo("home");

            //alert(localStorage.getItem("IndexAtivo") as string)
        }
      }
      */
}