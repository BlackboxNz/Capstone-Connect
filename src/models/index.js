// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, Project, Comment, User, Team, ProjectTags, ProjectUser } = initSchema(schema);

export {
  Tags,
  Project,
  Comment,
  User,
  Team,
  ProjectTags,
  ProjectUser
};