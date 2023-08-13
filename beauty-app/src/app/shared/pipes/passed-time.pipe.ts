import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'passedTime'
})
export class PassedTimePipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    return moment(dateString).fromNow();
  }

}
