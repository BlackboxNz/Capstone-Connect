async function test() {
    console.log("test");
}
//Checks whether user is authenticated, and what authentication level.
var auth = localStorage.getItem("auth")

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

//Student Profiles
const showStudentProfile = () => {

    const titleContainer = document.getElementById("title");
    const title = document.createElement("span");
    title.classList = ("studenttitle");
    title.innerHTML = "Welcome, " + localStorage.getItem('fullname') + ".";
    titleContainer.append(title);
}

//Admin Profiles
const showAdminProfile = () => {

    const titleContainer = document.getElementById("title");
    const title = document.createElement("span");
    title.classList = ("admintitle");
    title.innerHTML = "Welcome, " + localStorage.getItem('fullname') + ".";
    titleContainer.append(title);
}

//Projects
const projectsContainer = document.getElementById("projects");

// Fetches all projects from api
const getAllProjects = () => {
    const fetchPromise = fetch(`/webapi/GetAllProjects`,
        {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "/webapi/GetAllProjects"
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
        fetch(`/webapi/GetProjectImage/${project.id}`)
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
                card.addEventListener("click", function () {
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
    const fetchPromise = fetch(`/webapi/GetProject/` + id,
        {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "/webapi/GetProject/" + id
            },

        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showProject(data));
}

const showProject = (project) => {
    if ((auth == "visitor") || (auth == "student") || (auth == "admin")) {
        var commentText = `<div class="commentfields flex-container">
        <textarea id="comment-text" class="required textarea" name="comment" placeholder="Your comment"></textarea>
    </div>
    <div style="font-size: 1.2em;">
        <button class="btn right" id="commentButton" type="submit" name="submit" size="25" style=" border-radius: 8px; background-color: #0098C3; color: white;" onclick = "submitComment(${project.id})">Comment</button>
    </div>`
    }
    else {
        var commentText = `<h4>Please login to comment</h4>`
    };
    document.getElementById("projectModal").style.display = "block";
    document.getElementById(
        "modal-text"
    ).innerHTML = `
        <div class="modal-fs" role="document">
            <div class="modal-content2">
                <div class="modal-body" style="padding: 0;">
                    <!--header-->
                    <div class="header" style="border-radius: 15px; text-align: center; margin-bottom: 10px;">                        
                            <button type="button" class="close" onclick="projectModal.style.display='none'" data-dismiss="modal" aria-hidden="true" style="font-size: 3.5em; color: white;" aria-label="Close">&times</button>
                            <h1 style="font-weight: bold; font-size: 5em; ">${project.projectName}</h1>
                            <h3>By</h3>
                            <h2>${project.teamName}</h2>
                            
                    </div>

                    <div id="people-win" style="display: none; padding: 20px;">
                        <i class='fas fa-medal' style='font-size:56px;color:orange; display: inherit;'><p style="font-size: 24px; font-family: Poppins;  display: inherit; font-style: normal;">People's Choice</p></i>
                    </div>  

                    <div id="people-two" style="display: none; padding: 20px;">
                        <i class='fas fa-medal' style='font-size:56px;color:#dc6604; display: inherit'><p style="font-size: 24px; font-family: Poppins; display: inherit;">People's Runner-Up</p></i>
                    </div>

                    <div id="client-win" style="display: none; padding: 20px;">
                        <i class='fas fa-medal' style='font-size:56px;color:#0098C3; display: inherit'><p style="font-size: 24px; font-family: Poppins; display: inherit;">Client's Choice</p></i>
                    </div>

                    <div id="client-two" style="display: none; padding: 20px;">
                        <i class='fas fa-medal' style='font-size:56px;color:#0039A6; display: inherit'><p style="font-size: 24px; font-family: Poppins; display: inherit;">Client's Runner-Up</p></i>
                    </div>

                    <!--body-->
                    <div>
                        <div class="flex-container" style="padding-left: 0px; padding-right: 0px;">
                            <div class="lineup">
                                <h1 style="font-size: 2.7em; font-weight: bold;">Brief</h1>
                                <p></p>
                                <p style="font-size: 1.5em;">
                                    ${project.projectOverview}
                                </p>
                            </div>
                            <div class="flex-container centered-div" style="min-width: 0; width: 100%;">
                                <iframe width="1000" height="563" src="${project.video}"></iframe>  
                            </div>
                            <div class="lineup">
                                <h2 style="font-weight: bold; font-size: 2em;">Approach</h2>
                                <p></p>
                                <p style="font-size: 1.5em;">
                                    ${project.approach}
                                </p>
                            </div>
                            <div style="min-width: 0;"">
                                <div style="text-align: center;">
                                    <img style=" height: auto; width: 100%;" width="500" height="563" id="showcaseimg" src="https://localhost:5000/webapi/GetProjectImage/${project.id}" alt="Showcase Poster" />
                                </div>
                            </div>
                            <div style="border-bottom-color: black;" class="lineup">
                                <h2 style="font-weight: bold; font-size: 2em;">Future Plans</h2>
                                <p></p>
                                <p style="font-size: 1.5em;">
                                    ${project.finalThoughts}
                                </p>
                            </div>
                            <div class="flex-container lineup">
                                <h2 style="font-weight: bold; width: 100%; font-size: 2em;">Like this Project</h2>
                                <button id="likebtn" onload="check_like(${project.id})" onclick="like(${project.id});toggle_like()" style="font-size: 24px; background-color: #ff0528; color: white; border-color: transparent; border-radius: 8px; text-align: center; width: 100px;">Like <i id="heart" class="far fa-heart"></i></button>
                            </div>
                            <!--comments section-->
                            <div class="flex-container lineup">
                                <h2 style="font-weight: bold; width: 100%; font-size: 2em;">Comments</h2>
                                <div id="comment">
                                    <form id="commentForm">
                                    ${commentText}
                                    </form>
                                </div>
                                <hr style="height: 3px;">
                                <div id="submitted-comments"></div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    checkAwards(project.clientWin, project.clientTwo, project.peopleWin, project.peopleTwo);
    loadProjectComments(project.id);
}
const checkAwards = (a, b, c, d) => {
    if (a == true) {
        document.getElementById("client-win").style.display = "inline";
    }
    if (b == true) {
        document.getElementById("client-two").style.display = "inline";
    }
    if (c == true) {
        document.getElementById("people-win").style.display = "inline";
    }
    if (d == true) {
        document.getElementById("people-two").style.display = "inline";
    }
}
//Login and register functions. 
const register = () => {
    const fullnameText = document.getElementById("fullname").value;
    const emailText = document.getElementById("email").value;
    const passwordText = document.getElementById("pwd").value;
    const repeatText = document.getElementById("pwd2").value;
    const student_check = document.getElementById("student_check").checked;
    if (passwordText == repeatText) {
        const userJSON = {
            FullName: fullnameText,
            Email: emailText,
            Password: passwordText
        }

        if (student_check == false) {
            fetch(`/webapi/RegisterVisitor`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "/webapi/RegisterVisitor"
                },
                body: JSON.stringify(userJSON)
            })
                .then(response => response.text())
                .then(data => alert(data))
        }
        else {
            entered_code = prompt("Please enter the student code");
            fetch(`/webapi/GetCode`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "/webapi/GetCode"
                }
            })
                .then(response => response.text())
                .then(data => {
                    if (data == entered_code) {
                        fetch(`/webapi/RegisterStudent`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "/webapi/RegisterStudent"
                            },
                            body: JSON.stringify(userJSON)
                        })
                            .then(response => response.text())
                            .then(data => alert(data))
                    }
                    else {
                        alert("Incorrect code!");
                    }
                });
        }
    }
    else {
        alert("Passwords do not match!");
    }
}

const login = () => {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-pwd").value;

    fetch(`/webapi/GetAuth/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/html",
            "Authorization": "Basic " + btoa(`${email}:${password}`),
            "Accept": "application/xml"
        }
    })
        .then(response => {
            if (response.ok) {
                response.text().then(data => {
                    data_array = data.split(" ");
                    localStorage.setItem("auth", data_array[0]);
                    localStorage.id = data_array[1];
                    localStorage.fullname = data_array[2];
                    location.reload()
                    console.log(localStorage.auth); console.log(localStorage.id); console.log(localStorage.name)
                });
            }
            else {
                alert("Login Unsuccessful")
            }
        })
}

const logout = () => {
    localStorage.setItem("auth", "false");
    localStorage.removeItem("id");
    localStorage.removeItem("fullname");
    document.getElementById("nav-login").style.display = "inline";
    document.getElementById("sign-up").style.display = "inline";
    document.getElementById("admin").style.display = "none";
    document.getElementById("student").style.display = "none";
    document.getElementById("logout").style.display = "none";
}

const checkUser = () => {
    var auth = localStorage.getItem("auth")
    if ((auth != "false")) {
        document.getElementById("nav-login").style.display = "none";
        document.getElementById("sign-up").style.display = "none";
        document.getElementById("logout").style.display = "inline";

        if (auth == "admin") {
            document.getElementById("admin").style.display = "inline";
        }
        else if (auth == "student") {
            document.getElementById("student").style.display = "inline";
        }

        if (localStorage.liked_projects == "undefined") {

            var user_type = localStorage.getItem("auth");
            var user_id = localStorage.getItem("id");

            const likeJSON = {
                ProjectID: 1,
                UserType: user_type,
                UserID: user_id,
            }

            fetch(`https://localhost:5000/webapi/GetLikedProjects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://localhost:5000/webapi/GetLikedProjects"
                },
                body: JSON.stringify(likeJSON)

            })
                .then(response => response.text())
                .then(data => {
                    var liked_projects = data.split(",")
                    localStorage.liked_projects = liked_projects;
                });
        }
    }

}


// Likes
const like = (project_id) => {
    var user_type = localStorage.getItem("auth");

    if (user_type != "false") {
        var user_id = localStorage.getItem("id");

        const likeJSON = {
            ProjectID: project_id,
            UserType: user_type,
            UserID: user_id,
        }

        fetch(`/webapi/LikeProject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `/webapi/LikeProject`
            },
            body: JSON.stringify(likeJSON)
        })
    }
    else {
        alert("You need to be logged in to like!");
    }
}

