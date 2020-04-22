/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AirOptions } from './options';
export class AirCalendar {
    /**
     * @param {?=} date
     * @param {?=} airOptions
     */
    constructor(date = new Date, airOptions = new AirOptions) {
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        const currentDate = new Date;
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
    updateCalendar() {
        this.airDays = [];
        /** @type {?} */
        const daysInMonth = this.getDaysInMonth(this.month);
        /** @type {?} */
        const date = new Date;
        /** @type {?} */
        const firstDayOfMonth = ((new Date(this.year, this.month, 1)).getDay() || 7) - 1;
        // making 0 == monday
        /** @type {?} */
        const weekend = new AirWeekend;
        if (firstDayOfMonth /* is not monday (0) */) {
            /** @type {?} */
            const daysInLastMonth = this.getDaysInMonth(this.month - 1);
            /** @type {?} */
            const prevAirMonth = new AirMonth(this.month - 1, this.year);
            for (let dateNo = daysInLastMonth - firstDayOfMonth + 1; dateNo <= daysInLastMonth; dateNo++) {
                this.airDays.push(new AirDay(dateNo, prevAirMonth.month, prevAirMonth.year, weekend.progress(), this.airOptions.isDisabled(new Date(prevAirMonth.year, prevAirMonth.month, dateNo)), true));
            }
        }
        for (let dateNo = 1; dateNo <= daysInMonth; dateNo++) {
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
        const daysSoFar = firstDayOfMonth + daysInMonth;
        /** @type {?} */
        const nextAirMonth = new AirMonth(this.month + 1, this.year);
        for (let dateNo = 1; dateNo <= (daysSoFar > 35 ? 42 : 35) - daysSoFar; dateNo++) {
            this.airDays.push(new AirDay(dateNo, nextAirMonth.month, nextAirMonth.year, weekend.progress(), this.airOptions.isDisabled(new Date(nextAirMonth.year, nextAirMonth.month, dateNo)), true));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectDate(index) {
        this.date = this.airDays[index].date;
        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.setMonth(this.month - 1);
        }
        else if (index > 20 && this.date < 8) {
            this.setMonth(this.month + 1);
        }
    }
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        /** @type {?} */
        const airMonth = new AirMonth(month, this.year);
        this.month = airMonth.month;
        this.year = airMonth.year;
        this.updateCalendar();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        this.year = year;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    getDaysInMonth(month) {
        /** @type {?} */
        const airMonth = new AirMonth(month, this.year);
        if (airMonth.month == 1 && ((airMonth.year % 4 == 0) && (airMonth.year % 100 != 0)) || (airMonth.year % 400 == 0)) {
            return 29;
        }
        return this.daysInMonth[airMonth.month];
    }
}
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
export class AirMonth {
    /**
     * @param {?} month
     * @param {?} year
     */
    constructor(month, year) {
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
}
if (false) {
    /** @type {?} */
    AirMonth.prototype.month;
    /** @type {?} */
    AirMonth.prototype.year;
}
export class AirDay {
    /**
     * @param {?} date
     * @param {?} month
     * @param {?} year
     * @param {?=} weekend
     * @param {?=} disabled
     * @param {?=} other
     * @param {?=} current
     */
    constructor(date, month, year, weekend = false, disabled = false, other = false, current = false) {
        this.date = date;
        this.month = month;
        this.year = year;
        this.weekend = weekend;
        this.disabled = disabled;
        this.other = other;
        this.current = current;
    }
}
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
export class AirWeekend {
    /**
     * @param {?=} day
     */
    constructor(day = 0) {
        this.day = day;
    }
    /**
     * @return {?}
     */
    progress() {
        /** @type {?} */
        let weekend = false;
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
    }
}
if (false) {
    /** @type {?} */
    AirWeekend.prototype.day;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1haXItZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV2QyxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFZdEIsWUFBYSxPQUFhLElBQUksSUFBSSxFQUFFLGFBQXlCLElBQUksVUFBVTtRQVgzRSxnQkFBVyxHQUFrQixDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7O2NBWXhFLFdBQVcsR0FBRyxJQUFJLElBQUk7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8s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O1FBQ3ZILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Q0FDRjs7O0lBakJDLHNCQUFhOztJQUNiLHVCQUFjOztJQUNkLHNCQUFhOztJQUNiLHlCQUFpQjs7SUFDakIsdUJBQWU7O0lBQ2YseUJBQWlCOztJQUNqQiwwQkFBa0I7O0FBYXBCLE1BQU0sT0FBTyxVQUFVOzs7O0lBR3JCLFlBQWEsTUFBYyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLE9BQU8sR0FBRyxLQUFLO1FBRW5CLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDWjthQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtTQUNsQzthQUFNO1lBQ0wsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ1o7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7OztJQXJCQyx5QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFpck9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgQWlyQ2FsZW5kYXIge1xuICBkYXlzSW5Nb250aDogQXJyYXk8bnVtYmVyPiA9IFsgMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSBdO1xuICBhaXJPcHRpb25zOiBBaXJPcHRpb25zO1xuICBhaXJEYXlzOiBBcnJheTxBaXJEYXk+O1xuICBjdXJyZW50TW9udGg6IG51bWJlcjtcbiAgY3VycmVudFllYXI6IG51bWJlcjtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xuICBkYXRlOiBudW1iZXI7XG4gIGhvdXI6IG51bWJlcjtcbiAgbWludXRlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IgKGRhdGU6IERhdGUgPSBuZXcgRGF0ZSwgYWlyT3B0aW9uczogQWlyT3B0aW9ucyA9IG5ldyBBaXJPcHRpb25zKSB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgdGhpcy5jdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5haXJPcHRpb25zID0gYWlyT3B0aW9ucztcbiAgICB0aGlzLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5tb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICB0aGlzLmhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgdGhpcy5taW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICB0aGlzLnVwZGF0ZUNhbGVuZGFyKCk7XG4gIH1cblxuICB1cGRhdGVDYWxlbmRhciAoKSB7XG4gICAgdGhpcy5haXJEYXlzID0gW107XG4gICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLmdldERheXNJbk1vbnRoKHRoaXMubW9udGgpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSAoKG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCwgMSkpLmdldERheSgpIHx8IDcpIC0gMTsgLy8gbWFraW5nIDAgPT0gbW9uZGF5XG4gICAgY29uc3Qgd2Vla2VuZCA9IG5ldyBBaXJXZWVrZW5kO1xuXG4gICAgaWYgKGZpcnN0RGF5T2ZNb250aC8qIGlzIG5vdCBtb25kYXkgKDApICovKSB7XG4gICAgICBjb25zdCBkYXlzSW5MYXN0TW9udGggPSB0aGlzLmdldERheXNJbk1vbnRoKHRoaXMubW9udGggLSAxKTtcbiAgICAgIGNvbnN0IHByZXZBaXJNb250aCA9IG5ldyBBaXJNb250aCh0aGlzLm1vbnRoIC0gMSwgdGhpcy55ZWFyKTtcbiAgICAgIGZvciAobGV0IGRhdGVObyA9IGRheXNJbkxhc3RNb250aCAtIGZpcnN0RGF5T2ZNb250aCArIDE7IGRhdGVObyA8PSBkYXlzSW5MYXN0TW9udGg7IGRhdGVObysrKSB7XG4gICAgICAgIHRoaXMuYWlyRGF5cy5wdXNoKFxuICAgICAgICAgIG5ldyBBaXJEYXkoZGF0ZU5vLCBwcmV2QWlyTW9udGgubW9udGgsIHByZXZBaXJNb250aC55ZWFyLCB3ZWVrZW5kLnByb2dyZXNzKCksIHRoaXMuYWlyT3B0aW9ucy5pc0Rpc2FibGVkKG5ldyBEYXRlKHByZXZBaXJNb250aC55ZWFyLCBwcmV2QWlyTW9udGgubW9udGgsIGRhdGVObykpLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGRhdGVObyA9IDE7IGRhdGVObyA8PSBkYXlzSW5Nb250aDsgZGF0ZU5vKyspIHtcbiAgICAgIHRoaXMuYWlyRGF5cy5wdXNoKG5ldyBBaXJEYXkoZGF0ZU5vLCB0aGlzLm1vbnRoLCB0aGlzLnllYXIsIHdlZWtlbmQucHJvZ3Jlc3MoKSwgdGhpcy5haXJPcHRpb25zLmlzRGlzYWJsZWQobmV3IERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCBkYXRlTm8pKSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGUgPiBkYXlzSW5Nb250aCkge1xuICAgICAgdGhpcy5kYXRlID0gZGF5c0luTW9udGg7IC8vIHNlbGVjdCB0aGUgbWF4aW11bSBhdmFpbGFibGUgdGhpcyBtb250aCBpbnN0ZWFkXG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBjdXJyZW50IGRhdGUgaWYgaXQncyB0aGUgY3VycmVudCBtb250aCAmIHllYXJcbiAgICBpZiAoZGF0ZS5nZXRNb250aCgpID09IHRoaXMubW9udGggJiYgZGF0ZS5nZXRGdWxsWWVhcigpID09IHRoaXMueWVhcikge1xuICAgICAgdGhpcy5haXJEYXlzW2ZpcnN0RGF5T2ZNb250aCArIGRhdGUuZ2V0RGF0ZSgpIC0gMV0uY3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5c1NvRmFyID0gZmlyc3REYXlPZk1vbnRoICsgZGF5c0luTW9udGg7XG4gICAgY29uc3QgbmV4dEFpck1vbnRoID0gbmV3IEFpck1vbnRoKHRoaXMubW9udGggKyAxLCB0aGlzLnllYXIpO1xuICAgIGZvciAobGV0IGRhdGVObyA9IDE7IGRhdGVObyA8PSAoZGF5c1NvRmFyID4gMzUgPyA0MiA6IDM1KSAtIGRheXNTb0ZhcjsgZGF0ZU5vKyspIHtcbiAgICAgIHRoaXMuYWlyRGF5cy5wdXNoKFxuICAgICAgICBuZXcgQWlyRGF5KGRhdGVObywgbmV4dEFpck1vbnRoLm1vbnRoLCBuZXh0QWlyTW9udGgueWVhciwgd2Vla2VuZC5wcm9ncmVzcygpLCB0aGlzLmFpck9wdGlvbnMuaXNEaXNhYmxlZChuZXcgRGF0ZShuZXh0QWlyTW9udGgueWVhciwgbmV4dEFpck1vbnRoLm1vbnRoLCBkYXRlTm8pKSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGF0ZSAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMuYWlyRGF5c1tpbmRleF0uZGF0ZTtcblxuICAgIC8vIG1pZ2h0IGJlIGEgZGF5IGZyb20gdGhlIHByZXZpb3VzL25leHQgbW9udGhcbiAgICBpZiAoaW5kZXggPCA3ICYmIHRoaXMuZGF0ZSA+IDIwKSB7XG4gICAgICB0aGlzLnNldE1vbnRoKHRoaXMubW9udGggLSAxKTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gMjAgJiYgdGhpcy5kYXRlIDwgOCkge1xuICAgICAgdGhpcy5zZXRNb250aCh0aGlzLm1vbnRoICsgMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TW9udGggKG1vbnRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBhaXJNb250aDogQWlyTW9udGggPSBuZXcgQWlyTW9udGgobW9udGgsIHRoaXMueWVhcik7XG4gICAgdGhpcy5tb250aCA9IGFpck1vbnRoLm1vbnRoO1xuICAgIHRoaXMueWVhciA9IGFpck1vbnRoLnllYXI7XG4gICAgdGhpcy51cGRhdGVDYWxlbmRhcigpO1xuICB9XG5cbiAgc2V0WWVhciAoeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgfVxuXG4gIGdldERheXNJbk1vbnRoIChtb250aDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWlyTW9udGg6IEFpck1vbnRoID0gbmV3IEFpck1vbnRoKG1vbnRoLCB0aGlzLnllYXIpO1xuICAgIGlmIChhaXJNb250aC5tb250aCA9PSAxICYmICgoYWlyTW9udGgueWVhciAlIDQgPT0gMCkgJiYgKGFpck1vbnRoLnllYXIgJSAxMDAgIT0gMCkpIHx8IChhaXJNb250aC55ZWFyICUgNDAwID09IDApKSB7XG4gICAgICByZXR1cm4gMjk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGhbYWlyTW9udGgubW9udGhdO1xuICB9XG59XG5cbi8vIG5vcm1hbGl6ZXMgbW9udGgveWVhclxuZXhwb3J0IGNsYXNzIEFpck1vbnRoIHtcbiAgbW9udGg6IG51bWJlcjtcbiAgeWVhcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yIChtb250aCwgeWVhcikge1xuICAgIGlmIChtb250aCA+IDExKSB7XG4gICAgICB5ZWFyKys7XG4gICAgICBtb250aCA9IDA7XG4gICAgfSBlbHNlIGlmIChtb250aCA8IDApIHtcbiAgICAgIHllYXItLTtcbiAgICAgIG1vbnRoID0gMTE7XG4gICAgfVxuXG4gICAgdGhpcy5tb250aCA9IG1vbnRoO1xuICAgIHRoaXMueWVhciA9IHllYXI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFpckRheSB7XG4gIGRhdGU6IG51bWJlcjtcbiAgbW9udGg6IG51bWJlcjtcbiAgeWVhcjogbnVtYmVyO1xuICB3ZWVrZW5kOiBib29sZWFuO1xuICBvdGhlcjogYm9vbGVhbjtcbiAgY3VycmVudDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IgKGRhdGU6IG51bWJlciwgbW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyLCB3ZWVrZW5kID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG90aGVyID0gZmFsc2UsIGN1cnJlbnQgPSBmYWxzZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5tb250aCA9IG1vbnRoO1xuICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgdGhpcy53ZWVrZW5kID0gd2Vla2VuZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5vdGhlciA9IG90aGVyO1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFpcldlZWtlbmQge1xuICBkYXk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvciAoZGF5OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy5kYXkgPSBkYXk7XG4gIH1cblxuICBwcm9ncmVzcyAoKTogYm9vbGVhbiB7XG4gICAgbGV0IHdlZWtlbmQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRheSA9PSA1IC8qIFNhdHVyZGF5ICovKSB7XG4gICAgICB3ZWVrZW5kID0gdHJ1ZTtcbiAgICAgICsrdGhpcy5kYXk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRheSA9PSA2IC8qIFN1bmRheSAqLykge1xuICAgICAgd2Vla2VuZCA9IHRydWU7XG4gICAgICB0aGlzLmRheSA9IDA7IC8vIGl0J3MgYSBuZXcgd2VlayFcbiAgICB9IGVsc2Uge1xuICAgICAgKyt0aGlzLmRheTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla2VuZDtcbiAgfVxufVxuIl19