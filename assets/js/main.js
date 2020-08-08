define("Person", ["require", "exports"], function (require, exports) {
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
define("Policy", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Policy = void 0;
    var Policy = (function () {
        function Policy() {
        }
        return Policy;
    }());
    exports.Policy = Policy;
});
define("Game", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Game = void 0;
    var Game = (function () {

        function Game(totalPeople, numPeopleInfected, populationArray) {
            this.totalPeople = totalPeople;
            this.numPeopleInfected = numPeopleInfected;
            this.populationArray = populationArray;
        }
        Game.prototype.incrementTime = function (time) {
        };
        return Game;
    }());
    exports.Game = Game;
});
define("Main", ["require", "exports", "Game", "jquery"], function (require, exports, Game_1, jquery_1) {
    "use strict";
    exports.__esModule = true;
    var population = ["Bob", "John"];
    jquery_1["default"]("#startGame").click(function () {
        var game = new Game_1.Game(5000, 1, population);
    });
    jquery_1["default"]("#progressBarAnimation").click(function () {
        jquery_1["default"](".progress-bar").addClass("progress-bar-animation");
        jquery_1["default"](".progress-bar").attr("style", "width:100%");
    });
});
//# sourceMappingURL=main.js.map