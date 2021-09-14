import { Pipe, PipeTransform } from '@angular/core';
import {formatRating} from '@bg-hoard/store/util-formatters'
@Pipe({
  name: 'format'
})
export class FormatRatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return formatRating(value);
  }

}
