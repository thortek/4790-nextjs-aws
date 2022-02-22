/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      source
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieDataRatingsId
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      source
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieDataRatingsId
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      source
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      movieDataRatingsId
    }
  }
`;
export const createMovieData = /* GraphQL */ `
  mutation CreateMovieData(
    $input: CreateMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    createMovieData(input: $input, condition: $condition) {
      id
      title
      year
      rated
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
export const updateMovieData = /* GraphQL */ `
  mutation UpdateMovieData(
    $input: UpdateMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    updateMovieData(input: $input, condition: $condition) {
      id
      title
      year
      rated
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
export const deleteMovieData = /* GraphQL */ `
  mutation DeleteMovieData(
    $input: DeleteMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    deleteMovieData(input: $input, condition: $condition) {
      id
      title
      year
      rated
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
