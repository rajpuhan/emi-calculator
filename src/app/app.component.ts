import { Component } from '@angular/core';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emi-calculator';
  principal: number = 300000;
  emi: number | undefined;
  interest: number = 10;
  time: number= 5;
  totalPayble: any | undefined;
  interestPayble: any | undefined;
  chartData: any = [];
  chartType = ChartType.PieChart;
  chartOptions={
    pieHole: 0.7,
    colors: ['#ffa500','#7cb5ec'],
    legend: 'none',
    pieSliceText: 'none'
  }
  constructor(){
    this.calculateEMI('',0);
  }

  calculateEMI(field: String, value: number){
    const input=field;

    if(input === 'principal'){
      this.principal = value;
    }
    else if(input === 'interest'){
      this.interest = value;
    }
    else if(input === 'time'){
      this.time = value;
    }

    this.interestPayble= (this.principal*this.time*this.interest)/100;
    this.totalPayble = this.interestPayble + this.principal;
    this.emi = this.totalPayble/(this.time*12);
    this.chartData = [
      ['Interest Payble', this.interestPayble],
      ['Principal', this.principal],
    ]
  }
}
