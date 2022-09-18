import { DataStore } from '@aws-amplify/datastore';
import { Team } from './models';
import { Tag } from './models';
import { Visitor } from './models';
import { Student } from './models';
import { User } from './models';
import { Project } from './models';
import { Admin } from './models';
import { Comment } from './models';

/*Create new model functions*/

async function newTeam(){
    await DataStore.save(
        new Team({
            "Students": []
        })
    );
}

async function newUser(){
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

async function newComment(){
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

async function newProject(){

    await DataStore.save(
        new Project({
            "TeamName": "Lorem ipsum dolor sit amet",
            "ProjectName": "Lorem ipsum dolor sit amet",
            "Description": "Lorem ipsum dolor sit amet",
            "Students": [],
            "Comment": [],
            "LikedBy": [],
            "Tags": [],
            "Brief": "Lorem ipsum dolor sit amet"
        })
    );
}

async function newTag(){
    await DataStore.save(
        new Tag({
            "isAward": true,
            "projects": []
        })
    );
}

/*Based on authentication model we are using, I don't know if we'll need these following, but I've included them for now */
async function newAdmin(){
    await DataStore.save(
        new Admin({
            "Access": "Lorem ipsum dolor sit amet",
            "User": ""/* Provide a User instance here */
        })
    );
}

async function newVisitor(){
    await DataStore.save(
        new Visitor({
            "User": ""/* Provide a User instance here */
        })
    );
}

async function newStudent(){
    await DataStore.save(
        new Student({
            "UPI": "Lorem ipsum dolor sit amet",
            "projectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "User": ""/* Provide a User instance here */,
            "teamID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
    );
}