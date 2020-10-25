import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ElementRef, AfterContentInit, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core'
import {AppBreakpointService} from "../../../core/services/app-breakpoint.service"
import {Subscription} from 'rxjs'
import {ResizeEvent} from 'angular-resizable-element'
import {PanelType} from "../app-sidenav-container/app-sidenav-container.component"
import {AppSidenavService} from "../../../core/services/app-sidenav.service"

export declare type DirectionType = 'left' | 'right' | 'bottom' | 'top'
export declare type ModeType = 'over' | 'side'
export declare type SizeType = 'md' | 'sm' | 'lg' | 'xl' | 'custom1' | 'sideBar1' | 'sideBar2' | 'xsm' | 'docs'

@Component({
  selector: 'app-sidenav-v2',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss'],
})
export class AppSidenavComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges, AfterViewInit, AfterViewChecked {

  @Input('opened') originalOpened: boolean
  @Input('direction') direction: DirectionType = 'left'
  @Input('size') size: SizeType = 'md'
  @Input('mode') originalMode: ModeType = 'over'
  @Input('breakpoint') breakpoint: string = ''
  @Input('transparent') transparent: boolean = false
  @Input('toggleableBtn') toggleableBtn: boolean = false
  @Input('toggleableBtnAlwaysVisible') toggleableBtnAlwaysVisible: boolean = false
  @Input('hoverAble') originalHoverAble: boolean = false
  @Input('hoverAbleBreakpoint') hoverAbleBreakpoint: string = 'md'
  @Input('optionalClass') optionalClass: string = ''
  @Input('initWidth') initWidth: string = ''
  @Input('hoverDelay') hoverDelay: number = 100

  @Input('options') options: Object = null

  @Output('open') open: EventEmitter<any> = new EventEmitter<any>()
  @Output('close') close: EventEmitter<any> = new EventEmitter<any>()
  @Output('init') init: EventEmitter<any> = new EventEmitter<any>()
  @Output('change') change: EventEmitter<any> = new EventEmitter<any>()
  @Output('resizeEnd') resizeEnd: EventEmitter<any> = new EventEmitter<any>()
  @Output('resizing') resizing: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('sideNavEl', {static: true}) sideNavEl: ElementRef

  public rendered: boolean = false
  public width: string = ''
  public height: string = ''
  public mode: string = 'over'
  public hoverEvent: boolean = false
  public hoverAble: boolean = false
  public opened: boolean = false
  public isMouseEntered: boolean = false
  public resizeEdges = {
    bottom: false,
    right: false,
    top: false,
    left: false,
  }

  private lock: boolean = false
  private hoverTimeout = null
  private breakpointSub: Subscription
  private dimensions = {
    width: {
      docs: '170',
      xsm: '200',
      sm: '300',
      md: '300',
      lg: '500',
      xl: '800',
      custom1: '260',
      sideBar1: '240',
      sideBar2: '300',
    },
    height: {},
  }

  constructor(public element: ElementRef,
              private appBreakpointService: AppBreakpointService,
              private appSidenavService: AppSidenavService,) {
  }

  ngOnInit() {
    this.firstInit()


    this.breakpointSub = this.appBreakpointService.$windowWidth
      .subscribe((width: any) => {
        if (this.breakpoint && this.breakpoint === 'md') {
          if (width <= 960) {
            this.mode = 'over'
            this.hoverAble = false
            this.opened = false
          }
          else {
            this.mode = this.originalMode
            this.hoverAble = this.originalHoverAble
            this.opened = this.originalOpened
          }
          this.change.emit()
        }
      })
  }

