import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from './../../../model/CategoriaModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  constructor(private catService:CategoriaService) { 
    this.categorias = new Array<CategoriaModel>();
  }

  categorias;

  ngOnInit(): void {

    this.catService.listarCategoriasMenu().subscribe((data: any) => {
      this.categorias = data.map((e: any) => {
        return {
          //Data["Nome"]: e.payload.doc.data()['Nome'],
          //Data["Alias"]: e.payload.doc.data()['Alias'],
          //Description: e.payload.doc.data()['Description'],
          Data : e.payload.doc.data(),
          IdCategoria:  e.payload.doc.id
        };
      })

      //console.info(this.categorias)
    });

  }

}
