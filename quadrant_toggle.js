var topLeft = document.getElementById("topLeft");
var topRight = document.getElementById("topRight");
var bottomLeft = document.getElementById("bottomLeft");
var bottomRight = document.getElementById("bottomRight");
document.addEventListener("click", painter);
function painter(event) {
  var t = event.target.style;
  if (t.backgroundColor === "white") {
    t.backgroundColor = "gold";
  } else {
    t.backgroundColor = "white";
  }
}
