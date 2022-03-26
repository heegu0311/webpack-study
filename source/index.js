import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
console.log(css); // css 로더가 js 파일 안으로 스타일 속성 내용이 JS 코드에 주입
