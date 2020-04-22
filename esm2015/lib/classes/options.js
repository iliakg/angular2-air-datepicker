/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class AirOptions {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.timepicker = !!options.timepicker;
        this.format12h = !!options.format12h;
        this.fullDays = !!options.fullDays;
        this.language = options.language || 'en';
        this.hourStep = options.hourStep || 1;
        this.minuteStep = options.minuteStep || 1;
        this.range = !!options.range;
        this.enabledDateRanges = options.enabledDateRanges || [];
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    static sameDate(date1, date2) {
        return date1 && date2 &&
            date1.getUTCFullYear() == date2.getUTCFullYear() &&
            date1.getUTCMonth() == date2.getUTCMonth() &&
            date1.getUTCDate() == date2.getUTCDate() &&
            date1.getUTCHours() == date2.getUTCHours() &&
            date1.getUTCMinutes() == date2.getUTCMinutes();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        for (const dateRange of this.enabledDateRanges) {
            if (date >= dateRange.start && date <= dateRange.end) {
                return false;
            }
        }
        return !!this.enabledDateRanges.length;
    }
}
if (false) {
    /** @type {?} */
    AirOptions.prototype.timepicker;
    /** @type {?} */
    AirOptions.prototype.format12h;
    /** @type {?} */
    AirOptions.prototype.fullDays;
    /** @type {?} */
    AirOptions.prototype.language;
    /** @type {?} */
    AirOptions.prototype.hourStep;
    /** @type {?} */
    AirOptions.prototype.minuteStep;
    /** @type {?} */
    AirOptions.prototype.range;
    /** @type {?} */
    AirOptions.prototype.enabledDateRanges;
}
/**
 * @record
 */
export function DateRange() { }
if (false) {
    /** @type {?} */
    DateRange.prototype.start;
    /** @type {?} */
    DateRange.prototype.end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWFpci1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxVQUFVOzs7O0lBVW5CLFlBQWEsVUFBc0IsbUJBQUEsRUFBRSxFQUFjO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBRSxLQUFXLEVBQUUsS0FBVztRQUNyQyxPQUFPLEtBQUssSUFBSSxLQUFLO1lBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ2hELEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ3hDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUUsSUFBVTtRQUNwQixLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNwRCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Q0FDSjs7O0lBdENHLGdDQUFxQjs7SUFDckIsK0JBQW9COztJQUNwQiw4QkFBbUI7O0lBQ25CLDhCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBb0I7O0lBQ3BCLDJCQUFnQjs7SUFDaEIsdUNBQWdDOzs7OztBQWlDcEMsK0JBR0M7OztJQUZDLDBCQUFZOztJQUNaLHdCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFpck9wdGlvbnMge1xuICAgIHRpbWVwaWNrZXI/OiBib29sZWFuO1xuICAgIGZvcm1hdDEyaD86IGJvb2xlYW47XG4gICAgZnVsbERheXM/OiBib29sZWFuO1xuICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgIGhvdXJTdGVwPzogbnVtYmVyO1xuICAgIG1pbnV0ZVN0ZXA/OiBudW1iZXI7XG4gICAgcmFuZ2U/OiBib29sZWFuO1xuICAgIGVuYWJsZWREYXRlUmFuZ2VzPzogRGF0ZVJhbmdlW107XG5cbiAgICBjb25zdHJ1Y3RvciAob3B0aW9uczogQWlyT3B0aW9ucyA9IHt9IGFzIEFpck9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50aW1lcGlja2VyID0gISFvcHRpb25zLnRpbWVwaWNrZXI7XG4gICAgICAgIHRoaXMuZm9ybWF0MTJoID0gISFvcHRpb25zLmZvcm1hdDEyaDtcbiAgICAgICAgdGhpcy5mdWxsRGF5cyA9ICEhb3B0aW9ucy5mdWxsRGF5cztcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgfHwgJ2VuJztcbiAgICAgICAgdGhpcy5ob3VyU3RlcCA9IG9wdGlvbnMuaG91clN0ZXAgfHwgMTtcbiAgICAgICAgdGhpcy5taW51dGVTdGVwID0gb3B0aW9ucy5taW51dGVTdGVwIHx8IDE7XG4gICAgICAgIHRoaXMucmFuZ2UgPSAhIW9wdGlvbnMucmFuZ2U7XG4gICAgICAgIHRoaXMuZW5hYmxlZERhdGVSYW5nZXMgPSBvcHRpb25zLmVuYWJsZWREYXRlUmFuZ2VzIHx8IFtdO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYW1lRGF0ZSAoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlMSAmJiBkYXRlMiAmJlxuICAgICAgICAgICAgZGF0ZTEuZ2V0VVRDRnVsbFllYXIoKSA9PSBkYXRlMi5nZXRVVENGdWxsWWVhcigpICYmXG4gICAgICAgICAgICBkYXRlMS5nZXRVVENNb250aCgpID09IGRhdGUyLmdldFVUQ01vbnRoKCkgJiZcbiAgICAgICAgICAgIGRhdGUxLmdldFVUQ0RhdGUoKSA9PSBkYXRlMi5nZXRVVENEYXRlKCkgJiZcbiAgICAgICAgICAgIGRhdGUxLmdldFVUQ0hvdXJzKCkgPT0gZGF0ZTIuZ2V0VVRDSG91cnMoKSAmJlxuICAgICAgICAgICAgZGF0ZTEuZ2V0VVRDTWludXRlcygpID09IGRhdGUyLmdldFVUQ01pbnV0ZXMoKTtcbiAgICB9XG5cbiAgICBpc0Rpc2FibGVkIChkYXRlOiBEYXRlKSB7XG4gICAgICBmb3IgKGNvbnN0IGRhdGVSYW5nZSBvZiB0aGlzLmVuYWJsZWREYXRlUmFuZ2VzKSB7XG4gICAgICAgIGlmIChkYXRlID49IGRhdGVSYW5nZS5zdGFydCAmJiBkYXRlIDw9IGRhdGVSYW5nZS5lbmQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEhdGhpcy5lbmFibGVkRGF0ZVJhbmdlcy5sZW5ndGg7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZSB7XG4gIHN0YXJ0OiBEYXRlO1xuICBlbmQ6IERhdGU7XG59XG4iXX0=