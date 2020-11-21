import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges, ViewChild, TemplateRef
} from "@angular/core"

import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"

class CustomHeaderItem extends TableHeaderItem {
  // used for custom sorting
  compare(one: TableItem, two: TableItem) {
    const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase()
    const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase()

    if (stringOne > stringTwo) {
      return 1
    }
    else if (stringOne < stringTwo) {
      return -1
    }
    else {
      return 0
    }
  }
}
import {getDummyModel} from "@youpez/data/dummy"

function sort(model, index: number) {
  if (model.header[index].sorted) {
    // if already sorted flip sorting direction
    model.header[index].ascending = model.header[index].descending
  }
  model.sort(index)
}

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnChanges {

  @Input() model = new TableModel()
  @Input() size = "md"
  @Input() showSelectionColumn = true
  @Input() enableSingleSelect = false
  @Input() striped = false
  @Input() sortable = true
  @Input() isDataGrid = false
  @Input() noData = false
  @Input() stickyHeader = false
  @Input() skeleton = false

  @ViewChild("totalHeaderTemplate", {static: true}) totalHeaderTemplate: TemplateRef<any>
  @ViewChild("proficiencyTemplate", {static: true}) proficiencyTemplate: TemplateRef<any>
  @ViewChild("totalTemplate", {static: true}) totalTemplate: TemplateRef<any>
  @ViewChild("onlineTemplate", {static: true}) onlineTemplate: TemplateRef<any>

  ngOnInit() {
    const model = getDummyModel()
    model.header[3]= new CustomHeaderItem({
      data: model.header[3].data,
      template: this.totalHeaderTemplate,
      className: "items-center"
    })
    model.data.map(data => {
      data[2] = new TableItem({
        data: data[2].data,
        template: this.proficiencyTemplate,
        className: "items-center"
      })
      data[3] = new TableItem({
        data: data[3].data,
        template: this.totalTemplate,
        className: "items-center"
      })
      data[4] = new TableItem({
        data: data[4].data,
        template: this.onlineTemplate,
        className: "items-center"
      })
      return data
    })
    this.model = model
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable) {
      for (let column of this.model.header) {
        column.sortable = changes.sortable.currentValue
      }
    }
  }

  onRowClick(index: number) {

  }

  simpleSort(index: number) {
    sort(this.model, index)
  }

}
