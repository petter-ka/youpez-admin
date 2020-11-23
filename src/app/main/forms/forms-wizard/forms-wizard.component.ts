import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-forms-wizard',
  templateUrl: './forms-wizard.component.html',
  styleUrls: ['./forms-wizard.component.css']
})
export class FormsWizardComponent implements OnInit {

  public demoSteps = [
    {
      text: "First step",
      state: ["complete"],
      optionalText: "optional"
    },
    {
      text: "Second step",
      state: ["current"],
      tooltip: {content: "Overflow tooltip content.", trigger: "click", placement: "bottom"}
    },
    {
      text: "Third step",
      state: ["incomplete"],
      tooltip: {
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Animi consequuntur hic ratione aliquid cupiditate, nesciunt saepe iste
							blanditiis cumque maxime tenetur veniam est illo deserunt sint quae pariatur.
							Laboriosam, consequatur.`,
        trigger: "click",
        placement: "bottom"
      }
    },
    {
      text: "Fourth step",
      state: ["incomplete", "error"]
    },
    {
      text: "Fifth step",
      state: ["incomplete"],
      disabled: true
    }
  ]

  public demoCurrentPage = 0

  constructor() {
  }

  ngOnInit(): void {
  }

}
