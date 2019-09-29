import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(contactList: any, term: any): any {
    if (term === '' || term === undefined){
      return contactList;
      } else {
        return contactList.filter((contactList) => {
          return contactList.name.toLowerCase().includes(term.toLowerCase());
        });
      }
    }

}
