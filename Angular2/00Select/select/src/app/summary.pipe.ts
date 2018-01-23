import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {

    if (!value) {
      return null;
    } else if (value.length < limit) {
      return value;
    } else {
      let actualLimit = (limit) ? limit : 50;
      return value.substr(0, actualLimit) + "...";
    }
    
  }

}
