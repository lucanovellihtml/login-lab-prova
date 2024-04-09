let keyUsername = "array_iscrizione_username";
let keyPassword = "array_iscrizione_password";


let username = document.getElementById("username");
let password = document.getElementById("password");
let unsernameIscrizione = document.getElementById("username_iscrizione");
let passwordIscrizione = document.getElementById("password_iscrizione");
let buttonLogin = document.getElementById("button1");
let buttonIscrizione = document.getElementById("button2");
let buttonClosePopup = document.getElementById("bottone_close");
let popUp = document.getElementById("popup_box_fail");

/*if (username != null && password != null && buttonLogin != null) {
    console.log("ELEMENTI ESISTONO");
} else {
    console.log("ELEMENTI NON ESISTONO");
}*/


buttonLogin.addEventListener("click", function () {
    console.clear();
    let arrayUsername = JSON.parse(localStorage.getItem(keyUsername));
    let arrayPassword = JSON.parse(localStorage.getItem(keyPassword));

    let auth = false;

    for (let i = 0; i <= arrayUsername.length; i++) {
        if (username.value === arrayUsername[i]) {
            let posizione = i;
            if (password.value === arrayPassword[posizione]) {
                /*console.log("USERNAME INSERITO --> " + username.value + " - PAASWORD INSERITA --> " + password.value);*/
                auth = true;
                break;
            }
        }
    }

    if (!auth)
        console.log("-- AUTH FALLITA --");
    else {
        console.log("-- AUTH COMPLETATA --");

    }

})


buttonIscrizione.addEventListener("click", function () {
    console.clear();
    saveSubscribe(keyUsername, unsernameIscrizione, "USERNAME");
    saveSubscribe(keyPassword, passwordIscrizione, "PASSWORD");
})


window.addEventListener("click", function (event) {

    if (event.target == buttonClosePopup)
        popUp.classList.remove("show");

})


function saveSubscribe(key, element, stringa) {

    if (localStorage.getItem(key) == null)
        localStorage.setItem(key, "[]");

    array = JSON.parse(localStorage.getItem(key));

    if (element.value.length == 0) {
        popUp.classList.add("show");
    }
    else {
        array.push(element.value);
        localStorage.setItem(key, JSON.stringify(array));
        console.log(stringa + "-->" + array);
    }


}
