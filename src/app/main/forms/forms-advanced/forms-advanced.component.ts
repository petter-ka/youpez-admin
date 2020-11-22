import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-forms-advanced',
  templateUrl: './forms-advanced.component.html',
  styleUrls: ['./forms-advanced.component.css']
})
export class FormsAdvancedComponent implements OnInit {

  public items = [
    {content: "one"},
    {content: "two", selected: true},
    {content: "three"},
    {content: "four"}
  ]

  public items2 = [
    {content: "one"},
    {content: "two", selected: true},
    {content: "three"},
    {content: "four"}
  ]

  public minLabel
  public maxLabel

  constructor() {
  }

  ngOnInit(): void {
  }

  valueChange(event){

  }

}
