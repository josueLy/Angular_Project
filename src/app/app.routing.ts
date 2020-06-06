import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"

//Importando componentes

import {EmpleadoComponent} from 'src/empleado/empleado.component';
import { HomeComponent } from 'src/home/home.component';
import { ContactoComponent } from 'src/contacto/contacto.component';
import {CochesComponent} from 'src/coche/coche.component';

const appRoutes : Routes = [

    {path:'', component: HomeComponent}, 
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto/:pagina', component : ContactoComponent},
    {path: 'contacto', component : ContactoComponent},   
    {path: 'coche', component : CochesComponent},   
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);