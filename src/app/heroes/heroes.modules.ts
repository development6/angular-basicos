import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent, //todo lo que esta dentro del modulo
        ListadoComponent
    ],
    exports:[//que cosas quiero hacer visibles fuera de este modulo, que sean publicas
        ListadoComponent
    ],
    imports:[//solo van modulos
        CommonModule
    ]
})
export class HeroesModule{

}