import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'nameFormat'})
export class NameFormatPipe implements PipeTransform{
  transform(value:string, title:string,phrase:string){
    return `${title} ${value} ${phrase}`
  }
}