import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-scrum-form',
  templateUrl: './scrum-form.component.html',
  styleUrls: ['./scrum-form.component.scss']
})
export class ScrumFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ScrumFormComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

}
