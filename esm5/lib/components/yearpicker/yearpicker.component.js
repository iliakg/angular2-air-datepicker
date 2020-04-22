/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/yearpicker/yearpicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar } from '../../classes';
var YearpickerComponent = /** @class */ (function () {
    function YearpickerComponent() {
        this.setYear = new EventEmitter();
        this.years = [];
    }
    /**
     * @return {?}
     */
    YearpickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstYear = this.airCalendar.year - 6;
        this.years = Array.from({ length: 12 }, (/**
         * @param {?} v
         * @param {?} k
         * @return {?}
         */
        function (v, k) { return firstYear + k; }));
    };
    /**
     * @return {?}
     */
    YearpickerComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.years.length; i++) {
            this.years[i] += 10;
        }
    };
    /**
     * @return {?}
     */
    YearpickerComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.years.length; i++) {
            this.years[i] -= 10;
        }
    };
    YearpickerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[yearpicker]',
                    template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"previous()\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div class=\"datepicker--nav-title\">{{years[1]}} - {{years[years.length - 2]}}</div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"next()\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--cells datepicker--cells-years\">\n        <div *ngFor=\"let year of years; let i=index\" (click)=\"setYear.emit(year)\" class=\"datepicker--cell datepicker--cell-year\"\n             [ngClass]=\"{ '-current-': year == airCalendar.currentYear, '-other-decade-': i == 0 || i == years.length - 1 }\">{{year}}</div>\n      </div>\n    </div>\n  "
                }] }
    ];
    YearpickerComponent.propDecorators = {
        airCalendar: [{ type: Input }],
        setYear: [{ type: Output }]
    };
    return YearpickerComponent;
}());
export { YearpickerComponent };
if (false) {
    /** @type {?} */
    YearpickerComponent.prototype.airCalendar;
    /** @type {?} */
    YearpickerComponent.prototype.setYear;
    /** @type {?} */
    YearpickerComponent.prototype.years;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3llYXJwaWNrZXIveWVhcnBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUM7SUFBQTtRQXNCWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUUvQyxVQUFLLEdBQWEsRUFBRSxDQUFDO0lBa0J2QixDQUFDOzs7O0lBaEJDLHNDQUFROzs7SUFBUjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOzs7OztRQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLFNBQVMsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELGtDQUFJOzs7SUFBSjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsNnlCQWVUO2lCQUNGOzs7OEJBRUUsS0FBSzswQkFFTCxNQUFNOztJQW9CVCwwQkFBQztDQUFBLEFBMUNELElBMENDO1NBdkJZLG1CQUFtQjs7O0lBQzlCLDBDQUFrQzs7SUFFbEMsc0NBQStDOztJQUUvQyxvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJDYWxlbmRhciB9IGZyb20gJy4uLy4uL2NsYXNzZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t5ZWFycGlja2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5hdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi1hY3Rpb25cIiAoY2xpY2spPVwicHJldmlvdXMoKVwiPjxzdmc+PHBhdGggZD1cIk0gMTcsMTIgbCAtNSw1IGwgNSw1XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LXRpdGxlXCI+e3t5ZWFyc1sxXX19IC0ge3t5ZWFyc1t5ZWFycy5sZW5ndGggLSAyXX19PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXYtYWN0aW9uXCIgKGNsaWNrKT1cIm5leHQoKVwiPjxzdmc+PHBhdGggZD1cIk0gMTQsMTIgbCA1LDUgbCAtNSw1XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PlxuICAgIDwvbmF2PlxuXG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1jZWxscyBkYXRlcGlja2VyLS1jZWxscy15ZWFyc1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHllYXJzOyBsZXQgaT1pbmRleFwiIChjbGljayk9XCJzZXRZZWFyLmVtaXQoeWVhcilcIiBjbGFzcz1cImRhdGVwaWNrZXItLWNlbGwgZGF0ZXBpY2tlci0tY2VsbC15ZWFyXCJcbiAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICctY3VycmVudC0nOiB5ZWFyID09IGFpckNhbGVuZGFyLmN1cnJlbnRZZWFyLCAnLW90aGVyLWRlY2FkZS0nOiBpID09IDAgfHwgaSA9PSB5ZWFycy5sZW5ndGggLSAxIH1cIj57e3llYXJ9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgWWVhcnBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFpckNhbGVuZGFyOiBBaXJDYWxlbmRhcjtcblxuICBAT3V0cHV0KCkgc2V0WWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHllYXJzOiBudW1iZXJbXSA9IFtdO1xuXG4gIG5nT25Jbml0ICgpIHtcbiAgICBjb25zdCBmaXJzdFllYXIgPSB0aGlzLmFpckNhbGVuZGFyLnllYXIgLSA2O1xuICAgIHRoaXMueWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAodiwgaykgPT4gZmlyc3RZZWFyICsgayk7XG4gIH1cblxuICBuZXh0ICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnNbaV0gKz0gMTA7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy55ZWFyc1tpXSAtPSAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==