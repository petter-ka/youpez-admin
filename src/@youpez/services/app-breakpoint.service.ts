import { Injectable, Inject } from '@angular/core'
import { Subscription } from "rxjs"
import { BehaviorSubject, Subject, Observable } from 'rxjs'
import { EventManager } from '@angular/platform-browser'
import { MediaChange } from '@ngbracket/ngx-layout'
import { MediaObserver } from '@ngbracket/ngx-layout'
import * as _ from "lodash"

@Injectable()
export class AppBreakpointService {

    private activeMediaQueryWatcher: Subscription
    private activeMediaQuery = ""
    private activatedMqAlias = ""
    private breakpointIsGtSm = new BehaviorSubject<any>(true)
    private breakpoint = new BehaviorSubject<any>(true)
    private windowWidth = new BehaviorSubject<any>(null)
    private actualWindowWidth = null
    public element: HTMLElement | null = null;

    public $breakpointIsGtSm = this.breakpointIsGtSm.asObservable()
    public $breakpoint = this.breakpoint.asObservable()
    public $windowWidth = this.windowWidth.asObservable()

    constructor(public media: MediaObserver,
        private eventManager: EventManager) {
        this.eventManager.addEventListener(this.element, 'resize', this.onResize.bind(this))
    }

    init() {
        this.activeMediaQueryWatcher = this.media.asObservable()
        .subscribe((change: MediaChange[]) => {
            this.activatedMqAlias = change[0].mqAlias
            this.activeMediaQuery = change[1].mediaQuery
            this.checkMediaQuery()
            this.onResize()
        })
    }

    checkMediaQuery() {
        const alias = this.activatedMqAlias

        this.breakpoint.next(alias)

        if (alias == 'xs' ||
            alias == 'sm' ||
            alias == 'gt-xs') {
            this.breakpointIsGtSm.next(false)
        }
        else {
            this.breakpointIsGtSm.next(true)
        }
    }

    getWindowWidth() {
        return window.innerWidth
    }

    private onResize() {
        const currentWidth = this.getWindowWidth()

        if (currentWidth !== this.actualWindowWidth) {
            this.actualWindowWidth = currentWidth
            this.windowWidth.next(currentWidth)
        }
    }

}
