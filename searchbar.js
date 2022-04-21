var input = document.getElementById("mySearch");
var lessonOne = document.getElementById("lesson-one");
var lessonOneContent = lessonOne.textContent.toLowerCase();
var lessonOneArr= lessonOneContent.split(/\W/g)
var lessonTwo = document.getElementById("lesson-two");
var lessonTwoContent = lessonTwo.textContent.toLowerCase();
var lessonTwoArr = lessonTwoContent.split(/\W/g)
var noMatchesBanner = document.getElementById("noMatchesBanner")
//use split on the string, instead of checking is equal, check if text input is within the sting (sub-sting) 

function searchFunction(e) {
    var text = e.target.value.toLowerCase();
    let isLessonOneAMatch = false;
    let isLessonTwoAMatch = false;
    let userInput = text.split(/\W/g);
    // console.log(userInput)
    // console.log(lessonOneArr)
    // console.log(lessonTwoArr)

   for (let i = 0; i < userInput.length; i++) {
       for (let j = 0; j < lessonOneArr.length; j++) {
           if (lessonOneArr[j].includes(userInput[i])===true){
        isLessonOneAMatch =  true
        // console.log(isLessonOneAMatch)
    //         if (lessonOneArr.includes(userInput[i]) === lessonOneArr[j]) {
    //             isLessonOneAMatch = true;
           }
         };
       for (let k = 0; k < lessonTwoArr.length; k++) {
           if(lessonTwoArr[k].includes(userInput[i])===true){
        isLessonTwoAMatch =  true
        // console.log(isLessonTwoAMatch)
    //         if (userInput[i] === lessonTwoArr[k]) {
    //             isLessonTwoAMatch = true;
             }
         };
    // };
       if (isLessonOneAMatch === true && isLessonTwoAMatch === true) {
           //console.log("they are both matches");
            lessonOne.style.display = "block";
           lessonTwo.style.display = "block";
           noMatchesBanner.style.display = "none";
       } else
           if (isLessonTwoAMatch === true) {
              // console.log("lesson Two is a match");
              lessonOne.style.display = "none";
               lessonTwo.style.display = "block";
               noMatchesBanner.style.display = "none";
           } else
               if (isLessonOneAMatch === true) {
                   //console.log("lesson One is a match");
                lessonOne.style.display = "block";
                   lessonTwo.style.display = "none";
                   noMatchesBanner.style.display = "none";
               } else {
                   //console.log("there are no matches");
                lessonOne.style.display = "none";
                   lessonTwo.style.display = "none";
                   noMatchesBanner.style.display = "block";
                
               }
    }
}

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchFunction(e);
        }
    });
