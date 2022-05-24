var lessonOneButton = document.getElementsByClassName("goToLessonOne");
var i;
let onLessonOneButtonClick = function () {
    if (sessionStorage.length >= 1) {
        window.location.href = '/lesson';
        fetch("/api/v1/library/lesson/all%20about%20killer%20whales")
            .then(response => response.json())
            .then(data => 
                console.log(data)
                );
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
        window.location.href = '/lesson';
        fetch("/api/v1/library/lesson/all%20about%20cats")
        .then(response => response.json())
            .then(data => 
                console.log(data))
    } else { window.location.href = '/profile';
     
    }
  }
for (i = 0; i < lessonTwoButton.length; i++) {
    lessonTwoButton[i].addEventListener("click", onLessonTwoButtonClick);
}
