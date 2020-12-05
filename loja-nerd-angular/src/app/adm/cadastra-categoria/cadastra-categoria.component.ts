import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from './../../../model/CategoriaModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-categoria',
  templateUrl: './cadastra-categoria.component.html',
  styleUrls: ['./cadastra-categoria.component.css']
})
export class CadastraCategoriaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private catService:CategoriaService) {

    let id = this.route.snapshot.paramMap.get('id');

    this.categoria = new CategoriaModel();

    if (id != null && id != undefined) {

      this.catService.buscarCategoriaId(id).get().subscribe((o:any)=>{
        this.categoria.Data = o.data();
        this.categoria.IdCategoria = o.id;
      }
      );      

    }

  }

  categoria: CategoriaModel;

  ngOnInit(): void {
  }

}
