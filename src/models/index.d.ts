import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RatingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MovieDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Rating {
  readonly id: string;
  readonly source?: string;
  readonly value?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly movieDataRatingsId?: string;
  constructor(init: ModelInit<Rating, RatingMetaData>);
  static copyOf(source: Rating, mutator: (draft: MutableModel<Rating, RatingMetaData>) => MutableModel<Rating, RatingMetaData> | void): Rating;
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
  readonly ratings?: (Rating | null)[];
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