const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSigin = document.getElementById("btnSigin");

btnSigin.addEventListener("click", chehckCredentials);

function chehckCredentials() {
    // Ici, il faudra appeler l'API pour vérifier les crédentials en BDD
    if(mailInput.value == "test@mail.com" && passwordInput.value == "1234") {
        alert("Vous êtes connecté");

          const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";

          // palcer ce token en cookie
        setToken(token);
        
        window.location.replace("/");

        
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}