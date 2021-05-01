/**
 * @author Xiaoqi Long
 * CS 101
 * JS file for LSAT mistake collection (CP2)
 * The 'draggable' attribute is learned from https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API
 * I intended to create a Kanban but ended up not doing it, since I realized that
 * it is well beyond what we have learned in class. However, I still kept the draggable
 * feature.
 */

 
(function() {
  "use strict";

  function init() {
    document.getElementById("btn-lr-1").addEventListener("click", newElementLR1);
    document.getElementById("btn-lr-2").addEventListener("click", newElementLR2);
    document.getElementById("btn-lr-3").addEventListener("click", newElementLR3);
    document.getElementById("btn-rc-1").addEventListener("click", newElementRC1);
    document.getElementById("btn-rc-2").addEventListener("click", newElementRC2);
    document.getElementById("btn-rc-3").addEventListener("click", newElementRC3);
    document.getElementById("btn-lg-1").addEventListener("click", newElementLG1);
    document.getElementById("btn-lg-2").addEventListener("click", newElementLG2);
    document.getElementById("btn-lg-3").addEventListener("click", newElementLG3);
    document.getElementById("swap").addEventListener("click", switchTheme);
    document.getElementById("view").addEventListener("click", toggleView);
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.draggable = true;
  };
  }

  /*
  Toggles the hidden status of the archive table
  */
  function toggleView() {
    document.getElementById("archive").classList.toggle("hidden");
  }

  /*
  Add a new element to the current column
  */
  function newElementLR1() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lr-1").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("todo-lr").appendChild(newCard);
    }
  }

  function newElementLR2() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lr-2").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("fst-lr").appendChild(newCard);
    }
  }

  function newElementLR3() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lr-3").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("snd-lr").appendChild(newCard);
    }
  }

  function newElementRC1() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-rc-1").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("todo-rc").appendChild(newCard);
    }
  }

  function newElementRC2() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-rc-2").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("fst-rc").appendChild(newCard);
    }
  }

  function newElementRC3() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-rc-3").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("snd-rc").appendChild(newCard);
    }
  }

  function newElementLG1() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lg-1").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("todo-lg").appendChild(newCard);
    }
  }

  function newElementLG2() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lg-2").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("fst-lg").appendChild(newCard);
    }
  }

  function newElementLG3() {
    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.draggable = true;
    var inputValue = document.getElementById("input-todo-lg-3").value;
    newCard.innerHTML += inputValue;
    if (inputValue === '') {
      alert("Input should not be empty");
    } else {
      document.getElementById("snd-lg").appendChild(newCard);
    }
  }

  /*
  Toggle between dark mode and light mode.
  */
  function switchTheme() {
    const btn = document.getElementById("swap");
    const theme = document.getElementById("theme-link");
    if (theme.getAttribute("href") == "light-mode.css") {
       theme.href = "dark-mode.css";
       btn.innerHTML = 'light mode';
     } else {
       theme.href = "light-mode.css";
       btn.innerHTML = 'dark mode';
     }
  }

  init();

})();
