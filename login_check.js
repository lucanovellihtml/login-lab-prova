let keyUsername = "array_iscrizione_username";
let keyPassword = "array_iscrizione_password";


let username = document.getElementById("username");
let password = document.getElementById("password");
let unsernameIscrizione = document.getElementById("username_iscrizione");
let passwordIscrizione = document.getElementById("password_iscrizione");
let buttonLogin = document.getElementById("button1");
let buttonIscrizione = document.getElementById("button2");
let buttonClosePopupF = document.getElementById("bottone_close_fail");
let buttonClosePopupK = document.getElementById("bottone_close_okey");
let popUpFail = document.getElementById("popup_box_fail");
let popUpOk = document.getElementById("popup_box_ok");



//VIENE ANALIZZATO IL CLICK AL BOTTONE DI LOGIN, POI INNESCATO IL METODO DI CONTROLLO DELLA LOGIN
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

//VIENE ANALIZZATO IL CLICK AL BOTTONE DI ISCRIZIONE, POI INNESCATO IL METODO DI SALVATAGGIO DELL'INPUT
buttonIscrizione.addEventListener("click", function () {
    console.clear();
    saveSubscribe(keyUsername, unsernameIscrizione, "USERNAME");
    saveSubscribe(keyPassword, passwordIscrizione, "PASSWORD");
})

//VIENE CONTROLLATO QUALE PULSTANTE DI ESC POPUP VIENE CLICCATO
window.addEventListener("click", function (event) {

    if (event.target == buttonClosePopupF)
        popUpFail.classList.remove("show");

    if (event.target == buttonClosePopupK)
        popUpOk.classList.remove("show");
})

//VIENE SALVATO L'INPUT NELLO SPAZIO DI ARCHIVIAZIONE LOCALE
function saveSubscribe(key, element, stringa) {

    if (localStorage.getItem(key) == null)
        localStorage.setItem(key, "[]");

    array = JSON.parse(localStorage.getItem(key));

    if (element.value.length == 0) {
        popUpFail.classList.add("show");
    }
    else {
        array.push(element.value);
        localStorage.setItem(key, JSON.stringify(array));
        popUpOk.classList.add("show");
        console.log(stringa + "-->" + array);
    }


}



