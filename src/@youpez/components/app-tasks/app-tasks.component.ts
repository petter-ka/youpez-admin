import {Component, OnInit, Input} from '@angular/core'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop"
import {CheckboxChange} from "carbon-components-angular"

export function getUniqueId(parts: number): string {
  const stringArr = []
  for (let i = 0; i < parts; i++) {
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    stringArr.push(S4)
  }
  return stringArr.join('-')
}

@Component({
  selector: 'youpez-tasks-list',
  templateUrl: './app-tasks.component.html',
  styleUrls: ['./app-tasks.component.scss']
})
export class AppTasksComponent implements OnInit {

  @Input('tasks') taskGroups = []
  @Input('transparent') transparent = false

  @Input() set filterText(value: string) {
    this._filterText = value
  }

  get filterText(): string {
    return this._filterText
  }

  public _filterText: string = ''
  public taskFocusId: string = ''
  public deletableTaskGroupIndex: number = null

  constructor() {
  }

  ngOnInit(): void {
  }

  addGroup() {
    const uid = getUniqueId(5)
    const newGroup = {
      groupName: '',
      id: uid,
      opened: true,
      tasks: []
    }
    this.taskGroups = [newGroup, ...this.taskGroups]
    this.taskFocusId = uid
  }

  minimize() {
    this.taskGroups = this.taskGroups.map(group => {
      group.opened = false
      return group
    })
  }

  maximize() {
    this.taskGroups = this.taskGroups.map(group => {
      group.opened = true
      return group
    })
  }

  getConnectedList(): any[] {
    return this.taskGroups.map(x => `${x.id}`)
  }

  getProgress(groupIndex) {
    const tasks = this.taskGroups[groupIndex].tasks
    const solved = this.taskGroups[groupIndex].tasks.filter(task => task.checked === true)
    const percentage = ((solved.length / tasks.length) * 100)
    /*    if (percentage === 100) {
          this.taskGroups[groupIndex].opened = false
        }*/
    return `${percentage}%`
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  trackByFn(index, row) {
    return index
  }

  dropGroup(event: CdkDragDrop<any>) {
    moveItemInArray(this.taskGroups, event.previousIndex, event.currentIndex)
  }

  onSelectedDeletableGroup(groupIndex) {
    this.deletableTaskGroupIndex = groupIndex
  }

  onToggleTask(event: CheckboxChange, groupIndex, taskIndex) {
    const {checked} = event
    this.taskGroups[groupIndex].tasks[taskIndex].checked = checked
  }

  onToggleGroup(groupIndex) {
    this.taskGroups[groupIndex].opened = !this.taskGroups[groupIndex].opened
  }

  onTaskChange(event, groupIndex, taskIndex) {
    this.taskGroups[groupIndex].tasks[taskIndex].description = event
  }

  onGroupChange(event, groupIndex) {
    this.taskGroups[groupIndex].groupName = event
  }

  onAddTask(groupIndex) {
    const uid = getUniqueId(5)
    const newTask = {
      description: '',
      level: 1,
      checked: false,
      id: uid,
    }
    this.taskGroups[groupIndex].tasks = [...this.taskGroups[groupIndex].tasks, newTask]
    this.taskFocusId = uid
  }

  onDeleteGroup(groupIndex) {
    this.taskGroups.splice(groupIndex, 1)
  }

  onDeleteTask(groupIndex, taskIndex) {
    this.taskGroups[groupIndex].tasks.splice(taskIndex, 1)
  }

  onSwitchPriority(groupIndex, taskIndex) {
    const task = this.taskGroups[groupIndex].tasks[taskIndex]
    if (task.priority === undefined || task.priority === 'normal') {
      task.priority = 'high'
    }
    else if(task.priority === 'high'){
      task.priority = 'low'
    }
    else if(task.priority === 'low'){
      task.priority = 'normal'
    }
  }

}
