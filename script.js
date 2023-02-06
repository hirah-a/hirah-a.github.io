function myFunction() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    }

  

function switch1(){
    var up = document.getElementById("light");
    var down = document.getElementById("dark")

    if (up.style.display === "none") {
      up.style.display = "block";
      down.style.display ="none";

    } else {
      down.style.display = "block";
      up.style.display = "none";

    }
}

