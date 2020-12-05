import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from './../../../model/CategoriaModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-categoria',
  templateUrl: './cadastra-categoria.component.html',
  styleUrls: ['./cadastra-categoria.component.css']
})
export class CadastraCategoriaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private catService: CategoriaService,
    public router: Router) {

    let id = this.route.snapshot.paramMap.get('id');

    this.categoria = new CategoriaModel();

    if (id != null && id != undefined) {

      this.catService.buscarCategoriaId(id).get().subscribe((o: any) => {
        this.categoria.Data = o.data();
        this.categoria.IdCategoria = o.id;
      }
      );

    }

  }

  categoria: CategoriaModel;

  ngOnInit(): void {
  }

  Salvar() {
    if (this.categoria.IdCategoria == "") {
      this.catService.Inserir(this.categoria).then((o: any) => {
        alert("Categoria Salva: " + o.id);

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["adm/categoria/lista"]);
        });
      })
    }
    else {
      //alert(1)
      this.catService.Alterar(this.categoria).then(() => {
      
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["adm/categoria/lista"]);
        });

      });
    }
  }
}
