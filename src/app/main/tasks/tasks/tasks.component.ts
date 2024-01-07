import {Component, OnInit, ViewChild} from '@angular/core'
import {AppTasksComponent} from "../../../../@youpez"


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @ViewChild('appTasksList', {static: true}) appTasksList: AppTasksComponent

  public taskGroups = [
    {
      groupName: 'Monday frontend meeting',
      id: 'sadas',
      opened: true,
      tasks: [
        {
          description: 'Angular v9 dependency updates',
          id: 'sadasdas',
          level: 1,
          checked: false,
          priority: 'high',
        },
        {
          description: 'Make more descriptive errors for directives\' errors in AOT build',
          level: 1,
          id: 'sadassdfsdfsdfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Add autocorrect attribute support on field for iOS devices',
          level: 1,
          id: 'sadassdfsddfsdfdsdas',
          checked: false,
        },
        {
          description: 'docs: update /deep/ to ::ng-deep ',
          id: 'sadassdfsddfdasdsasdasdfdsdas',
          checked: false,
          priority: 'low',
        },
        {
          description: '*ngFor should support separators',
          id: 'sadassdfsddfdasdssdsdfsasdasdfdsdas',
          checked: false,
        },

        {
          description: 'Interpolation options for View.styles argument',
          id: 'sadassdfsddfdasdssdsdfsas2dasdfdsdas',
          checked: false,
        },
        {
          description: 'Angular2 Routing: persisting route tabs and child routes',
          id: 'sadassdfsddfdasdssds1dfsasdasdfdsdas',
          checked: true,
          priority: 'low',
        },
        {
          description: 'Implement @ObserveChildren or similar API',
          id: 'sadassdfsddfdasds2sdsdfsasdasdfdsdas',
          checked: true,
          priority: 'high',
        }
      ]
    },
    {
      groupName: 'Kubernetes cluster meeting last tuesday',
      id: 'sadas2',
      opened: true,
      tasks: [
        {
          description: 'Provide a way to perform offline CRD schema validation',
          level: 1,
          id: 'sadassdfsddfd2asdssdsdfsasdasdfdsdas',
          checked: false,
        },
        {
          description: 'Specific error status codes for volume operation metrics',
          level: 1,
          id: 'sadfd2asdssdsdfsasdasdfdsdas',
          checked: true,
          priority: 'low',
        },
        {
          description: 'Unix domain socket cause crashes in Windows certain versions ',
          level: 1,
          id: 'sasdssdsdfsasdasdfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Evicted DaemonSet pod stuck Daemonset\'s rolling update',
          level: 1,
          id: 'sasdssdsdf5sasdasdfdsdas',
          checked: false,
        },
        {
          description: 'increase volume provisioning rate',
          level: 1,
          id: 'sasdssdsd5454f5sasdasdfdsdas',
          checked: false,
        },
        {
          description: 'startupProbe readiness state update issues',
          level: 1,
          id: 'dffddsffsd',
          checked: true,
          priority: 'high',
        }
      ]
    },
    {
      groupName: 'Devops todo',
      id: 'sadas22',
      opened: true,
      tasks: [
        {
          description: 'support container based scaling to HPA with custom-metrics server',
          level: 1,
          id: 'sadassdfsddfd2asdssdsdfsasdasdfdsd2as',
          checked: false,
        },
        {
          description: 'Move disallow volume expansion test ouside of storage driver testsuite',
          level: 1,
          id: 'sadfd2asdssdsdfsasdasdfdsda2s',
          checked: true,
          priority: 'high',
        },
        {
          description: 'timeBudget shouldn\'t depend on the real clock help wanted',
          level: 1,
          id: 'sasdssdsdfsasdasd3fdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'waitForFirstConsumer PVCs fail to bind when Pod spec.nodeName is specified  ',
          level: 1,
          id: 'sasdssdsdf5sasdas4dfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Add default node affinity constraints to NodeAffinity plugin',
          level: 1,
          id: 'sasdssdsd5454f5sasda5sdfdsdas',
          checked: true,
          priority: 'high',
        }
      ]
    }
  ]

  public tags = [
    {
      name: 'Meetings',
      active: true,
      bg: 'app-bg-success',
    },
    {
      name: 'Devops',
      bg: 'app-bg-success-lt-10',
    },
    {
      name: 'Frontend',
      bg: 'app-bg-success-lt-20',
    },
    {
      name: 'Architecture',
      bg: 'app-bg-success-lt-20',
    },
    {
      name: 'API',
      bg: 'app-bg-success-lt-30',
    },
    {
      name: 'Issues',
      bg: 'app-bg-warning',
    },
    {
      name: 'Features',
      bg: 'app-bg-info',
    },
    {
      name: 'Other',
      bg: 'app-bg-success-lt-40',
    },
  ]

  public users = [
    {
      avatar: 'assets/img/avatar/avatar2.jpg',
      name: 'John Belinda',
      text: 'Cannot start service web: error while creating mount source path ',
      date: '5 mins ago',
    },
    {
      avatar: 'assets/img/avatar/avatar3.jpg',
      name: 'Reta Collen',
      text: 'Automate the update of compose spec from docker-compose ',
      date: '1 hour ago',
    },
    {
      avatar: 'assets/img/avatar/avatar6.jpg',
      name: 'Elizabeth Mozelle',
      text: 'Add an option to config: entries to name the config by content hash',
      date: '5 hours ago',
    },
    {
      avatar: 'assets/img/avatar/avatar7.jpg',
      name: 'Marys Rob',
      text: 'Breaking Changes: Internal/External Secrets and Name/Label Problems with External Secrets',
      date: '1 day ago',
    },
    {
      avatar: 'assets/img/avatar/avatar8.jpg',
      name: 'Adoree Morgan',
      text: 'cpus value type in output of config command is not consistent in version 1.27.3 ',
      date: '3 days ago',
    }
  ]

  public archives = [
    {
      name: '2020-Q2',
    },
    {
      name: '2020-Q1',
    },
    {
      name: '2019-Q4',
    },
    {
      name: '2019-Q3',
    },
  ]

  public txtSearch: string = ''
  public leftSidebarVisibility: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddList() {
    this.appTasksList.addGroup()
  }

  onMinimize() {
    this.appTasksList.minimize()
  }

  onMaximize() {
    this.appTasksList.maximize()
  }

  onSearchChange(event) {
    this.txtSearch = event
  }

  onToggleLeftSidebar() {
    this.leftSidebarVisibility = !this.leftSidebarVisibility
  }
}
