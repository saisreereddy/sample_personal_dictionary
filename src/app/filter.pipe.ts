import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    console.log(items);
    console.log(searchText);
return items.filter( it => {
  console.log(it);
         if (it.name.includes(searchText)) {
return it;
         }
    });
   }
}
