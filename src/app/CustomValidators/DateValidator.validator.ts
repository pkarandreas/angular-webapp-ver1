import {AbstractControl,ValidationErrors, ValidatorFn } from "@angular/forms"
export class DateValidator{
    static between(firstDate:string,lastDate:string): ValidatorFn{
    return (control : AbstractControl) :{[key: string]: any} | null=>{
        var inputDate : number;
        var first :number;
        var last : number;
        if (control.value !== undefined && isNaN(control.value)){
            first = Date.parse(firstDate);
            last = Date.parse(lastDate);
            inputDate = Date.parse(control.value);
            if ( inputDate >= first && inputDate <= last )
                return null;
            else
                return { 'between' : true , 'requiredValue' : `${firstDate} and ${lastDate}`};
        }
        return { 'between' : true , 'requiredValue' : `${firstDate} and ${lastDate}`} ;
    };
    }
}
