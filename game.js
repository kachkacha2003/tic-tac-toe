let button = document.querySelectorAll(".x-o");
let img = document.querySelectorAll(".b");
let c = 0;
let img1 = document.querySelectorAll(".same");
let count = 0;

let container = document.querySelector(".container");
let display = document.querySelector(".display");
let flex_n1 = document.querySelector(".flex-n1");
console.log(localStorage.getItem("player-symbol"));

let round = document.querySelector(".round");
let turn = document.querySelector(".turn");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let count_win = 0;
let count_draw = 0;
count_loss = 0;
let btn = document.querySelector(".button");
let mouse_variable = 0;
let displayTwo = document.querySelector(".display-2");
let dissapear = document.querySelector(".cancel");
let mous_count=0;



  
let btn_func = () => {
  container.style.opacity = "20%";
  document.body.style.backgroundColor = "black";
  container.style.filter = "blur(3px)";
  displayTwo.style.display = "flex";
  btn.style.cursor = "auto";
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#A8BFC9";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#A8BFC9";
  });

  for (let i = 0; i < button.length; i++) {
    button[i].removeEventListener("click", click);
    button[i].style.cursor = "auto";
  }
  dissapear.addEventListener("click", () => {
    displayTwo.style.display = "none";
    container.style.filter = "none";
    container.style.opacity = "100%";
    document.body.style.backgroundColor = "";
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#DBE8ED";
    });
    btn.style.cursor = "pointer";
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", click);
      button[i].style.cursor = "pointer";
    }
  });
};
btn.addEventListener("click", btn_func);

first.children[0].textContent = localStorage.getItem("player-symbol");
third.children[0].textContent = localStorage.getItem("player-symbol-2");




 





