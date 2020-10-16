import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {

  public loading: boolean = false
  public mainChartOpts: any

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createMainChart()
  }


  createMainChart() {
    this.loading = true
    this.http.get('/assets/data/example1.json').subscribe((data: any) => {
      this.mainChartOpts = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 15,
          containLabel: true,
        },
        xAxis: {
          data: data.map(function (item) {
            return item[0]
          })
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        dataZoom: [{
          startValue: '2019-06-01'
        }, {
          type: 'inside'
        }],
        visualMap: {
          orient: 'horizontal',
          top: 0,
          right: 0,
          left: 35,
          textStyle: {
            fontSize: 11,
          },
          pieces: [{
            gt: 0,
            lte: 50,
            color: '#00bf7f'
          }, {
            gt: 50,
            lte: 100,
            color: '#ffe83b'
          }, {
            gt: 100,
            lte: 150,
            color: '#ffb066'
          }, {
            gt: 150,
            lte: 200,
            color: '#cc3d61'
          }, {
            gt: 200,
            lte: 300,
            color: '#934099'
          }, {
            gt: 300,
            color: '#7e0023'
          }],
          outOfRange: {
            color: '#c3c3c3'
          }
        },
        series: {
          type: 'line',
          data: data.map(function (item) {
            return item[1]
          }),
          markLine: {
            silent: true,
            data: [{
              yAxis: 50
            }, {
              yAxis: 100
            }, {
              yAxis: 150
            }, {
              yAxis: 200
            }, {
              yAxis: 300
            }]
          }
        }
      }

      this.loading = false
    })
  }

}
