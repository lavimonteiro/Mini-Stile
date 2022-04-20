var icon = document.getElementsByClassName("icon");
var i;
let onIconClick = function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var overlay = content.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
        overlay.style.display = "block";
    } else {
        content.style.display = "block";
        overlay.style.display = "none";
    }
  }
for (i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click",onIconClick);
}

