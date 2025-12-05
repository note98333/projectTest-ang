import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {LucideAngularModule,Loader,LayoutGrid,ChartColumnStacked, BookUser,Package,Mail,Captions,Bolt,ShieldAlert } from 'lucide-angular';

@Component({
  selector: 'app-sidenav',
  imports: [LucideAngularModule, RouterOutlet, RouterLink],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  imageUrl = 'https://cdn-icons-png.flaticon.com/512/3884/3884864.png';
  readonly Loader = Loader;
  readonly LayoutGrid = LayoutGrid;
  readonly Chart = ChartColumnStacked;
  readonly BookUser = BookUser;
  readonly Package = Package;
  readonly Mail = Mail;
  readonly Captions = Captions;
  readonly Bolt = Bolt;
  readonly ShieldAlert = ShieldAlert;
}
