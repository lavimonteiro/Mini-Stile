console.log(document.URL);
var lesson = localStorage.getItem("lesson");
var heading = document.getElementById("lesson-title");
var textContent = document.getElementById("text-content");
function getLessonData(lessonUrl) {  
    fetch("/api/v1/library/lesson/${lessonUrl}")
    .then(response => response.json())
    .then(data => {
        heading.innerHTML = data.lesson_title
        textContent.innerHTML = data.text_content
    });
}

getLessonData(lesson)