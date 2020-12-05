import { UtilModel } from './../../../model/UtilModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { UsuarioModel, EnderecoUsuarioModel } from './../../../model/UsuarioModel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(
    private us:UsuarioService,public route: ActivatedRoute,public router: Router
    ,private util:UtilModel
    ) { }

  public u: UsuarioModel = new UsuarioModel()

  public ufs = [
    {"nome": "Acre", "sigla": "AC"},
    {"nome": "Alagoas", "sigla": "AL"},
    {"nome": "Amapá", "sigla": "AP"},
    {"nome": "Amazonas", "sigla": "AM"},
    {"nome": "Bahia", "sigla": "BA"},
    {"nome": "Ceará", "sigla": "CE"},
    {"nome": "Distrito Federal", "sigla": "DF"},
    {"nome": "Espírito Santo", "sigla": "ES"},
    {"nome": "Goiás", "sigla": "GO"},
    {"nome": "Maranhão", "sigla": "MA"},
    {"nome": "Mato Grosso", "sigla": "MT"},
    {"nome": "Mato Grosso do Sul", "sigla": "MS"},
    {"nome": "Minas Gerais", "sigla": "MG"},
    {"nome": "Pará", "sigla": "PA"},
    {"nome": "Paraíba", "sigla": "PB"},
    {"nome": "Paraná", "sigla": "PR"},
    {"nome": "Pernambuco", "sigla": "PE"},
    {"nome": "Piauí", "sigla": "PI"},
    {"nome": "Rio de Janeiro", "sigla": "RJ"},
    {"nome": "Rio Grande do Norte", "sigla": "RN"},
    {"nome": "Rio Grande do Sul", "sigla": "RS"},
    {"nome": "Rondônia", "sigla": "RO"},
    {"nome": "Roraima", "sigla": "RR"},
    {"nome": "Santa Catarina", "sigla": "SC"},
    {"nome": "São Paulo", "sigla": "SP"},
    {"nome": "Sergipe", "sigla": "SE"},
    {"nome": "Tocantins", "sigla": "TO"}

];

  ngOnInit(): void {
  }


  buscarCep() {
    this.us.buscarCepWeb(this.u.Data.Endereco.cep).subscribe(
      data => {
        if (data != undefined && data != null) {
          this.u.Data.Endereco = data as EnderecoUsuarioModel;

          //console.info(data);
          //alert(this.u.Data.Endereco.logradouro);
        }
      }

      
    );
  }

  CadastraUsuario(){
   this.us.cadastraUsuario(this.u).then((retorno:any)=>{

    let ret = this.route.snapshot.paramMap.get('ret');

    let irpara="/pedidos";

    console.info(retorno);

    this.u.IdUsuario = retorno.id;

    //alert(this.u.IdUsuario)

    this.util.setUsuario(this.u);

    if(ret!=null){
      irpara = ret;
    }

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([irpara]);
    });

   }).catch(error=>{
     alert("Erro ao cadastrar Usuário");
   });
  }

}
