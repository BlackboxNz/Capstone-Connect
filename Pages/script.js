async function test() {
    console.log("test");
}
projecttag("all")
function projecttag(c) {
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
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "https://localhost:5000/webapi/GetAllProjects"
            }
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
                button.addEventListener("click", function () {
                    loadIndividualProject(project.id);
                  });
                button.innerHTML = "View More";
                // Place all the elements in the card div
                card.append(image, title, projectOverview, button);
                
                projectsContainer.append(card);
            });
    });
};

const loadIndividualProject = (id) => {
    const fetchPromise = fetch(`https://localhost:5000/webapi/GetProject/` + id,
        {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "https://localhost:5000/webapi/GetProject/"+id
            },
            
        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showProject(data));
}

const showProject = (project) => {
    console.log(project);
    document.getElementById("projectModal").style.display = "block";
    document.getElementById(
    "modal-text"
    ).innerHTML = `
        <div class="modal-fs" role="document">
            <div class="modal-content2">
                <div class="modal-body">
                    <!--header-->
                    <div class="header" style="border-radius: 15px;">
                        <div>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="font-size: 3.5em; color: white;" aria-label="Close">&times</button>
                        </div>
                        <div style="text-align: center;">
                            <h1 style="font-weight: bold; font-size: 6em; ">${project.teamName}</h1>
                            <p style="padding: 15px;">By</p>
                            <p></p>
                            <h4>Users go here. </h4>
                        </div>
                    </div>

                    <!--body-->
                    <div class="flex-container card">
                        <div style="padding-left: 250px; padding-right: 250px;">
                            <div class="overview">
                                <h1 style="font-size: 3.5em; font-weight: bold;">Blurb</h1>
                                <p></p>
                                <p style="font-size: 1.8em;">
                                    ${project.projectOverview}
                                </p>
                            </div>

                            <div class="overview">
                                <div style="text-align: center;padding: 50px;border-color: #d6d2d2; border-radius: 15px;">
                                    <iframe width="1000" height="563" src="${project.video}"></iframe>
                                </div>
                            </div>

                            <div class="overview">
                                <h2 style="font-weight: bold;">Approach</h2>
                                <p></p>
                                <p style="font-size: 1.8em;">
                                    ${project.approach}
                                </p>
                            </div>

                            <div class="overview" style="padding:50px;">
                                <div style="text-align: center;">
                                    <img style="max-width:1500px; max-height:755px;" id="showcaseimg" src="https://localhost:5000/webapi/GetProjectImage/${project.id}" alt="Showcase Poster" />
                                </div>
                            </div>

                            <div class="overview" id="comment">
                                <h2 style="font-weight: bold;">Leave a Comment</h2>
                                <hr />
                                <form id="commentForm" method="post">
                                    <div class="commentfields">
                                        <input name="name" id="cname" class="required" type="text" size = "30" maxlength="23" Placeholder="Your Real Name"/>
                                    </div>
                                    <div class="commentfields">
                                        <input name="email" id="cemail" class="required" size="30" maxlength="35" type="email" placeholder="Email" />
                                    </div>
                                    <div class="commentfields">
                                        <textarea id="ccomment" class="required textarea" name="comment" placeholder="Your comment"></textarea>
                                    </div>
                                    <div style="font-size: 1.8em;">
                                        <input type="submit" name="submit" size="30" style=" border-radius: 10px;" value="Submit" />
                                    </div>
                                </form>
                            </div>

                            
                        </div>
                    </div>

                </div>
                <!--footer close-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" style="margin-left: 0; margin-top: 0; left: 0; bottom: 0;">Close</button>
                </div>
            </div>
        </div>
                    `;
}

//Login and register functions. 
function register() {
    const fullnameText = document.getElementById("fullname").value;
    const emailText = document.getElementById("reg-email").value;
    const passwordText = document.getElementById("reg-pwd").value
    const userJSON = {
        FullName: fullnameText,
        Email: emailText,
        Password: passwordText
    }
    fetch(`https://localhost:5000/webapi/RegisterVisitor`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://localhost:5000/webapi/RegisterVisitor"
        },
        body: JSON.stringify(userJSON)
    })
    .then(response => response.text())
    .then(data => alert(data))
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-pwd").value;

    fetch(`https://localhost:5000/webapi/GetAuth/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/html",
            "Authorization": "Basic " + btoa(`${email}:${password}`),
            "Accept": "application/xml"
        }
    })
    .then(response => {
        if (response.ok) {
            localStorage.setItem("auth", "true");
            localStorage.email = email;
            document.getElementById("login").style.display = "none";
            document.getElementById("sign-up").style.display = "none";
            document.getElementById("logout").style.display = "inline";
            alert("Login Successful");
        }
        else {
            alert("Login Unsuccessful")
        }
    })
}

function logout() {
    localStorage.setItem("auth", "false");
    document.getElementById("logout").style.display = "none";
    localStorage.removeItem("ID");
}

function like(id) {
    var element = document.getElementById(id);
    element.classList.toggle("liked");
    localStorage.getItem("ID")

    fetch(`https://localhost:5000/webapi/VisitorLike`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "https://localhost:5000/webapi/VisitorLike"
        }
    });
}