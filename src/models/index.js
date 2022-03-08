// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MovieData, Rating } = initSchema(schema);

export {
  MovieData,
  Rating
};