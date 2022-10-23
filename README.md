# Capstone-connect #
Jira: https://cs399team4.atlassian.net/jira/software/projects/CAPSHOW/boards/1/roadmap?shared=&atlOrigin=eyJpIjoiMGM4NjY3MTAzYjk5NDBkYmE0ZWI2N2Q4ZjJkZjIzNGEiLCJwIjoiaiJ9

Final Project Report:

---
## Project description: ##
---
Capstone Connect is an online showcase for COMPSCI 399 Capstone projects. We have achieved this by creating a website which allows students
to upload their own projects, as well as allowing them to comment on and like each others' projects. Project uploads include a project title,
the team who built it, a brief description of the project in question, a space for a video demonstration, another text section which discusses
the approach of the team that built the project, a space for a descriptive poster for the project, future plans section, as well as implementation
of likes and comments.

We have also implemented a login system which allows for Admin, Student, and Vistor roles, each with different permissions. 
Students may upload projects, Admins may upload and delete projects, create and delete users, as well as set and get a verification code which
is required to create a student account. Admins also have the capability to award specific projects with a People's Choice winner and runner up,
as well as a Client Nominated winner and runner up. Obviously, there are also logout features for the page.

---
## Technologies used ##
---
- HTML 5
- JavaScript
- CSS 3
- Bootstrap 3.4.1
- C#
- ASP.NET Framework 6.0
- SQL


---
## Dependencies and installation ##
---
<img src="https://cdn.discordapp.com/attachments/1001296525676261398/1033683166436790363/unknown.png">


To run Capstone Connect, run the solution file (Capstone_Connect.sln) through Visual Studio and run the server via the play labeled "Capstone_Connect". The server should run locally on port 5000,
where you can then access the various HTML files and their associated scripts. The URL for the home page will then be: https://localhost:5000/index.html.
Alternatively, open the folder in Visual Studio code and type "dotnet watch" in the terminal.


---
## Usage Examples ##
---

* Potential employers visiting the site to look at potential candidates for graduate/internship roles.
* Future students visiting to see what current students have created.
* Student wanting to see what other fellow computer science students have achieved in their projects.
* Students wanting to update their project.
* Students looking to upload their capstone projects to capstone connect to gain greater exposure.
* Visitors, Students and Lecturers wanting to leave comments and likes to give feedback on a particular project and to give a particular project praise by liking projects.
* Lecturers wanting to add and manage students' projects that have been previously showcased.
* Admins giving out awards with badges to commemorate the People's Choice and Client's Choice awards.
* Admins deleting comments. 

---
## Future insight: ##
---
* Add teams button/team functionality
* * This includes the ability to create, search for, and join teams, as well as assigning projects to specific teams (which individual students are themselves linked to).
* Add social media integration to allow students to share and show off their project.
* * This would allow even more widespread sharing of projects and would put teams' names out into the public eye.
* Mobile compatibility.
* * This includes having a separate page layout for users with a screen that sits at a speficied resolution (ie. tall, narrow screens will show a mobile-compatible page layout)
* Have a preview of the team’s project when visitors hover over a project box.
* Allow students and admins see analytics of their project (Likes, comments, clicks onto their page, etc.)
* * This would let students break down whether their project is having issues pulling engagements, holding user attention, etc.