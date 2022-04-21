var input = document.getElementByClass("mySearch");
let filter = input.value.toUpperCase();
let lessons = document.getElementByClass("lessons");
let lessonOne = lessons.getElementsByClass("lesson-one");
let lessonTwo = lessons.getElementsByClass("lesson-two");
let lessonOneContent = lessonOne.getElementsByClass("content");
let lessonTwoContent = lessonTwo.getElementsByClass("content");

// function searchFunction() {
//     console.log(input)
//     var text = e.target.value;
//     alert(text);
// }

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter"|| e.key === "Return") {  
      console.log(input)
    }
  });

 