import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Highcharts1: typeof Highcharts = Highcharts;
  Highcharts2: typeof Highcharts = Highcharts;
  Highcharts3: typeof Highcharts = Highcharts;
  chartOptions1: Highcharts.Options = {
    title: {
      text: "Line Chart"
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };
  chartOptions2: Highcharts.Options = {
    title: {
      text: "Pie Chart"
    },
    series: [
      {
        type: "pie",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };
  chartOptions3: Highcharts.Options = {
    title: {
      text: "Column Chart"
    },
    series: [
      {
        type: "column",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };
}
