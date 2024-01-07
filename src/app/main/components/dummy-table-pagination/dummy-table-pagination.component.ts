import {Component, OnInit, Input, TemplateRef,ViewChild} from '@angular/core'
import {TableModel, TableHeaderItem, TableItem} from "carbon-components-angular"
import {getDummyData} from "../../../../@youpez/data/dummy"

@Component({
  selector: 'app-dummy-table-pagination',
  templateUrl: './dummy-table-pagination.component.html',
  styleUrls: ['./dummy-table-pagination.component.scss']
})
export class DummyTablePaginationComponent implements OnInit {

  @Input() model = new TableModel()
  @Input() sortable = true
  @Input() skeleton = false
  @Input() showSelectionColumn = true
  @Input() get totalDataLength() {
    return this.model.totalDataLength
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value
  }
  @Input() stickyHeader = true
  @ViewChild("filter", {static: false}) filter: TemplateRef<any>
  @ViewChild("filterableHeaderTemplate", {static: true}) filterableHeaderTemplate: TemplateRef<any>
  @ViewChild("paginationTableItemTemplate", {static: true}) paginationTableItemTemplate: TemplateRef<any>

  public filter1

  ngOnInit() {
    this.model.data = [[]]
    this.model.header = [
      new TableHeaderItem({data: "Item name"}),
      new TableHeaderItem({
        data: "Item link"
      })
    ]

    this.model.pageLength = 10
    this.model.totalDataLength = 105
    this.selectPage(1)
  }

  customSort(index: number) {
    this.sort(this.model, index)
  }

  sort(model, index: number) {
    if (model.header[index].sorted) {
      // if already sorted flip sorting direction
      model.header[index].ascending = model.header[index].descending
    }
    model.sort(index)
  }

  getPage(page: number) {
    const line = line => [`Item ${line}:1!`, {name: "Item", surname: `${line}:2`}]

    const fullPage = []

    for (let i = (page - 1) * this.model.pageLength; i < page * this.model.pageLength && i < this.model.totalDataLength; i++) {
      fullPage.push(line(i + 1))
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fullPage), 150)
    })
  }

  selectPage(page) {
    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      this.model.data = this.prepareData(data)
      this.model.currentPage = page
    })
  }

  onRowClick(index: number) {

  }

  protected prepareData(data: Array<Array<any>>) {

    //const data = getDummyData()

    // create new data from the service data
    let newData = []
    data.forEach(dataRow => {
      let row = []
      dataRow.forEach(dataElement => {
        row.push(new TableItem({
          data: dataElement,
          template: typeof dataElement === "string" ? undefined : this.paginationTableItemTemplate
          // your template can handle all the data types so you don't have to conditionally set it
          // you can also set different templates for different columns based on index
        }))
      })
      newData.push(row)
    })
    return newData
  }

}
