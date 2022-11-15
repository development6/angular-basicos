import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[]=["Spiderman", "Ironman", "Hulk", "Thor"];

  heroeBorrado :string ='';
  borrarHeroe(){
    //this.heroes.shift();
    const heroeBorrado = this.heroes.shift(); //shift borra y retorna
    this.heroeBorrado= heroeBorrado || ''; //retorna algo o muestra un string vacio
    console.log(heroeBorrado);//por eso se muestra aqui
  }

}