  private firstInit() {
    let {initWidth, size, originalMode, originalHoverAble, originalOpened, direction} = this

    if (initWidth) {
      this.setWidth(initWidth)
      this.setHeight(initWidth)
    }
    else {
      this.setWidth(this.dimensions.width[size])
      this.setHeight(this.dimensions.width[size])
    }

    this.mode = originalMode
    this.hoverAble = originalHoverAble
    this.opened = originalOpened

    if (originalMode === 'side') {
      if (direction === 'right') {
        this.resizeEdges.left = true
      }
      if (direction === 'left') {
        this.resizeEdges.right = true
      }
      if (direction === 'top') {
        this.resizeEdges.bottom = true
      }
      if (direction === 'bottom') {
        this.resizeEdges.top = true
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const opened: SimpleChange = changes.originalOpened

    if (opened !== undefined && opened.previousValue !== undefined) {
      const currentOpened = opened.currentValue
      if (currentOpened) {
        this.onOpen()
      }
      else {
        this.onClose()
      }
    }
  }

  ngOnDestroy(): void {
    if (this.breakpointSub) {
      this.breakpointSub.unsubscribe()
    }
  }

  ngAfterContentInit() {
    if (this.originalMode !== 'side') {
      setTimeout(() => {
        this.rendered = true
      }, 450)
    }
    else {
      this.rendered = true
    }
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  setWidth(width) {
    this.width = width
    if (Number(this.width) <= 200) {
      this.onClose()
      setTimeout(() => {
        this.width = '200'
      }, 1000)
    }
  }

  setHeight(height) {
    this.height = height
  }

  sendChange(changes = null) {
    this.change.emit()
  }

  setPanelStyle(panel: PanelType) {
    let panelCss = ''
    if (panel === 'panel') {
      panelCss = 'app-sidenav-v2--panel'
    }
    if (panel === 'solid') {
      panelCss = 'app-sidenav-v2--solid'
    }
    this.optionalClass = this.optionalClass + ' ' + panelCss
  }

  getWidth() {
    return this.width
  }

  getMainCSSclass() {
    return `app-sidenav-v2 ${this.optionalClass}`
  }

  getHeight() {
    return this.height
  }

  onClose() {
    this.opened = false
    this.close.emit()
  }

  onOpen() {
    this.opened = true
    this.open.emit()
  }

  onToggle() {
    if (this.opened) {
      this.onClose()
      this.onMouseLeave('')
    }
    else {
      this.onOpen()
    }
  }

  isOpened() {
    return this.opened
  }

  emitInitForParent() {
    this.init.emit()
  }

  onForceHover(bool = true) {
    if (this.hoverAble) {
      if (!this.isMouseEntered) {
        this.hoverEvent = bool
      }
    }
    else {
      this.onOpen()
    }
  }

  onMouseEnter(event) {
    this.isMouseEntered = true
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout)
    }
    this.hoverTimeout = setTimeout(() => {
      const element = event.target
      if (element.classList.contains('app-sidenav-v2__inner')) {
        this.hoverEvent = true
      }
    }, this.hoverDelay)
  }

  onMouseLeave(event) {
    if (this.lock) {
      return
    }
    this.isMouseEntered = false
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout)
    }
    this.hoverEvent = false
  }

  onResizeEnd(event: ResizeEvent) {
    const {edges, rectangle} = event
    const {right, left, bottom, top} = edges
    const {width, height} = rectangle

    const calcWidth = Number(width)
    const calcHeight = Number(height)

    this.setWidth(calcWidth)
    this.setHeight(calcHeight)

    this.sendChange()


    if (this.direction === 'top' || this.direction === 'bottom') {
      this.resizeEnd.next(calcHeight)
    }
    else {
      this.resizeEnd.next(calcWidth)
    }

    this.lock = false
  }

  onResize(event: ResizeEvent) {
    const {edges, rectangle} = event
    const {right, left, bottom, top} = edges
    const {width, height} = rectangle

    const calcWidth = Number(width)
    const calcHeight = Number(height)

    this.setWidth(calcWidth)
    this.setHeight(calcHeight)

    this.sendChange({windowResize: false})

    if (this.direction === 'top' || this.direction === 'bottom') {
      this.resizing.next(calcHeight)
    }
    else {
      this.resizing.next(calcWidth)
    }
  }

  onResizeStart(event: ResizeEvent) {
    this.onForceHover(true)
    this.lock = true
  }

  onSetDefaultWidth(event) {
    this.setWidth(this.dimensions.width[this.size])
  }

}
