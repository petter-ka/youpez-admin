import {Component, OnInit} from '@angular/core'
import {getDummyModel} from "../../../../@youpez/data/dummy"

@Component({
  selector: 'app-table-advanced',
  templateUrl: './table-advanced.component.html',
  styleUrls: ['./table-advanced.component.css']
})
export class TableAdvancedComponent implements OnInit {

  public model = getDummyModel()
  public searchModel
  public size = 'md'
  public offset = {x: -9, y: 0}
  public batchText = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  cancelMethod(){

  }

}
