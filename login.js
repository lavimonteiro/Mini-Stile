
function loginForm() {
    return document.forms["login"];
};

function createAccountForm() {
    return document.forms["createAccount"];
}

function toggleCreateAccountLoginForms () {
    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
    e.preventDefault();
    loginForm().classList.add("form--hidden")
    createAccountForm().classList.remove("form--hidden")
    });

    document.querySelector("#linkLogin").addEventListener("click", e=>{
    e.preventDefault();
    loginForm().classList.remove("form--hidden")
    createAccountForm().classList.add("form--hidden")
    });
}

function storingCreatAccountDetails(){
    createAccountForm().addEventListener("submit", (event) => {
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

                loginForm().classList.remove("form--hidden")
                createAccountForm().classList.add("form--hidden")
                console.log(localStorage)

                const usernameInput = document.getElementsByName("username");
                console.log(usernameInput, usernameInput.value)

            }
            else {
            let messageElement = document.querySelector(".create-account-error")
            messageElement.textContent = "Password does not match. Please Try again."
            }
        })
}

document.addEventListener("DOMContentLoaded", toggleCreateAccountLoginForms);
document.addEventListener("DOMContentLoaded", storingCreatAccountDetails);


    document.addEventListener("DOMContentLoaded", () =>{
    document.forms["login"].addEventListener("submit", (event) => {
        event.preventDefault();
        let informationArray = [];
        let  inputs = document.querySelectorAll("#login input");
        inputs.forEach( input => {
            informationArray.push(input.value);
            });

        if (localStorage.getItem("username") === informationArray[0] && localStorage.getItem("password") === informationArray[1]){
            let messageElement = document.querySelector(".login-error")
            messageElement.textContent = ""

            sessionStorage.setItem("login successful", localStorage.getItem("username"))
            console.log(sessionStorage)

            loginForm().classList.add("form--hidden")
            const logoutForm = document.querySelector('#logout');
            logoutForm.classList.remove("form--hidden")

        }

        else {
            let messageElement = document.querySelector(".login-error")
            messageElement.textContent = "Invalid username or password."
         }
    });
});

document.addEventListener("DOMContentLoaded", () =>{
//what should i check for??
    if (sessionStorage.length > 1){
        loginForm().classList.add("form--hidden")
            const logoutForm = document.querySelector('#logout');
            logoutForm.classList.remove("form--hidden")



        document.forms["logout"].addEventListener("submit", e =>{
            e.preventDefault();
            sessionStorage.clear();

            const loginForm = document.querySelector('#login');
            loginForm.classList.remove("form--hidden")
            const logoutForm = document.querySelector('#logout');
            logoutForm.classList.add("form--hidden")
        });
    }

});
