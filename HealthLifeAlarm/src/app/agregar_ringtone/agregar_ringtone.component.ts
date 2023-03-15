import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar_ringtone',
  templateUrl: './agregar_ringtone.component.html',
  styleUrls: ['./agregar_ringtone.component.css']
})
export class Agregar_ringtoneComponent implements OnInit {
  public isMenuOpen: boolean = false;
  listOfAudios: string[] = ['Alarm clock', 'Barium', 'Buzzer Alarm', 'Cesium', 'Dewdrops', 'Morning', 'Osmium', 'Platinum', 'Scandium'];

  constructor() { }

  ngOnInit() {
  }

}
