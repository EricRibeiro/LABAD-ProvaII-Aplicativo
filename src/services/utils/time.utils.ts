import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";

@Injectable()
export class TimeUtils {

    constructor(public datePipe: DatePipe) {
    }

    public formatDate(date: Date): string {
        return this.datePipe.transform(date, 'dd/MM/yyyy');
    }
}