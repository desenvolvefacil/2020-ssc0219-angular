import { Injectable } from '@angular/core';

export const teste ="";


//cria uma LocaStorafe
@Injectable()
export class UtilModel{

    
    constructor(){
        //this.IndexAtivo = -1;
    }

    public  CategoriaDB:string = "Categorias";
    public  ProdutosDB:string = "Produtos";

    public  getIndexAtivo():string{
        return localStorage.getItem("IndexAtivo") as string;
    }

    public setIndexAtivo(IndexAtivo:string):void{
        localStorage.setItem("IndexAtivo",IndexAtivo);
    }
}