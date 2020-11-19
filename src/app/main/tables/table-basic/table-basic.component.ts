import {Component, OnInit} from '@angular/core'
import {getDummyModel} from "../../../../@youpez/data/dummy"

const getSizeFrom = (name) => {
  const trans = {
    "Small": 'sm',
    "Short": 'sh',
    "Normal": 'md',
    "Large": 'lg',
  }
  return trans[name]
}


@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css']
})
export class TableBasicComponent implements OnInit {

  public size = 'sh'
  public model = getDummyModel()

  tableSizes = [
    {num: "Small"},
    {num: "Short", checked: true},
    {num: "Normal"},
    {num: "Large"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange1(event) {
    const tmp = getSizeFrom(event.value)
    this.size = tmp
  }

}
