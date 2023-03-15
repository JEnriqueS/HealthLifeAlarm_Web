import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-buscar_dispositivo',
  templateUrl: './buscar_dispositivo.component.html',
  styleUrls: ['./buscar_dispositivo.component.css']
})
export class Buscar_dispositivoComponent {
  public isMenuOpen: boolean = false;

  folders: Section[] = [
    {
      name: 'Audios',
      updated: new Date('12/5/22'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Dont Cry.mp3',
      updated: new Date('1/4/22'),
    },
    {
      name: 'Bolero falaz.mp3',
      updated: new Date('12/5/22'),
    },
    {
      name: 'Amor eterno.mp3',
      updated: new Date('12/3/22'),
    },
    {
      name: 'Vidas paralelas.mp3',
      updated: new Date('8/10/22'),
    },
    {
      name: 'Amor sincero.mp3',
      updated: new Date('23/7/22'),
    },
  ];





}
