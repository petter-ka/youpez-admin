import {Injectable} from '@angular/core'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog'
import {ScrumFormComponent} from "./scrum-form/scrum-form.component"
import {ScrumViewComponent} from "./scrum-view/scrum-view.component"

@Injectable({
  providedIn: 'root'
})
export class ScrumFormService {

  private dialogRef: MatDialogRef<ScrumFormComponent>
  private dialogRef2: MatDialogRef<ScrumViewComponent>

  constructor(private dialog: MatDialog,) {
  }

  open(params) {
    this.dialogRef = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = true
    config.role = 'alertdialog'
    config.width = '500px'

    this.dialogRef = this.dialog.open(ScrumFormComponent, config)
    return this.dialogRef
  }

  openEdit() {
    this.dialogRef2 = null
    let config = new MatDialogConfig()

    config.viewContainerRef = null
    config.disableClose = false
    config.role = 'dialog'
    config.width = '940px'
    config.height = '650px'

    this.dialogRef2 = this.dialog.open(ScrumViewComponent, config)
    return this.dialogRef
  }
}
