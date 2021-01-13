import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  Input,
  AfterContentInit,
  ElementRef,
  AfterViewChecked, OnDestroy
} from '@angular/core'
import {AppSidenavComponent} from '../app-sidenav/app-sidenav.component'
import {Subscription} from 'rxjs'
import {WindowRefService} from "../../../services/window-ref.service"

export declare type PanelType = '' | 'panel' | 'solid'

@Component({
  selector: 'youpez-sidenav-container',
  templateUrl: './app-sidenav-container.component.html',
  styleUrls: ['./app-sidenav-container.component.scss'],
})
export class AppSidenavContainerComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewChecked {

  @ContentChildren(AppSidenavComponent) sidenavs: QueryList<AppSidenavComponent>

  @Input() overlayOpacity: number = 1
  @Input() panel: PanelType = ''

  public overlayVisible: boolean = false
  public sideMode: boolean = false

  public contentMargins: any = {
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
  }

  private sideNavOpenEventSub: Subscription
  private sideNavCloseEventSub: Subscription
  private sideNavChangeEventSub: Subscription

  constructor(public element: ElementRef,
              private windowRefService: WindowRefService) {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.sidenavs.forEach((sidenav: AppSidenavComponent) => {
      this.sideNavOpenEventSub = sidenav.open.subscribe((changes) => {
        this.setContent(sidenav, changes)
      })
      this.sideNavCloseEventSub = sidenav.close.subscribe((changes) => {
        this.setContent(sidenav, changes)
      })
      this.sideNavChangeEventSub = sidenav.change.subscribe((changes) => {
        this.setContent(sidenav, changes)
      })
      this.setContent(sidenav)
      this.setStyleClass(sidenav)
    })
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
    if (this.sideNavOpenEventSub) {
      this.sideNavOpenEventSub.unsubscribe()
    }
    if (this.sideNavCloseEventSub) {
      this.sideNavCloseEventSub.unsubscribe()
    }
    if (this.sideNavChangeEventSub) {
      this.sideNavChangeEventSub.unsubscribe()
    }
  }

  setStyleClass(sidenav: AppSidenavComponent) {
    sidenav.setPanelStyle(this.panel)
  }

  setContent(sidenav: AppSidenavComponent, options = null) {
    const mode = sidenav.mode
    const direction = sidenav.direction
    const opened = sidenav.opened
    const hoverAble = sidenav.hoverAble
    const minDimension = sidenav.getMinDimension() || 20
    const calcWidthMargin = `${opened ? sidenav.getWidth() : (hoverAble ? minDimension : 0)}px`
    const calcHeightMargin = `${opened ? sidenav.getHeight() : (hoverAble ? minDimension : 0)}px`

    this.toggleOverlay(sidenav.opened, sidenav.mode)

    if (direction === 'right') {
      if (mode === 'side') {
        this.contentMargins.right = calcWidthMargin
      }
      else {
        this.contentMargins.right = `0px`
      }
    }
    if (direction === 'left') {
      if (mode === 'side') {
        this.contentMargins.left = calcWidthMargin
      }
      else {
        this.contentMargins.left = `0px`
      }
    }
    if (direction === 'top') {
      if (mode === 'side') {
        this.contentMargins.top = calcHeightMargin
      }
      else {
        this.contentMargins.top = `0px`
      }
    }
    if (direction === 'bottom') {
      if (mode === 'side') {
        this.contentMargins.bottom = calcHeightMargin
      }
      else {
        this.contentMargins.bottom = `0px`
      }
    }

    if (options) {
      if (options.windowResize !== false) {
        this.windowRefService.callWindowResize()
      }
    }
    else {
      this.windowRefService.callWindowResize()
    }
  }

  toggleOverlay(bool, mode) {
    this.sideMode = (mode === 'side')
    this.overlayVisible = bool
  }

  onCloseAll() {
    this.sidenavs.forEach((sidenav: AppSidenavComponent) => {
      sidenav.onClose()
    })
  }

}
