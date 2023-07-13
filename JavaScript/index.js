function hambtogg() {
    let x = document.getElementById("nav-content");
    let y = document.getElementById("hamburger");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.backgroundColor = "#177caf";
    } else {
      x.style.display = "none";
      y.style.backgroundColor = "#000000";
    }
  }
  
  function ThemeChange() {
    var element = document.getElementById("body");
    element.classList.toggle("dark-theme");
    var elembutton = document.getElementById("themebtn");
    elembutton.classList.toggle("button-light");
  }
  