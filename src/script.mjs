import Amplify, { API, graphqlOperation } from "../node_modules/aws-amplify"

import awsconfig from "./aws-exports.js";
import { DataStore } from "../node_modules/@aws-amplify/datastore";
import { User } from './models';
import { Visitor } from './models';
import { Student } from './models';
import { Admin } from './models';
import { Team } from './models';
import { Project } from './models';
import { Tag } from './models';
import { Comment } from './models';
import { createProject } from "../src/graphql";
import { listProjects } from '../src/graphql'

Amplify.configure(awsconfig);

function testFunction(){
    console.log("test");
}

const makeProject = async (e) => {
    e.preventDefault()

    const Project = {
        TeamName: document.getElementById('teamName').value,
        url: document.getElementById('projectName').value

    }
    try{
        const newProject = await API.graphql(graphqlOperation(createProject, { input: project }))
        console.log(project)
    } catch (error){}
    
}
document.getElementById('create-form').addEventListener('submit', makeProject)
const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");