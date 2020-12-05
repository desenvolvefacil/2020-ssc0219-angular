import { UsuarioService } from './../../services/usuario.service';
import { EnderecoUsuarioModel } from './../../../model/UsuarioModel';
import { UtilModel } from './../../../model/UtilModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  constructor(util:UtilModel,private us: UsuarioService) { 
    this.u = util.getUsuario();
  }

  u

  Senha=""

  public ufs = [
    { "nome": "Acre", "sigla": "AC" },
    { "nome": "Alagoas", "sigla": "AL" },
    { "nome": "Amapá", "sigla": "AP" },
    { "nome": "Amazonas", "sigla": "AM" },
    { "nome": "Bahia", "sigla": "BA" },
    { "nome": "Ceará", "sigla": "CE" },
    { "nome": "Distrito Federal", "sigla": "DF" },
    { "nome": "Espírito Santo", "sigla": "ES" },
    { "nome": "Goiás", "sigla": "GO" },
    { "nome": "Maranhão", "sigla": "MA" },
    { "nome": "Mato Grosso", "sigla": "MT" },
    { "nome": "Mato Grosso do Sul", "sigla": "MS" },
    { "nome": "Minas Gerais", "sigla": "MG" },
    { "nome": "Pará", "sigla": "PA" },
    { "nome": "Paraíba", "sigla": "PB" },
    { "nome": "Paraná", "sigla": "PR" },
    { "nome": "Pernambuco", "sigla": "PE" },
    { "nome": "Piauí", "sigla": "PI" },
    { "nome": "Rio de Janeiro", "sigla": "RJ" },
    { "nome": "Rio Grande do Norte", "sigla": "RN" },
    { "nome": "Rio Grande do Sul", "sigla": "RS" },
    { "nome": "Rondônia", "sigla": "RO" },
    { "nome": "Roraima", "sigla": "RR" },
    { "nome": "Santa Catarina", "sigla": "SC" },
    { "nome": "São Paulo", "sigla": "SP" },
    { "nome": "Sergipe", "sigla": "SE" },
    { "nome": "Tocantins", "sigla": "TO" }

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


  Salvar(){
    

    this.us.alteraUsuario(this.u,this.Senha).then(o=>{
      alert("Dados Salvos");
    });

    

  }
}
