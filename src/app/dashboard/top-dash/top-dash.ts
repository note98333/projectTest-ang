import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-top-dash',
  imports: [DatePipe],
  templateUrl: './top-dash.html',
  styleUrl: './top-dash.css',
})
export class TopDash {
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = new Date();
  year = this.date.getFullYear();
  month = this.months[this.date.getMonth()];
  
}