let click = (event) => {
  k = event.currentTarget;

  if (count % 2 === 0) {
    
    
    
    if (
      k.children[1].style.display == "none" &&
      
      k.children[3].style.display == "block"
    ) {
      return false;
    }
    if (k.children[1].style.display !== "block") {
      k.children[0].style.display = "none";
      k.children[1].style.display = "block";
      k.children[3].style.display = "none";
      turn.children[0].style.display = "none";
      turn.children[1].style.display = "block";
    } else {
      return false;
    }
  } else {
    
    

    
    
    if (
      k.children[0].style.display == "none" &&
      k.children[1].style.display == "block"
    ) {
      return false;
    }

    if (
      k.children[0].style.display == "none" &&
      k.children[1].style.display == "block" &&
      k.children[3].style.display == "none"
    ) {
      return false;
    }
    if (k.children[3].style.display !== "block") {
      k.children[1].style.display = "none";
      k.children[0].style.display = "none";
      k.children[3].style.display = "block";
      turn.children[0].style.display = "block";
      turn.children[1].style.display = "none";
    } else {
      return false;
    }
  }

  count++;

  console.log(count);

  if (
    (button[0].children[1].style.display == "block" &&
      button[3].children[1].style.display == "block" &&
      button[6].children[1].style.display == "block") ||
    (button[0].children[1].style.display == "block" &&
      button[1].children[1].style.display == "block" &&
      button[2].children[1].style.display == "block") ||
    (button[3].children[1].style.display == "block" &&
      button[4].children[1].style.display == "block" &&
      button[5].children[1].style.display == "block") ||
    (button[6].children[1].style.display == "block" &&
      button[7].children[1].style.display == "block" &&
      button[8].children[1].style.display == "block") ||
    (button[0].children[1].style.display == "block" &&
      button[4].children[1].style.display == "block" &&
      button[8].children[1].style.display == "block") ||
    (button[1].children[1].style.display == "block" &&
      button[4].children[1].style.display == "block" &&
      button[7].children[1].style.display == "block") ||
    (button[2].children[1].style.display == "block" &&
      button[4].children[1].style.display == "block" &&
      button[6].children[1].style.display == "block") ||
    (button[2].children[1].style.display == "block" &&
      button[5].children[1].style.display == "block" &&
      button[8].children[1].style.display == "block")
  ) {
    count_win += 1;
    first.children[1].textContent = count_win;
    for (let i = 0; i < button.length; i++) {
      button[i].removeEventListener("click", click);
    }
    container.style.opacity = "20%";
    btn.removeEventListener("click", btn_func);
    document.body.style.backgroundColor = "black";
    display.style.display = "flex";
    display.children[1].style.display = "flex";
    display.children[1].children[0].src =
      "./starter-code/assets/lasha.svg";
    display.children[0].style.fontSize = "";
    if (localStorage.getItem("player-symbol") == "X (P1)") {
      display.children[0].textContent = "PLAYER 1 WINS!";
    } else {
      display.children[0].textContent = "PLAYER 2 WINS!";
    }
    btn.style.cursor = "auto";

    container.style.filter = "blur(3px)";
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#A8BFC9";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#A8BFC9";
    });
    round.addEventListener("click", () => {
      
      btn.style.cursor = "pointer";
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#DBE8ED";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#A8BFC9";
      });
      btn.addEventListener("click", btn_func);
      display.style.display = "none";
      container.style.filter = "none";
      container.style.opacity = "100%";
      document.body.style.backgroundColor = "";
      count = 0;

      for (let i = 0; i < button.length; i++) {
        button[i].children[1].style.display = "none";
        button[i].children[3].style.display = "none";
        turn.children[0].style.display = "block";
        turn.children[1].style.display = "none";
        button[i].addEventListener("click", click);
      }
    });
  } else if (
    (button[0].children[3].style.display == "block" &&
      button[3].children[3].style.display == "block" &&
      button[6].children[3].style.display == "block") ||
    (button[0].children[3].style.display == "block" &&
      button[1].children[3].style.display == "block" &&
      button[2].children[3].style.display == "block") ||
    (button[3].children[3].style.display == "block" &&
      button[4].children[3].style.display == "block" &&
      button[5].children[3].style.display == "block") ||
    (button[6].children[3].style.display == "block" &&
      button[7].children[3].style.display == "block" &&
      button[8].children[3].style.display == "block") ||
    (button[0].children[3].style.display == "block" &&
      button[4].children[3].style.display == "block" &&
      button[8].children[3].style.display == "block") ||
    (button[1].children[3].style.display == "block" &&
      button[4].children[3].style.display == "block" &&
      button[7].children[3].style.display == "block") ||
    (button[2].children[3].style.display == "block" &&
      button[5].children[3].style.display == "block" &&
      button[8].children[3].style.display == "block") ||
    (button[2].children[3].style.display == "block" &&
      button[4].children[3].style.display == "block" &&
      button[6].children[3].style.display == "block")
  ) {
    count_loss += 1;
    third.children[1].textContent = count_loss;
    for (let i = 0; i < button.length; i++) {
      button[i].removeEventListener("click", click);
    }
    container.style.opacity = "20%";
    document.body.style.backgroundColor = "black";

    btn.removeEventListener("click", btn_func);

    display.children[1].children[0].src =
      "./starter-code/assets/lasha2.svg";
    display.children[1].style.display = "flex";
    display.children[0].style.fontSize = "";
    if (localStorage.getItem("player-symbol") == "X (P1)") {
      display.children[0].textContent = "PLAYER 2 WINS!";
    } else {
      display.children[0].textContent = "PLAYER 1 WINS!";
    }
    display.style.display = "flex";
    
    container.style.filter = "blur(3px)";
    btn.style.cursor = "pointer";
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#A8BFC9";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#A8BFC9";
    });
    round.addEventListener("click", () => {
      for(let k=0;k<button.length;k++){
        button[k].addEventListener("mouseover",()=>{
          if(button[k].children[1].style.display=="block" || button[k].children[3].style.display=="block"){
            return false;
          }
          button[k].children[0].style.display="block";
  
        })
        button[k].addEventListener("mouseout",()=>{
          button[k].children[0].style.display="none";
  
        })
        
      }
      btn.style.cursor = "auto";
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#DBE8ED";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#A8BFC9";
      });
      btn.addEventListener("click", btn_func);
      display.style.display = "none";
      container.style.filter = "none";
      container.style.opacity = "100%";
      document.body.style.backgroundColor = "";
      count = 0;

      for (let i = 0; i < button.length; i++) {
        button[i].children[1].style.display = "none";
        button[i].children[3].style.display = "none";
        turn.children[0].style.display = "block";
        turn.children[1].style.display = "none";
        button[i].addEventListener("click", click);
      }
    });
  } else {
    if (count == 9) {
      count_draw += 1;

      display.children[1].style.display = "none";
      display.children[0].style.fontSize = "40px";
      display.children[0].textContent = "ROUND TIED";

      second.children[1].textContent = count_draw;
      container.style.opacity = "20%";
      document.body.style.backgroundColor = "black";
      display.style.display = "flex";
      container.style.filter = "blur(3px)";
      btn.removeEventListener("click", btn_func);
      btn.style.cursor = "pointer";
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#A8BFC9";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#A8BFC9";
      });

      round.addEventListener("click", () => {
        for(let k=0;k<button.length;k++){
          button[k].addEventListener("mouseover",()=>{
            if(button[k].children[1].style.display=="block" || button[k].children[3].style.display=="block"){
              return false;
            }
            button[k].children[0].style.display="block";
    
          })
          button[k].addEventListener("mouseout",()=>{
            button[k].children[0].style.display="none";
    
          })
          
        }
        btn.style.cursor = "auto";
        btn.addEventListener("click", btn_func);
        btn.addEventListener("mouseover", () => {
          btn.style.backgroundColor = "#DBE8ED";
        });
        btn.addEventListener("mouseout", () => {
          btn.style.backgroundColor = "#A8BFC9";
        });
        display.style.display = "none";
        container.style.filter = "none";
        container.style.opacity = "100%";
        document.body.style.backgroundColor = "";
        count = 0;
        turn.children[0].style.display = "block";
        turn.children[1].style.display = "none";

        for (let i = 0; i < button.length; i++) {
          button[i].children[1].style.display = "none";
          button[i].children[3].style.display = "none";
          turn.children[0].style.display = "block";
          turn.children[1].style.display = "none";
          count = 0;
          button[i].addEventListener("click", click);
        }
      });
    }
  }
};

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", click);
}
