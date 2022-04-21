
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

// document.addEventListener("DOMContentLoaded", () =>{
//          document.forms["login"].addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log(event.name, event.value)
//         });
// });























        // console.log(checkPasswords())


    //save to local storage
    // if(checkPasswords() === true){
    //     inputs.forEach( input => {
    //     localStorage.setItem(input.name, input.value);
    //     });
    //     // const loginForm = document.querySelector('#login');
    //     // const createAccountForm = document.querySelector('#createAccount');
    //     // loginForm.classList.remove("form--hidden")
    //     // createAccountForm.classList.add("form--hidden")
    // }

    // else {
    // //    setFormMessage(".form-message-error", "Password does not match please try again")
    // console.log("fail")
    // }

    // console.log(localStorage)



