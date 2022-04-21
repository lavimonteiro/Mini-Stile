var input = document.getElementById("mySearch");
var filter = input.value.toUpperCase();
var lessonOne = document.getElementById("lesson-one");
var lessonOneContent = lessonOne.textContent;
var lessonTwo = document.getElementById("lesson-two");
var lessonTwoContent = lessonTwo.textContent;



function searchFunction(e) {
    var text = e.target.value;
    console.log(text)
}

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchFunction(e);
        }
    });