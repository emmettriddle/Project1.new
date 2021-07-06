let url = "http://localhost:8080/Project_1/controller"

function submitSignUp() {
    let flag = "/sign_up_author";

    let obj = {
        id: -1,
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        bio: document.getElementById("sign_up_bio").value,
        points: 100,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    // TODO: do the comparison between this and obj.password!!!
    let confirm_password = document.getElementById("confirm");

    let json = JSON.stringify(obj);
    console.log(json);

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", url + flag, true);
    xhttp.send(json);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                window.location.href = xhttp.responseText;
                console.log("RECEIVED RESPONSE FROM SIGN UP");
            }
        }
    }
}