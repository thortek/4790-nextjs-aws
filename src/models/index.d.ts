import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Rating {
  readonly source?: string;
  readonly value?: string;
  constructor(init: ModelInit<Rating>);
}

type MovieDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MovieData {
  readonly id: string;
  readonly title?: string;
  readonly year?: string;
  readonly released?: string;
  readonly runtime?: string;
  readonly genre?: string;
  readonly director?: string;
  readonly writer?: string;
  readonly actors?: string;
  readonly plot?: string;
  readonly language?: string;
  readonly country?: string;
  readonly awards?: string;
  readonly poster?: string;
  readonly ratings?: Rating;
  readonly metascore?: string;
  readonly imdbRating?: string;
  readonly imdbVotes?: string;
  readonly imdbID?: string;
  readonly type?: string;
  readonly dvd?: string;
  readonly boxOffice?: string;
  readonly production?: string;
  readonly website?: string;
  readonly response?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MovieData, MovieDataMetaData>);
  static copyOf(source: MovieData, mutator: (draft: MutableModel<MovieData, MovieDataMetaData>) => MutableModel<MovieData, MovieDataMetaData> | void): MovieData;
}