// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Visitor, Student, Tag, Project, Comment, User, Admin, ProjectTag, UserProject } = initSchema(schema);

export {
  Visitor,
  Student,
  Tag,
  Project,
  Comment,
  User,
  Admin,
  ProjectTag,
  UserProject
};