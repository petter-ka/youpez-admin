import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges, ViewChild, TemplateRef
} from "@angular/core"


@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnChanges {
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }


}
