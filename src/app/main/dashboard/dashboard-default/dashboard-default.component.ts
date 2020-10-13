import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {

  public loaded = false
  public chartOptions = {}

  public comboboxItems = [
    {
      content: "one"
    },
    {
      content: "two"
    },
    {
      content: "three"
    },
    {
      content: "four"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    const data = [
      [10, 20, 30, 50, 55, 60, 23],
      [15, 40, 50, 20, 45, 20, 12],
    ]
    const series = data.map((points, index) => {
      return {
        data: points,
        stack: 'stackGroup',
        type: 'bar',
        barCategoryGap: 0.1,
        showBackground: true,
        backgroundStyle: {
          color: 'transparent'
        },
        itemStyle: {
          color: index % 2 === 0 ? 'rgb(77, 137, 249)' : 'rgba(198,213,255,0.7)'
        }
      }
    })
    const xAxisCategories = [...Array(data[0].length).keys()] // this is "hack", because this option split the bars
    this.chartOptions = {
      animation: false,
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        type: 'category',
        data: xAxisCategories,
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: series
    }
    console.log(this.chartOptions)
  }

}
