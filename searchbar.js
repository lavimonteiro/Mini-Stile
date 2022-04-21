var input = document.getElementById("mySearch");
var lessonOne = document.getElementById("lesson-one");
var lessonOneContent = lessonOne.textContent.toLowerCase();
var lessonOneArr= lessonOneContent.split(/\W/g)
var lessonTwo = document.getElementById("lesson-two");
var lessonTwoContent = lessonTwo.textContent.toLowerCase();
var lessonTwoArr= lessonTwoContent.split(/\W/g)
//use split on the string, instead of checking is equal, check if text input is within the sting (sub-sting) 

function searchFunction(e) {
    var text = e.target.value.toLowerCase();
    let isLessonOneAMatch = false;
    let isLessonTwoAMatch = false;
    let userInput = text.split(/\W/g);
    console.log(userInput)
    console.log(lessonOneArr)
    console.log(lessonTwoArr)
   for (let i = 0; i < userInput.length; i++) {
        
        for (let j = 0; j < lessonOneArr.length; j++) {
            if (userInput[i] === lessonOneArr[j]) {
                isLessonOneAMatch = true;
            }
        };
        for (let k = 0; k < lessonTwoArr.length; k++) {
            if (userInput[i] === lessonTwoArr[k]) {
                isLessonTwoAMatch = true;
            }
        };
    };
    if (isLessonOneAMatch === true && isLessonTwoAMatch === true) {
        console.log("they are both matches");
    } else
        if (isLessonTwoAMatch === true) {
                console.log("lesson Two is a match");
    } else
    if (isLessonOneAMatch === true) {
        console.log("lesson One is a match");
    } else {
            console.log("there are no matches");
    }
}

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchFunction(e);
        }
    });