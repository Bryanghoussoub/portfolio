import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visible',
})
export class VisiblePipe implements PipeTransform {
  transform(list: any, ...args: any[]): any {
    return list.filter(
      (item: any) =>
        (item.hasOwnProperty('visible') && item.visible) ||
        !item.hasOwnProperty('visible')
    );
  }
}
