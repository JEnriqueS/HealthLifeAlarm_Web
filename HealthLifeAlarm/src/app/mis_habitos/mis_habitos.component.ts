import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis_habitos',
  templateUrl: './mis_habitos.component.html',
  styleUrls: ['./mis_habitos.component.css']
})
export class Mis_habitosComponent implements OnInit {
  constructor(private router: Router) {  }

  ngOnInit() {
  }

}
