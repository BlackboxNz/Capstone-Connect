// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, Student, User, Project, Comment, Tag, Admin, Visitor, Todo, UserProject, ProjectTag } = initSchema(schema);

export {
  Team,
  Student,
  User,
  Project,
  Comment,
  Tag,
  Admin,
  Visitor,
  Todo,
  UserProject,
  ProjectTag
};