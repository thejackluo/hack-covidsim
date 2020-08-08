/*
	Jack Luo Website by Jack
	www.jack-luo.com | @thejackluo
*/
import { CovidGame } from "./Game";
import $ from "jquery";

// We need a method to generate names
let population: string[] = ["Bob", "John"];

$("#startGame").click(function startGame() {
  let game = new CovidGame(5000, 1, population);
});
