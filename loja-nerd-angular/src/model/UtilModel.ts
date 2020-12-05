import { UsuarioModel } from './UsuarioModel';
import { CategoriaModel } from './CategoriaModel';
import { ItemPedidoModel } from './ItemPedidoModel';
import { Injectable } from '@angular/core';
//cria uma LocaStorafe

@Injectable()
export class UtilModel {


  //parametros para moedas e idioma
  /**************Lembrar de Alterar no Index.php */
  public Idioma = "pt-BR";
  public Moeda = "BRL";

  public CategoriaDB: string = "Categorias";
  public ProdutosDB: string = "Produtos";

  public getIndexAtivo(): string {

    //alert( localStorage.getItem("IndexAtivo"))
    return localStorage.getItem("IndexAtivo") as string;
  }

  public setIndexAtivo(IndexAtivo: string): void {
    localStorage.setItem("IndexAtivo", IndexAtivo);
  }


  /****CARRINHO***** */
  public getCarrinho(): Array<ItemPedidoModel> {

    let carrinho =  new Array<ItemPedidoModel>();

    let carString  = localStorage.getItem("CARRINHO") as string;

    if(carString!=null && carString !=undefined){
      
     //console.info(carString);

      carrinho = JSON.parse(carString);

    }

    //console.log(carrinho);

    return carrinho;
  }

  public setCarrinho(Carrinho: Array<ItemPedidoModel>): void {
    let CarrinhoString = JSON.stringify(Carrinho);

    localStorage.setItem("CARRINHO", CarrinhoString);
  }



  /**************Menu Categorias******** */
  public setMenuCategorias(Categorias:Array<CategoriaModel>):void{
    let CategoriasString = JSON.stringify(Categorias);

    localStorage.setItem("CATEGORIAS", CategoriasString);
  }

  public getMenuCategorias(): Array<CategoriaModel> {

    let Categorias =  new Array<CategoriaModel>();

    let CategoriasString  = localStorage.getItem("CATEGORIAS") as string;

    if(CategoriasString!=null && CategoriasString !=undefined){
      
     //console.info(carString);

     Categorias = JSON.parse(CategoriasString);

    }

    //console.log(carrinho);

    return Categorias;
  }



  public getUsuario(): UsuarioModel {

    let uString  = localStorage.getItem("Usuario") as string;

    //alert( localStorage.getItem("IndexAtivo"))
    return JSON.parse(uString);
  }

  public setUsuario(u:UsuarioModel|null): void {
    let uString = JSON.stringify(UsuarioModel);

    localStorage.setItem("Usuario", uString);
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