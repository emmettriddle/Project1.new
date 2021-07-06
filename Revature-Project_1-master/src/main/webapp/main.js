let url = "http://localhost:8080/Project_1/controller"

function login(source) {
    // The stuff happening out here (outside of onreadystatechange) is to prepare data and send it TO the server
    console.log("Logging In");
    let flag;
    console.log(source)
    if (source == 'Editor') {
        flag = "/editor_login";
    } else if (source == 'Author') {
        flag = "/author_login";
    }
    let loginObj = {
        username: document.getElementById("Username").value,
        password: document.getElementById("Password").value
    };

    console.log("login info: " + loginObj);
    let json = JSON.stringify(loginObj);
    console.log("json: " + json);

    let xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", url + flag, true);
    xhttp.send(json);

    xhttp.onreadystatechange = () => {
        // window.location.href = "url here";
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                // The stuff in here is what we want to do with data returned to us FROM the server
                console.log("Request is ready and OK");
                // Load the new HTML page sent to us from the servlet
                window.location.href = xhttp.responseText;
            } else {
                // do error handling for not 'OK'
            }
        } else {
            // do error handling for not being ready
        }
    }
}