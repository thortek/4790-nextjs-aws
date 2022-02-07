// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rating, MovieData } = initSchema(schema);

export {
  Rating,
  MovieData
};