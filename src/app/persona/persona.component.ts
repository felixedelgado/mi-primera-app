import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'Felix';
  apellido: string = 'Delgado';
  edad: number = 27;
  // private edad: number = 27; // Su un atributo es privado tenemos que definir un metodo para acceder a el

  /*getEdad(): number {
    return this.edad;
  }*/
}
