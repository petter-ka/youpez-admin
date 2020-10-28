import {Pipe, PipeTransform} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import * as _ from 'lodash'

@Pipe({
  name: 'textHighlight',
})
export class TextHiglightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, args: any): any {
    if (!args) {
      return _.escape(value)
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi')
    const match = value.match(re)

    // If there's no match, just return the original value.
    if (!match) {
      return _.escape(value)
    }

    const replacedValue = _.escape(value).replace(re, '<mark class="app-text-mark">' + match[0] + '</mark>')
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
  }

}
