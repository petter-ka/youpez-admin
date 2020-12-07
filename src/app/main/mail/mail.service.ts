import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog"
import {MailComposeComponent} from "./mail-compose/mail-compose.component"

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private dialogRef: MatDialogRef<MailComposeComponent>

  constructor(private dialog: MatDialog,) {
  }

  open(params) {
    this.dialogRef = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = true
    config.role = 'alertdialog'
    config.width = '600px'

    this.dialogRef = this.dialog.open(MailComposeComponent, config)
    return this.dialogRef
  }
}
