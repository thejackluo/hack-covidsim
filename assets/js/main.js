define("Person", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Person = void 0;
    var Person = (function () {
        function Person(isEducated, isWealthy, daysLeft) {
            this.isEducated = isEducated;
            this.isWealthy = isWealthy;
            this.daysLeft = daysLeft;
        }
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
    jquery_1["default"]("#startGame").click(function startGame() {
        var game = new Game_1.Game(5000, 1, population);
    });
});
//# sourceMappingURL=main.js.map