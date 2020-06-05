import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  
})
export class EmpleadoComponent {
  titulo_empleado='Lista de Empleados';
  lista_empleado='Josue Leon Yalta, Karoline Chavez, Jairo Galvez';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;
  
  // public nombre:string ="Victor Robles";
  // public edad:number =12;
  // public trabajos:Array<string>= ['Ing. de Sistemas','Analista de Sistemas','Desarrollador'];
  // public mayordeEdad:boolean;
  // comodin:any
  // constructor(){
    
  //   console.log(this.trabajos);
     nombre= 'Josue Leon';
  //   this.edad=77;
  //   this.mayordeEdad=false;
  //   this.comodin="SI";s
  

  ngOnInit(){
    //this.holaMundo();
    var uno =8;
    var dos=10;
    if(uno===8){
      let uno= 3;
      var dos=88;
      console.log("DENTRO DEL IF"+ uno);
    }
    this.empleado= new Empleado('David Lopez',45,'Cocinero',true);
    this.trabajadores =[
      new Empleado('David Lopez',45,'Cocinero',false),
      new Empleado('Josue Leon',45,'Chofer',true),
      new Empleado('Mabel Tomapasca',45,'Zapatera',true)
    ]
    console.log(this.empleado);
    this.trabajador_externo=false;
    this.color='blue';
    this.color_seleccionado='#ccc';
    
  }


  cambiarExterno(valor){
    this.trabajador_externo=valor;
  }
  // holaMundo(){
  //   alert('Hola '+this.nombre);
  // }
}