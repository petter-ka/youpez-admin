import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-scrum-form',
  templateUrl: './scrum-form.component.html',
  styleUrls: ['./scrum-form.component.scss']
})
export class ScrumFormComponent implements OnInit {

  public project = [
    {
      content: "Devops team",
      selected: true,
    },
    {
      content: "Kubernetes Cluster"
    },
    {
      content: "Engineering"
    },
    {
      content: "Frontend"
    }
  ]

  public issueType = [
    {
      content: "Task",
      selected: true,
    },
    {
      content: "Bug"
    },
  ]

  public sprint = [
    {
      content: "Current",
    },
    {
      content: "W-30"
    },
  ]


  public priority = [
    {
      content: "High",
    },
    {
      content: "Low"
    },
  ]

  public assignee = [
    {
      content: "Jon Doe",
    },
    {
      content: "Mathias Inu"
    },
  ]

  public reported = [
    {
      content: "Jon Doe",
    },
    {
      content: "Mathias Inu"
    },
  ]



  constructor(private dialogRef: MatDialogRef<ScrumFormComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

}
