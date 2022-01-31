/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        source
        value
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
