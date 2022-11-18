import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // constructor(private dbzService: DbzService) //inyectamos el servicio
  // {
  //   //this.personajes=this.dbzService.personajes;
  // }

  //personajes: Personaje[]=[];

  nuevo:Personaje={
    nombre: "Maestro Roshi",
    poder: 7500
  }

  // get personajes():Personaje[]{  //otra forma de hacer lo de arriba lo que esta dentro del constructor
  //   return this.dbzService.personajes;
  // }


  // cambiarNombre(event: any){
  //   console.log(event.target.value);
  // }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   this.personajes.push(argumento);
  // }

}

//@Outpout cuando un componente hijo necestita emitir un valor al padre, es lo opuesto al @Input
//@Outpout sirve para emitir eventos

//ng build --configuration production  //para desplegar a produccion
