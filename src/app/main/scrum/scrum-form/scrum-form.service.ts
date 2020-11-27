import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {ScrumFormComponent} from "./scrum-form.component"

@Injectable({
  providedIn: 'root'
})
export class ScrumFormService {

  private dialogRef: MatDialogRef<ScrumFormComponent>

  constructor(private dialog: MatDialog,) {
  }

  open(params) {
    this.dialogRef = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = true
    config.role = 'alertdialog'
    config.width = '600px'
    config.height = '800px'

    this.dialogRef = this.dialog.open(ScrumFormComponent, config)
    return this.dialogRef
  }
}
