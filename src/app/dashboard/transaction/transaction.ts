import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import {Ellipsis} from 'lucide-angular';

export interface Transactions {
  id: number;
  name: string;
  date: string;
  status: 'Completed' | 'Pending';
  icon: string;
  code: string;
}
@Component({
  selector: 'app-transaction',
  imports: [LucideAngularModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
})
export class Transaction {
  Ellipsis = Ellipsis
  isActive = true;
  dataTransaction: Transactions[] = [
    {id:1,icon:'pi pi-shopping-bag',name:'Premium T-Shirt',date:'Jul 12th 2024',status:"Completed",code:'QWERTYU'},
    {id:2,icon:'pi pi-user',name:'Playstation S',date:'Jul 12th 2024',status:"Pending",code:'QWERTYU'},
    {id:3,icon:'pi pi-user',name:'Hoodia Gombrong',date:'Jul 12th 2024',status:"Pending",code:'QWERTYU'},
    {id:4,icon:'pi pi-mobile',name:'iPhone 15 Pro Max',date:'Jul 12th 2024',status:"Completed",code:'QWERTYU'},
    {id:5,icon:'pi pi-shopping-bag',name:'Lotse',date:'Jul 12th 2024',status:"Completed",code:'QWERTYU'},
    {id:6,icon:'pi pi-apple',name:'Starbucks',date:'Jul 12th 2024',status:"Completed",code:'QWERTYU'},
    {id:7,icon:'pi pi-shopping-bag',name:'Tinek Detstar T-Shirt',date:'Jul 12th 2024',status:"Pending",code:'QWERTYU'},

  ]

}
