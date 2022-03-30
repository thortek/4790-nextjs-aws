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
      ratings {
        source
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      ratings {
        source
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      ratings {
        source
        value
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
