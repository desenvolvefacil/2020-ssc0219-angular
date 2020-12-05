import { UtilModel } from './../../model/UtilModel';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/model/UsuarioModel';
import { sha512 } from 'js-sha512';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,private firestore: AngularFirestore,private util:UtilModel) { }

  buscarCepWeb(cep:string){
    return this.http.get("https://viacep.com.br/ws/"+cep+"/json/");
    //http://cep.republicavirtual.com.br/web_cep.php?cep=91010000&formato=json
  }

  cadastraUsuario(u:UsuarioModel){
    u.Data.Senha = sha512.create().update(u.Data.Senha).toString();

    return this.firestore.collection(this.util.UsuariosDB).add(JSON.parse(JSON.stringify(u.Data)));
  }

  alteraUsuario(u:UsuarioModel, Senha:string){
    if(Senha!=""){
      u.Data.Senha = sha512.create().update(Senha).toString();
    }

    return this.firestore.collection(this.util.UsuariosDB).doc(u.IdUsuario).update(JSON.parse(JSON.stringify(u.Data)));
  }

  logar(email:string,senha:string){
    senha = sha512.create().update(senha).toString();

    return  this.firestore.collection(this.util.UsuariosDB,ref=>ref.where('Email','==',email).where('Senha','==',senha)).get()
  }

}
