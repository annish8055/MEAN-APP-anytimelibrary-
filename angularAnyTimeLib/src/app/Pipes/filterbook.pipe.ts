import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbook'
})
export class FilterbookPipe implements PipeTransform {

  transform(value: any, filterString: String): any {
   var resultArray =[];
    //filter logic
    console.log("filterresult--",filterString);
    if(filterString==undefined || filterString === ''){
      return value;
    }else{
      for(const item of value){
        //string logic
        //test.indexOf('World') >= 0
        var title=item.title;
        console.log("searching for title",title);
        if(title.indexOf(filterString) >= 0){
          resultArray.push(item);
        }
               
      }
    }
  return resultArray;
  }

}
