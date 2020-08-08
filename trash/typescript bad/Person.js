define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Person = void 0;
    var Person = (function () {
        function Person(isEducated, isInfected, isWealthy, daysLeft) {
            this.isEducated = isEducated;
            this.isInfected = isInfected;
            this.isWealthy = isWealthy;
            this.daysLeft = daysLeft;
        }
        Person.prototype.getInfected = function () {
            return this.isInfected;
        };
        Person.prototype.getEducated = function () {
            return;
        };
        Person.prototype.incrementDay = function () {
        };
        Person.prototype.remainingDays = function () {
            return;
        };
        Person.prototype.survives = function () {
            return;
        };
        Person.prototype.infection = function () {
        };
        Person.prototype.update = function () {
            return;
        };
        return Person;
    }());
    exports.Person = Person;
});
//# sourceMappingURL=Person.js.map