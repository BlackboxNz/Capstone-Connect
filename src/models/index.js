// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, User, Project, Comment, UserProject } = initSchema(schema);

export {
  Team,
  User,
  Project,
  Comment,
  UserProject
};