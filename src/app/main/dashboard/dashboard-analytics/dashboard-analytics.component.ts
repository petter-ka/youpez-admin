import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {AvatarGenerator} from 'random-avatar-generator'
import {uniqueNamesGenerator, names, Config, countries} from 'unique-names-generator'


const generator = new AvatarGenerator()
const config: Config = {
  dictionaries: [countries]
}
const configName: Config = {
  dictionaries: [names]
}
const getDaysArray = function (s, e) {
  let a = []
  for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d))
  }
  return a
}

@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {

  public loading: boolean = false
  public mainChartOpts: any
  public miniChart1: any = {}
  public miniChart2: any = {}
  public miniChart3: any = {}
  public logs = []
  public users = []
  public rightSidebarVisibility: boolean = true

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createMainChart()
    this.createMiniCharts()
    this.generateLogs()
  }

  generateLogs() {
    let daylist = getDaysArray(new Date("2020-08-01"), new Date("2020-10-01"))
    this.logs = daylist
      .map((v) => {
        return {
          date: v.toISOString().slice(0, 10),
          name: uniqueNamesGenerator(configName),
          country: uniqueNamesGenerator(config),
        }
      })
    this.users = Array.from({length: 10}).map(() => {
      return {
        avatar: generator.generateRandomAvatar(),
        name: uniqueNamesGenerator(configName),
        country: uniqueNamesGenerator(config),
      }
    })
  }

  createMiniCharts() {
    this.miniChart1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          name: 'EU',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          show: false,
          type: 'value',
          name: 'US',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'EU',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name: 'US',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: 'CTR',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    }
    this.miniChart2 = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: 'Browsers',
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          data: [
            {value: 335, name: 'Explorer'},
            {value: 310, name: 'Firefox'},
            {value: 234, name: 'Edge'},
            {value: 135, name: 'Safari'},
            {value: 1548, name: 'Chrome'}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    this.miniChart3 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        }
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 25,
        top: 15,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6']
        }
      ],
      yAxis: [
        {
          show: false,
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Other',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330]
        },
        {
          name: 'Mobile',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330]
        },
        {
          name: 'Desktop',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330]
        }
      ]
    }
  }

  createMainChart() {
    this.loading = true
    this.http.get('assets/data/example1.json').subscribe((data: any) => {
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

  onToggleRightSidebar() {
    this.rightSidebarVisibility = !this.rightSidebarVisibility
  }

}
