import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./components/partials/header/header";
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header,RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';

  constructor(public router: Router){}


}
