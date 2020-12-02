import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';

const routes: Routes = [
  /*OBS sempre que editarem ou criearem rotas novas, organizar sempre da maio pra menor*/

  //pagins de listagem de produtos
  {path:"categoria/:alias",component:CategoriaComponent},
  //pagina inicial (produtos aleatorios)
  {path:"",component:CategoriaComponent}
  //{path: '', redirectTo: '/categoria', pathMatch: 'full'},
];

//const routes: Routes =[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
