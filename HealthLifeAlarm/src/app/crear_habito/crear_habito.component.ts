import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-crear_habito',
  templateUrl: './crear_habito.component.html',
  styleUrls: ['./crear_habito.component.css']
})
export class Crear_habitoComponent {
  public isMenuOpen: boolean = false;

  listOfAudios: string[] = ['Ejercicio físico', 'Alimentación', 'Meditación', 'Sueño', 'Otro hábito'];

}
