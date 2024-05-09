import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: any, searchBy: string) {
    // console.log(items, searchTerm, searchBy);

    // when our serach is undefined or null
    if (!searchTerm) {
      return items;
    } else {
      const val = items.filter((item) => {
        const currentItem = item[searchBy];
        return currentItem
          .toString()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());
      });
      return val;
    }
  }
}
