

var icon = document.getElementsByClassName("icon");
var i;
var onIconClick= function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
for (i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", onIconClick);
}
