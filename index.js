let btn = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let xo = document.querySelectorAll(".xo");
let val = 0;
let valu = 0;
let first = document.querySelector(".first");
let second = document.querySelector(".second");

let defal = (b) => {
  b.preventDefault();
};

btn.addEventListener("click", defal);
btn2.addEventListener("click", defal);

let c = (event) => {
  
  localStorage.setItem("player-symbol", "X (P1)")
  localStorage.setItem("player-symbol-2", "0 (P2)")
  
  
  if (val !== 0) {
    val.style.backgroundColor = "";
    val.children[0].src =
      "./starter-code/assets/icon-o.svg";
      
  }

  valu = event.currentTarget;
 
  

  valu.style.backgroundColor = "rgba(168, 191, 201, 1)";
  valu.children[0].src =
    "./starter-code/assets/photo1.svg";
  if (valu !== 0) {
    btn.removeEventListener("click", defal);
    btn2.removeEventListener("click", defal);
  }
};
let d = (event) => {
  localStorage.setItem("player-symbol", "X (P2)")
  localStorage.setItem("player-symbol-2", "0 (P1)")

  
  if (valu !== 0) {
    valu.style.backgroundColor = "";
    valu.children[0].src =
      "./starter-code/assets/icon-x.svg";
  }

  val = event.currentTarget;
  val.style.backgroundColor = "rgba(168, 191, 201, 1)";
  val.children[0].src =
    "./starter-code/assets/photo.svg";
  if (val !== 0) {
    btn.removeEventListener("click", defal);
    btn2.removeEventListener("click", defal);
  }
};
first.addEventListener("click", c);
second.addEventListener("click", d);
