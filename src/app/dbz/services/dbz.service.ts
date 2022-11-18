import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    constructor(){
        //console.log("Servicio inicializado");
    }

    private _personajes: Personaje[]= [ //para no ver personajes como una propiedad fuera de este servicio
        {
          nombre: "Goku",
          poder: 1500
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes]; //para que no lo pase por referencia
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}