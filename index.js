const checkBox = document.querySelector("#flexSwitchCheckDefault");
const body = document.querySelector("body");
const titres = document.querySelectorAll('h4');
const theme = document.querySelector(".form-check-label");
const navbar = document.querySelector(".container-fluid");
const iframes = document.querySelectorAll("iframe");

checkBox.addEventListener('click', function() {

    body.classList.toggle("darkMode");
    titres.forEach(titre => {
        titre.classList.toggle("darkMode");
    })

    theme.classList.toggle("darkMode");

    navbar.classList.toggle("darkMode");

    iframes.forEach(iframe => {
        iframe.classList.toggle("darkMode");
    })






    // if (this.checked) {
    //     body.classList.add("darkMode");


    // } else {
    //     body.classList.remove("darkMode");
    // }

});