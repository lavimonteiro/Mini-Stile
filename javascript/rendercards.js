console.log(document.URL);
fetch("/api/v1/library/cards")
.then(response => response.json())
.then(data => {
    console.log(data.length);
});