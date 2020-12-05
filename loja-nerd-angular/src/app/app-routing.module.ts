import { MeusPedidosComponent } from './pages/meus-pedidos/meus-pedidos.component';
import { MinhaContaComponent } from './pages/minha-conta/minha-conta.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ListaCategoriaComponent } from './adm/lista-categoria/lista-categoria.component';
import { CadastraCategoriaComponent } from './adm/cadastra-categoria/cadastra-categoria.component';
import { CadastraProtudoComponent } from './adm/cadastra-protudo/cadastra-protudo.component';
import { ListaProtudoComponent } from './adm/lista-protudo/lista-protudo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

const routes: Routes = [
  /*OBS sempre que editarem ou criearem rotas novas, organizar sempre da maio pra menor*/

  
  //pagina de listagem de produtos
  {path:"categoria/:alias",component:CategoriaComponent},
  //página de detalhe do produto
  {path:"produto/:alias",component:ProdutoComponent},
  
  //pagina de pesquisa
  {path:"q/:q",component:CategoriaComponent},

  //pagina inicial (produtos aleatorios)
  {path:"",component:CategoriaComponent},
  //{path: '', redirectTo: '/categoria', pathMatch: 'full'},

  {path:"adm/produto/lista",component:ListaProtudoComponent},

  {path:"adm/produto/cadastro",component:CadastraProtudoComponent},

  {path:"adm/categoria/lista",component:ListaCategoriaComponent},

  {path:"adm/categoria/cadastro",component:CadastraCategoriaComponent},

  {path:"sobre",component:SobreComponent},
  {path:"contato",component:ContatoComponent},
  {path:"carrinho",component:CarrinhoComponent},

  {path:"entrar/:ret",component:EntrarComponent},
  {path:"entrar",component:EntrarComponent},

  {path:"minha-conta",component:MinhaContaComponent},
  {path:"pedidos",component:MeusPedidosComponent},

  {path:"pedido/:id",component:PedidoComponent},
  //{path:"adm",component:ListaProtudoComponent}

];

//const routes: Routes =[];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
