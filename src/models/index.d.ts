import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Rating {
  readonly source?: string | null;
  readonly value?: string | null;
  constructor(init: ModelInit<Rating>);
}

type MovieDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MovieData {
  readonly id: string;
  readonly title?: string | null;
  readonly year?: string | null;
  readonly rated?: string | null;
  readonly released?: string | null;
  readonly runtime?: string | null;
  readonly genre?: string | null;
  readonly director?: string | null;
  readonly writer?: string | null;
  readonly actors?: string | null;
  readonly plot?: string | null;
  readonly language?: string | null;
  readonly country?: string | null;
  readonly awards?: string | null;
  readonly poster?: string | null;
  readonly metascore?: string | null;
  readonly imdbRating?: string | null;
  readonly imdbVotes?: string | null;
  readonly imdbID?: string | null;
  readonly type?: string | null;
  readonly dvd?: string | null;
  readonly boxOffice?: string | null;
  readonly production?: string | null;
  readonly website?: string | null;
  readonly response?: string | null;
  readonly ratings?: (Rating | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MovieData, MovieDataMetaData>);
  static copyOf(source: MovieData, mutator: (draft: MutableModel<MovieData, MovieDataMetaData>) => MutableModel<MovieData, MovieDataMetaData> | void): MovieData;
}