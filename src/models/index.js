// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Comment } = initSchema(schema);

export {
  Project,
  Comment
};