import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from "@angular/material/dialog"

@Component({
  selector: 'app-scrum-view',
  templateUrl: './scrum-view.component.html',
  styleUrls: ['./scrum-view.component.scss']
})
export class ScrumViewComponent implements OnInit {

  public sidebarVisible:boolean = true

  constructor(private dialogRef: MatDialogRef<ScrumViewComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

  onCloseSidebar(event){

  }

}
