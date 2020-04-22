import { EventEmitter, Component, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AirOptions {
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
function DateRange() { }
if (false) {
    /** @type {?} */
    DateRange.prototype.start;
    /** @type {?} */
    DateRange.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AirCalendar {
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
class AirMonth {
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
class AirDay {
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
class AirWeekend {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/languages.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AirLanguage {
    /**
     * @param {?} days
     * @param {?} daysMin
     * @param {?} months
     */
    constructor(days, daysMin, months) {
        this.days = days;
        this.daysMin = daysMin;
        this.months = months;
    }
}
if (false) {
    /** @type {?} */
    AirLanguage.prototype.days;
    /** @type {?} */
    AirLanguage.prototype.daysMin;
    /** @type {?} */
    AirLanguage.prototype.months;
}
/** @type {?} */
const AIR_LANGUAGES = new Map([
    (/** @type {?} */ (['cs', new AirLanguage(['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'], ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'], ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'])])),
    (/** @type {?} */ (['da', new AirLanguage(['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'], ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'], ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'])])),
    (/** @type {?} */ (['de', new AirLanguage(['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'], ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'])])),
    (/** @type {?} */ (['en', new AirLanguage(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])])),
    (/** @type {?} */ (['es', new AirLanguage(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'], ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'])])),
    (/** @type {?} */ (['fi', new AirLanguage(['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'], ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'], ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'])])),
    (/** @type {?} */ (['fr', new AirLanguage(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'], ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'], ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'])])),
    (/** @type {?} */ (['hu', new AirLanguage(['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'], ['H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V'], ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'])])),
    (/** @type {?} */ (['it', new AirLanguage(['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'], ['Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa', 'Do'], ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'])])),
    (/** @type {?} */ (['jp', new AirLanguage(['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'], ['月', '火', '水', '木', '金', '土', '日'], ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'])])),
    (/** @type {?} */ (['nl', new AirLanguage(['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'], ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'], ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'])])),
    (/** @type {?} */ (['pl', new AirLanguage(['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'], ['Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'], ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'])])),
    (/** @type {?} */ (['pt', new AirLanguage(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], ['Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa', 'Do'], ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'])])),
    (/** @type {?} */ (['ro', new AirLanguage(['Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'], ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa', 'Du'], ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'])])),
    (/** @type {?} */ (['ru', new AirLanguage(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'])])),
    (/** @type {?} */ (['sk', new AirLanguage(['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'], ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'], ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'])])),
    (/** @type {?} */ (['zh', new AirLanguage(['周一', '周二', '周三', '周四', '周五', '周六', '周日'], ['一', '二', '三', '四', '五', '六', '日'], ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'])])),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular2-air-datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular2AirDatepickerComponent {
    constructor() {
        this.airDateChange = new EventEmitter(); // for backward compatibility with v1
        // for backward compatibility with v1
        this.airChange = new EventEmitter(); // the proper event emitter to use when listening for changes to the main date
        // the proper event emitter to use when listening for changes to the main date
        this.airEndChange = new EventEmitter();
        this.airMonthSelect = new EventEmitter();
        this.airYearSelect = new EventEmitter();
        this.mode = 'datepicker';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.airOptions = new AirOptions(this.airOptions || (/** @type {?} */ ({})));
        this.airLanguage = AIR_LANGUAGES.get(this.airOptions.language);
        this.airCalendar = new AirCalendar(this.airDate, this.airOptions);
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    setDate(index) {
        if (this.airCalendar.airDays[index]) {
            if (this.airCalendar.airDays[index].disabled) {
                return;
            }
            this.airCalendar.selectDate(index);
        }
        /** @type {?} */
        const date = new Date(Date.UTC(this.airCalendar.year, this.airCalendar.month, this.airCalendar.date, this.airCalendar.hour, this.airCalendar.minute));
        if (AirOptions.sameDate(date, this.airDate)) {
            this.airDate = this.airOptions.range && this.airEndDate ? this.airEndDate : null;
            this.airEndDate = null;
        }
        else if (AirOptions.sameDate(date, this.airEndDate)) {
            this.airEndDate = null;
        }
        else if (!this.airOptions.isDisabled(date)) {
            // Note: Need intermediate components to take over this flow when/if we get to multiple dates
            // (i.e. a component for each type of date selection: single, range, multi, etc.); lest it get out of hand...
            if (!this.airOptions.range || (!this.airDate && !this.airEndDate)) {
                this.airDate = date;
            }
            else {
                if (this.airDate) {
                    if (date < this.airDate) {
                        this.airEndDate = this.airDate;
                        this.airDate = date;
                    }
                    else {
                        if (this.airEndDate) {
                            this.airEndDate = null;
                            this.airDate = date;
                        }
                        else {
                            this.airEndDate = date;
                        }
                    }
                }
                else /* airEndDate is truthy */ {
                    if (this.airEndDate < date) {
                        this.airDate = this.airEndDate;
                        this.airEndDate = date;
                    }
                    else {
                        this.airDate = date;
                        this.airEndDate = null;
                    }
                }
            }
        }
        this.airDateChange.emit(this.airDate); // for backward compatibility with v1
        this.airChange.emit(this.airDate);
        if (this.airOptions.range) {
            this.airEndChange.emit(this.airEndDate);
        }
    }
}
Angular2AirDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'air-datepicker',
                template: `
    <div class="datepicker-inline">
      <ng-container [ngSwitch]="mode">
        <div *ngSwitchCase="'datepicker'"
             datepicker
             [airDate]="airDate"
             [airEndDate]="airEndDate"
             [airOptions]="airOptions"
             [airCalendar]="airCalendar"
             [airLanguage]="airLanguage"
             (setDate)="setDate($event)"
             (setMonth)="airCalendar.setMonth($event); airMonthSelect.emit($event);"
             (monthSelection)="mode = 'monthpicker'"
             class="datepicker"></div>

        <div *ngSwitchCase="'monthpicker'"
             monthpicker
             [airCalendar]="airCalendar"
             [airLanguage]="airLanguage"
             (setMonth)="airCalendar.setMonth($event); airMonthSelect.emit($event); mode = 'datepicker';"
             (setYear)="airCalendar.setYear($event); airYearSelect.emit($event);"
             (yearSelection)="mode = 'yearpicker'"
             class="datepicker"></div>

        <div *ngSwitchCase="'yearpicker'"
             yearpicker
             [airCalendar]="airCalendar"
             (setYear)="airCalendar.setYear($event); airYearSelect.emit($event); mode = 'monthpicker';"
             class="datepicker"></div>
      </ng-container>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".datepicker--cells{display:-webkit-box;display:flex;flex-wrap:wrap}.datepicker--cell{border-radius:4px;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:32px;z-index:1}.datepicker--cell.-focus-,.datepicker--cell:hover{background:#f0f0f0}.datepicker--cell.-current-{color:#4eb5e6}.datepicker--cell.-current-.-focus-{color:#4a4a4a}.datepicker--cell.-current-.-in-range-{color:#4eb5e6}.datepicker--cell.-in-range-{background:rgba(92,196,239,.1);color:#4a4a4a;border-radius:0}.datepicker--cell.-in-range-.-focus-{background-color:rgba(92,196,239,.2)}.datepicker--cell.-disabled-{cursor:default;color:#aeaeae}.datepicker--cell.-disabled-.-focus-{color:#aeaeae}.datepicker--cell.-disabled-.-in-range-{color:#a1a1a1}.datepicker--cell.-disabled-.-current-.-focus-{color:#aeaeae}.datepicker--cell.-range-from-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:4px 0 0 4px}.datepicker--cell.-range-to-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:0 4px 4px 0}.datepicker--cell.-range-from-.-range-to-{border-radius:4px}.datepicker--cell.-selected-{color:#fff;border:none;background:#5cc4ef}.datepicker--cell.-selected-.-current-{color:#fff;background:#5cc4ef}.datepicker--cell.-selected-.-focus-{background:#45bced}.datepicker--cell:empty{cursor:default}.datepicker--days-names{display:-webkit-box;display:flex;flex-wrap:wrap;margin:8px 0 3px}.datepicker--day-name{color:#ff9a19;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.datepicker--cell-day{width:14.28571%}.datepicker--cells-months{height:170px}.datepicker--cell-month{width:33.33%;height:25%}.datepicker--cells-years,.datepicker--years{height:170px}.datepicker--cell-year{width:25%;height:33.33%}.datepickers-container{position:absolute;left:0;top:0}@media print{.datepickers-container{display:none}}.datepicker{background:#fff;border:1px solid #dbdbdb;box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:4px;box-sizing:content-box;font-family:Tahoma,sans-serif;font-size:14px;color:#4a4a4a;width:250px;position:absolute;left:-100000px;opacity:0;transition:opacity .3s,transform .3s,left .3s,-webkit-transform .3s;-webkit-transition:opacity .3s,left .3s,-webkit-transform .3s;z-index:100}.datepicker.-from-top-{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.datepicker.-from-right-{-webkit-transform:translateX(8px);transform:translateX(8px)}.datepicker.-from-bottom-{-webkit-transform:translateY(8px);transform:translateY(8px)}.datepicker.-from-left-{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.datepicker.active{opacity:1;-webkit-transform:translate(0);transform:translate(0);transition:opacity .3s,transform .3s,left,-webkit-transform .3s;-webkit-transition:opacity .3s,left,-webkit-transform .3s}.datepicker-inline .datepicker{border-color:#d7d7d7;box-shadow:none;position:static;left:auto;right:auto;opacity:1;-webkit-transform:none;transform:none}.datepicker-inline .datepicker--pointer{display:none}.datepicker--content{box-sizing:content-box;padding:4px}.-only-timepicker- .datepicker--content{display:none}.datepicker--pointer{position:absolute;background:#fff;border-top:1px solid #dbdbdb;border-right:1px solid #dbdbdb;width:10px;height:10px;z-index:-1}.-top-center- .datepicker--pointer,.-top-left- .datepicker--pointer,.-top-right- .datepicker--pointer{top:calc(100% - 4px);-webkit-transform:rotate(135deg);transform:rotate(135deg)}.-right-bottom- .datepicker--pointer,.-right-center- .datepicker--pointer,.-right-top- .datepicker--pointer{right:calc(100% - 4px);-webkit-transform:rotate(225deg);transform:rotate(225deg)}.-bottom-center- .datepicker--pointer,.-bottom-left- .datepicker--pointer,.-bottom-right- .datepicker--pointer{bottom:calc(100% - 4px);-webkit-transform:rotate(315deg);transform:rotate(315deg)}.-left-bottom- .datepicker--pointer,.-left-center- .datepicker--pointer,.-left-top- .datepicker--pointer{left:calc(100% - 4px);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.-bottom-left- .datepicker--pointer,.-top-left- .datepicker--pointer{left:10px}.-bottom-right- .datepicker--pointer,.-top-right- .datepicker--pointer{right:10px}.-bottom-center- .datepicker--pointer,.-top-center- .datepicker--pointer{left:calc(50% - 10px / 2)}.-left-top- .datepicker--pointer,.-right-top- .datepicker--pointer{top:10px}.-left-bottom- .datepicker--pointer,.-right-bottom- .datepicker--pointer{bottom:10px}.-left-center- .datepicker--pointer,.-right-center- .datepicker--pointer{top:calc(50% - 10px / 2)}.datepicker--body{display:none}.datepicker--body.active{display:block}.datepicker--nav{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;border-bottom:1px solid #efefef;min-height:32px;padding:4px}.-only-timepicker- .datepicker--nav{display:none}.datepicker--nav-action,.datepicker--nav-title{display:-webkit-box;display:flex;cursor:pointer;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.datepicker--nav-action{width:32px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker--nav-action:hover{background:#f0f0f0}.datepicker--nav-action.-disabled-{visibility:hidden}.datepicker--nav-action svg{width:32px;height:32px}.datepicker--nav-action path{fill:none;stroke:#9c9c9c;stroke-width:2px}.datepicker--nav-title{border-radius:4px;padding:0 8px}.datepicker--nav-title i{font-style:normal;color:#9c9c9c;margin-left:5px}.datepicker--nav-title:hover{background:#f0f0f0}.datepicker--nav-title.-disabled-{cursor:default;background:0 0}.datepicker--buttons{display:-webkit-box;display:flex;padding:4px;border-top:1px solid #efefef}.datepicker--button{color:#4eb5e6;cursor:pointer;border-radius:4px;-webkit-box-flex:1;flex:1;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:32px}.datepicker--button:hover{color:#4a4a4a;background:#f0f0f0}.datepicker--time{border-top:1px solid #efefef;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:4px;position:relative}.datepicker--time.-am-pm- .datepicker--time-sliders{-webkit-box-flex:0;flex:0 1 138px;max-width:138px}.-only-timepicker- .datepicker--time{border-top:none}.datepicker--time-sliders{-webkit-box-flex:0;flex:0 1 153px;margin-right:10px;max-width:153px}.datepicker--time-label{display:none;font-size:12px}.datepicker--time-current{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1;font-size:14px;text-align:center;margin:0 0 0 10px}.datepicker--time-current-colon{margin:0 2px 3px;line-height:1}.datepicker--time-current-hours,.datepicker--time-current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.datepicker--time-current-hours:after,.datepicker--time-current-minutes:after{content:\"\";background:#f0f0f0;border-radius:4px;position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.datepicker--time-current-hours.-focus-:after,.datepicker--time-current-minutes.-focus-:after{opacity:1}.datepicker--time-current-ampm{text-transform:uppercase;-webkit-align-self:flex-end;align-self:flex-end;color:#9c9c9c;margin-left:6px;font-size:11px;margin-bottom:1px}.datepicker--time-row{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:11px;height:17px;background:-webkit-gradient(linear,left top,right top,from(#dedede),to(#dedede)) left 50%/100% 1px no-repeat;background:linear-gradient(to right,#dedede,#dedede) left 50%/100% 1px no-repeat}.datepicker--time-row:first-child{margin-bottom:4px}.datepicker--time-row input[type=range]{background:0 0;cursor:pointer;-webkit-box-flex:1;flex:1;height:100%;max-width:100%;padding:0;margin:0;-webkit-appearance:none}.datepicker--time-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s;margin-top:-6px}.datepicker--time-row input[type=range]::-ms-tooltip{display:none}.datepicker--time-row input[type=range]:hover::-webkit-slider-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-moz-range-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-ms-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:focus{outline:0}.datepicker--time-row input[type=range]:focus::-webkit-slider-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-moz-range-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-ms-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s}.datepicker--time-row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s}.datepicker--time-row input[type=range]::-webkit-slider-runnable-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-moz-range-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-fill-lower{background:0 0}.datepicker--time-row input[type=range]::-ms-fill-upper{background:0 0}.datepicker--time-row span{padding:0 12px}.datepicker--time-icon{color:#9c9c9c;border:1px solid;border-radius:50%;font-size:16px;position:relative;margin:0 5px -1px 0;width:1em;height:1em}.datepicker--time-icon:after,.datepicker--time-icon:before{content:\"\";background:currentColor;position:absolute}.datepicker--time-icon:after{height:.4em;width:1px;left:calc(50% - 1px);top:calc(50% + 1px);-webkit-transform:translateY(-100%);transform:translateY(-100%)}.datepicker--time-icon:before{width:.4em;height:1px;top:calc(50% + 1px);left:calc(50% - 1px)}.datepicker--cell-day.-other-month-,.datepicker--cell-year.-other-decade-{color:#dedede}.datepicker--cell-day.-other-month-:hover,.datepicker--cell-year.-other-decade-:hover{color:#c5c5c5}.-disabled-.-focus-.datepicker--cell-day.-other-month-,.-disabled-.-focus-.datepicker--cell-year.-other-decade-{color:#dedede}.-selected-.datepicker--cell-day.-other-month-,.-selected-.datepicker--cell-year.-other-decade-{color:#fff;background:#a2ddf6}.-selected-.-focus-.datepicker--cell-day.-other-month-,.-selected-.-focus-.datepicker--cell-year.-other-decade-{background:#8ad5f4}.-in-range-.datepicker--cell-day.-other-month-,.-in-range-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.1);color:#ccc}.-in-range-.-focus-.datepicker--cell-day.-other-month-,.-in-range-.-focus-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.2)}.datepicker--cell-day.-other-month-:empty,.datepicker--cell-year.-other-decade-:empty{background:0 0;border:none}"]
            }] }
];
Angular2AirDatepickerComponent.propDecorators = {
    airOptions: [{ type: Input }],
    airDate: [{ type: Input }],
    airEndDate: [{ type: Input }],
    airDateChange: [{ type: Output }],
    airChange: [{ type: Output }],
    airEndChange: [{ type: Output }],
    airMonthSelect: [{ type: Output }],
    airYearSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airOptions;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airDate;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airEndDate;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airDateChange;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airChange;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airEndChange;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airMonthSelect;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airYearSelect;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airLanguage;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.airCalendar;
    /** @type {?} */
    Angular2AirDatepickerComponent.prototype.mode;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/datepicker/datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatepickerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/timepicker/timepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/monthpicker/monthpicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthpickerComponent {
    constructor() {
        this.setMonth = new EventEmitter();
        this.setYear = new EventEmitter();
        this.yearSelection = new EventEmitter();
    }
}
MonthpickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[monthpicker]',
                template: `
    <nav class="datepicker--nav">
      <div class="datepicker--nav-action" (click)="setYear.emit(airCalendar.year - 1)"><svg><path d="M 17,12 l -5,5 l 5,5"></path></svg></div>

      <div (click)="yearSelection.emit()" class="datepicker--nav-title">{{airCalendar.year}}</div>

      <div class="datepicker--nav-action" (click)="setYear.emit(airCalendar.year + 1)"><svg><path d="M 14,12 l 5,5 l -5,5"></path></svg></div>
    </nav>

    <div class="datepicker--content">
      <div class="datepicker--months datepicker--body active">
        <div class="datepicker--cells datepicker--cells-months">
          <div *ngFor="let month of airLanguage.months; let i=index"
               (click)="setMonth.emit(i)"
               class="datepicker--cell datepicker--cell-month"
               [ngClass]="{ '-current-': airCalendar.year == airCalendar.currentYear && i == airCalendar.currentMonth }">{{month}}</div>
        </div>
      </div>
    </div>
  `
            }] }
];
MonthpickerComponent.propDecorators = {
    airCalendar: [{ type: Input }],
    airLanguage: [{ type: Input }],
    setMonth: [{ type: Output }],
    setYear: [{ type: Output }],
    yearSelection: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MonthpickerComponent.prototype.airCalendar;
    /** @type {?} */
    MonthpickerComponent.prototype.airLanguage;
    /** @type {?} */
    MonthpickerComponent.prototype.setMonth;
    /** @type {?} */
    MonthpickerComponent.prototype.setYear;
    /** @type {?} */
    MonthpickerComponent.prototype.yearSelection;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/yearpicker/yearpicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YearpickerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    DatepickerComponent,
    TimepickerComponent,
    MonthpickerComponent,
    YearpickerComponent
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular2-air-datepicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular2AirDatepickerModule {
}
Angular2AirDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    Angular2AirDatepickerComponent,
                    components
                ],
                exports: [
                    Angular2AirDatepickerComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular2-air-datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AIR_LANGUAGES, AirCalendar, AirDay, AirLanguage, AirMonth, AirOptions, AirWeekend, Angular2AirDatepickerComponent, Angular2AirDatepickerModule, components as ɵa, DatepickerComponent as ɵb, TimepickerComponent as ɵc, MonthpickerComponent as ɵd, YearpickerComponent as ɵe };
//# sourceMappingURL=angular2-air-datepicker.js.map
