import { Component } from '@angular/core';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';
import { ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-revenue',
  imports: [LucideAngularModule, ChartModule],
  templateUrl: './revenue.html',
  styleUrl: './revenue.css',
})
export class Revenue {
  TrendingUp = TrendingUp;
  data = {
    labels: ['1','2','3','4'],
    datasets: [{
      data: [10,20,30,40],
      backgroundColor: ['green'],
    },
  {
    data: [90,20,30,40],
    backgroundColor: ['blue']
  }]
  }
}
