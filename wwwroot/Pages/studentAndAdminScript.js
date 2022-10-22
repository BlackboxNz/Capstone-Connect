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
      const json = { TeamName: team_name.value, ProjectName: project_name.value,ProjectOverview: project_overview.value, Approach: approach.value, FinalThoughts: final_thoughts.value, Img: project_image.value, Video: project_video.value };
      const fetchAddProject = fetch(
        "/webapi/AddProject",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", 
          "Access-Control-Allow-Origin": "/webapi/AddProject"},
          body: JSON.stringify(json),
        }).then((data) => {
            // Inform user through toast of the successful creation
            // potential for alert of innerhtml
            //document.getElementById('projectAlert').innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>` + "Item " + itemId + " bought!";
            //document.getElementById('projectAlert').style.display = "block";
            toast.innerHTML = `Project ${data.ProjectName} created`;
            toast.className = "show";
            setTimeout(function () {
                toast.className = toast.className.replace("show", "");
              }, 50000);
          })

    }
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


