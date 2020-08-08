/*
	Jack Luo Website by Jack
	www.jack-luo.com | @thejackluo
*/
import { Game } from "./Game";
import $ from "jquery";

// We need a method to generate names
let population: string[] = ["Bob", "John"];

$("#startGame").click(function () {
  let game = new Game(5000, 1, population);
});

$("#progressBarAnimation").click(function () {
  $(".progress-bar").addClass("progress-bar-animation");
  $(".progress-bar").attr("style", "width:100%");
});
