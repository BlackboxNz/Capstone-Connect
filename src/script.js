import { Amplify, API, graphqlOperation } from '@aws-amplify/api';

import awsconfig from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { User } from './models';
import { Visitor } from './models';
import { Student } from './models';
import { Admin } from './models';
import { Team } from './models';
import { Project } from './models';
import { Tag } from './models';
import { Comment } from './models';
import { createProject } from "./graphql/mutations";
import { listProjects } from './graphql/queries'

Amplify.configure(awsconfig);

const createTeam = (e) => {
    e.preventDefault()

    const Project = {
        TeamName: document.getElementById('teamName').value,
        url: document.getElementById('projectName').value

    }
    try{
        const newProject = await API.graphql(graphqlOperation(createProject, { input: project }))
    } catch (error)
    console.log(Project)
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");

// document.getElementById('create-form').addEventListener('submit', createComment)
/*Create new model functions*/
document.getElementById("newUser").addEventListener("click", newUser);
async function newUser() {
    await DataStore.save(
        new User({
            "Email": "Lorem ipsum dolor sit amet",
            "Password": "Lorem ipsum dolor sit amet",
            "FirstName": "Lorem ipsum dolor sit amet",
            "LastName": "Lorem ipsum dolor sit amet",
            "LikedProjects": [],
            "Comments": [],
            "Student": "" /* Provide a Student instance here */,
            "Admin": ""/* Provide a Admin instance here */,
            "Visitor": ""/* Provide a Visitor instance here */
        })
    );
}

document.getElementById("newTeam").addEventListener("click", newTeam);
async function newTeam() {
    await DataStore.save(
        new Team({
            "Students": []
        })
    );
}

document.getElementById("create-form").addEventListener("submit", newProject);
const newProject = async (e) => {
    e.preventDefault()

    var checkboxes = document.getElementsByName('tag');

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            projectTags.push(checkboxes[i].value);
        }
    }

    const project ={
        TeamName: document.getElementById('teamName').value,
        ProjectName: document.getElementById('projectName').value,
        Description: "Project Description",
        Brief: "Project Brief",
        Tag: projectTags,
        Image: "Project Image Filname",
        Video: "PRoject Video URL",
    }
    
    try {
        const newProject = await API.graphql(graphqlOperation(createProject, { input: project }));
        console.log(newProject);
        document.getElementById('create-form').reset();
    }
    catch (err) {
        console.log('error creating project...', err);
    }
}

document.getElementById("newTag").addEventListener("click", newTag);
async function newTag() {
    await DataStore.save(
        new Tag({
            "isAward": true,
            "projects": []
        })
    );
}

document.getElementById("newComment").addEventListener("click", newComment);
async function newComment() {
    await DataStore.save(
        new Comment({
            "CommentText": "Lorem ipsum dolor sit amet",
            "ProjectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "UserID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "projectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );
}

/*Based on the authentication model we are using, we don't know if we'll need these following, but we've included them for now */
document.getElementById("newAdmin").addEventListener("click", newAdmin);
async function newAdmin() {
    await DataStore.save(
        new Admin({
            "Access": "Lorem ipsum dolor sit amet",
            "User": ""/* Provide a User instance here */
        })
    );
}

document.getElementById("newStudent").addEventListener("click", newStudent);
async function newStudent() {
    await DataStore.save(
        new Student({
            "UPI": "Lorem ipsum dolor sit amet",
            "projectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "User": ""/* Provide a User instance here */,
            "teamID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );
}

document.getElementById("newVisitor").addEventListener("click", newVisitor);
async function newVisitor() {
    await DataStore.save(
        new Visitor({
            "User": ""/* Provide a User instance here */
        })
    );
}

/*Query functions */
document.getElementById("queryButton").addEventListener("click", getProjects);
const getProjects = async () => {
    const projects = await API.graphql(graphqlOperation(listProjects));
    projects.data.listProjects.items.forEach((project) => {
        console.log(project);
    });
}

async function getComment() {
    const models = await DataStore.query(Comment);
    console.log(models);
}
async function getTeam() {
    const models = await DataStore.query(Team);
    console.log(models);
}
async function getUser() {
    const models = await DataStore.query(User);
    console.log(models);
}

async function getStudent() {
    const models = await DataStore.query(Admin);
    console.log(models);
}

async function getVisitor() {
    const models = await DataStore.query(Visitor);
    console.log(models);
}

async function getAdmin() {
    const models = await DataStore.query(Admin);
    console.log(models);
}

/*Update functions */
/*To add later */

/*Delete functions */
async function deleteProject(projectID) {
    const project = await DataStore.query(Project, projectID);
    await DataStore.delete(project);
}

async function deleteComment(commentID) {
    const comment = await DataStore.query(Comment, commentID);
    await DataStore.delete(comment);
}

async function deleteTeam(teamID) {
    const team = await DataStore.query(Team, teamID);
    await DataStore.delete(team);
}

async function deleteTag(tagID) {
    const tag = await DataStore.query(Tag, tagID);
    await DataStore.delete(tag);
}

async function deleteUser(userID) {
    const user = await DataStore.query(User, userID);
    await DataStore.delete(user);
}

async function deleteStudent(studentID) {
    const student = await DataStore.query(Student, studentID);
    await DataStore.delete(student);
}

async function deleteVisitor(visitorID) {
    const visitor = await DataStore.query(Visitor, visitorID);
    await DataStore.delete(visitor);
}

async function deleteAdmin(adminID) {
    const admin = await DataStore.query(Admin, adminID);
    await DataStore.delete(admin);
}


/*Login/logout functions*/
async function login() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('Incorrect username or password', error);
    }
}

async function logout() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

async function register() {
    try {
        const { user } = await Auth.signUp({ username, password });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