const toggle_like = () => {
    document.getElementById("heart").classList.toggle("far");
    document.getElementById("heart").classList.toggle("fas");
}

const check_like = (project_id) => {
    if (localStorage.getItem("liked_projects").split(",").includes(project_id)) {
        document.getElementById("heart").classList.toggle("far");
        document.getElementById("heart").classList.toggle("fas");
    }
}


//Comments

const submitComment = (id) => {
    if ((auth == "visitor") || (auth == "student") || (auth == "admin")) {
        const comment = document.getElementById('comment-text').value;
        document.getElementById('comment-text').value = "";
        FullName = localStorage.getItem("fullname");
        const commentJSON = {
            CommentText: comment,
            ProjectID: id,
            FullName: FullName
        }
        fetch(`/webapi/WriteComment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `/webapi/WriteComment`
            },
            body: JSON.stringify(commentJSON),
        }); loadProjectComments(id);
        alert("Comment Successful");

    }
    else {
        alert("You need to be logged in to comment!")
    }

}

const loadProjectComments = (id) => {
    const fetchPromise = fetch(`/webapi/GetProjectComments/` + id,
        {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "/webapi/GetProjectComments" + id
            },

        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showProjectComments(data));
}
const showProjectComments = (comment) => {
    if (comment.length == 0) {
        document.getElementById(
            "submitted-comments"
        ).innerHTML += `<p>No current comments, feel free to leave one above.</p>`;
    }
    else {
        comment.forEach(obj => {
            if (auth == "admin") {
                var commentText = `<h4 style="padding-top: 5px; font-weight: bold; width:" id="comment-title">${obj.fullName}</h4>
            <button type="button" class="btn right" name="deleteC" style="border-color: transparent;" onclick="deleteComment(${obj.id})">Delete</button>
            <p style="padding-bottom: 5px;" id="comment-body">${obj.commentText}</p>`;
            }
            else {
                var commentText = `<h4 style="padding-top: 5px; font-weight: bold; width:" id="comment-title">${obj.fullName}</h4>
        <p style="padding-bottom: 5px;" id="comment-body">${obj.commentText}</p>`;
            }
            document.getElementById(
                "submitted-comments"
            ).innerHTML += commentText;
        });
    }

}
const deleteUser = () => {
    var level = getElementById("user_level_drop").value;
    var email = getElementById(user-email).value;
    if (level == "Admin") {
        deleteAdmin(user-email);
    }
    else if (level == "Student") {
        deleteStudent(user-email);
    }
    else {
        deleteVisitor(user-email);
    }
}

const deleteStudent = (email) => {
    const deleteStudentAccount = fetch(
        "/webapi/DeleteStudent/" + email,
        {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "/webapi/DeleteStudent" + email
            }
        }
    ).then(response => {
        if (response.status == 204) {
            alert("Student Deleted");
            location.reload();
        }
        else {
            alert("Unable to delete student");
        }
    })
}
const deleteAdmin = (email) => {
    const deleteAdminAccount = fetch(
        "/webapi/DeleteAdmin/" + email,
        {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "/webapi/DeleteAdmin" + email
            }
        }
    ).then(response => {
        if (response.status == 204) {
            alert("Admin Deleted");
            location.reload();
        }
        else {
            alert("Unable to delete Admin");
        }
    })
}
const deleteVisitor = (email) => {
    const deleteVisitorAccount = fetch(
        "/webapi/DeleteVisitor/" + email,
        {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "/webapi/DeleteVisitor" + email
            }
        }
    ).then(response => {
        if (response.status == 204) {
            alert("Visitor Deleted");
            location.reload();
        }
        else {
            alert("Unable to delete Visitor");
        }
    })
}

const deleteComment = (id) => {
    fetch(`/webapi/DeleteComment/${id}`, {
        method: "DELETE",
        headers: {
            "Access-Control-Allow-Origin": `/webapi/DeleteComment/${id}`,
        }
    }).then(response => {
        if (response.status == 204) {
            alert("Comment Deleted");
            location.reload();
        }
        else {
            alert("Unable to delete Comment");
        }
    })
}

const getSomeProjects = (letters) => {
    if(letters == ""){
        projectsContainer.innerHTML = "";
        getAllProjects();
    }
    else{
    const fetchPromise = fetch(`/webapi/GetProjects/${letters}`,
        {
            headers: {
                "Accept": "application/json",
            },
        }
    );
    
    const streamPromise = fetchPromise.then((response) => response.json());
    
    streamPromise.then((data) => {
        if (data == "") {
            // If there is no results from the filter, inform user no results
            projectsContainer.innerHTML = `<div style="text-align: center; padding-top:50px;"><p>No results.</p></div>`;
          } else {
            // If there are matches in project names, show the filtered list
            projectsContainer.innerHTML = "";
            showAllProjects(data);
          }
        });
    }
}

const getFilteredItems = () => {
    // Get the search filter input from user
    const filter = document.getElementById("search-input").value;
    if (filter == "") {
      // If the input is empty then display all projects
      projectsContainer.innerHTML="";
      getAllProjects();
    } else {
      const fetchItems = fetch(
        "/webapi/projects/" + filter
      );
      const streamItems = fetchItems.then((response) => response.json());
      streamItems.then((data) => {
        if (data == "") {
          // If there is no results from the filter, inform user no results
          projectsContainer.innerHTML = `<div style="text-align: center; padding-top:50px;"><p>No results.</p></div>`;
        } else {
          // If there are matches in project names, show the filtered list
          projectsContainer.innerHTML = "";
          showAllProjects(data);
        }
      });
    }
  };
