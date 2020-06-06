 import {Component} from '@angular/core';
import {Coche} from './coche'; 

 @Component({
     selector: 'coche',
     templateUrl: './coche.component.html'
 })
 export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(){
        this.coche = new Coche("","","");
        this.coches=[
            new Coche("Seat Panda","120","Blanco"),
            new Coche("Reanault Clio","120","Blanco")
            

        ];
    }

    onSubmit(){
        console.log(this.coche);

    }
 }  