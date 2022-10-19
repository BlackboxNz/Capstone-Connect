async function test() {
    console.log("test");
}
projectfilter("all")
function projectfilter(c) {
    var x, i;
    x = document.getElementsByClassName("project-cont");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


//Projects
const projectsContainer = document.getElementById("projects");

// Fetches all projects from api
const getAllProjects = () => {
    const fetchPromise = fetch(`https://localhost:5000/webapi/GetAllProjects`,
        {
            headers: {
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "https://localhost:5000/webapi/GetAllProjects"
            },
            
        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showAllProjects(data));
}

const showAllProjects = (projects) => {
    // Loops through each project to create a project card
    projects.map(function (project) {
        // Fetch the corresponding image
        fetch(`https://localhost:5000/webapi/GetProjectImage/${project.id}`)
            .then((response) => response.blob())
            .then((imageBlob) => {
                // Create the card with a div element
                const card = document.createElement("div");
                card.classList = "card col-3";
                card.id = project.id;
                // Create an image element
                const image = document.createElement("img");
                const imageObjectURL = URL.createObjectURL(imageBlob);
                image.src = imageObjectURL;
                image.alt = `Image of ${project.projectName}`;
                image.height = 150;
                // Create the title
                const title = document.createElement("h4");
                title.classList = "line-clamp-1";
                title.innerHTML = project.projectName;

                // Create the description text
                const projectOverview = document.createElement("p");
                projectOverview.classList = `line-clamp-3 justify ${project.id}-desc`;
                projectOverview.innerHTML = project.projectOverview;
                //button
                const button = document.createElement("button");
                button.classList = `proj-btn ${project.id}-btn`;
                button.setAttribute("onclick", `location.href='template.html'`);
                button.innerHTML = "View More";
                // Place all the elements in the card div
                card.append(image, title, projectOverview, button);
                
                projectsContainer.append(card);
            });
    });
};



//Login and register functions. 
function register() {
    const emailText = document.getElementById("reg-email").value;
    const passwordText = document.getElementById("reg-pwd").value;
    const firstnameText = document.getElementById("firstname").value;
    const lastnameText = document.getElementById("lastname").value;
    const userJSON = {
        Email: emailText,
        Password: passwordText,
        FirstName: firstnameText,
        LastName: lastnameText,
    }

    fetch("https://localhost:5000/webapi/Register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://localhost:5000/webapi/Register"
        },
        body: JSON.stringify(userJSON)
    })
    .then(response => response.text())
    .then(data => alert(data))
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-pwd").value;

    fetch("https://localhost:5000/webapi/GetAuth", {
        method: "GET",
        headers: {
            "Content-Type": "application/html",
            "Authorization": "Basic " + btoa(`${email}:${password}`),
            "Accept": "application/xml",
            "Allow-Control-Allow-Origin": "https://localhost:5000/webapi/GetAuth"
        }
    })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("auth", "true");
                alert(response.text())
                //showHome();
                //document.getElementById("logout").style.display = "inline";
            }
            else {
                //document.getElementById("login-response").innerHTML = "Login Unsuccessful"
            }
        });
}