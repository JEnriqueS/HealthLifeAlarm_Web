import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mis_habitos',
  templateUrl: './mis_habitos.component.html',
  styleUrls: ['./mis_habitos.component.css']
})
export class Mis_habitosComponent implements OnInit {
  showSideNav = true;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
