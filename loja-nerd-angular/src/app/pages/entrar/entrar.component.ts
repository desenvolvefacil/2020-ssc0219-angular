import { UsuarioModel } from './../../../model/UsuarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor() { }

  public u: UsuarioModel = new UsuarioModel()

  ngOnInit(): void {
  }


  buscarCep(inp: any | null) {
    if (inp != null && inp.returnValue) {
      var input = inp.target as HTMLInputElement;

      //this.q = input.value;

      //this.u.Data.Cep = input.value;

      alert(this.u.Data.Cep)

    }
  }

}
