import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from 'src/model/CategoriaModel';
import { ProdutoModel } from 'src/model/ProdutoModel';

@Component({
  selector: 'app-cadastra-protudo',
  templateUrl: './cadastra-protudo.component.html',
  styleUrls: ['./cadastra-protudo.component.css']
})
export class CadastraProtudoComponent implements OnInit {

  constructor(private catService: CategoriaService, private pServ: ProdutoService
    , private route: ActivatedRoute, public router: Router) {
    this.categorias = new Array();
    this.produto = new ProdutoModel();

    let id = this.route.snapshot.paramMap.get('id');


    if (id != undefined && id != null) {
      this.pServ.buscarProdutoId(id).get().subscribe((o: any) => {
        this.produto.Data = o.data(),
        this.produto.IdProduto = o.id
      }
      );
    }

  }

  categorias: Array<CategoriaModel>;

  produto: ProdutoModel;



  ngOnInit(): void {




    this.catService.lisarCategorias().subscribe((ss: any) => {

      ss.docs.forEach((doc: any) => {
        //console.info(doc.data());
        let pr = new CategoriaModel();

        pr.IdCategoria = doc.id;

        pr.Data = doc.data();

        this.categorias.push(pr);

      })

      if (this.produto.Data.AliasCategoria == "") {
        this.produto.Data.AliasCategoria = this.categorias[0].Data.Alias;
      }

    });
  }

  /*
  updateCategoria(inp:any){
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLSelectElement;
  
      this.produto.Data.AliasCategoria = input.value;

      //alert(this.produto.AliasCategoria);
  
    }
  }
  */

  updateCategoria() {
    alert(this.produto.Data.AliasCategoria);
  }



  atualizarFoto2(inp: any) {
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;

      this.produto.Data.Foto2 = input.value;

      //alert(this.produto.AliasCategoria);

    }
  }

  atualizarFoto3(inp: any) {
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;

      this.produto.Data.Foto3 = input.value;

      //alert(this.produto.AliasCategoria);

    }
  }

  atualizarFoto4(inp: any) {
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;

      this.produto.Data.Foto4 = input.value;

      //alert(this.produto.AliasCategoria);

    }
  }

  SubirFoto(fileInput: any, numero: number) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 450;
      const max_width = 450;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);


          if (img_height > max_height && img_width > max_width) {
            alert("A imagem deve estar em 450 x 450 px")
            //return false;
          } else {
            const imgBase64Path = e.target.result;

            //alert ( numero)
            switch (numero) {
              case 1: {
                this.produto.Data.Foto1 = imgBase64Path;
                break;
              }
              case 2: {
                this.produto.Data.Foto2 = imgBase64Path;
                break;
              }
              case 3: {
                this.produto.Data.Foto3 = imgBase64Path;
                break;
              }
              case 4: {
                this.produto.Data.Foto4 = imgBase64Path;
                break;
              }
            }


            // this.previewImagePath = imgBase64Path;
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  Salvar() {
    if (this.produto.IdProduto == "") {
      this.pServ.inserirProduto(this.produto).then((o: any) => {
        alert("Produto Salvo: " + o.id);

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["adm/produto/lista"]);
        });
      })
    }else{
      this.pServ.alterarProduto(this.produto).then((o: any) => {
        //alert("Produto Salvo: " + o.id);

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["adm/produto/lista"]);
        });
      })
    }
  }
}
