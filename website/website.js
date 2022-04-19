const content = document.getElementById("content");
const ls = document.querySelectorAll("li");
const firstName = document.getElementById("fname");
const webServerContent = document.getElementById("web-server-content");
const pages = document.getElementsByClassName("page");








for (
    let i = 0; i < ls.length; i++
) {
    ls[i].addEventListener("click", function () {
        // console.log(this.innerText);

        for (let i = 0; i < ls.length; i++) {
            ls[i].removeAttribute("class");
        }



        switch (this.innerText) { //page content code block
            case "Home":
                ls[i].setAttribute("class", "active");
                location.hash = "home";
                //forlet i = 0; i < pages.length; i++
                content.innerHTML = pages[0].innerHTML;
                break;
            case "Projects":
                ls[i].setAttribute("class", "active");
                location.hash = "projects";
                content.innerHTML = pages[1].innerHTML;
                break;
            case "About":
                ls[i].setAttribute("class", "active");
                location.hash = "about";
                content.innerHTML = pages[2].innerHTML;
                break;
            case "Contact":
                ls[i].setAttribute("class", "active");
                location.hash = "contact";
                content.innerHTML = pages[3].innerHTML;
                break;
            case "Login":
                ls[i].setAttribute("class", "active");
                location.hash = "login";
                if (token != "") {
                    content.innerHTML = "<h1>already logged in</h1>";
                    content.innerHTML += "<button id=\"outbttn\" class=\"login\">Logout</button>";


                    var outbttn = document.getElementById("outbttn"); //reset to original page
                    outbttn.addEventListener("click", function () {
                        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        location.reload();

                    })
                } else {
                    content.innerHTML = pages[4].innerHTML;
                }

                var logbttn = document.getElementById("logbttn");
                logbttn.addEventListener("click", function () {
                    if (document.getElementById("email").value == localStorage.getItem("email") && document.getElementById("password").value == localStorage.getItem("password")) {
                        console.log("valid user")
                        setCookie("token", "55ttjh")
                        location.reload();

                    } else {
                        console.log("invalid user")
                    }

                })

                break;
            default:
                ls[0].setAttribute("class", "active");
                location.hash = "home";
                //forlet i = 0; i < pages.length; i++
                content.innerHTML = pages[0].innerHTML;
        }
    });
}


console.log(window.location.href);

const url = window.location.href;
urlcomps = url.split("#");
console.log(urlcomps[0]);
// console.log(urlcomps[1]);
let page = urlcomps[1];



switch (page) { //page address code block for the # thing
    case "home":
        ls[0].setAttribute("class", "active");
        content.innerHTML = pages[0].innerHTML;
        break;
    case "projects":
        ls[1].setAttribute("class", "active");
        content.innerHTML = pages[1].innerHTML;
        break;
    case "about":
        ls[2].setAttribute("class", "active");
        content.innerHTML = pages[2].innerHTML;
        break;
    case "contact":
        ls[3].setAttribute("class", "active");
        content.innerHTML = pages[3].innerHTML;
        break;
    case "login":
        ls[4].setAttribute("class", "active");
        content.innerHTML = pages[4].innerHTML;
        break;
    default:
        ls[0].setAttribute("class", "active");
        //forlet i = 0; i < pages.length; i++
        content.innerHTML = pages[0].innerHTML;
}
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// var logbttn = document.getElementById("logbttn");
// logbttn.addEventListener("click", function () {
//     console.log("HEY, click");
// })