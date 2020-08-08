define(["require", "exports", "./Game", "jquery"], function (require, exports, Game_1, jquery_1) {
    "use strict";
    exports.__esModule = true;
    var population = ["Bob", "John"];
    jquery_1["default"]("#startGame").click(function () {
        var game = new Game_1.Game(5000, 1, population);
    });
});
//# sourceMappingURL=Main.js.map