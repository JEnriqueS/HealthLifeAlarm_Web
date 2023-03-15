import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modificar_alarma',
  templateUrl: './modificar_alarma.component.html',
  styleUrls: ['./modificar_alarma.component.css']
})
export class Modificar_alarmaComponent implements OnInit {
  public isMenuOpen: boolean = false;
  dialogRef: any;
  @ViewChild('textoMotivacionalDialog') textoMotivacionalDialog = {} as TemplateRef<string>;
  @ViewChild('mensajeAudioDialog') mensajeAudiolDialog = {} as TemplateRef<string>;

  constructor(public dialog: MatDialog) { }

  openTextoMotivacionalDialog() {
    this.dialogRef = this.dialog.open(this.textoMotivacionalDialog,
      { height: '270px', width: '270px' });
  }

  openMensajeAudioDialog() {
    this.dialogRef = this.dialog.open(this.mensajeAudiolDialog,
      { height: '305px', width: '300px' });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
