/*
	Jack Luo Website by Jack
	www.jack-luo.com | @thejackluo
*/
import { CovidGame } from "./CovidGame";
import $ from "jquery";

$("#startGame").click(function startGame() {
  let game = new CovidGame();
});
