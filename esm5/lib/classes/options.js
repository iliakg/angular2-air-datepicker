/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var AirOptions = /** @class */ (function () {
    function AirOptions(options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
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
    AirOptions.sameDate = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        return date1 && date2 &&
            date1.getUTCFullYear() == date2.getUTCFullYear() &&
            date1.getUTCMonth() == date2.getUTCMonth() &&
            date1.getUTCDate() == date2.getUTCDate() &&
            date1.getUTCHours() == date2.getUTCHours() &&
            date1.getUTCMinutes() == date2.getUTCMinutes();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AirOptions.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.enabledDateRanges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dateRange = _c.value;
                if (date >= dateRange.start && date <= dateRange.end) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return !!this.enabledDateRanges.length;
    };
    return AirOptions;
}());
export { AirOptions };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWFpci1kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQVVJLG9CQUFhLE9BQXNDO1FBQXRDLHdCQUFBLEVBQUEsNkJBQXNCLEVBQUUsRUFBYztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVNLG1CQUFROzs7OztJQUFmLFVBQWlCLEtBQVcsRUFBRSxLQUFXO1FBQ3JDLE9BQU8sS0FBSyxJQUFJLEtBQUs7WUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDaEQsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDMUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDeEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDMUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBWSxJQUFVOzs7WUFDcEIsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBM0MsSUFBTSxTQUFTLFdBQUE7Z0JBQ2xCLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQzs7OztJQXRDRyxnQ0FBcUI7O0lBQ3JCLCtCQUFvQjs7SUFDcEIsOEJBQW1COztJQUNuQiw4QkFBa0I7O0lBQ2xCLDhCQUFrQjs7SUFDbEIsZ0NBQW9COztJQUNwQiwyQkFBZ0I7O0lBQ2hCLHVDQUFnQzs7Ozs7QUFpQ3BDLCtCQUdDOzs7SUFGQywwQkFBWTs7SUFDWix3QkFBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBaXJPcHRpb25zIHtcbiAgICB0aW1lcGlja2VyPzogYm9vbGVhbjtcbiAgICBmb3JtYXQxMmg/OiBib29sZWFuO1xuICAgIGZ1bGxEYXlzPzogYm9vbGVhbjtcbiAgICBsYW5ndWFnZT86IHN0cmluZztcbiAgICBob3VyU3RlcD86IG51bWJlcjtcbiAgICBtaW51dGVTdGVwPzogbnVtYmVyO1xuICAgIHJhbmdlPzogYm9vbGVhbjtcbiAgICBlbmFibGVkRGF0ZVJhbmdlcz86IERhdGVSYW5nZVtdO1xuXG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEFpck9wdGlvbnMgPSB7fSBhcyBBaXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZXBpY2tlciA9ICEhb3B0aW9ucy50aW1lcGlja2VyO1xuICAgICAgICB0aGlzLmZvcm1hdDEyaCA9ICEhb3B0aW9ucy5mb3JtYXQxMmg7XG4gICAgICAgIHRoaXMuZnVsbERheXMgPSAhIW9wdGlvbnMuZnVsbERheXM7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlIHx8ICdlbic7XG4gICAgICAgIHRoaXMuaG91clN0ZXAgPSBvcHRpb25zLmhvdXJTdGVwIHx8IDE7XG4gICAgICAgIHRoaXMubWludXRlU3RlcCA9IG9wdGlvbnMubWludXRlU3RlcCB8fCAxO1xuICAgICAgICB0aGlzLnJhbmdlID0gISFvcHRpb25zLnJhbmdlO1xuICAgICAgICB0aGlzLmVuYWJsZWREYXRlUmFuZ2VzID0gb3B0aW9ucy5lbmFibGVkRGF0ZVJhbmdlcyB8fCBbXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2FtZURhdGUgKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0ZTEgJiYgZGF0ZTIgJiZcbiAgICAgICAgICAgIGRhdGUxLmdldFVUQ0Z1bGxZZWFyKCkgPT0gZGF0ZTIuZ2V0VVRDRnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgZGF0ZTEuZ2V0VVRDTW9udGgoKSA9PSBkYXRlMi5nZXRVVENNb250aCgpICYmXG4gICAgICAgICAgICBkYXRlMS5nZXRVVENEYXRlKCkgPT0gZGF0ZTIuZ2V0VVRDRGF0ZSgpICYmXG4gICAgICAgICAgICBkYXRlMS5nZXRVVENIb3VycygpID09IGRhdGUyLmdldFVUQ0hvdXJzKCkgJiZcbiAgICAgICAgICAgIGRhdGUxLmdldFVUQ01pbnV0ZXMoKSA9PSBkYXRlMi5nZXRVVENNaW51dGVzKCk7XG4gICAgfVxuXG4gICAgaXNEaXNhYmxlZCAoZGF0ZTogRGF0ZSkge1xuICAgICAgZm9yIChjb25zdCBkYXRlUmFuZ2Ugb2YgdGhpcy5lbmFibGVkRGF0ZVJhbmdlcykge1xuICAgICAgICBpZiAoZGF0ZSA+PSBkYXRlUmFuZ2Uuc3RhcnQgJiYgZGF0ZSA8PSBkYXRlUmFuZ2UuZW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhIXRoaXMuZW5hYmxlZERhdGVSYW5nZXMubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2Uge1xuICBzdGFydDogRGF0ZTtcbiAgZW5kOiBEYXRlO1xufVxuIl19