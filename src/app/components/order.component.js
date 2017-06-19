"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// by http://www.allenhashkey.com/web-development/angular2/angular-2-order-by-pipe/
var core_1 = require("@angular/core");
var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderBy.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    return OrderBy;
}());
OrderBy = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    })
], OrderBy);
exports.OrderBy = OrderBy;
//# sourceMappingURL=order.component.js.map