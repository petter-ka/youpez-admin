import {Component, OnInit} from '@angular/core'
import {MatDialogRef} from "@angular/material/dialog"

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MailComposeComponent>) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

}
