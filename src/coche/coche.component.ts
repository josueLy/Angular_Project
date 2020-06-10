 import {Component} from '@angular/core';
import {Coche} from './coche'; 
import {PeticionesService} from '../services/peticiones.service';

 @Component({
     selector: 'coche',
     templateUrl: './coche.component.html',
     providers : [PeticionesService]
 })
 export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(private _peticionesService: PeticionesService){
        this.coche = new Coche("","","");
        this.coches=[
            new Coche("Seat Panda","120","Blanco"),
            new Coche("Reanault Clio","120","Blanco")
            

        ];
    }
    ngOnInit(){

        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
 }  