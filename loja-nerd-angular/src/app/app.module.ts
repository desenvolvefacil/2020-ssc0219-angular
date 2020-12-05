import localePtBr  from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { UtilModel } from './../model/UtilModel';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { registerLocaleData } from '@angular/common';
import { NgxCurrencyModule } from 'ngx-currency';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CadastraProtudoComponent } from './adm/cadastra-protudo/cadastra-protudo.component';
import { ListaProtudoComponent } from './adm/lista-protudo/lista-protudo.component';
import { ListaCategoriaComponent } from './adm/lista-categoria/lista-categoria.component';
import { CadastraCategoriaComponent } from './adm/cadastra-categoria/cadastra-categoria.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { MinhaContaComponent } from './pages/minha-conta/minha-conta.component';
import { MeusPedidosComponent } from './pages/meus-pedidos/meus-pedidos.component';


export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};

registerLocaleData(localePtBr);


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ProdutoComponent,
    CadastraProtudoComponent,
    ListaProtudoComponent,
    ListaCategoriaComponent,
    CadastraCategoriaComponent,
    SobreComponent,
    ContatoComponent,
    CarrinhoComponent,
    EntrarComponent,
    MinhaContaComponent,
    MeusPedidosComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [
    UtilModel,
    //{ provide: UtilModel, useValue: new UtilModel() },
    //{ provide: UtilModel, useExisting: UtilModel},
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
