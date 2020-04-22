/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timepicker/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar, AirOptions } from '../../classes';
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.setDate = new EventEmitter();
    }
    TimepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[timepicker]',
                    template: "\n    <div class=\"datepicker--time-current\">\n            <span class=\"datepicker--time-current-hours\"\n            >{{('0' + (!airOptions.format12h ? airCalendar.hour : (airCalendar.hour <= 12 ? airCalendar.hour : airCalendar.hour - 12))).slice(-2)}}</span>\n      <span class=\"datepicker--time-current-colon\">:</span>\n      <span class=\"datepicker--time-current-minutes\">{{('0' + airCalendar.minute).slice(-2)}}</span>\n      <span *ngIf=\"airOptions.format12h\" class=\"datepicker--time-current-ampm\">{{airCalendar.hour < 12 ? 'AM' : 'PM'}}</span>\n    </div>\n\n    <div class=\"datepicker--time-sliders\">\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"hours\" min=\"0\" max=\"23\" step=\"{{airOptions.hourStep}}\" [(ngModel)]=\"airCalendar.hour\" (change)=\"setDate.emit()\">\n      </div>\n\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"minutes\" min=\"0\" max=\"59\" step=\"{{airOptions.minuteStep}}\" [(ngModel)]=\"airCalendar.minute\" (change)=\"setDate.emit()\">\n      </div>\n    </div>\n  "
                }] }
    ];
    TimepickerComponent.propDecorators = {
        airOptions: [{ type: Input }],
        airCalendar: [{ type: Input }],
        setDate: [{ type: Output }]
    };
    return TimepickerComponent;
}());
export { TimepickerComponent };
if (false) {
    /** @type {?} */
    TimepickerComponent.prototype.airOptions;
    /** @type {?} */
    TimepickerComponent.prototype.airCalendar;
    /** @type {?} */
    TimepickerComponent.prototype.setDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hEO0lBQUE7UUEwQlksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFDL0MsQ0FBQzs7Z0JBM0JBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDhqQ0FrQlQ7aUJBQ0Y7Ozs2QkFFRSxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsTUFBTTs7SUFDVCwwQkFBQztDQUFBLEFBM0JELElBMkJDO1NBTFksbUJBQW1COzs7SUFDOUIseUNBQWdDOztJQUNoQywwQ0FBa0M7O0lBRWxDLHNDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJDYWxlbmRhciwgQWlyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NsYXNzZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0aW1lcGlja2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLXRpbWUtY3VycmVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtaG91cnNcIlxuICAgICAgICAgICAgPnt7KCcwJyArICghYWlyT3B0aW9ucy5mb3JtYXQxMmggPyBhaXJDYWxlbmRhci5ob3VyIDogKGFpckNhbGVuZGFyLmhvdXIgPD0gMTIgPyBhaXJDYWxlbmRhci5ob3VyIDogYWlyQ2FsZW5kYXIuaG91ciAtIDEyKSkpLnNsaWNlKC0yKX19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtY29sb25cIj46PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtbWludXRlc1wiPnt7KCcwJyArIGFpckNhbGVuZGFyLm1pbnV0ZSkuc2xpY2UoLTIpfX08L3NwYW4+XG4gICAgICA8c3BhbiAqbmdJZj1cImFpck9wdGlvbnMuZm9ybWF0MTJoXCIgY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLWN1cnJlbnQtYW1wbVwiPnt7YWlyQ2FsZW5kYXIuaG91ciA8IDEyID8gJ0FNJyA6ICdQTSd9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLXNsaWRlcnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLXJvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbmFtZT1cImhvdXJzXCIgbWluPVwiMFwiIG1heD1cIjIzXCIgc3RlcD1cInt7YWlyT3B0aW9ucy5ob3VyU3RlcH19XCIgWyhuZ01vZGVsKV09XCJhaXJDYWxlbmRhci5ob3VyXCIgKGNoYW5nZSk9XCJzZXREYXRlLmVtaXQoKVwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS10aW1lLXJvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbmFtZT1cIm1pbnV0ZXNcIiBtaW49XCIwXCIgbWF4PVwiNTlcIiBzdGVwPVwie3thaXJPcHRpb25zLm1pbnV0ZVN0ZXB9fVwiIFsobmdNb2RlbCldPVwiYWlyQ2FsZW5kYXIubWludXRlXCIgKGNoYW5nZSk9XCJzZXREYXRlLmVtaXQoKVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFpck9wdGlvbnM6IEFpck9wdGlvbnM7XG4gIEBJbnB1dCgpIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcblxuICBAT3V0cHV0KCkgc2V0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==