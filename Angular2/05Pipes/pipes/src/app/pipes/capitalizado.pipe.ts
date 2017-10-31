import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

    transform(value: string): string {
        value = value.toUpperCase();
        return value;        
    }

}