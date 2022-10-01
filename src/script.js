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
function testFunction(){
    var text = "t"
    console.log(text)
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