const toast = document.getElementById("toast");

const createProject = () => {
    console.log(project_name.value);
    if (project_name.value == "") {
      // Inform user their comment is empty
      toast.innerHTML = "No Project Name";
      toast.className = "show";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 5000);
    } else {
      // Create json of user comment info from input fields
      const json = { TeamName: team_name.value, ProjectName: project_name.value,ProjectOverview: project_overview.value, Approach: approach.value, FinalThoughts: final_thoughts.value, Video: project_video.value };
      const fetchAddProject = fetch(
        "/webapi/AddProject",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", 
          "Access-Control-Allow-Origin": "/webapi/AddProject"},
          body: JSON.stringify(json),
        }).then((response) => response.json()).then((data) =>{
            // Inform user through toast of the successful creation
            // potential for alert of innerhtml
            //document.getElementById('projectAlert').innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>` + "Item " + itemId + " bought!";
            //document.getElementById('projectAlert').style.display = "block";
            toast.innerHTML = `Project ${project_name.value} created`;
            toast.className = "show";
            var id = data.id;
            setTimeout(function () {
                toast.className = toast.className.replace("show", "");
              }, 50000);
              if(project_image.value != ""){uploadImage(id);}
          })

    }
}
const uploadImage = (id) => {
  var formData = new FormData();
  formData.append("file", project_image.files[0]);
  const fetchUploadImage = fetch(
    "/webapi/UploadImage/" + id,
    {
      method: "POST",
      
      body: formData,
    }).then((data) => {  console.log("Image uploaded")})
}

const deleteProject = () => {
  var id = document.getElementById("project_name_select").value;
  const deleteProject = fetch(
    "/webapi/DeleteProject/" + id,
    {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "/webapi/DeleteProject" + id,
      }
    }
  ).then(response => {
    if (response.status == 204){
      alert("Project Deleted");
    }
    else{
      alert("Unable to delete project");
    }
  })
}

const registerUser = () => {
    const fullnameText = document.getElementById("fullname").value;
    const emailText = document.getElementById("email").value;
    const passwordText = document.getElementById("pwd").value;
    const userLevel = document.getElementById("userlevel").value;
    const userJSON = {
        FullName: fullnameText,
        Email: emailText,
        Password: passwordText
    }
    fetch(`/webapi/Register` + userLevel, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "/webapi/Register" + userLevel
        },
        body: JSON.stringify(userJSON)
    })
        .then(response => response.text())
        .then(data => alert(data))
}

const getCode = () => {
    fetch(`/webapi/GetCode`, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "/webapi/GetCode"
        }
    })
    .then(response => response.text())
    .then(data => alert(`The code is: ${data}`));
}

const setCode = () => {
    var newCode = prompt("Enter the new code", "AAAAAA");
    const codeJSON = {
        SecretCode: newCode,
    }
    fetch(`/webapi/SetCode`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "/webapi/SetCode"
        },
        body: JSON.stringify(codeJSON)
    })
        .then(response => response.text())
        .then(data => alert(`The new code is set to ${newCode}`))
}

const awardProject = () => {
    const project_name = document.getElementById("project_name").value;
    const client_win = document.getElementById("client-win-box").checked;
    const client_two = document.getElementById("client-two-box").checked;
    const people_win = document.getElementById("people-win-box").checked;
    const people_two = document.getElementById("people-two-box").checked;

    const awardJSON = {
        ProjectName: project_name,
        ClientWin: client_win,
        ClientTwo: client_two,
        PeopleWin: people_win,
        PeopleTwo: people_two,
    }
    fetch(`/webapi/AwardProject`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "/webapi/SetCode"
        },
        body: JSON.stringify(awardJSON)
    })
        .then(response => {
            if (response.ok) {
                alert("Awarded!")
            }
            else {
                alert("There was an error. Perhaps a typo?")
            }
        })
}



const getProjects = () => {
  var option = document.getElementById("project_option");

  if(option == null){

  
  const fetchPromise = fetch(`/webapi/GetAllProjects`,
      {
          headers: {
              "Accept": "application/json",
              "Access-Control-Allow-Origin": "/webapi/GetAllProjects"
          }
      }
  );const streamPromise = fetchPromise.then((response) => response.json());
  streamPromise.then((data) => populateProjects(data));
}
const populateProjects = (projects) =>{
  
  projects.forEach(obj => {
    console.log(obj);
    document.getElementById("project_name_select").innerHTML += `<option id="project_option" value='${obj.id}'>${obj.projectName}</option>`;
  })
}
}
