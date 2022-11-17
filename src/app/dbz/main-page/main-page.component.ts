import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[]= [
    {
      nombre: "Goku",
      poder: 1500
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ];

  nuevo:Personaje={
    nombre: "Maestro Roshi",
    poder: 7500
  }

  // cambiarNombre(event: any){
  //   console.log(event.target.value);
  // }

  agregarNuevoPersonaje(argumento: Personaje){
    //console.log("Main page component")
    this.personajes.push(argumento);
  }

}

//@Outpout cuando un componente hijo necestita emitir un valor al padre, es lo opuesto al @Input
//@Outpout sirve para emitir eventos
