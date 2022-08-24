"use strict";
let button = document.querySelectorAll(".x-o");
let img = document.querySelectorAll(".b");
let c = 0;
let img1 = document.querySelectorAll(".same");
let count = 0;
console.log(localStorage.getItem("clicked"));
let k = 0;
let container = document.querySelector(".container");
let display = document.querySelector(".display");
let flex_n1 = document.querySelector(".flex-n1");
console.log(localStorage.getItem("player-symbol"));
console.log(localStorage.getItem("player-symbol-2"));

let count2;

let round = document.querySelector(".round");
let turn = document.querySelector(".turn");
let first = document.querySelector(".first");

let number = 0;
let second = document.querySelector(".second");
let third = document.querySelector(".third");

let count_win = 0;
let count_draw = 0;
let count_loss = 0;
let btn = document.querySelector(".button");
let mouse_variable = 0;
let displayTwo = document.querySelector(".display-2");
let dissapear = document.querySelector(".cancel");
let mous_count = 0;
let z = 0;
console.log(display.children[0].textContent);
if (localStorage.getItem("clicked") == "player") {
  first.children[0].textContent = localStorage.getItem("player-symbol");
  third.children[0].textContent = localStorage.getItem("player-symbol-2");
  for (let m = 0; m < button.length; m++) {
    button[m].addEventListener("mouseover", () => {
      button[
        m
      ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
    });
    button[m].addEventListener("mouseout", () => {
      button[m].style.background = "";
      button[m].style.backgroundColor = "#1F3641";
    });
  }

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

  let click = (event) => {
    k = event.currentTarget;

    if (z % 2 == 0) {
      for (let m = 0; m < button.length; m++) {
        if (
          k.children[3].style.display == "block" ||
          k.children[1].style.display == "block"
        ) {
          return false;
        }

        button[m].addEventListener("mouseover", () => {
          button[
            m
          ].style.background = `url("./starter-code/assets/icon-o-outline.svg")no-repeat center`;
          for (let t = 0; t < button.length; t++) {
            if (
              button[t].children[3].style.display == "block" ||
              button[t].children[1].style.display == "block"
            ) {
              button[t].style.background = "";
              button[t].style.backgroundColor = "#1F3641";
            }
          }
        });
        button[m].addEventListener("mouseout", () => {
          button[m].style.background = "";
          button[m].style.backgroundColor = "#1F3641";
        });
      }
    } else {
      for (let m = 0; m < button.length; m++) {
        if (
          k.children[3].style.display == "block" ||
          k.children[1].style.display == "block"
        ) {
          return false;
        }
        button[m].addEventListener("mouseover", () => {
          button[
            m
          ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
          for (let t = 0; t < button.length; t++) {
            if (
              button[t].children[3].style.display == "block" ||
              button[t].children[1].style.display == "block"
            ) {
              button[t].style.background = "";
              button[t].style.backgroundColor = "#1F3641";
            }
          }
        });
        button[m].addEventListener("mouseout", () => {
          button[m].style.background = "";
          button[m].style.backgroundColor = "#1F3641";
        });
      }
    }

    z++;
    console.log(z);

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
      display.children[1].children[0].src = "./starter-code/assets/lasha.svg";
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
        z = 0;
        for (let m = 0; m < button.length; m++) {
          button[m].addEventListener("mouseover", () => {
            button[
              m
            ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
          });
          button[m].addEventListener("mouseout", () => {
            button[m].style.background = "";
            button[m].style.backgroundColor = "#1F3641";
          });
        }

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

      display.children[1].children[0].src = "./starter-code/assets/lasha2.svg";
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
        z = 0;
        for (let m = 0; m < button.length; m++) {
          button[m].addEventListener("mouseover", () => {
            button[
              m
            ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
          });
          button[m].addEventListener("mouseout", () => {
            button[m].style.background = "";
            button[m].style.backgroundColor = "#1F3641";
          });
        }
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
          z = 0;
          for (let m = 0; m < button.length; m++) {
            button[m].addEventListener("mouseover", () => {
              button[
                m
              ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
            });
            button[m].addEventListener("mouseout", () => {
              button[m].style.background = "";
              button[m].style.backgroundColor = "#1F3641";
            });
          }
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
} else {
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

    dissapear.addEventListener("click", () => {
      displayTwo.style.display = "none";
      container.style.filter = "none";
      container.style.opacity = "100%";

      document.body.style.backgroundColor = "";
      btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#DBE8ED";
      });
      btn.style.cursor = "pointer";
    });
  };
  btn.addEventListener("click", btn_func);
  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let x_masive = [];
  let o_masive = [];

  if (localStorage.getItem("player-symbol") == "X (P1)") {
    turn.children[0].style.display = "block";
    turn.children[1].style.display = "none";
    first.children[0].textContent = "X (YOU)";
    third.children[0].textContent = "O (CPU)";
    for (let m = 0; m < button.length; m++) {
      button[m].addEventListener("mouseover", () => {
        button[
          m
        ].style.background = `url("./starter-code/assets/icon-x-outline.svg")no-repeat center`;
        for (let t = 0; t < button.length; t++) {
          if (
            button[t].children[3].style.display == "block" ||
            button[t].children[1].style.display == "block"
          ) {
            button[t].style.background = "";
            button[t].style.backgroundColor = "#1F3641";
          }
        }
      });
      button[m].addEventListener("mouseout", () => {
        button[m].style.background = "";
        button[m].style.backgroundColor = "#1F3641";
      });
    }

    console.log(winningCombos[2].slice(2, 3));

    let arry = [4, 1, 3, 8];

    let your_turn = true;
    console.log(winningCombos);
    let datvla = 0;

    let click = (event) => {
      k = event.currentTarget;
      turn.children[0].style.display = "none";
      turn.children[1].style.display = "block";

      if (your_turn === true) {
        if (
          k.children[1].style.display == "block" ||
          k.children[3].style.display == "block"
        ) {
          return false;
        }
        k.children[1].style.display = "block";
        for (let z = 0; z < button.length; z++) {
          if (k == button[z]) {
            x_masive.push(z);
            datvla++;
            if (datvla == 5) {
              for (let i = 0; i < button.length; i++) {
                button[i].removeEventListener("click", click);
              }
              display.style.display = "flex";
              display.children[1].style.display = "none";
              display.children[0].style.fontSize = "40px";
              display.children[0].textContent = "ROUND TIED";
              btn.removeEventListener("click", btn_func);

              container.style.filter = "blur(3px)";
              container.style.opacity = "20%";
              count_draw++;

              second.children[1].textContent = count_draw;
              round.addEventListener("click", () => {
                btn.style.cursor = "pointer";
                btn.addEventListener("click", btn_func);
                btn.addEventListener("mouseover", () => {
                  btn.style.backgroundColor = "#DBE8ED";
                });
                btn.addEventListener("mouseout", () => {
                  btn.style.backgroundColor = "#A8BFC9";
                });
                turn.children[0].style.display = "block";
                turn.children[1].style.display = "none";
                display.style.display = "none";
                container.style.filter = "none";
                container.style.opacity = "100%";
                document.body.style.backgroundColor = "";

                count2 = 0;
                datvla = 0;
                x_masive = [];
                o_masive = [];
                

                for (let i = 0; i < button.length; i++) {
                  button[i].children[1].style.display = "none";
                  button[i].children[3].style.display = "none";
                  turn.children[0].style.display = "block";
                  turn.children[1].style.display = "none";
                  button[i].addEventListener("click", click);
                }
              });

              document.body.style.backgroundColor = "black";
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

              return false;
            }
          }
        }

        your_turn = false;

        setTimeout(() => {
      turn.children[0].style.display = "block";
      turn.children[1].style.display = "none";
          if (x_masive[0] == 4) {
            arry[0] = 0;
            console.log(x_masive);
          } else {
            arry = [4, 1, 3, 8];
          }
          if (x_masive[0] == 4 && x_masive[1] == 3) {
            arry[1] = 5;
            arry[2] = 7;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 1 &&
            x_masive[3] == 2
          ) {
            arry[3] = 6;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 1 &&
            x_masive[3] == 6
          ) {
            arry[3] = 2;
          }
          if (x_masive[0] == 4 && x_masive[1] == 3 && x_masive[2] == 6) {
            arry[2] = 2;
          }
          if (x_masive[0] == 4 && x_masive[1] == 3 && x_masive[2] == 2) {
            arry[2] = 6;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 2 &&
            x_masive[3] == 1
          ) {
            arry[3] = 7;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 2 &&
            x_masive[3] == 7
          ) {
            arry[3] = 1;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 2 &&
            x_masive[3] == 8
          ) {
            arry[3] = 1;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 3 &&
            x_masive[2] == 1 &&
            x_masive[3] == 8
          ) {
            arry[3] = 2;
          }
          if (x_masive[0] == 4 && x_masive[1] == 3 && x_masive[2] == 7) {
            arry[2] = 1;
            arry[3] = 6;
          }
          if (x_masive[0] == 4 && x_masive[1] == 3 && x_masive[2] == 8) {
            arry[2] = 2;
            arry[3] = 7;
          }
          if (x_masive[0] == 4 && x_masive[1] == 2) {
            arry[1] = 6;
            arry[2] = 5;
          }
          if (x_masive[0] == 4 && x_masive[1] == 2 && x_masive[3] == 1) {
            arry[3] = 7;
          }
          if (x_masive[0] == 4 && x_masive[1] == 2 && x_masive[3] == 7) {
            arry[3] = 1;
          }
          if (x_masive[0] == 4 && x_masive[1] == 2 && x_masive[3] == 8) {
            arry[3] = 1;
          }
          if (x_masive[0] == 4 && x_masive[1] == 8) {
            arry[1] = 6;
            arry[2] = 5;
          }
          if (x_masive[0] == 4 && x_masive[1] == 8 && x_masive[3] == 7) {
            arry[3] = 1;
          }
          if (x_masive[0] == 4 && x_masive[1] == 8 && x_masive[3] == 1) {
            arry[3] = 7;
          }
          if (x_masive[0] == 4 && x_masive[1] == 8 && x_masive[3] == 2) {
            arry[3] = 1;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1) {
            arry[1] = 7;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1 && x_masive[2] == 3) {
            arry[2] = 5;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1 && x_masive[2] == 6) {
            arry[2] = 2;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1 && x_masive[2] == 2) {
            arry[2] = 6;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1 && x_masive[2] == 5) {
            arry[2] = 3;
            arry[3] = 2;
          }
          if (x_masive[0] == 4 && x_masive[1] == 1 && x_masive[2] == 8) {
            arry[2] = 6;
            arry[3] = 5;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 5 &&
            x_masive[3] == 6
          ) {
            arry[3] = 2;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 6 &&
            x_masive[3] == 3
          ) {
            arry[3] = 5;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 6 &&
            x_masive[3] == 5
          ) {
            arry[3] = 3;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 3 &&
            x_masive[3] == 6
          ) {
            arry[3] = 2;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 3 &&
            x_masive[3] == 2
          ) {
            arry[3] = 6;
          }
          if (
            x_masive[0] == 4 &&
            x_masive[1] == 1 &&
            x_masive[2] == 3 &&
            x_masive[3] == 8
          ) {
            arry[3] = 6;
          }

          if (x_masive[0] == 4 && x_masive[1] == 6) {
            arry[1] = 2;
            arry[2] = 7;
          }
          if ((x_masive[0] == 4) & (x_masive[1] == 5)) {
            arry[1] = 3;
            arry[2] = 2;
          }
          if ((x_masive[0] == 4) & (x_masive[1] == 5) && x_masive[3] == 1) {
            arry[1] = 3;
            arry[2] = 2;
            arry[3] = 7;
          }
          if ((x_masive[0] == 4) & (x_masive[1] == 7)) {
            arry[1] = 1;
            arry[2] = 6;
            arry[3] = 5;
          }

          if (x_masive[0] == 4 && x_masive[1] == 6 && x_masive[3] == 3) {
            arry[3] = 5;
          }
          if (x_masive[0] == 4 && x_masive[1] == 6 && x_masive[3] == 8) {
            arry[3] = 5;
          }
          if (x_masive[0] == 4 && x_masive[1] == 6 && x_masive[3] == 5) {
            arry[3] = 3;
          }

          if ((x_masive[0] == 0) & (x_masive[1] == 6 || x_masive[1] == 0)) {
            arry[1] = 3;
            arry[2] = 1;
          }
          if ((x_masive[0] == 6) & (x_masive[1] == 0)) {
            arry[1] = 3;
            arry[2] = 1;
          }
          if (
            (x_masive[0] == 6) & (x_masive[1] == 7) ||
            (x_masive[0] == 7) & (x_masive[1] == 6)
          ) {
            arry[1] = 8;
            arry[2] = 3;
            arry[3] = 2;
          }
          if (
            (x_masive[0] == 0) & (x_masive[1] == 8) ||
            (x_masive[0] == 8) & (x_masive[1] == 0)
          ) {
            arry[2] = 6;
            arry[3] = 5;
          }
          if (
            (x_masive[0] == 8) & (x_masive[1] == 7) ||
            (x_masive[0] == 7) & (x_masive[1] == 8)
          ) {
            arry[1] = 6;
            arry[2] = 5;
            arry[3] = 0;
          }
          if (
            (x_masive[0] == 8) & (x_masive[1] == 6) ||
            (x_masive[0] == 6) & (x_masive[1] == 8)
          ) {
            arry[1] = 7;
            arry[3] = 2;
          }
          if (
            (x_masive[0] == 8) & (x_masive[1] == 1) ||
            (x_masive[0] == 1) & (x_masive[1] == 8)
          ) {
            arry[1] = 5;
            arry[2] = 6;
            arry[3] = 0;
          }
          if (
            (x_masive[0] == 7) & (x_masive[1] == 0) ||
            (x_masive[0] == 0) & (x_masive[1] == 7)
          ) {
            arry[1] = 3;
            arry[2] = 2;
            arry[3] = 8;
          }
          if (
            (x_masive[0] == 7) & (x_masive[1] == 1) ||
            (x_masive[0] == 1) & (x_masive[1] == 7)
          ) {
            arry[1] = 0;
            arry[2] = 6;
          }
          if (
            (x_masive[0] == 3) & (x_masive[1] == 1) ||
            (x_masive[0] == 1) & (x_masive[1] == 3)
          ) {
            arry[1] = 0;
            arry[2] = 6;
            arry[3] = 5;
          }
          if (
            (x_masive[0] == 3) & (x_masive[1] == 2) ||
            (x_masive[0] == 2) & (x_masive[1] == 3)
          ) {
            arry[2] = 8;
            arry[3] = 6;
          }
          if (
            (x_masive[0] == 6) & (x_masive[1] == 2) ||
            (x_masive[0] == 2) & (x_masive[1] == 6)
          ) {
            arry[1] = 5;
            arry[2] = 0;
            arry[3] = 7;
          }
          if (
            (x_masive[0] == 6) & (x_masive[1] == 1) ||
            (x_masive[0] == 1) & (x_masive[1] == 6)
          ) {
            arry[1] = 3;
            arry[2] = 8;
            arry[3] = 2;
          }
          if (
            (x_masive[0] == 7) & (x_masive[1] == 3) ||
            (x_masive[0] == 3) & (x_masive[1] == 7)
          ) {
            arry[1] = 6;
            arry[2] = 8;
            arry[3] = 1;
          }
          if (
            (x_masive[0] == 7) & (x_masive[1] == 2) ||
            (x_masive[0] == 2) & (x_masive[1] == 7)
          ) {
            arry[1] = 3;
            arry[2] = 8;
            arry[3] = 1;
          }

          if (
            (x_masive[0] == 8) & (x_masive[1] == 3) ||
            (x_masive[0] == 3) & (x_masive[1] == 8)
          ) {
            arry[1] = 7;
            arry[2] = 2;
            arry[3] = 0;
          }

          if (
            (x_masive[0] == 0 && x_masive[1] == 1) ||
            (x_masive[0] == 1 && x_masive[1] == 0)
          ) {
            arry[1] = 2;
            arry[2] = 3;
          }
          if (
            (x_masive[0] == 1 && x_masive[1] == 2) ||
            (x_masive[0] == 2 && x_masive[1] == 1)
          ) {
            arry[1] = 0;
            arry[2] = 5;
            arry[3] = 6;
          }
          if (
            (x_masive[0] == 3) & (x_masive[1] == 0) ||
            (x_masive[0] == 0) & (x_masive[1] == 3)
          ) {
            arry[1] = 6;
            arry[2] = 1;
          }
          if (
            (x_masive[0] == 3) & (x_masive[1] == 6) ||
            (x_masive[0] == 6) & (x_masive[1] == 3)
          ) {
            arry[1] = 0;
            arry[2] = 7;
            arry[3] = 2;
          }
          if (
            (x_masive[0] == 2) & (x_masive[1] == 5) ||
            (x_masive[0] == 5) & (x_masive[1] == 2)
          ) {
            arry[1] = 8;
            arry[2] = 1;
            arry[3] = 6;
          }
          if (
            (x_masive[0] == 2) & (x_masive[1] == 8) ||
            (x_masive[0] == 8) & (x_masive[1] == 2)
          ) {
            arry[1] = 5;
            arry[2] = 1;
            arry[3] = 6;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 8) ||
            (x_masive[0] == 8) & (x_masive[1] == 5)
          ) {
            arry[1] = 2;
            arry[2] = 7;
            arry[3] = 0;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 0) ||
            (x_masive[0] == 0) & (x_masive[1] == 5)
          ) {
            arry[2] = 6;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 1) ||
            (x_masive[0] == 1) & (x_masive[1] == 5)
          ) {
            arry[1] = 2;
            arry[2] = 0;
            arry[3] = 7;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 3) ||
            (x_masive[0] == 3) & (x_masive[1] == 5)
          ) {
            arry[1] = 2;
            arry[2] = 0;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 7) ||
            (x_masive[0] == 7) & (x_masive[1] == 5)
          ) {
            arry[1] = 8;
            arry[2] = 6;
            arry[3] = 1;
          }
          if (
            (x_masive[0] == 5) & (x_masive[1] == 6) ||
            (x_masive[0] == 6) & (x_masive[1] == 5)
          ) {
            arry[2] = 8;
            arry[3] = 3;
          }
          let mogeba = () => {
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
              your_turn = true;
              turn.children[0].style.display = "block";
              turn.children[1].style.display = "none";
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

              z = 0;
              count2 = 0;
              datvla = 0;
              x_masive = [];
              o_masive = [];

              for (let i = 0; i < button.length; i++) {
                button[i].children[1].style.display = "none";
                button[i].children[3].style.display = "none";
                turn.children[0].style.display = "block";
                turn.children[1].style.display = "none";
                button[i].addEventListener("click", click);
              }
            });
          };

          if (
            button[0].children[3].style.display == "block" &&
            button[1].children[3].style.display == "block" &&
            button[2].children[1].style.display !== "block"
          ) {
            button[2].children[3].style.display = "flex";
            o_masive.push(2);

            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
                f;
              }
            }

            return false;
          }
          if (
            button[0].children[3].style.display == "block" &&
            button[2].children[3].style.display == "block" &&
            button[1].children[1].style.display !== "block"
          ) {
            button[1].children[3].style.display = "block";
            o_masive.push(1);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[1].children[3].style.display == "block" &&
            button[2].children[3].style.display == "block" &&
            button[0].children[1].style.display !== "block"
          ) {
            button[0].children[3].style.display = "block";
            o_masive.push(2);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }
            return false;
          }
          if (
            button[3].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[5].children[1].style.display !== "block"
          ) {
            button[5].children[3].style.display = "block";
            o_masive.push(5);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[3].children[3].style.display == "block" &&
            button[5].children[3].style.display == "block" &&
            button[4].children[1].style.display !== "block"
          ) {
            button[4].children[3].style.display = "block";
            o_masive.push(4);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[5].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[3].children[1].style.display !== "block"
          ) {
            button[3].children[3].style.display = "block";
            o_masive.push(3);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[6].children[3].style.display == "block" &&
            button[7].children[3].style.display == "block" &&
            button[8].children[1].style.display !== "block"
          ) {
            button[8].children[3].style.display = "block";
            o_masive.push(8);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[6].children[3].style.display == "block" &&
            button[8].children[3].style.display == "block" &&
            button[7].children[1].style.display !== "block"
          ) {
            button[7].children[3].style.display = "block";
            o_masive.push(7);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[8].children[3].style.display == "block" &&
            button[7].children[3].style.display == "block" &&
            button[6].children[1].style.display !== "block"
          ) {
            button[6].children[3].style.display = "block";
            o_masive.push(6);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[0].children[3].style.display == "block" &&
            button[3].children[3].style.display == "block" &&
            button[6].children[1].style.display !== "block"
          ) {
            button[6].children[3].style.display = "block";
            o_masive.push(6);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[6].children[3].style.display == "block" &&
            button[3].children[3].style.display == "block" &&
            button[0].children[1].style.display !== "block"
          ) {
            button[0].children[3].style.display = "block";
            o_masive.push(6);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[0].children[3].style.display == "block" &&
            button[6].children[3].style.display == "block" &&
            button[3].children[1].style.display !== "block"
          ) {
            button[3].children[3].style.display = "block";
            o_masive.push(3);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[1].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[7].children[1].style.display !== "block"
          ) {
            button[7].children[3].style.display = "block";
            o_masive.push(7);

            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }
            console.log(o_masive);

            return false;
          }
          if (
            button[1].children[3].style.display == "block" &&
            button[7].children[3].style.display == "block" &&
            button[4].children[1].style.display !== "block"
          ) {
            button[4].children[3].style.display = "block";
            o_masive.push(4);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[7].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[1].children[1].style.display !== "block"
          ) {
            button[1].children[3].style.display = "block";
            o_masive.push(7);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[2].children[3].style.display == "block" &&
            button[5].children[3].style.display == "block" &&
            button[8].children[1].style.display !== "block"
          ) {
            button[8].children[3].style.display = "block";
            o_masive.push(8);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[2].children[3].style.display == "block" &&
            button[8].children[3].style.display == "block" &&
            button[5].children[1].style.display !== "block"
          ) {
            button[5].children[3].style.display = "block";
            o_masive.push(5);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[8].children[3].style.display == "block" &&
            button[5].children[3].style.display == "block" &&
            button[2].children[1].style.display !== "block"
          ) {
            button[2].children[3].style.display = "block";
            o_masive.push(2);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[0].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[8].children[1].style.display !== "block"
          ) {
            button[8].children[3].style.display = "block";
            o_masive.push(8);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[8].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[0].children[1].style.display !== "block"
          ) {
            button[0].children[3].style.display = "block";
            o_masive.push(0);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[8].children[3].style.display == "block" &&
            button[0].children[3].style.display == "block" &&
            button[4].children[1].style.display !== "block"
          ) {
            button[4].children[3].style.display = "block";
            o_masive.push(4);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[2].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[6].children[1].style.display !== "block"
          ) {
            button[6].children[3].style.display = "block";
            o_masive.push(6);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";

                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[2].children[3].style.display == "block" &&
            button[6].children[3].style.display == "block" &&
            button[4].children[1].style.display !== "block"
          ) {
            button[4].children[3].style.display = "block";
            o_masive.push(4);
            console.log(o_masive);
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }
          if (
            button[6].children[3].style.display == "block" &&
            button[4].children[3].style.display == "block" &&
            button[2].children[1].style.display !== "block"
          ) {
            button[2].children[3].style.display = "block";
            o_masive.push(2);
            o_masive.sort(function (a, b) {
              return a - b;
            });
            for (let i = 0; i < winningCombos.length; i++) {
              if (
                o_masive.some((b) => winningCombos[i].includes(b)) &&
                o_masive.length >= 3
              ) {
                display.style.display = "flex";
                display.children[0].textContent = "OH NO, YOU LOST…";
                mogeba();
                return false;
              }
            }

            return false;
          }

          button[arry[count2]].children[3].style.display = "block";
          o_masive.push(arry[count2]);
          o_masive.sort(function (a, b) {
            return a - b;
          });

          count2++;

          console.log(o_masive);

          your_turn = true;
        }, 1000);
      }
    };

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", click);
    }
  } else {
    first.children[0].textContent = "X (CPU)";
    third.children[0].textContent = "O (YOU)";
    turn.children[0].style.display = "block";
    turn.children[1].style.display = "none";
    let mogeba = () => {
      count_loss += 1;

      first.children[1].textContent = count_loss;
      for (let i = 0; i < button.length; i++) {
        button[i].removeEventListener("click", click);
      }
      container.style.opacity = "20%";
      document.body.style.backgroundColor = "black";

      btn.removeEventListener("click", btn_func);

      display.children[1].children[0].src =
        "./starter-code/assets/lasha.svg";
      display.children[1].style.display = "flex";
      display.children[0].style.fontSize = "";

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
        your_turn = true;

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

        z = 0;
        count2 = 1;
       
        x_masive = [];
        o_masive = [];
        setTimeout(() => {
          button[4].children[1].style.display = "block";
    
          x_masive.push(4);
    
    
          turn.children[0].style.display = "none";
          turn.children[1].style.display = "block";
          your_turn = true;
        }, 1000);

        for (let i = 0; i < button.length; i++) {
          button[i].children[1].style.display = "none";
          button[i].children[3].style.display = "none";
          turn.children[0].style.display = "block";
          turn.children[1].style.display = "none";
          button[i].addEventListener("click", click);
        }
      });
      
    };
    for (let m = 0; m < button.length; m++) {
      button[m].addEventListener("mouseover", () => {
        button[
          m
        ].style.background = `url("./starter-code/assets/icon-o-outline.svg")no-repeat center`;
        for (let t = 0; t < button.length; t++) {
          if (
            button[t].children[3].style.display == "block" ||
            button[t].children[1].style.display == "block"
          ) {
            button[t].style.background = "";
            button[t].style.backgroundColor = "#1F3641";
          }
        }
      });
      button[m].addEventListener("mouseout", () => {
        button[m].style.background = "";
        button[m].style.backgroundColor = "#1F3641";
      });
    }
    let count2=1;
    z=0;
    let arry = [4, 8, 1, 3,6];
    let your_turn = false;

    setTimeout(() => {
      button[4].children[1].style.display = "block";

      x_masive.push(4);


      turn.children[0].style.display = "none";
      turn.children[1].style.display = "block";
      your_turn = true;
    }, 1000);
    let click = (event) => {
      if(your_turn==false){
        return false;

      }
      turn.children[0].style.display="block"
    turn.children[1].style.display="none"
      k = event.currentTarget;
      if (your_turn == true) {
        if (
          k.children[1].style.display == "block" ||
          k.children[3].style.display == "block"
        ) {
          return false;
        }
        k.children[3].style.display = "block";
        for (let z = 0; z < button.length; z++) {
          if (k == button[z]) {
            o_masive.push(z);
            console.log(o_masive)
          }
          
        }
      }
      your_turn=false;
      setTimeout(() => {
       

        

        if (
          button[0].children[1].style.display == "block" &&
          button[1].children[1].style.display == "block" &&
          button[2].children[3].style.display !== "block"
        ) {
          button[2].children[1].style.display = "flex";
          x_masive.push(2);

          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
              
            }
          }

          return false;
        }
        if (
          button[0].children[1].style.display == "block" &&
          button[2].children[1].style.display == "block" &&
          button[1].children[3].style.display !== "block"
        ) {
          button[1].children[1].style.display = "block";
          x_masive.push(1);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[1].children[1].style.display == "block" &&
          button[2].children[1].style.display == "block" &&
          button[0].children[3].style.display !== "block"
        ) {
          button[0].children[1].style.display = "block";
          x_masive.push(2);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }
          return false;
        }
        if (
          button[3].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[5].children[3].style.display !== "block"
        ) {
          button[5].children[1].style.display = "block";
          x_masive.push(5);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[3].children[1].style.display == "block" &&
          button[5].children[1].style.display == "block" &&
          button[4].children[3].style.display !== "block"
        ) {
          button[4].children[1].style.display = "block";
          x_masive.push(4);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[5].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[3].children[3].style.display !== "block"
        ) {
          button[3].children[1].style.display = "block";
          x_masive.push(3);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[6].children[1].style.display == "block" &&
          button[7].children[1].style.display == "block" &&
          button[8].children[3].style.display !== "block"
        ) {
          button[8].children[1].style.display = "block";
          x_masive.push(8);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[6].children[1].style.display == "block" &&
          button[8].children[1].style.display == "block" &&
          button[7].children[3].style.display !== "block"
        ) {
          button[7].children[1].style.display = "block";
          x_masive.push(7);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[8].children[1].style.display == "block" &&
          button[7].children[1].style.display == "block" &&
          button[6].children[3].style.display !== "block"
        ) {
          button[6].children[1].style.display = "block";
          x_masive.push(6);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[0].children[1].style.display == "block" &&
          button[3].children[1].style.display == "block" &&
          button[6].children[3].style.display !== "block"
        ) {
          button[6].children[1].style.display = "block";
          x_masive.push(6);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[6].children[1].style.display == "block" &&
          button[3].children[1].style.display == "block" &&
          button[0].children[3].style.display !== "block"
        ) {
          button[0].children[1].style.display = "block";
          x_masive.push(6);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[0].children[1].style.display == "block" &&
          button[6].children[1].style.display == "block" &&
          button[3].children[3].style.display !== "block"
        ) {
          button[3].children[1].style.display = "block";
          x_masive.push(3);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[1].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[7].children[3].style.display !== "block"
        ) {
          button[7].children[1].style.display = "block";
          x_masive.push(7);

          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }
          console.log(o_masive);

          return false;
        }
        if (
          button[1].children[1].style.display == "block" &&
          button[7].children[1].style.display == "block" &&
          button[4].children[3].style.display !== "block"
        ) {
          button[4].children[1].style.display = "block";
          x_masive.push(4);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[7].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[1].children[3].style.display !== "block"
        ) {
          button[1].children[1].style.display = "block";
          x_masive.push(7);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[2].children[1].style.display == "block" &&
          button[5].children[1].style.display == "block" &&
          button[8].children[3].style.display !== "block"
        ) {
          button[8].children[1].style.display = "block";
          x_masive.push(8);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[2].children[1].style.display == "block" &&
          button[8].children[1].style.display == "block" &&
          button[5].children[3].style.display !== "block"
        ) {
          button[5].children[1].style.display = "block";
          x_masive.push(5);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[8].children[1].style.display == "block" &&
          button[5].children[1].style.display == "block" &&
          button[2].children[3].style.display !== "block"
        ) {
          button[2].children[1].style.display = "block";
          x_masive.push(2);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[0].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[8].children[3].style.display !== "block"
        ) {
          button[8].children[1].style.display = "block";
          x_masive.push(8);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[8].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[0].children[3].style.display !== "block"
        ) {
          button[0].children[1].style.display = "block";
          x_masive.push(0);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[8].children[1].style.display == "block" &&
          button[0].children[1].style.display == "block" &&
          button[4].children[3].style.display !== "block"
        ) {
          button[4].children[1].style.display = "block";
          x_masive.push(4);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[2].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[6].children[3].style.display !== "block"
        ) {
          button[6].children[1].style.display = "block";
          x_masive.push(6);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";

              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[2].children[1].style.display == "block" &&
          button[6].children[1].style.display == "block" &&
          button[4].children[3].style.display !== "block"
        ) {
          button[4].children[1].style.display = "block";
          x_masive.push(4);
          console.log(x_masive);
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }

          return false;
        }
        if (
          button[6].children[1].style.display == "block" &&
          button[4].children[1].style.display == "block" &&
          button[2].children[3].style.display !== "block"
        ) {
          button[2].children[1].style.display = "block";
          x_masive.push(2);
          x_masive.sort(function (a, b) {
            return a - b;
          });
          for (let i = 0; i < winningCombos.length; i++) {
            if (
              x_masive.some((b) => winningCombos[i].includes(b)) &&
              x_masive.length >= 3
            ) {
              display.style.display = "flex";
              display.children[0].textContent = "OH NO, YOU LOST…";
              mogeba();
              return false;
            }
          }}
          if(o_masive[0]==0){
            arry=[4,2,3,1,8]
  
          }
          if(o_masive[0]==1 ){
            arry=[4,2,8]
  
          }
          if(o_masive[0]==2 ){
            arry=[4,0,5,1,6]
  
          }

          if(o_masive[0]==3 ){
            arry=[4,8,6]
  
          }
          if(o_masive[0]==5 ){
            arry=[4,0,2]
  
          }
          if(o_masive[0]==7 ){
            arry=[4,0,6]
  
          }
          if(o_masive[0]==6){
            arry=[4,8,3,1,2]
  
          }
          if(o_masive[0]==8){
            arry=[4,6,5,1,0]
  
          }
  
  
  
  
          button[arry[count2]].children[1].style.display = "block";
    
          x_masive.push(arry[count2]);
          x_masive.sort(function (a, b) {
            return a - b;
          });
    
          console.log(x_masive);
         
  
          count2++
          if (count2 == 5) {
            for (let i = 0; i < button.length; i++) {
              button[i].removeEventListener("click", click);
            }
            display.style.display = "flex";
            display.children[1].style.display = "none";
            display.children[0].style.fontSize = "40px";
            display.children[0].textContent = "ROUND TIED";
            btn.removeEventListener("click", btn_func);

            container.style.filter = "blur(3px)";
            container.style.opacity = "20%";
            count_draw++;

            second.children[1].textContent = count_draw;
            round.addEventListener("click", () => {
              btn.style.cursor = "pointer";
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

              
              z=0;
              x_masive = [];
              o_masive = [];
              setTimeout(() => {
                button[4].children[1].style.display = "block";
          
                x_masive.push(4);
          
          
                turn.children[0].style.display = "none";
                turn.children[1].style.display = "block";
                your_turn = true;
              }, 1000);
              count2 = 1;
              
              for (let i = 0; i < button.length; i++) {
                button[i].children[1].style.display = "none";
                button[i].children[3].style.display = "none";
                turn.children[0].style.display = "block";
                turn.children[1].style.display = "none";
                button[i].addEventListener("click", click);
              }
              
            });
           
            
            document.body.style.backgroundColor = "black";
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
              return false;
            });

          
          }
    
          turn.children[0].style.display = "none";
          turn.children[1].style.display = "block";


        your_turn = true;





      }, 1000);
    }

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", click);
    }
  }
}
 // როგორც იქნა!<3 