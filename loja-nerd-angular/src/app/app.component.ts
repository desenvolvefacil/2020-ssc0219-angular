import { Component } from '@angular/core';
var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'loja-nerd-angular';

  lista = [{ Nome: "Canecas", Alias: "alias" }, { Nome: "Camisas", Alias: "camisa" }];

  classeMenu = "topnav"


  abrirUrl(cat:any){
    
  }

  abrirMenu() {

    //alert("");

    if (this.classeMenu == "topnav") {
      this.classeMenu = "topnav responsive";
    } else {
      this.classeMenu = "topnav";
    }

    /*
  var x = document.getElementById("myTopnav");
  
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
*/

  }



}




