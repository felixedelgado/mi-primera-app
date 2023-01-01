import { Component } from "@angular/core";

// Este es el decorador que indica que es un componente
@Component({
    selector: 'app-personas',
    // Tambien podemos directamente escribir el HTML si no es muy extenso en el component
    // El styleUrl es opcional, el template es obligatorio
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    // styles: [`
    // h1 {
    //     color: blue;
    // }
    // `]
})
// Esta es la clase asociada a nuestro nuevo componente
export class PersonasComponent {
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = 'Ingeniero';
    agregarPersona() {
        this.mensaje = 'Persona agregada';
    }
    modificarTitulo(event: Event) {
        // Para acceder al valor de la variable event
        // Ademas hay que indicarle que es de tipo HTMLInputElement
        this.titulo = (<HTMLInputElement>event.target).value;
    }

}