import { ItemPedidoModel } from './../../../model/ItemPedidoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { UtilModel } from './../../../model/UtilModel';
import { ProdutoModel } from './../../../model/ProdutoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(
    public util: UtilModel,
    private prodService: ProdutoService,
    public route: ActivatedRoute,
    public router: Router
  ) {

    this.prod = new ProdutoModel();

  }

  prod: ProdutoModel;
  alias: string | null = null;
  qtd: number = 1;

  IdProduto: string = "";

  ngOnInit(): void {

    this.alias = this.route.snapshot.paramMap.get('alias');


    this.prodService.buscarProduto(this.alias as string).subscribe((data: any) => {

      this.prod = data.docs[0].data();

      this.IdProduto = data.docs[0].id;

      //this.cat = data.docs[0].data();

      //Description: e.payload.doc.data()['Description'],

      //console.info(data.docs[0].data())


    });


  }

  addCarrinho() {

    let carrinho = this.util.getCarrinho();

    //verifica se já esta no carrinho
    let existe = false;

    carrinho.forEach(element => {
      if (element.IdProduto == this.IdProduto) {
        existe = true;

        element.Qtd ++;
      }
    });

    if (existe) {
    } else {

      let p = new ItemPedidoModel();

      p.IdProduto = this.IdProduto;
      p.AliasProduto = this.prod.Alias;
      p.Foto = this.prod.Foto1;
      p.NomeProduto = this.prod.Nome;
      p.Qtd = 1;
      p.ValorUnitario = this.prod.Valor;

      carrinho.push(p);
    }

    this.util.setCarrinho(carrinho);


    
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/carrinho/']);
      });
    

  }

}
