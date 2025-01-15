// Implémenter le JS dans ma page

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PreNomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordNomInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);

function validateForm(){
    
    // Function qui va vérifier si les champs sont bien remplis

    const nomOk = validateRequired(inputNom);
    const preNomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordCorfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && preNomOk && mailOk && passwordOk && passwordCorfirmOk){

        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
} 
else{
    inputConfirmPwd.classList.add("is-invalid");
    inputConfirmPwd.classList.remove("is-valid");
    return false;
    }
}

function validatePassword(input){
    // Défénir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){

        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{

        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateMail(input){
    // Défénir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){

        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{

        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(input){
    if(input.value !==''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        // c'est ok
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
        // c'est pas ok
    }
}