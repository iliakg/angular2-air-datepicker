/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AirOptions } from './options';
var AirCalendar = /** @class */ (function () {
    function AirCalendar(date, airOptions) {
        if (date === void 0) { date = new Date; }
        if (airOptions === void 0) { airOptions = new AirOptions; }
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        var currentDate = new Date;
        this.currentMonth = currentDate.getMonth();
        this.currentYear = currentDate.getFullYear();
        this.airOptions = airOptions;
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date.getDate();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.updateCalendar();
    }
    /**
     * @return {?}
     */
    AirCalendar.prototype.updateCalendar = /**
     * @return {?}
     */
    function () {
        this.airDays = [];
        /** @type {?} */
        var daysInMonth = this.getDaysInMonth(this.month);
        /** @type {?} */
        var date = new Date;
        /** @type {?} */
        var firstDayOfMonth = ((new Date(this.year, this.month, 1)).getDay() || 7) - 1;
        // making 0 == monday
        /** @type {?} */
        var weekend = new AirWeekend;
        if (firstDayOfMonth /* is not monday (0) */) {
            /** @type {?} */
            var daysInLastMonth = this.getDaysInMonth(this.month - 1);
            /** @type {?} */
            var prevAirMonth = new AirMonth(this.month - 1, this.year);
            for (var dateNo = daysInLastMonth - firstDayOfMonth + 1; dateNo <= daysInLastMonth; dateNo++) {
                this.airDays.push(new AirDay(dateNo, prevAirMonth.month, prevAirMonth.year, weekend.progress(), this.airOptions.isDisabled(new Date(prevAirMonth.year, prevAirMonth.month, dateNo)), true));
            }
        }
        for (var dateNo = 1; dateNo <= daysInMonth; dateNo++) {
            this.airDays.push(new AirDay(dateNo, this.month, this.year, weekend.progress(), this.airOptions.isDisabled(new Date(this.year, this.month, dateNo))));
        }
        if (this.date > daysInMonth) {
            this.date = daysInMonth; // select the maximum available this month instead
        }
        // set the current date if it's the current month & year
        if (date.getMonth() == this.month && date.getFullYear() == this.year) {
            this.airDays[firstDayOfMonth + date.getDate() - 1].current = true;
        }
        /** @type {?} */
        var daysSoFar = firstDayOfMonth + daysInMonth;
        /** @type {?} */
        var nextAirMonth = new AirMonth(this.month + 1, this.year);
        for (var dateNo = 1; dateNo <= (daysSoFar > 35 ? 42 : 35) - daysSoFar; dateNo++) {
            this.airDays.push(new AirDay(dateNo, nextAirMonth.month, nextAirMonth.year, weekend.progress(), this.airOptions.isDisabled(new Date(nextAirMonth.year, nextAirMonth.month, dateNo)), true));
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AirCalendar.prototype.selectDate = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.date = this.airDays[index].date;
        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.setMonth(this.month - 1);
        }
        else if (index > 20 && this.date < 8) {
            this.setMonth(this.month + 1);
        }
    };
    /**
     * @param {?} month
     * @return {?}
     */
    AirCalendar.prototype.setMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var airMonth = new AirMonth(month, this.year);
        this.month = airMonth.month;
        this.year = airMonth.year;
        this.updateCalendar();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    AirCalendar.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.year = year;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    AirCalendar.prototype.getDaysInMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var airMonth = new AirMonth(month, this.year);
        if (airMonth.month == 1 && ((airMonth.year % 4 == 0) && (airMonth.year % 100 != 0)) || (airMonth.year % 400 == 0)) {
            return 29;
        }
        return this.daysInMonth[airMonth.month];
    };
    return AirCalendar;
}());
export { AirCalendar };
if (false) {
    /** @type {?} */
    AirCalendar.prototype.daysInMonth;
    /** @type {?} */
    AirCalendar.prototype.airOptions;
    /** @type {?} */
    AirCalendar.prototype.airDays;
    /** @type {?} */
    AirCalendar.prototype.currentMonth;
    /** @type {?} */
    AirCalendar.prototype.currentYear;
    /** @type {?} */
    AirCalendar.prototype.year;
    /** @type {?} */
    AirCalendar.prototype.month;
    /** @type {?} */
    AirCalendar.prototype.date;
    /** @type {?} */
    AirCalendar.prototype.hour;
    /** @type {?} */
    AirCalendar.prototype.minute;
}
// normalizes month/year
var 
// normalizes month/year
AirMonth = /** @class */ (function () {
    function AirMonth(month, year) {
        if (month > 11) {
            year++;
            month = 0;
        }
        else if (month < 0) {
            year--;
            month = 11;
        }
        this.month = month;
        this.year = year;
    }
    return AirMonth;
}());
// normalizes month/year
export { AirMonth };
if (false) {
    /** @type {?} */
    AirMonth.prototype.month;
    /** @type {?} */
    AirMonth.prototype.year;
}
var AirDay = /** @class */ (function () {
    function AirDay(date, month, year, weekend, disabled, other, current) {
        if (weekend === void 0) { weekend = false; }
        if (disabled === void 0) { disabled = false; }
        if (other === void 0) { other = false; }
        if (current === void 0) { current = false; }
        this.date = date;
        this.month = month;
        this.year = year;
        this.weekend = weekend;
        this.disabled = disabled;
        this.other = other;
        this.current = current;
    }
    return AirDay;
}());
export { AirDay };
if (false) {
    /** @type {?} */
    AirDay.prototype.date;
    /** @type {?} */
    AirDay.prototype.month;
    /** @type {?} */
    AirDay.prototype.year;
    /** @type {?} */
    AirDay.prototype.weekend;
    /** @type {?} */
    AirDay.prototype.other;
    /** @type {?} */
    AirDay.prototype.current;
    /** @type {?} */
    AirDay.prototype.disabled;
}
var AirWeekend = /** @class */ (function () {
    function AirWeekend(day) {
        if (day === void 0) { day = 0; }
        this.day = day;
    }
    /**
     * @return {?}
     */
    AirWeekend.prototype.progress = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekend = false;
        if (this.day == 5 /* Saturday */) {
            weekend = true;
            ++this.day;
        }
        else if (this.day == 6 /* Sunday */) {
            weekend = true;
            this.day = 0; // it's a new week!
        }
        else {
            ++this.day;
        }
        return weekend;
    };
    return AirWeekend;
}());
export { AirWeekend };
if (false) {
    /** @type {?} */
    AirWeekend.prototype.day;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QztJQVlFLHFCQUFhLElBQXFCLEVBQUUsVUFBdUM7UUFBOUQscUJBQUEsRUFBQSxXQUFpQixJQUFJO1FBQUUsMkJBQUEsRUFBQSxpQkFBNkIsVUFBVTtRQVgzRSxnQkFBVyxHQUFrQixDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7O1lBWXhFLFdBQVcsR0FBRyxJQUFJLElBQUk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxvQ0FBYzs7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RUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ1o7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBckJDLHlCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWlyT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBBaXJDYWxlbmRhciB7XG4gIGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWyAzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxIF07XG4gIGFpck9wdGlvbnM6IEFpck9wdGlvbnM7XG4gIGFpckRheXM6IEFycmF5PEFpckRheT47XG4gIGN1cnJlbnRNb250aDogbnVtYmVyO1xuICBjdXJyZW50WWVhcjogbnVtYmVyO1xuICB5ZWFyOiBudW1iZXI7XG4gIG1vbnRoOiBudW1iZXI7XG4gIGRhdGU6IG51bWJlcjtcbiAgaG91cjogbnVtYmVyO1xuICBtaW51dGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvciAoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlLCBhaXJPcHRpb25zOiBBaXJPcHRpb25zID0gbmV3IEFpck9wdGlvbnMpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLmN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmFpck9wdGlvbnMgPSBhaXJPcHRpb25zO1xuICAgIHRoaXMueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHRoaXMuaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICB0aGlzLm1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHRoaXMudXBkYXRlQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGVuZGFyICgpIHtcbiAgICB0aGlzLmFpckRheXMgPSBbXTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IHRoaXMuZ2V0RGF5c0luTW9udGgodGhpcy5tb250aCk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9ICgobmV3IERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCAxKSkuZ2V0RGF5KCkgfHwgNykgLSAxOyAvLyBtYWtpbmcgMCA9PSBtb25kYXlcbiAgICBjb25zdCB3ZWVrZW5kID0gbmV3IEFpcldlZWtlbmQ7XG5cbiAgICBpZiAoZmlyc3REYXlPZk1vbnRoLyogaXMgbm90IG1vbmRheSAoMCkgKi8pIHtcbiAgICAgIGNvbnN0IGRheXNJbkxhc3RNb250aCA9IHRoaXMuZ2V0RGF5c0luTW9udGgodGhpcy5tb250aCAtIDEpO1xuICAgICAgY29uc3QgcHJldkFpck1vbnRoID0gbmV3IEFpck1vbnRoKHRoaXMubW9udGggLSAxLCB0aGlzLnllYXIpO1xuICAgICAgZm9yIChsZXQgZGF0ZU5vID0gZGF5c0luTGFzdE1vbnRoIC0gZmlyc3REYXlPZk1vbnRoICsgMTsgZGF0ZU5vIDw9IGRheXNJbkxhc3RNb250aDsgZGF0ZU5vKyspIHtcbiAgICAgICAgdGhpcy5haXJEYXlzLnB1c2goXG4gICAgICAgICAgbmV3IEFpckRheShkYXRlTm8sIHByZXZBaXJNb250aC5tb250aCwgcHJldkFpck1vbnRoLnllYXIsIHdlZWtlbmQucHJvZ3Jlc3MoKSwgdGhpcy5haXJPcHRpb25zLmlzRGlzYWJsZWQobmV3IERhdGUocHJldkFpck1vbnRoLnllYXIsIHByZXZBaXJNb250aC5tb250aCwgZGF0ZU5vKSksIHRydWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZGF0ZU5vID0gMTsgZGF0ZU5vIDw9IGRheXNJbk1vbnRoOyBkYXRlTm8rKykge1xuICAgICAgdGhpcy5haXJEYXlzLnB1c2gobmV3IEFpckRheShkYXRlTm8sIHRoaXMubW9udGgsIHRoaXMueWVhciwgd2Vla2VuZC5wcm9ncmVzcygpLCB0aGlzLmFpck9wdGlvbnMuaXNEaXNhYmxlZChuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIGRhdGVObykpKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0ZSA+IGRheXNJbk1vbnRoKSB7XG4gICAgICB0aGlzLmRhdGUgPSBkYXlzSW5Nb250aDsgLy8gc2VsZWN0IHRoZSBtYXhpbXVtIGF2YWlsYWJsZSB0aGlzIG1vbnRoIGluc3RlYWRcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGN1cnJlbnQgZGF0ZSBpZiBpdCdzIHRoZSBjdXJyZW50IG1vbnRoICYgeWVhclxuICAgIGlmIChkYXRlLmdldE1vbnRoKCkgPT0gdGhpcy5tb250aCAmJiBkYXRlLmdldEZ1bGxZZWFyKCkgPT0gdGhpcy55ZWFyKSB7XG4gICAgICB0aGlzLmFpckRheXNbZmlyc3REYXlPZk1vbnRoICsgZGF0ZS5nZXREYXRlKCkgLSAxXS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXlzU29GYXIgPSBmaXJzdERheU9mTW9udGggKyBkYXlzSW5Nb250aDtcbiAgICBjb25zdCBuZXh0QWlyTW9udGggPSBuZXcgQWlyTW9udGgodGhpcy5tb250aCArIDEsIHRoaXMueWVhcik7XG4gICAgZm9yIChsZXQgZGF0ZU5vID0gMTsgZGF0ZU5vIDw9IChkYXlzU29GYXIgPiAzNSA/IDQyIDogMzUpIC0gZGF5c1NvRmFyOyBkYXRlTm8rKykge1xuICAgICAgdGhpcy5haXJEYXlzLnB1c2goXG4gICAgICAgIG5ldyBBaXJEYXkoZGF0ZU5vLCBuZXh0QWlyTW9udGgubW9udGgsIG5leHRBaXJNb250aC55ZWFyLCB3ZWVrZW5kLnByb2dyZXNzKCksIHRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKG5ldyBEYXRlKG5leHRBaXJNb250aC55ZWFyLCBuZXh0QWlyTW9udGgubW9udGgsIGRhdGVObykpLCB0cnVlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REYXRlIChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRlID0gdGhpcy5haXJEYXlzW2luZGV4XS5kYXRlO1xuXG4gICAgLy8gbWlnaHQgYmUgYSBkYXkgZnJvbSB0aGUgcHJldmlvdXMvbmV4dCBtb250aFxuICAgIGlmIChpbmRleCA8IDcgJiYgdGhpcy5kYXRlID4gMjApIHtcbiAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5tb250aCAtIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiAyMCAmJiB0aGlzLmRhdGUgPCA4KSB7XG4gICAgICB0aGlzLnNldE1vbnRoKHRoaXMubW9udGggKyAxKTtcbiAgICB9XG4gIH1cblxuICBzZXRNb250aCAobW9udGg6IG51bWJlcikge1xuICAgIGNvbnN0IGFpck1vbnRoOiBBaXJNb250aCA9IG5ldyBBaXJNb250aChtb250aCwgdGhpcy55ZWFyKTtcbiAgICB0aGlzLm1vbnRoID0gYWlyTW9udGgubW9udGg7XG4gICAgdGhpcy55ZWFyID0gYWlyTW9udGgueWVhcjtcbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFyKCk7XG4gIH1cblxuICBzZXRZZWFyICh5ZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICB9XG5cbiAgZ2V0RGF5c0luTW9udGggKG1vbnRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBhaXJNb250aDogQWlyTW9udGggPSBuZXcgQWlyTW9udGgobW9udGgsIHRoaXMueWVhcik7XG4gICAgaWYgKGFpck1vbnRoLm1vbnRoID09IDEgJiYgKChhaXJNb250aC55ZWFyICUgNCA9PSAwKSAmJiAoYWlyTW9udGgueWVhciAlIDEwMCAhPSAwKSkgfHwgKGFpck1vbnRoLnllYXIgJSA0MDAgPT0gMCkpIHtcbiAgICAgIHJldHVybiAyOTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aFthaXJNb250aC5tb250aF07XG4gIH1cbn1cblxuLy8gbm9ybWFsaXplcyBtb250aC95ZWFyXG5leHBvcnQgY2xhc3MgQWlyTW9udGgge1xuICBtb250aDogbnVtYmVyO1xuICB5ZWFyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IgKG1vbnRoLCB5ZWFyKSB7XG4gICAgaWYgKG1vbnRoID4gMTEpIHtcbiAgICAgIHllYXIrKztcbiAgICAgIG1vbnRoID0gMDtcbiAgICB9IGVsc2UgaWYgKG1vbnRoIDwgMCkge1xuICAgICAgeWVhci0tO1xuICAgICAgbW9udGggPSAxMTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWlyRGF5IHtcbiAgZGF0ZTogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xuICB5ZWFyOiBudW1iZXI7XG4gIHdlZWtlbmQ6IGJvb2xlYW47XG4gIG90aGVyOiBib29sZWFuO1xuICBjdXJyZW50OiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvciAoZGF0ZTogbnVtYmVyLCBtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIsIHdlZWtlbmQgPSBmYWxzZSwgZGlzYWJsZWQgPSBmYWxzZSwgb3RoZXIgPSBmYWxzZSwgY3VycmVudCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICB0aGlzLndlZWtlbmQgPSB3ZWVrZW5kO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLm90aGVyID0gb3RoZXI7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWlyV2Vla2VuZCB7XG4gIGRheTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yIChkYXk6IG51bWJlciA9IDApIHtcbiAgICB0aGlzLmRheSA9IGRheTtcbiAgfVxuXG4gIHByb2dyZXNzICgpOiBib29sZWFuIHtcbiAgICBsZXQgd2Vla2VuZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGF5ID09IDUgLyogU2F0dXJkYXkgKi8pIHtcbiAgICAgIHdlZWtlbmQgPSB0cnVlO1xuICAgICAgKyt0aGlzLmRheTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF5ID09IDYgLyogU3VuZGF5ICovKSB7XG4gICAgICB3ZWVrZW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF5ID0gMDsgLy8gaXQncyBhIG5ldyB3ZWVrIVxuICAgIH0gZWxzZSB7XG4gICAgICArK3RoaXMuZGF5O1xuICAgIH1cblxuICAgIHJldHVybiB3ZWVrZW5kO1xuICB9XG59XG4iXX0=