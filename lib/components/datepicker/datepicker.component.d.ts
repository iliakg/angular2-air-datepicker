import { EventEmitter } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions, AirDay } from '../../classes';
export declare class DatepickerComponent {
    airDate: Date;
    airEndDate: Date;
    airOptions: AirOptions;
    airCalendar: AirCalendar;
    airLanguage: AirLanguage;
    setDate: EventEmitter<number>;
    setMonth: EventEmitter<number>;
    monthSelection: EventEmitter<void>;
    airDateSim: Date;
    airEndDateSim: Date;
    isInRange(day: AirDay): boolean;
    isCalendarDate(date: Date, day: AirDay): boolean;
    simulate(day: AirDay): void;
    resetSim(): void;
}
