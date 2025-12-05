import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dot } from 'lucide-angular';
import { LucideAngularModule, ChevronRight, TrendingUp, TrendingDown
  ,Ellipsis
 } from 'lucide-angular';

@Component({
  selector: 'app-top-dash',
  imports: [DatePipe,LucideAngularModule],
  templateUrl: './top-dash.html',
  styleUrl: './top-dash.css',
})
export class TopDash {
  Dot = Dot
  Ellipsis = Ellipsis
  ChevronRight = ChevronRight
  TrendingUp = TrendingUp
  TrendingDown = TrendingDown
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthshort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  date = new Date();
  month = this.months[this.date.getMonth()];
  monshort = this.monthshort[this.date.getMonth()];
  year = this.date.getFullYear();
  day = this.date.getDay();
  dates = this.monshort +" "+ this.day + " " + this.year;
  
  
}
