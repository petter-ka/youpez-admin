import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'inputTypeAdvanced',
})
export class InputTypeAdvancedPipe implements PipeTransform {

  isItemContainsAdditionalProp(item, additionalKey, additionalArr) {
    if (additionalKey === null || additionalArr === null) {
      return false
    }
    return additionalArr.indexOf(item[additionalKey]) !== -1
  }

  isItemContainsText(item, search) {
    return item.toLowerCase().indexOf(search.toLowerCase()) !== -1
  }

  transform(value: any, key: any, search: any, additionalKey: any = null, additionalArr: any = null): any {
    if (search === undefined || key === undefined || search.length < 1 || !search || typeof search === 'object') {
      return value
    }
    if (key === '') {
      return value.filter((item) => {
        return this.isItemContainsText(item, search) || this.isItemContainsAdditionalProp(item, additionalKey, additionalArr)
      })
    }
    const firstCompare = value
      .filter((item) => {
        return item[key] && (this.isItemContainsText(item[key], search) || this.isItemContainsAdditionalProp(item, additionalKey, additionalArr))
      })

    if (additionalKey === null || additionalArr === null) {
      return firstCompare
    }
    else {
      return firstCompare
        .sort((a: any, b: any) => {
          return Number(this.isItemContainsAdditionalProp(a, additionalKey, additionalArr)) - Number(this.isItemContainsAdditionalProp(b, additionalKey, additionalArr))
        })
        .sort((a: any, b: any) => {
          return Number(this.isItemContainsText(b[key], search)) - Number(this.isItemContainsText(a[key], search))
        })
    }
  }

}
