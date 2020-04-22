/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirLanguage, AirOptions } from '../../classes';
export class DatepickerComponent {
    constructor() {
        this.setDate = new EventEmitter();
        this.setMonth = new EventEmitter();
        this.monthSelection = new EventEmitter();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isInRange(day) {
        if (this.airDate && this.airEndDate) {
            return this.airDate < new Date(Date.UTC(day.year, day.month, day.date)) &&
                new Date(Date.UTC(day.year, day.month, day.date, 23, 59, 59)) < this.airEndDate;
        }
        if (this.airDateSim && this.airEndDateSim) {
            return this.airDateSim < new Date(Date.UTC(day.year, day.month, day.date)) &&
                new Date(Date.UTC(day.year, day.month, day.date, 23, 59, 59)) < this.airEndDateSim;
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} day
     * @return {?}
     */
    isCalendarDate(date, day) {
        return date ? date.getUTCFullYear() == day.year && date.getUTCMonth() == day.month && date.getUTCDate() == day.date : false;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    simulate(day) {
        /** @type {?} */
        const date = new Date(Date.UTC(day.year, day.month, day.date, 0, 0));
        this.airDateSim = this.airDate;
        this.airEndDateSim = this.airEndDate;
        if (!this.airOptions.isDisabled(date) && ((this.airDate && !this.airEndDate) || (this.airEndDate && !this.airDate))) {
            if (this.airDate) {
                if (date < this.airDate) {
                    this.airEndDateSim = this.airDate;
                    this.airDateSim = date;
                }
                else {
                    if (this.airEndDate) {
                        this.airEndDateSim = null;
                        this.airDateSim = date;
                    }
                    else {
                        this.airEndDateSim = date;
                    }
                }
            }
            else /* airEndDate is truthy */ {
                if (this.airEndDate < date) {
                    this.airDateSim = this.airEndDate;
                    this.airEndDateSim = date;
                }
                else {
                    this.airDateSim = date;
                    this.airEndDateSim = null;
                }
            }
        }
    }
    /**
     * @return {?}
     */
    resetSim() {
        this.airDateSim = null;
        this.airEndDateSim = null;
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[datepicker]',
                template: `
    <nav class="datepicker--nav">
      <div class="datepicker--nav-action" (click)="setMonth.emit(airCalendar.month - 1)"><svg><path d="M 17,12 l -5,5 l 5,5"></path></svg></div>

      <div (click)="monthSelection.emit()" class="datepicker--nav-title">{{airLanguage.months[airCalendar.month]}}, <i>{{airCalendar.year}}</i></div>

      <div class="datepicker--nav-action" (click)="setMonth.emit(airCalendar.month + 1)"><svg><path d="M 14,12 l 5,5 l -5,5"></path></svg></div>
    </nav>

    <div class="datepicker--content">
      <div class="datepicker--days datepicker--body active">
        <div class="datepicker--days-names">
          <div *ngFor="let day of [0,1,2,3,4,5,6]" class="datepicker--day-name" [class.-weekend-]="day == 5 || day == 6"
          >{{airLanguage[airOptions.fullDays ? 'days' : 'daysMin'][day]}}</div>
        </div>

        <div class="datepicker--cells datepicker--cells-days">
          <div *ngFor="let airDay of airCalendar.airDays; let i=index"
               class="datepicker--cell datepicker--cell-day"
               [ngClass]="{ '-weekend-': airDay.weekend,
                            '-other-month-': airDay.other,
                            '-current-': airDay.current,
                            '-disabled-': airDay.disabled,
                            '-selected-': !airDay.disabled && (isCalendarDate(airDate, airDay) || isCalendarDate(airEndDate, airDay) || isCalendarDate(airDateSim, airDay) || isCalendarDate(airEndDateSim, airDay)),
                            '-in-range-': airOptions.range && !airDay.disabled && isInRange(airDay),
                            '-range-from-': airOptions.range && !airDay.disabled && ((!airDateSim && isCalendarDate(airDate, airDay)) || isCalendarDate(airDateSim, airDay)),
                            '-range-to-': airOptions.range && !airDay.disabled && (isCalendarDate(airEndDate, airDay) || isCalendarDate(airEndDateSim, airDay)) }"
               (click)="setDate.emit(i)"
               (mouseenter)="airOptions.range ? simulate(airDay) : ''"
               (mouseleave)="airOptions.range ? resetSim() : ''">{{airDay.date}}</div>
        </div>
      </div>

      <div *ngIf="airOptions.timepicker"
           timepicker
           [airOptions]="airOptions" [airCalendar]="airCalendar" (setDate)="setDate.emit(null)" class="datepicker--time -am-pm-"></div>
    </div>
  `
            }] }
];
DatepickerComponent.propDecorators = {
    airDate: [{ type: Input }],
    airEndDate: [{ type: Input }],
    airOptions: [{ type: Input }],
    airCalendar: [{ type: Input }],
    airLanguage: [{ type: Input }],
    setDate: [{ type: Output }],
    setMonth: [{ type: Output }],
    monthSelection: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.airDate;
    /** @type {?} */
    DatepickerComponent.prototype.airEndDate;
    /** @type {?} */
    DatepickerComponent.prototype.airOptions;
    /** @type {?} */
    DatepickerComponent.prototype.airCalendar;
    /** @type {?} */
    DatepickerComponent.prototype.airLanguage;
    /** @type {?} */
    DatepickerComponent.prototype.setDate;
    /** @type {?} */
    DatepickerComponent.prototype.setMonth;
    /** @type {?} */
    DatepickerComponent.prototype.monthSelection;
    /** @type {?} */
    DatepickerComponent.prototype.airDateSim;
    /** @type {?} */
    DatepickerComponent.prototype.airEndDateSim;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQTRDN0UsTUFBTSxPQUFPLG1CQUFtQjtJQXpDaEM7UUFnRFksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBeUR0RCxDQUFDOzs7OztJQXBEQyxTQUFTLENBQUUsR0FBVztRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3JGO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekMsT0FB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LEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBRUwsTUFBTTt1QkFDTixNQUFNOzZCQUNOLE1BQU07Ozs7SUFSUCxzQ0FBdUI7O0lBQ3ZCLHlDQUEwQjs7SUFDMUIseUNBQWdDOztJQUNoQywwQ0FBa0M7O0lBQ2xDLDBDQUFrQzs7SUFFbEMsc0NBQStDOztJQUMvQyx1Q0FBZ0Q7O0lBQ2hELDZDQUFvRDs7SUFFcEQseUNBQWlCOztJQUNqQiw0Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWlyQ2FsZW5kYXIsIEFpckxhbmd1YWdlLCBBaXJPcHRpb25zLCBBaXJEYXkgfSBmcm9tICcuLi8uLi9jbGFzc2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZGF0ZXBpY2tlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXYtYWN0aW9uXCIgKGNsaWNrKT1cInNldE1vbnRoLmVtaXQoYWlyQ2FsZW5kYXIubW9udGggLSAxKVwiPjxzdmc+PHBhdGggZD1cIk0gMTcsMTIgbCAtNSw1IGwgNSw1XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PlxuXG4gICAgICA8ZGl2IChjbGljayk9XCJtb250aFNlbGVjdGlvbi5lbWl0KClcIiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi10aXRsZVwiPnt7YWlyTGFuZ3VhZ2UubW9udGhzW2FpckNhbGVuZGFyLm1vbnRoXX19LCA8aT57e2FpckNhbGVuZGFyLnllYXJ9fTwvaT48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi1hY3Rpb25cIiAoY2xpY2spPVwic2V0TW9udGguZW1pdChhaXJDYWxlbmRhci5tb250aCArIDEpXCI+PHN2Zz48cGF0aCBkPVwiTSAxNCwxMiBsIDUsNSBsIC01LDVcIj48L3BhdGg+PC9zdmc+PC9kaXY+XG4gICAgPC9uYXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLWRheXMgZGF0ZXBpY2tlci0tYm9keSBhY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLWRheXMtbmFtZXNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkYXkgb2YgWzAsMSwyLDMsNCw1LDZdXCIgY2xhc3M9XCJkYXRlcGlja2VyLS1kYXktbmFtZVwiIFtjbGFzcy4td2Vla2VuZC1dPVwiZGF5ID09IDUgfHwgZGF5ID09IDZcIlxuICAgICAgICAgID57e2Fpckxhbmd1YWdlW2Fpck9wdGlvbnMuZnVsbERheXMgPyAnZGF5cycgOiAnZGF5c01pbiddW2RheV19fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY2VsbHMgZGF0ZXBpY2tlci0tY2VsbHMtZGF5c1wiPlxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFpckRheSBvZiBhaXJDYWxlbmRhci5haXJEYXlzOyBsZXQgaT1pbmRleFwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImRhdGVwaWNrZXItLWNlbGwgZGF0ZXBpY2tlci0tY2VsbC1kYXlcIlxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnLXdlZWtlbmQtJzogYWlyRGF5LndlZWtlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1vdGhlci1tb250aC0nOiBhaXJEYXkub3RoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1jdXJyZW50LSc6IGFpckRheS5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctZGlzYWJsZWQtJzogYWlyRGF5LmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctc2VsZWN0ZWQtJzogIWFpckRheS5kaXNhYmxlZCAmJiAoaXNDYWxlbmRhckRhdGUoYWlyRGF0ZSwgYWlyRGF5KSB8fCBpc0NhbGVuZGFyRGF0ZShhaXJFbmREYXRlLCBhaXJEYXkpIHx8IGlzQ2FsZW5kYXJEYXRlKGFpckRhdGVTaW0sIGFpckRheSkgfHwgaXNDYWxlbmRhckRhdGUoYWlyRW5kRGF0ZVNpbSwgYWlyRGF5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1pbi1yYW5nZS0nOiBhaXJPcHRpb25zLnJhbmdlICYmICFhaXJEYXkuZGlzYWJsZWQgJiYgaXNJblJhbmdlKGFpckRheSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1yYW5nZS1mcm9tLSc6IGFpck9wdGlvbnMucmFuZ2UgJiYgIWFpckRheS5kaXNhYmxlZCAmJiAoKCFhaXJEYXRlU2ltICYmIGlzQ2FsZW5kYXJEYXRlKGFpckRhdGUsIGFpckRheSkpIHx8IGlzQ2FsZW5kYXJEYXRlKGFpckRhdGVTaW0sIGFpckRheSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctcmFuZ2UtdG8tJzogYWlyT3B0aW9ucy5yYW5nZSAmJiAhYWlyRGF5LmRpc2FibGVkICYmIChpc0NhbGVuZGFyRGF0ZShhaXJFbmREYXRlLCBhaXJEYXkpIHx8IGlzQ2FsZW5kYXJEYXRlKGFpckVuZERhdGVTaW0sIGFpckRheSkpIH1cIlxuICAgICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUuZW1pdChpKVwiXG4gICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJhaXJPcHRpb25zLnJhbmdlID8gc2ltdWxhdGUoYWlyRGF5KSA6ICcnXCJcbiAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImFpck9wdGlvbnMucmFuZ2UgPyByZXNldFNpbSgpIDogJydcIj57e2FpckRheS5kYXRlfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cImFpck9wdGlvbnMudGltZXBpY2tlclwiXG4gICAgICAgICAgIHRpbWVwaWNrZXJcbiAgICAgICAgICAgW2Fpck9wdGlvbnNdPVwiYWlyT3B0aW9uc1wiIFthaXJDYWxlbmRhcl09XCJhaXJDYWxlbmRhclwiIChzZXREYXRlKT1cInNldERhdGUuZW1pdChudWxsKVwiIGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZSAtYW0tcG0tXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFpckRhdGU6IERhdGU7XG4gIEBJbnB1dCgpIGFpckVuZERhdGU6IERhdGU7XG4gIEBJbnB1dCgpIGFpck9wdGlvbnM6IEFpck9wdGlvbnM7XG4gIEBJbnB1dCgpIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcbiAgQElucHV0KCkgYWlyTGFuZ3VhZ2U6IEFpckxhbmd1YWdlO1xuXG4gIEBPdXRwdXQoKSBzZXREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzZXRNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgbW9udGhTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgYWlyRGF0ZVNpbTogRGF0ZTtcbiAgYWlyRW5kRGF0ZVNpbTogRGF0ZTtcblxuICBpc0luUmFuZ2UgKGRheTogQWlyRGF5KSB7XG4gICAgaWYgKHRoaXMuYWlyRGF0ZSAmJiB0aGlzLmFpckVuZERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFpckRhdGUgPCBuZXcgRGF0ZShEYXRlLlVUQyhkYXkueWVhciwgZGF5Lm1vbnRoLCBkYXkuZGF0ZSkpICYmXG4gICAgICAgICAgbmV3IERhdGUoRGF0ZS5VVEMoZGF5LnllYXIsIGRheS5tb250aCwgZGF5LmRhdGUsIDIzLCA1OSwgNTkpKSA8IHRoaXMuYWlyRW5kRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5haXJEYXRlU2ltICYmIHRoaXMuYWlyRW5kRGF0ZVNpbSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWlyRGF0ZVNpbSA8IG5ldyBEYXRlKERhdGUuVVRDKGRheS55ZWFyLCBkYXkubW9udGgsIGRheS5kYXRlKSkgJiZcbiAgICAgICAgICBuZXcgRGF0ZShEYXRlLlVUQyhkYXkueWVhciwgZGF5Lm1vbnRoLCBkYXkuZGF0ZSwgMjMsIDU5LCA1OSkpIDwgdGhpcy5haXJFbmREYXRlU2ltO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzQ2FsZW5kYXJEYXRlIChkYXRlOiBEYXRlLCBkYXk6IEFpckRheSkge1xuICAgIHJldHVybiBkYXRlID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpID09IGRheS55ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA9PSBkYXkubW9udGggJiYgZGF0ZS5nZXRVVENEYXRlKCkgPT0gZGF5LmRhdGUgOiBmYWxzZTtcbiAgfVxuXG4gIHNpbXVsYXRlIChkYXk6IEFpckRheSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXkueWVhciwgZGF5Lm1vbnRoLCBkYXkuZGF0ZSwgMCwgMCkpO1xuICAgIHRoaXMuYWlyRGF0ZVNpbSA9IHRoaXMuYWlyRGF0ZTtcbiAgICB0aGlzLmFpckVuZERhdGVTaW0gPSB0aGlzLmFpckVuZERhdGU7XG5cbiAgICBpZiAoIXRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKGRhdGUpICYmICgodGhpcy5haXJEYXRlICYmICF0aGlzLmFpckVuZERhdGUpIHx8ICh0aGlzLmFpckVuZERhdGUgJiYgIXRoaXMuYWlyRGF0ZSkpKSB7XG4gICAgICBpZiAodGhpcy5haXJEYXRlKSB7XG4gICAgICAgIGlmIChkYXRlIDwgdGhpcy5haXJEYXRlKSB7XG4gICAgICAgICAgdGhpcy5haXJFbmREYXRlU2ltID0gdGhpcy5haXJEYXRlO1xuICAgICAgICAgIHRoaXMuYWlyRGF0ZVNpbSA9IGRhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWlyRW5kRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5haXJFbmREYXRlU2ltID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYWlyRGF0ZVNpbSA9IGRhdGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWlyRW5kRGF0ZVNpbSA9IGRhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgLyogYWlyRW5kRGF0ZSBpcyB0cnV0aHkgKi8ge1xuICAgICAgICBpZiAodGhpcy5haXJFbmREYXRlIDwgZGF0ZSkge1xuICAgICAgICAgIHRoaXMuYWlyRGF0ZVNpbSA9IHRoaXMuYWlyRW5kRGF0ZTtcbiAgICAgICAgICB0aGlzLmFpckVuZERhdGVTaW0gPSBkYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWlyRGF0ZVNpbSA9IGRhdGU7XG4gICAgICAgICAgdGhpcy5haXJFbmREYXRlU2ltID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0U2ltICgpIHtcbiAgICB0aGlzLmFpckRhdGVTaW0gPSBudWxsO1xuICAgIHRoaXMuYWlyRW5kRGF0ZVNpbSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==