var lessonOneButton = document.getElementsByClassName("goToLessonOne");
var i;
let onLessonOneButtonClick = function () {
    if (sessionStorage.length >= 1) {
        window.location.href = '/lesson1';
    } else { window.location.href = '/profile';
     
    }
  }
for (i = 0; i < lessonOneButton.length; i++) {
    lessonOneButton[i].addEventListener("click", onLessonOneButtonClick);
}

var lessonTwoButton = document.getElementsByClassName("goToLessonTwo");
var i;
let onLessonTwoButtonClick = function () {
    if (sessionStorage.length >= 1) {
        window.location.href = '/lesson2';
    } else { window.location.href = '/profile';
     
    }
  }
for (i = 0; i < lessonTwoButton.length; i++) {
    lessonTwoButton[i].addEventListener("click", onLessonTwoButtonClick);
}
