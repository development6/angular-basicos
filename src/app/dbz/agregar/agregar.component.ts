import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private dbzService: DbzService ){}

  //@Input() personajes : Personaje[] =[]

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //EventEmitter es el tipo del output, y es de tipo generico <T> le pusimos Personaje

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    //this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();  
// this.onNuevoPersonaje.emit(this.nuevo); esto es todo por parte del componente hijo