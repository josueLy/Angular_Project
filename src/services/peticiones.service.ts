import {Injectable} from "@angular/core"
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Observable';


@Injectable()
export class PeticionesService{

    getPrueba(){

        return 'Hola Mundo desde el servicio'   ;
    }
}