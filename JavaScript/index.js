function hambtogg() {
    let x = document.getElementById("nav-content");
    let y = document.getElementById("hamburger");
     {
         if(x.style.display ==="none")
         {
             x.style.display = "block";
             y.style.backgroundColor = "#ff7300";
            }else {
                x.style.display = "none";
                y.style.backgroundColor = "#ffffff";
         }
     }
   }