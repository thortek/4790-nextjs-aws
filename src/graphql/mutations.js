/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovieData = /* GraphQL */ `
  mutation CreateMovieData(
    $input: CreateMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    createMovieData(input: $input, condition: $condition) {
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
export const updateMovieData = /* GraphQL */ `
  mutation UpdateMovieData(
    $input: UpdateMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    updateMovieData(input: $input, condition: $condition) {
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
export const deleteMovieData = /* GraphQL */ `
  mutation DeleteMovieData(
    $input: DeleteMovieDataInput!
    $condition: ModelMovieDataConditionInput
  ) {
    deleteMovieData(input: $input, condition: $condition) {
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
