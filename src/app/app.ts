import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from "./layout/sidenav/sidenav";
import { Navbar } from "./layout/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sales-dashboard');
}
