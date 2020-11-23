import {Component, OnInit, Input, TemplateRef, ViewChild} from '@angular/core'

import {TableItem, TableHeaderItem, TableModel} from "carbon-components-angular"

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

@Component({
  selector: 'app-dummy-table-expansion',
  templateUrl: './dummy-table-expansion.component.html',
  styleUrls: ['./dummy-table-expansion.component.scss']
})
export class DummyTableExpansionComponent implements OnInit {
  @Input() model = new TableModel()
  @Input() size = "md"
  @Input() showSelectionColumn = true
  @Input() striped = true
  @Input() isDataGrid = false
  @Input() sortable = true
  @Input() stickyHeader = false
  @Input() skeleton = false

  @ViewChild("customHeaderTemplate", {static: true}) customHeaderTemplate: TemplateRef<any>
  @ViewChild("customTableItemTemplate", {static: true}) customTableItemTemplate: TemplateRef<any>

  ngOnInit() {
    this.model.data = [
      [
        new TableItem({data: "Name 1", expandedData: "No template"}),
        new TableItem({data: {name: "Lessy", link: "#"}, template: this.customTableItemTemplate})
      ],
      [
        new TableItem({
          data: "Name 3",
          expandedData: {name: "In", surname: "Template"},
          expandedTemplate: this.customTableItemTemplate
        }),
        new TableItem({data: "swer"})
      ],
      [new TableItem({data: "Name 2"}), new TableItem({
        data: {name: "Alice", surname: "Bob"},
        template: this.customTableItemTemplate
      })],
      [new TableItem({data: "Name 4"}), new TableItem({data: "asdsa"})],
      [new TableItem({data: "Name 5"}), new TableItem({data: "dasd"})],
      [new TableItem({data: "Name 6"}), new TableItem({data: "asda"})],
      [new TableItem({data: "Name 7"}), new TableItem({data: "adas"})]

    ]
    this.model.header = [
      new TableHeaderItem({data: "Very long title indeed"}),
      new CustomHeaderItem({
        data: {name: "Custom header", link: "#"},
        template: this.customHeaderTemplate
      })
    ]
  }

  customSort(index: number) {
    this.sort(this.model, index)
  }

  onRowClick(index: number) {

  }

  sort(model, index: number) {
    if (model.header[index].sorted) {
      model.header[index].ascending = model.header[index].descending
    }
    model.sort(index)
  }

}
