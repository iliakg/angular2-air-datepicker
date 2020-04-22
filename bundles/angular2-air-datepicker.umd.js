(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular2-air-datepicker', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['angular2-air-datepicker'] = {}, global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (exports, core, common, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/classes/options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                for (var _b = __values(this.enabledDateRanges), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    if (false) {
        /** @type {?} */
        AirWeekend.prototype.day;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/classes/languages.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AirLanguage = /** @class */ (function () {
        function AirLanguage(days, daysMin, months) {
            this.days = days;
            this.daysMin = daysMin;
            this.months = months;
        }
        return AirLanguage;
    }());
    if (false) {
        /** @type {?} */
        AirLanguage.prototype.days;
        /** @type {?} */
        AirLanguage.prototype.daysMin;
        /** @type {?} */
        AirLanguage.prototype.months;
    }
    /** @type {?} */
    var AIR_LANGUAGES = new Map([
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
    var Angular2AirDatepickerComponent = /** @class */ (function () {
        function Angular2AirDatepickerComponent() {
            this.airDateChange = new core.EventEmitter(); // for backward compatibility with v1
            // for backward compatibility with v1
            this.airChange = new core.EventEmitter(); // the proper event emitter to use when listening for changes to the main date
            // the proper event emitter to use when listening for changes to the main date
            this.airEndChange = new core.EventEmitter();
            this.airMonthSelect = new core.EventEmitter();
            this.airYearSelect = new core.EventEmitter();
            this.mode = 'datepicker';
        }
        /**
         * @return {?}
         */
        Angular2AirDatepickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.airOptions = new AirOptions(this.airOptions || (/** @type {?} */ ({})));
            this.airLanguage = AIR_LANGUAGES.get(this.airOptions.language);
            this.airCalendar = new AirCalendar(this.airDate, this.airOptions);
        };
        /**
         * @param {?=} index
         * @return {?}
         */
        Angular2AirDatepickerComponent.prototype.setDate = /**
         * @param {?=} index
         * @return {?}
         */
        function (index) {
            if (this.airCalendar.airDays[index]) {
                if (this.airCalendar.airDays[index].disabled) {
                    return;
                }
                this.airCalendar.selectDate(index);
            }
            /** @type {?} */
            var date = new Date(Date.UTC(this.airCalendar.year, this.airCalendar.month, this.airCalendar.date, this.airCalendar.hour, this.airCalendar.minute));
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
        };
        Angular2AirDatepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'air-datepicker',
                        template: "\n    <div class=\"datepicker-inline\">\n      <ng-container [ngSwitch]=\"mode\">\n        <div *ngSwitchCase=\"'datepicker'\"\n             datepicker\n             [airDate]=\"airDate\"\n             [airEndDate]=\"airEndDate\"\n             [airOptions]=\"airOptions\"\n             [airCalendar]=\"airCalendar\"\n             [airLanguage]=\"airLanguage\"\n             (setDate)=\"setDate($event)\"\n             (setMonth)=\"airCalendar.setMonth($event); airMonthSelect.emit($event);\"\n             (monthSelection)=\"mode = 'monthpicker'\"\n             class=\"datepicker\"></div>\n\n        <div *ngSwitchCase=\"'monthpicker'\"\n             monthpicker\n             [airCalendar]=\"airCalendar\"\n             [airLanguage]=\"airLanguage\"\n             (setMonth)=\"airCalendar.setMonth($event); airMonthSelect.emit($event); mode = 'datepicker';\"\n             (setYear)=\"airCalendar.setYear($event); airYearSelect.emit($event);\"\n             (yearSelection)=\"mode = 'yearpicker'\"\n             class=\"datepicker\"></div>\n\n        <div *ngSwitchCase=\"'yearpicker'\"\n             yearpicker\n             [airCalendar]=\"airCalendar\"\n             (setYear)=\"airCalendar.setYear($event); airYearSelect.emit($event); mode = 'monthpicker';\"\n             class=\"datepicker\"></div>\n      </ng-container>\n    </div>\n  ",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".datepicker--cells{display:-webkit-box;display:flex;flex-wrap:wrap}.datepicker--cell{border-radius:4px;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:32px;z-index:1}.datepicker--cell.-focus-,.datepicker--cell:hover{background:#f0f0f0}.datepicker--cell.-current-{color:#4eb5e6}.datepicker--cell.-current-.-focus-{color:#4a4a4a}.datepicker--cell.-current-.-in-range-{color:#4eb5e6}.datepicker--cell.-in-range-{background:rgba(92,196,239,.1);color:#4a4a4a;border-radius:0}.datepicker--cell.-in-range-.-focus-{background-color:rgba(92,196,239,.2)}.datepicker--cell.-disabled-{cursor:default;color:#aeaeae}.datepicker--cell.-disabled-.-focus-{color:#aeaeae}.datepicker--cell.-disabled-.-in-range-{color:#a1a1a1}.datepicker--cell.-disabled-.-current-.-focus-{color:#aeaeae}.datepicker--cell.-range-from-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:4px 0 0 4px}.datepicker--cell.-range-to-{border:1px solid rgba(92,196,239,.5);background-color:rgba(92,196,239,.1);border-radius:0 4px 4px 0}.datepicker--cell.-range-from-.-range-to-{border-radius:4px}.datepicker--cell.-selected-{color:#fff;border:none;background:#5cc4ef}.datepicker--cell.-selected-.-current-{color:#fff;background:#5cc4ef}.datepicker--cell.-selected-.-focus-{background:#45bced}.datepicker--cell:empty{cursor:default}.datepicker--days-names{display:-webkit-box;display:flex;flex-wrap:wrap;margin:8px 0 3px}.datepicker--day-name{color:#ff9a19;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.datepicker--cell-day{width:14.28571%}.datepicker--cells-months{height:170px}.datepicker--cell-month{width:33.33%;height:25%}.datepicker--cells-years,.datepicker--years{height:170px}.datepicker--cell-year{width:25%;height:33.33%}.datepickers-container{position:absolute;left:0;top:0}@media print{.datepickers-container{display:none}}.datepicker{background:#fff;border:1px solid #dbdbdb;box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:4px;box-sizing:content-box;font-family:Tahoma,sans-serif;font-size:14px;color:#4a4a4a;width:250px;position:absolute;left:-100000px;opacity:0;transition:opacity .3s,transform .3s,left .3s,-webkit-transform .3s;-webkit-transition:opacity .3s,left .3s,-webkit-transform .3s;z-index:100}.datepicker.-from-top-{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.datepicker.-from-right-{-webkit-transform:translateX(8px);transform:translateX(8px)}.datepicker.-from-bottom-{-webkit-transform:translateY(8px);transform:translateY(8px)}.datepicker.-from-left-{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.datepicker.active{opacity:1;-webkit-transform:translate(0);transform:translate(0);transition:opacity .3s,transform .3s,left,-webkit-transform .3s;-webkit-transition:opacity .3s,left,-webkit-transform .3s}.datepicker-inline .datepicker{border-color:#d7d7d7;box-shadow:none;position:static;left:auto;right:auto;opacity:1;-webkit-transform:none;transform:none}.datepicker-inline .datepicker--pointer{display:none}.datepicker--content{box-sizing:content-box;padding:4px}.-only-timepicker- .datepicker--content{display:none}.datepicker--pointer{position:absolute;background:#fff;border-top:1px solid #dbdbdb;border-right:1px solid #dbdbdb;width:10px;height:10px;z-index:-1}.-top-center- .datepicker--pointer,.-top-left- .datepicker--pointer,.-top-right- .datepicker--pointer{top:calc(100% - 4px);-webkit-transform:rotate(135deg);transform:rotate(135deg)}.-right-bottom- .datepicker--pointer,.-right-center- .datepicker--pointer,.-right-top- .datepicker--pointer{right:calc(100% - 4px);-webkit-transform:rotate(225deg);transform:rotate(225deg)}.-bottom-center- .datepicker--pointer,.-bottom-left- .datepicker--pointer,.-bottom-right- .datepicker--pointer{bottom:calc(100% - 4px);-webkit-transform:rotate(315deg);transform:rotate(315deg)}.-left-bottom- .datepicker--pointer,.-left-center- .datepicker--pointer,.-left-top- .datepicker--pointer{left:calc(100% - 4px);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.-bottom-left- .datepicker--pointer,.-top-left- .datepicker--pointer{left:10px}.-bottom-right- .datepicker--pointer,.-top-right- .datepicker--pointer{right:10px}.-bottom-center- .datepicker--pointer,.-top-center- .datepicker--pointer{left:calc(50% - 10px / 2)}.-left-top- .datepicker--pointer,.-right-top- .datepicker--pointer{top:10px}.-left-bottom- .datepicker--pointer,.-right-bottom- .datepicker--pointer{bottom:10px}.-left-center- .datepicker--pointer,.-right-center- .datepicker--pointer{top:calc(50% - 10px / 2)}.datepicker--body{display:none}.datepicker--body.active{display:block}.datepicker--nav{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;border-bottom:1px solid #efefef;min-height:32px;padding:4px}.-only-timepicker- .datepicker--nav{display:none}.datepicker--nav-action,.datepicker--nav-title{display:-webkit-box;display:flex;cursor:pointer;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.datepicker--nav-action{width:32px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker--nav-action:hover{background:#f0f0f0}.datepicker--nav-action.-disabled-{visibility:hidden}.datepicker--nav-action svg{width:32px;height:32px}.datepicker--nav-action path{fill:none;stroke:#9c9c9c;stroke-width:2px}.datepicker--nav-title{border-radius:4px;padding:0 8px}.datepicker--nav-title i{font-style:normal;color:#9c9c9c;margin-left:5px}.datepicker--nav-title:hover{background:#f0f0f0}.datepicker--nav-title.-disabled-{cursor:default;background:0 0}.datepicker--buttons{display:-webkit-box;display:flex;padding:4px;border-top:1px solid #efefef}.datepicker--button{color:#4eb5e6;cursor:pointer;border-radius:4px;-webkit-box-flex:1;flex:1;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:32px}.datepicker--button:hover{color:#4a4a4a;background:#f0f0f0}.datepicker--time{border-top:1px solid #efefef;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:4px;position:relative}.datepicker--time.-am-pm- .datepicker--time-sliders{-webkit-box-flex:0;flex:0 1 138px;max-width:138px}.-only-timepicker- .datepicker--time{border-top:none}.datepicker--time-sliders{-webkit-box-flex:0;flex:0 1 153px;margin-right:10px;max-width:153px}.datepicker--time-label{display:none;font-size:12px}.datepicker--time-current{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1;font-size:14px;text-align:center;margin:0 0 0 10px}.datepicker--time-current-colon{margin:0 2px 3px;line-height:1}.datepicker--time-current-hours,.datepicker--time-current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.datepicker--time-current-hours:after,.datepicker--time-current-minutes:after{content:\"\";background:#f0f0f0;border-radius:4px;position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.datepicker--time-current-hours.-focus-:after,.datepicker--time-current-minutes.-focus-:after{opacity:1}.datepicker--time-current-ampm{text-transform:uppercase;-webkit-align-self:flex-end;align-self:flex-end;color:#9c9c9c;margin-left:6px;font-size:11px;margin-bottom:1px}.datepicker--time-row{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:11px;height:17px;background:-webkit-gradient(linear,left top,right top,from(#dedede),to(#dedede)) left 50%/100% 1px no-repeat;background:linear-gradient(to right,#dedede,#dedede) left 50%/100% 1px no-repeat}.datepicker--time-row:first-child{margin-bottom:4px}.datepicker--time-row input[type=range]{background:0 0;cursor:pointer;-webkit-box-flex:1;flex:1;height:100%;max-width:100%;padding:0;margin:0;-webkit-appearance:none}.datepicker--time-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s;margin-top:-6px}.datepicker--time-row input[type=range]::-ms-tooltip{display:none}.datepicker--time-row input[type=range]:hover::-webkit-slider-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-moz-range-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:hover::-ms-thumb{border-color:#b8b8b8}.datepicker--time-row input[type=range]:focus{outline:0}.datepicker--time-row input[type=range]:focus::-webkit-slider-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-moz-range-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]:focus::-ms-thumb{background:#5cc4ef;border-color:#5cc4ef}.datepicker--time-row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s}.datepicker--time-row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid #dedede;background:#fff;cursor:pointer;-webkit-transition:background .2s;transition:background .2s}.datepicker--time-row input[type=range]::-webkit-slider-runnable-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-moz-range-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-track{border:none;height:1px;cursor:pointer;color:transparent;background:0 0}.datepicker--time-row input[type=range]::-ms-fill-lower{background:0 0}.datepicker--time-row input[type=range]::-ms-fill-upper{background:0 0}.datepicker--time-row span{padding:0 12px}.datepicker--time-icon{color:#9c9c9c;border:1px solid;border-radius:50%;font-size:16px;position:relative;margin:0 5px -1px 0;width:1em;height:1em}.datepicker--time-icon:after,.datepicker--time-icon:before{content:\"\";background:currentColor;position:absolute}.datepicker--time-icon:after{height:.4em;width:1px;left:calc(50% - 1px);top:calc(50% + 1px);-webkit-transform:translateY(-100%);transform:translateY(-100%)}.datepicker--time-icon:before{width:.4em;height:1px;top:calc(50% + 1px);left:calc(50% - 1px)}.datepicker--cell-day.-other-month-,.datepicker--cell-year.-other-decade-{color:#dedede}.datepicker--cell-day.-other-month-:hover,.datepicker--cell-year.-other-decade-:hover{color:#c5c5c5}.-disabled-.-focus-.datepicker--cell-day.-other-month-,.-disabled-.-focus-.datepicker--cell-year.-other-decade-{color:#dedede}.-selected-.datepicker--cell-day.-other-month-,.-selected-.datepicker--cell-year.-other-decade-{color:#fff;background:#a2ddf6}.-selected-.-focus-.datepicker--cell-day.-other-month-,.-selected-.-focus-.datepicker--cell-year.-other-decade-{background:#8ad5f4}.-in-range-.datepicker--cell-day.-other-month-,.-in-range-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.1);color:#ccc}.-in-range-.-focus-.datepicker--cell-day.-other-month-,.-in-range-.-focus-.datepicker--cell-year.-other-decade-{background-color:rgba(92,196,239,.2)}.datepicker--cell-day.-other-month-:empty,.datepicker--cell-year.-other-decade-:empty{background:0 0;border:none}"]
                    }] }
        ];
        Angular2AirDatepickerComponent.propDecorators = {
            airOptions: [{ type: core.Input }],
            airDate: [{ type: core.Input }],
            airEndDate: [{ type: core.Input }],
            airDateChange: [{ type: core.Output }],
            airChange: [{ type: core.Output }],
            airEndChange: [{ type: core.Output }],
            airMonthSelect: [{ type: core.Output }],
            airYearSelect: [{ type: core.Output }]
        };
        return Angular2AirDatepickerComponent;
    }());
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
    var DatepickerComponent = /** @class */ (function () {
        function DatepickerComponent() {
            this.setDate = new core.EventEmitter();
            this.setMonth = new core.EventEmitter();
            this.monthSelection = new core.EventEmitter();
        }
        /**
         * @param {?} day
         * @return {?}
         */
        DatepickerComponent.prototype.isInRange = /**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            if (this.airDate && this.airEndDate) {
                return this.airDate < new Date(Date.UTC(day.year, day.month, day.date)) &&
                    new Date(Date.UTC(day.year, day.month, day.date, 23, 59, 59)) < this.airEndDate;
            }
            if (this.airDateSim && this.airEndDateSim) {
                return this.airDateSim < new Date(Date.UTC(day.year, day.month, day.date)) &&
                    new Date(Date.UTC(day.year, day.month, day.date, 23, 59, 59)) < this.airEndDateSim;
            }
            return false;
        };
        /**
         * @param {?} date
         * @param {?} day
         * @return {?}
         */
        DatepickerComponent.prototype.isCalendarDate = /**
         * @param {?} date
         * @param {?} day
         * @return {?}
         */
        function (date, day) {
            return date ? date.getUTCFullYear() == day.year && date.getUTCMonth() == day.month && date.getUTCDate() == day.date : false;
        };
        /**
         * @param {?} day
         * @return {?}
         */
        DatepickerComponent.prototype.simulate = /**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            /** @type {?} */
            var date = new Date(Date.UTC(day.year, day.month, day.date, 0, 0));
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
        };
        /**
         * @return {?}
         */
        DatepickerComponent.prototype.resetSim = /**
         * @return {?}
         */
        function () {
            this.airDateSim = null;
            this.airEndDateSim = null;
        };
        DatepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[datepicker]',
                        template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"setMonth.emit(airCalendar.month - 1)\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div (click)=\"monthSelection.emit()\" class=\"datepicker--nav-title\">{{airLanguage.months[airCalendar.month]}}, <i>{{airCalendar.year}}</i></div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"setMonth.emit(airCalendar.month + 1)\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--days datepicker--body active\">\n        <div class=\"datepicker--days-names\">\n          <div *ngFor=\"let day of [0,1,2,3,4,5,6]\" class=\"datepicker--day-name\" [class.-weekend-]=\"day == 5 || day == 6\"\n          >{{airLanguage[airOptions.fullDays ? 'days' : 'daysMin'][day]}}</div>\n        </div>\n\n        <div class=\"datepicker--cells datepicker--cells-days\">\n          <div *ngFor=\"let airDay of airCalendar.airDays; let i=index\"\n               class=\"datepicker--cell datepicker--cell-day\"\n               [ngClass]=\"{ '-weekend-': airDay.weekend,\n                            '-other-month-': airDay.other,\n                            '-current-': airDay.current,\n                            '-disabled-': airDay.disabled,\n                            '-selected-': !airDay.disabled && (isCalendarDate(airDate, airDay) || isCalendarDate(airEndDate, airDay) || isCalendarDate(airDateSim, airDay) || isCalendarDate(airEndDateSim, airDay)),\n                            '-in-range-': airOptions.range && !airDay.disabled && isInRange(airDay),\n                            '-range-from-': airOptions.range && !airDay.disabled && ((!airDateSim && isCalendarDate(airDate, airDay)) || isCalendarDate(airDateSim, airDay)),\n                            '-range-to-': airOptions.range && !airDay.disabled && (isCalendarDate(airEndDate, airDay) || isCalendarDate(airEndDateSim, airDay)) }\"\n               (click)=\"setDate.emit(i)\"\n               (mouseenter)=\"airOptions.range ? simulate(airDay) : ''\"\n               (mouseleave)=\"airOptions.range ? resetSim() : ''\">{{airDay.date}}</div>\n        </div>\n      </div>\n\n      <div *ngIf=\"airOptions.timepicker\"\n           timepicker\n           [airOptions]=\"airOptions\" [airCalendar]=\"airCalendar\" (setDate)=\"setDate.emit(null)\" class=\"datepicker--time -am-pm-\"></div>\n    </div>\n  "
                    }] }
        ];
        DatepickerComponent.propDecorators = {
            airDate: [{ type: core.Input }],
            airEndDate: [{ type: core.Input }],
            airOptions: [{ type: core.Input }],
            airCalendar: [{ type: core.Input }],
            airLanguage: [{ type: core.Input }],
            setDate: [{ type: core.Output }],
            setMonth: [{ type: core.Output }],
            monthSelection: [{ type: core.Output }]
        };
        return DatepickerComponent;
    }());
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
    var TimepickerComponent = /** @class */ (function () {
        function TimepickerComponent() {
            this.setDate = new core.EventEmitter();
        }
        TimepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[timepicker]',
                        template: "\n    <div class=\"datepicker--time-current\">\n            <span class=\"datepicker--time-current-hours\"\n            >{{('0' + (!airOptions.format12h ? airCalendar.hour : (airCalendar.hour <= 12 ? airCalendar.hour : airCalendar.hour - 12))).slice(-2)}}</span>\n      <span class=\"datepicker--time-current-colon\">:</span>\n      <span class=\"datepicker--time-current-minutes\">{{('0' + airCalendar.minute).slice(-2)}}</span>\n      <span *ngIf=\"airOptions.format12h\" class=\"datepicker--time-current-ampm\">{{airCalendar.hour < 12 ? 'AM' : 'PM'}}</span>\n    </div>\n\n    <div class=\"datepicker--time-sliders\">\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"hours\" min=\"0\" max=\"23\" step=\"{{airOptions.hourStep}}\" [(ngModel)]=\"airCalendar.hour\" (change)=\"setDate.emit()\">\n      </div>\n\n      <div class=\"datepicker--time-row\">\n        <input type=\"range\" name=\"minutes\" min=\"0\" max=\"59\" step=\"{{airOptions.minuteStep}}\" [(ngModel)]=\"airCalendar.minute\" (change)=\"setDate.emit()\">\n      </div>\n    </div>\n  "
                    }] }
        ];
        TimepickerComponent.propDecorators = {
            airOptions: [{ type: core.Input }],
            airCalendar: [{ type: core.Input }],
            setDate: [{ type: core.Output }]
        };
        return TimepickerComponent;
    }());
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
    var MonthpickerComponent = /** @class */ (function () {
        function MonthpickerComponent() {
            this.setMonth = new core.EventEmitter();
            this.setYear = new core.EventEmitter();
            this.yearSelection = new core.EventEmitter();
        }
        MonthpickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[monthpicker]',
                        template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"setYear.emit(airCalendar.year - 1)\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div (click)=\"yearSelection.emit()\" class=\"datepicker--nav-title\">{{airCalendar.year}}</div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"setYear.emit(airCalendar.year + 1)\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--months datepicker--body active\">\n        <div class=\"datepicker--cells datepicker--cells-months\">\n          <div *ngFor=\"let month of airLanguage.months; let i=index\"\n               (click)=\"setMonth.emit(i)\"\n               class=\"datepicker--cell datepicker--cell-month\"\n               [ngClass]=\"{ '-current-': airCalendar.year == airCalendar.currentYear && i == airCalendar.currentMonth }\">{{month}}</div>\n        </div>\n      </div>\n    </div>\n  "
                    }] }
        ];
        MonthpickerComponent.propDecorators = {
            airCalendar: [{ type: core.Input }],
            airLanguage: [{ type: core.Input }],
            setMonth: [{ type: core.Output }],
            setYear: [{ type: core.Output }],
            yearSelection: [{ type: core.Output }]
        };
        return MonthpickerComponent;
    }());
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
    var YearpickerComponent = /** @class */ (function () {
        function YearpickerComponent() {
            this.setYear = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: '[yearpicker]',
                        template: "\n    <nav class=\"datepicker--nav\">\n      <div class=\"datepicker--nav-action\" (click)=\"previous()\"><svg><path d=\"M 17,12 l -5,5 l 5,5\"></path></svg></div>\n\n      <div class=\"datepicker--nav-title\">{{years[1]}} - {{years[years.length - 2]}}</div>\n\n      <div class=\"datepicker--nav-action\" (click)=\"next()\"><svg><path d=\"M 14,12 l 5,5 l -5,5\"></path></svg></div>\n    </nav>\n\n    <div class=\"datepicker--content\">\n      <div class=\"datepicker--cells datepicker--cells-years\">\n        <div *ngFor=\"let year of years; let i=index\" (click)=\"setYear.emit(year)\" class=\"datepicker--cell datepicker--cell-year\"\n             [ngClass]=\"{ '-current-': year == airCalendar.currentYear, '-other-decade-': i == 0 || i == years.length - 1 }\">{{year}}</div>\n      </div>\n    </div>\n  "
                    }] }
        ];
        YearpickerComponent.propDecorators = {
            airCalendar: [{ type: core.Input }],
            setYear: [{ type: core.Output }]
        };
        return YearpickerComponent;
    }());
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
    var components = [
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
    var Angular2AirDatepickerModule = /** @class */ (function () {
        function Angular2AirDatepickerModule() {
        }
        Angular2AirDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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
        return Angular2AirDatepickerModule;
    }());

    exports.AIR_LANGUAGES = AIR_LANGUAGES;
    exports.AirCalendar = AirCalendar;
    exports.AirDay = AirDay;
    exports.AirLanguage = AirLanguage;
    exports.AirMonth = AirMonth;
    exports.AirOptions = AirOptions;
    exports.AirWeekend = AirWeekend;
    exports.Angular2AirDatepickerComponent = Angular2AirDatepickerComponent;
    exports.Angular2AirDatepickerModule = Angular2AirDatepickerModule;
    exports.ɵa = components;
    exports.ɵb = DatepickerComponent;
    exports.ɵc = TimepickerComponent;
    exports.ɵd = MonthpickerComponent;
    exports.ɵe = YearpickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-air-datepicker.umd.js.map
