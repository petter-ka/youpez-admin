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

@Component({
  selector: 'app-sidenav-v2',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss'],
})
export class AppSidenavComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges, AfterViewInit, AfterViewChecked {

  @Input('opened') originalOpened: boolean
  @Input('direction') direction: string = 'left'
  @Input('size') size: string = 'md'
  @Input('mode') originalMode: string = 'over'
  @Input('breakpoint') breakpoint: string = ''
  @Input('transparent') transparent: boolean = false
  @Input('toggleableBtn') toggleableBtn: boolean = false
  @Input('toggleableBtnAlwaysVisible') toggleableBtnAlwaysVisible: boolean = false
  @Input('hoverAble') originalHoverAble: boolean = false
  @Input('hoverAbleBreakpoint') hoverAbleBreakpoint: string = 'md'
  @Input('optionalClass') optionalClass: string = ''
  @Input('initWidth') initWidth: string = ''
  @Input('hoverDelay') hoverDelay: number = 100

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
  ) {
  }

  ngOnInit() {
    if (this.initWidth) {
      this.setWidth(this.initWidth)
      this.setHeight(this.initWidth)
    }
    else {
      this.setWidth(this.dimensions.width[this.size])
      this.setHeight(this.dimensions.width[this.size])
    }

    this.mode = this.originalMode
    this.hoverAble = this.originalHoverAble
    this.opened = this.originalOpened

    if (this.originalMode === 'side') {
      if (this.direction === 'right') {
        this.resizeEdges.left = true
      }
      if (this.direction === 'left') {
        this.resizeEdges.right = true
      }
      if (this.direction === 'top') {
        this.resizeEdges.bottom = true
      }
      if (this.direction === 'bottom') {
        this.resizeEdges.top = true
      }
    }

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

  getMainCSSclass() {
    return `app-sidenav-v2 ${this.optionalClass}`
  }

  setWidth(width) {
    this.width = width

    if (Number(this.width) <= 200) {
      this.width = '200'
    }
  }

  setHeight(height) {
    this.height = height

    /*    if (Number(this.height) <= 200) {
          this.height = '200'
        }*/
  }

  sendChange(changes = null) {
    this.change.emit()
  }

  getWidth() {
    return this.width
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
    this.resizeEnd.next(calcWidth)
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
    this.resizing.next(calcWidth)
  }

  onResizeStart(event: ResizeEvent) {
    console.log('sadasd')
    this.onForceHover(true)
  }

  onSetDefaultWidth(event) {
    this.setWidth(this.dimensions.width[this.size])
  }

}
