import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listObject: any, field: string, args?: any): any {
    if(!listObject)return null;
        if(!args)return listObject;

        args = args.toLowerCase();

        return listObject.filter(function(item){
            return JSON.stringify(item[field]).toLowerCase().includes(args);
        });
  }

}
