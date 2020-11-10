import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public events = [
    {
      time: '',
      type: '',
      title: 'TODAY',
      content: ``,
      children: []
    },
    {
      time: '11:30am',
      type: 'success',
      title: 'Kubernetes cluster deployed',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      children: [
        {
          time: '10:31pm',
          content: '11 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: '3 user logged in',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: 'Load balancer overloaded',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: '11 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: '3 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: 'Load balancer overloaded',
          type: 'warning',
        }
      ]
    },
    {
      time: '12:00am',
      type: 'success',
      title: 'Cluster working as usual',
      content: ``,
      children: []
    },
    {
      time: '12:30pm',
      type: 'danger',
      title: 'Cluster failed on EU-WEST (AWS)',
      content: `incididunt ut labore et dolore magna aliqua`,
      children: [
        {
          time: '10:31pm',
          content: '11 user crashed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Loadbalancer restart',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: 'Load balancer failed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Load balancer waiting for restart',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Load balancer failed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Loadbalancer restart',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: 'Load balancer failed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Loadbalancer restart',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: 'Load balancer failed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: 'Load balancer down',
          type: 'danger',
          pulse: true,
        },
      ]
    },
    {
      time: '13:00pm',
      type: 'success',
      title: 'New cluster deployed',
      pulse: true,
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      children: [
        {
          time: '10:31pm',
          content: '110 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: '320 user logged in',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: '11 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: '3 user logged in',
          type: 'success',
        },
        {
          time: '10:31pm',
          content: '32 user logged out',
          type: 'warning',
        },
        {
          time: '10:31pm',
          content: '11 user crashed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: '5 user crashed',
          type: 'danger',
        },
        {
          time: '10:31pm',
          content: '11 user logged in',
          type: 'success',
        },
      ]
    },
    {
      time: '13:30pm',
      type: 'success',
      title: 'Cluster working properly',
      content: ``,
      children: []
    },
    {
      time: '14:00pm',
      type: 'success',
      title: 'Cluster working properly',
      content: ``,
      children: []
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }


  getClassForEvent(event) {
    let classes = []
    if (event.pulse) {
      classes.push('app-timeline__item--pulse')
    }
    switch (event.type) {
      case 'success':
        classes.push('app-timeline__item--success')
        break
      case 'danger':
        classes.push('app-timeline__item--danger')
        break
      case 'warning':
        classes.push('app-timeline__item--warning')
        break
      case 'info':
        classes.push('app-timeline__item--info')
        break
      default:
    }
    return classes.join(' ')
  }

}
