import { PedidoModel } from './../../../model/PedidoModel';
import { PedidoService } from './../../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    public util:UtilModel,
    public route: ActivatedRoute, public router: Router,
    public pServ:PedidoService

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

  FinalizarCompra(){
    let u = this.util.getUsuario()
    
    if(u!=null){

      let pedido =  new PedidoModel();

      pedido.Data.Cliente = u;
      pedido.Data.Items = this.carrinho;
      pedido.Data.ValorTotal = this.ValorTotal;

      this.pServ.cadastraPedido(pedido).then((retorno: any) => {


        this.util.setCarrinho(null);

        alert("Obrigado por seu Pedido");

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['pedidos']);
        });

      });

      


    }else{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['entrar/carrinho']);
      });
    }
  }

}
