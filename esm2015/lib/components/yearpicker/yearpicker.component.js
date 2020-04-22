/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/yearpicker/yearpicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AirCalendar } from '../../classes';
export class YearpickerComponent {
    constructor() {
        this.setYear = new EventEmitter();
        this.years = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const firstYear = this.airCalendar.year - 6;
        this.years = Array.from({ length: 12 }, (/**
         * @param {?} v
         * @param {?} k
         * @return {?}
         */
        (v, k) => firstYear + k));
    }
    /**
     * @return {?}
     */
    next() {
        for (let i = 0; i < this.years.length; i++) {
            this.years[i] += 10;
        }
    }
    /**
     * @return {?}
     */
    previous() {
        for (let i = 0; i < this.years.length; i++) {
            this.years[i] -= 10;
        }
    }
}
YearpickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[yearpicker]',
                template: `
    <nav class="datepicker--nav">
      <div class="datepicker--nav-action" (click)="previous()"><svg><path d="M 17,12 l -5,5 l 5,5"></path></svg></div>

      <div class="datepicker--nav-title">{{years[1]}} - {{years[years.length - 2]}}</div>

      <div class="datepicker--nav-action" (click)="next()"><svg><path d="M 14,12 l 5,5 l -5,5"></path></svg></div>
    </nav>

    <div class="datepicker--content">
      <div class="datepicker--cells datepicker--cells-years">
        <div *ngFor="let year of years; let i=index" (click)="setYear.emit(year)" class="datepicker--cell datepicker--cell-year"
             [ngClass]="{ '-current-': year == airCalendar.currentYear, '-other-decade-': i == 0 || i == years.length - 1 }">{{year}}</div>
      </div>
    </div>
  `
            }] }
];
YearpickerComponent.propDecorators = {
    airCalendar: [{ type: Input }],
    setYear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    YearpickerComponent.prototype.airCalendar;
    /** @type {?} */
    YearpickerComponent.prototype.setYear;
    /** @type {?} */
    YearpickerComponent.prototype.years;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3llYXJwaWNrZXIveWVhcnBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQjVDLE1BQU0sT0FBTyxtQkFBbUI7SUFuQmhDO1FBc0JZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRS9DLFVBQUssR0FBYSxFQUFFLENBQUM7SUFrQnZCLENBQUM7Ozs7SUFoQkMsUUFBUTs7Y0FDQSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOzs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2FBQ0Y7OzswQkFFRSxLQUFLO3NCQUVMLE1BQU07Ozs7SUFGUCwwQ0FBa0M7O0lBRWxDLHNDQUErQzs7SUFFL0Msb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWlyQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9jbGFzc2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbeWVhcnBpY2tlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1uYXYtYWN0aW9uXCIgKGNsaWNrKT1cInByZXZpb3VzKClcIj48c3ZnPjxwYXRoIGQ9XCJNIDE3LDEyIGwgLTUsNSBsIDUsNVwiPjwvcGF0aD48L3N2Zz48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItLW5hdi10aXRsZVwiPnt7eWVhcnNbMV19fSAtIHt7eWVhcnNbeWVhcnMubGVuZ3RoIC0gMl19fTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tbmF2LWFjdGlvblwiIChjbGljayk9XCJuZXh0KClcIj48c3ZnPjxwYXRoIGQ9XCJNIDE0LDEyIGwgNSw1IGwgLTUsNVwiPjwvcGF0aD48L3N2Zz48L2Rpdj5cbiAgICA8L25hdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci0tY2VsbHMgZGF0ZXBpY2tlci0tY2VsbHMteWVhcnNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgeWVhciBvZiB5ZWFyczsgbGV0IGk9aW5kZXhcIiAoY2xpY2spPVwic2V0WWVhci5lbWl0KHllYXIpXCIgY2xhc3M9XCJkYXRlcGlja2VyLS1jZWxsIGRhdGVwaWNrZXItLWNlbGwteWVhclwiXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnLWN1cnJlbnQtJzogeWVhciA9PSBhaXJDYWxlbmRhci5jdXJyZW50WWVhciwgJy1vdGhlci1kZWNhZGUtJzogaSA9PSAwIHx8IGkgPT0geWVhcnMubGVuZ3RoIC0gMSB9XCI+e3t5ZWFyfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFllYXJwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhaXJDYWxlbmRhcjogQWlyQ2FsZW5kYXI7XG5cbiAgQE91dHB1dCgpIHNldFllYXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICB5ZWFyczogbnVtYmVyW10gPSBbXTtcblxuICBuZ09uSW5pdCAoKSB7XG4gICAgY29uc3QgZmlyc3RZZWFyID0gdGhpcy5haXJDYWxlbmRhci55ZWFyIC0gNjtcbiAgICB0aGlzLnllYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKHYsIGspID0+IGZpcnN0WWVhciArIGspO1xuICB9XG5cbiAgbmV4dCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzW2ldICs9IDEwO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWVhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnNbaV0gLT0gMTA7XG4gICAgfVxuICB9XG59XG4iXX0=