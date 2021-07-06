let url = "http://localhost:8080/Project_1/controller";
let logged_in;

function fillRequests() {
    console.log("filling requests table");
    let flag = "/get_requests";

    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url + flag, true);
    xhttp.send();

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                // let rt = xhttp.responseText;
                // let json = JSON.parse(rt);
                let strs = xhttp.responseText.split("|");
                logged_in = strs[0];
                let stories = JSON.parse(strs[1]);

                // console.log(json);

                let table = document.getElementById("requests");
                for (let story of stories) {
                // for (let story of json) {
                    let tr = document.createElement("tr");
                    
                    // Author
                    let td = document.createElement("td");
                    td.setAttribute("class", "green purple-background");
                    td.innerHTML = story.author.firstName + " " + story.author.lastName;
                    td.onclick = () => {
                        handleRowClick(story);
                    }
                    tr.appendChild(td);

                    // Title
                    td = document.createElement("td");
                    td.setAttribute("class", "green purple-background");
                    td.innerHTML = story.title;
                    td.onclick = () => {
                        handleRowClick(story);
                    }
                    tr.appendChild(td);

                    // Story Name
                    td = document.createElement("td");
                    td.setAttribute("class", "green purple-background");
                    td.innerHTML = story.type.name;
                    td.onclick = () => {
                        handleRowClick(story);
                    }
                    tr.appendChild(td);

                    // Approval Status
                    td = document.createElement("td");
                    td.setAttribute("class", "green purple-background");
                    td.innerHTML = story.approvalStatus;
                    td.onclick = () => {
                        handleRowClick(story);
                    }
                    tr.appendChild(td);
                    
                    table.appendChild(tr);
                }
            }
        }
    }
}

function handleRowClick(story) {
    let flag = "/save_story_to_session";
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", url + flag, true);
    xhttp.send(JSON.stringify(story));

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                if (xhttp.responseText == "saved") {
                    window.location.href = "info_request.html";
                }
            }
        }
    }
}

function populateInfoRequest() {
    let flag = "/get_story_from_session";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + flag, true);
    xhttp.send();

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status = 200) {
                let strs = xhttp.responseText.split("|");
                logged_in = strs[0];
                let story = JSON.parse(strs[1]);

                let ir_title = document.getElementById("ir_title");
                let ir_requestor = document.getElementById("ir_requestor");
                let ir_request = document.getElementById("ir_request");

                ir_title.innerHTML = story.title;
                ir_requestor.innerHTML = story.requestorName;
                ir_request.innerHTML = story.request;

                ir_title.setAttribute("class", "purple light-grey-background");
                ir_requestor.setAttribute("class", "purple light-grey-background");
                ir_request.setAttribute("class", "purple light-grey-background");

                let send_response_button = document.getElementById("send_response_button");
                send_response_button.onclick = () => {
                    let ir_response = document.getElementById("ir_response");
                    story.response = ir_response.value;
                    sendResponse(story);
                }
            }
        }
    }
}

function sendResponse(story) {
    let flag = "/save_response";
    let json = JSON.stringify(story);
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", url + flag, true);
    xhttp.send(json);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                
            }
        }
    }
}

function listBack() {
    if (logged_in == "editor") {
        window.location.href = "editor_main.html";
    } else if (logged_in == "author") {
        window.location.href = "author_main.html";
    }
}

function sfBack() {
    window.location.href = "info_request_list.html";
}