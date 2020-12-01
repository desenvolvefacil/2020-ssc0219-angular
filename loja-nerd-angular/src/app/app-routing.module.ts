import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';

const routes: Routes = [{path:"categoria/:alias",component:CategoriaComponent}];

//const routes: Routes =[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
