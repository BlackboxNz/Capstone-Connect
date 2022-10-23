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
      var tagArray =  $("input[name='Question1']:checked").map(function(){
        return this.value;
    }).get()
      // Create json of user comment info from input fields
      const json = { TeamName: team_name.value, ProjectName: project_name.value,ProjectOverview: project_overview.value, Tags:tagArray, Approach: approach.value, FinalThoughts: final_thoughts.value, Img: project_image.value, Video: project_video.value };
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
            uploadImage(id);
          })

    }
}
const uploadImage = (id) => {
  var formData = new FormData();
  formData.append("file", project_image.files[0]);
  alert(formData);
  const fetchUploadImage = fetch(
    "/webapi/UploadImage/" + id,
    {
      method: "POST",
      headers: { "Content-Type":"multipart/form-data",
      "Access-Control-Allow-Origin": "/webapi/UploadImage/"+id},
      body: formData,
    }).then((data) => {  alert(data.status)})
}

const deleteProject = (id) => {
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
