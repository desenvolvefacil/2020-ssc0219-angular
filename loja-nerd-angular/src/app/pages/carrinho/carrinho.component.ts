import { ItemPedidoModel } from './../../../model/ItemPedidoModel';
import { UtilModel } from './../../../model/UtilModel';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    public util:UtilModel
  ) { 
    this.carrinho = new Array<ItemPedidoModel>();
  }

  carrinho:Array<ItemPedidoModel>;

  ValorTotal = 0

  ngOnInit(): void {

    this.carrinho = this.util.getCarrinho();

    this.atualizaTotal();

  }


  atualizaTotal(){
    this.ValorTotal = this.carrinho.reduce((subtotal, item) => subtotal + item.ValorUnitario * item.Qtd,0)
  }

  removerQtd(i:number){
    this.carrinho[i].Qtd--;

    if(this.carrinho[i].Qtd<1){
      this.carrinho.splice(i,1);
    }

    this.util.setCarrinho(this.carrinho);

    this.atualizaTotal();
  }

  addQtd(i:number){
    
    this.carrinho[i].Qtd++;

    this.util.setCarrinho(this.carrinho);

    this.atualizaTotal();
  }

}
