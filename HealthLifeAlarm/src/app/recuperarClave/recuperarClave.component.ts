import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-recuperarClave',
  templateUrl: './recuperarClave.component.html',
  styleUrls: ['./recuperarClave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  dialogRef: any;
  @ViewChild('msjConfirmacionDialog') msjConfirmacionDialog = {} as TemplateRef<string>;

  constructor(public dialog: MatDialog) { }

  openMensajeConfirmation() {
    this.dialogRef = this.dialog.open(this.msjConfirmacionDialog,
      { height: '200px', width: '300px' });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
