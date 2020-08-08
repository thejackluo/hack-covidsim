define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=Game.js.map