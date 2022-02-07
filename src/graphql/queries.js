/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      source
      value
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieDataRatingsId
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        source
        value
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieDataRatingsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        source
        value
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        movieDataRatingsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getMovieData = /* GraphQL */ `
  query GetMovieData($id: ID!) {
    getMovieData(id: $id) {
      id
      title
      year
      released
      runtime
      genre
      director
      writer
      actors
      plot
      language
      country
      awards
      poster
      ratings {
        nextToken
        startedAt
      }
      metascore
      imdbRating
      imdbVotes
      imdbID
      type
      dvd
      boxOffice
      production
      website
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMovieData = /* GraphQL */ `
  query ListMovieData(
    $filter: ModelMovieDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        year
        released
        runtime
        genre
        director
        writer
        actors
        plot
        language
        country
        awards
        poster
        metascore
        imdbRating
        imdbVotes
        imdbID
        type
        dvd
        boxOffice
        production
        website
        response
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMovieData = /* GraphQL */ `
  query SyncMovieData(
    $filter: ModelMovieDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovieData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        year
        released
        runtime
        genre
        director
        writer
        actors
        plot
        language
        country
        awards
        poster
        metascore
        imdbRating
        imdbVotes
        imdbID
        type
        dvd
        boxOffice
        production
        website
        response
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
