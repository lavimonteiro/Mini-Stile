
document.addEventListener("DOMContentLoaded", () => {
const loginForm = document.querySelector('#login');
const createAccountForm = document.querySelector('#createAccount');

    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
    e.preventDefault();
    loginForm.classList.add("form--hidden")
    createAccountForm.classList.remove("form--hidden")
    });

    document.querySelector("#linkLogin").addEventListener("click", e=>{
    e.preventDefault();
    loginForm.classList.remove("form--hidden")
    createAccountForm.classList.add("form--hidden")
    });
});

document.addEventListener("DOMContentLoaded", () =>{
    document.forms["createAccount"].addEventListener("submit", (event) => {
        event.preventDefault();

        let  inputs = document.querySelectorAll("#createAccount input");
        
        //check if passwords match 
        let passwordArray = [];
        inputs.forEach( input => {
            if (input.name === "password" || input.name === "password-confirm"){
                passwordArray.push(input.value)
                }
            });
            if (passwordArray[0] === passwordArray[1]){
                inputs.forEach( input => {
                    localStorage.setItem(input.name, input.value);
                });

                const loginForm = document.querySelector('#login');
                const createAccountForm = document.querySelector('#createAccount');
                loginForm.classList.remove("form--hidden")
                createAccountForm.classList.add("form--hidden")
                console.log(localStorage)
            }
            else {
            let messageElement = document.querySelector(".create-account-error")
            messageElement.textContent = "Password does not match. Please Try again."
            }
        })
    });

document.addEventListener("DOMContentLoaded", () =>{
    document.forms["login"].addEventListener("submit", (event) => {
        event.preventDefault();

        let informationArray = [];

        let  inputs = document.querySelectorAll("#login input");
        inputs.forEach( input => {
            informationArray.push(input.value);
            });

        if (localStorage.getItem("username") === informationArray[0] && localStorage.getItem("password") === informationArray[1]){
            console.log("success")
            let messageElement = document.querySelector(".login-error")
            messageElement.textContent = ""

            sessionStorage.setItem("login successful", localStorage.getItem("username"))
            console.log(sessionStorage)

            const loginForm = document.querySelector('#login');
            loginForm.classList.add("form--hidden")

            let container = document.querySelector(".profile-container")
            container.textContent = "Hello " + localStorage.getItem("username") + " you're logged in!"
        }

        else {
            let messageElement = document.querySelector(".login-error")
            messageElement.textContent = "Invalid username or password."
         }
    });
});

// document.addEventListener("DOMContentLoaded", () =>{
// if (sessionStorage){
//     const loginForm = document.querySelector('#login');
//     loginForm.classList.add("form--hidden")

//     let container = document.querySelector(".profile-container")
//     container.textContent = "Hello " + localStorage.getItem("username") + " you're logged in!"
//     }
// });