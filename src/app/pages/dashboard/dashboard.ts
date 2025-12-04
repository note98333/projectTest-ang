import { Component } from '@angular/core';
import { TopDash } from "../../dashboard/top-dash/top-dash";
import { Transaction } from "../../dashboard/transaction/transaction";
import { Revenue } from "../../dashboard/revenue/revenue";
import { Salesreport } from "../../dashboard/salesreport/salesreport";
import { Totalview } from "../../dashboard/totalview/totalview";
import { Update } from "../../dashboard/update/update";


@Component({
  selector: 'app-dashboard',
  imports: [TopDash, Transaction, Revenue, Salesreport, Totalview, Update],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
