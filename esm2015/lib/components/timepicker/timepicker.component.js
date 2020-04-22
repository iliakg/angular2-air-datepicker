/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timepicker/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirOptions } from '../../classes';
export class TimepickerComponent {
    constructor() {
        this.setDate = new EventEmitter();
    }
}
TimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[timepicker]',
                template: `
    <div class="datepicker--time-current">
            <span class="datepicker--time-current-hours"
            >{{('0' + (!airOptions.format12h ? airCalendar.hour : (airCalendar.hour <= 12 ? airCalendar.hour : airCalendar.hour - 12))).slice(-2)}}</span>
      <span class="datepicker--time-current-colon">:</span>
      <span class="datepicker--time-current-minutes">{{('0' + airCalendar.minute).slice(-2)}}</span>
      <span *ngIf="airOptions.format12h" class="datepicker--time-current-ampm">{{airCalendar.hour < 12 ? 'AM' : 'PM'}}</span>
    </div>

    <div class="datepicker--time-sliders">
      <div class="datepicker--time-row">
        <input type="range" name="hours" min="0" max="23" step="{{airOptions.hourStep}}" [(ngModel)]="airCalendar.hour" (change)="setDate.emit()">
      </div>

      <div class="datepicker--time-row">
        <input type="range" name="minutes" min="0" max="59" step="{{airOptions.minuteStep}}" [(ngModel)]="airCalendar.minute" (change)="setDate.emit()">
      </div>
    </div>
  `
            }] }
];
TimepickerComponent.propDecorators = {
    airOptions: [{ type: Input }],
    airCalendar: [{ type: Input }],
    setDate: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TimepickerComponent.prototype.airOptions;
    /** @type {?} */
    TimepickerComponent.prototype.airCalendar;
    /** @type {?} */
    TimepickerComponent.prototype.setDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeUJ4RCxNQUFNLE9BQU8sbUJBQW1CO0lBdEJoQztRQTBCWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUMvQyxDQUFDOzs7WUEzQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDthQUNGOzs7eUJBRUUsS0FBSzswQkFDTCxLQUFLO3NCQUVMLE1BQU07Ozs7SUFIUCx5Q0FBZ0M7O0lBQ2hDLDBDQUFrQzs7SUFFbEMsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFpckNhbGVuZGFyLCBBaXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RpbWVwaWNrZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tdGltZS1jdXJyZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1ob3Vyc1wiXG4gICAgICAgICAgICA+e3soJzAnICsgKCFhaXJPcHRpb25zLmZvcm1hdDEyaCA/IGFpckNhbGVuZGFyLmhvdXIgOiAoYWlyQ2FsZW5kYXIuaG91ciA8PSAxMiA/IGFpckNhbGVuZGFyLmhvdXIgOiBhaXJDYWxlbmRhci5ob3VyIC0gMTIpKSkuc2xpY2UoLTIpfX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1jb2xvblwiPjo8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1taW51dGVzXCI+e3soJzAnICsgYWlyQ2FsZW5kYXIubWludXRlKS5zbGljZSgtMil9fTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiYWlyT3B0aW9ucy5mb3JtYXQxMmhcIiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudC1hbXBtXCI+e3thaXJDYWxlbmRhci5ob3VyIDwgMTIgPyAnQU0nIDogJ1BNJ319PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtc2xpZGVyc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwiaG91cnNcIiBtaW49XCIwXCIgbWF4PVwiMjNcIiBzdGVwPVwie3thaXJPcHRpb25zLmhvdXJTdGVwfX1cIiBbKG5nTW9kZWwpXT1cImFpckNhbGVuZGFyLmhvdXJcIiAoY2hhbmdlKT1cInNldERhdGUuZW1pdCgpXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBuYW1lPVwibWludXRlc1wiIG1pbj1cIjBcIiBtYXg9XCI1OVwiIHN0ZXA9XCJ7e2Fpck9wdGlvbnMubWludXRlU3RlcH19XCIgWyhuZ01vZGVsKV09XCJhaXJDYWxlbmRhci5taW51dGVcIiAoY2hhbmdlKT1cInNldERhdGUuZW1pdCgpXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYWlyT3B0aW9uczogQWlyT3B0aW9ucztcbiAgQElucHV0KCkgYWlyQ2FsZW5kYXI6IEFpckNhbGVuZGFyO1xuXG4gIEBPdXRwdXQoKSBzZXREYXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xufVxuIl19