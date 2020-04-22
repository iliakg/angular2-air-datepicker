export declare class AirOptions {
    timepicker?: boolean;
    format12h?: boolean;
    fullDays?: boolean;
    language?: string;
    hourStep?: number;
    minuteStep?: number;
    range?: boolean;
    enabledDateRanges?: DateRange[];
    constructor(options?: AirOptions);
    static sameDate(date1: Date, date2: Date): boolean;
    isDisabled(date: Date): boolean;
}
export interface DateRange {
    start: Date;
    end: Date;
}
