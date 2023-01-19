import { getNode as $, loadStorage, saveStorage } from "./lib/index.js";

const textFied = $("#textField");
const deleteButton = $('input[value="삭제"]');

loadStorage("area").then((res) => {
  textFied.value = res;
});

function inputHandler() {
  saveStorage("area", textFied.value);
}

textFied.addEventListener("input", inputHandler);
