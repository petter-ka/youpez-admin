import {Component, OnInit, ViewChild} from '@angular/core'
import {AppTasksComponent} from "../../../shared/app-tasks/app-tasks.component"


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @ViewChild('appTasksList', {static: true}) appTasksList: AppTasksComponent

  public taskGroups = [
    {
      groupName: 'Angular',
      id: 'sadas',
      opened: true,
      tasks: [
        {
          description: 'Angular v9 dependency updates',
          id: 'sadasdas',
          level: 1,
          checked: false,
        },
        {
          description: 'Make more descriptive errors for directives\' errors in AOT build',
          level: 1,
          id: 'sadassdfsdfsdfdsdas',
          checked: true,
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
        },
        {
          description: '*ngFor should support separators',
          id: 'sadassdfsddfdasdssdsdfsasdasdfdsdas',
          checked: true,
        }
      ]
    },
    {
      groupName: 'Kubernetes cluster',
      id: 'sadas2',
      opened: true,
      tasks: [
        {
          description: 'Angular v9 dependency updates',
          level: 1,
          id: 'sadassdfsddfd2asdssdsdfsasdasdfdsdas',
          checked: false,
        },
        {
          description: 'Make more descriptive errors for directives\' errors in AOT build',
          level: 1,
          id: 'sadfd2asdssdsdfsasdasdfdsdas',
          checked: true,
        },
        {
          description: 'Add autocorrect attribute support on field for iOS devices',
          level: 1,
          id: 'sasdssdsdfsasdasdfdsdas',
          checked: true,
        },
        {
          description: 'docs: update /deep/ to ::ng-deep ',
          level: 1,
          id: 'sasdssdsdf5sasdasdfdsdas',
          checked: false,
        },
        {
          description: '*ngFor should support separators',
          level: 1,
          id: 'sasdssdsd5454f5sasdasdfdsdas',
          checked: false,
        }
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddList() {
    this.appTasksList.addGroup()
  }
}
