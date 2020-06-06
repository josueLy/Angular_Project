import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmpleadoComponent } from 'src/empleado/empleado.component';
import {routing, appRoutingProviders} from './app.routing'
import { HomeComponent } from 'src/home/home.component';
import { ContactoComponent } from 'src/contacto/contacto.component';
import {ConversorPipe} from 'src//pipes/conversor.pipe';
import { CochesComponent } from 'src/coche/coche.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    ConversorPipe

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
