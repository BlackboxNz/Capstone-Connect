// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Project } = initSchema(schema);

export {
  Comment,
  Project
};