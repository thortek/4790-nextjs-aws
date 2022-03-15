export async function getMovieByTitle(title) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&t=${title}&plot=full`,
  )
  return await response.json()
}

const output = {
  Title: 'Thor',
  Year: '2011',
  Rated: 'PG-13',
  Released: '06 May 2011',
  Runtime: '115 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'Kenneth Branagh',
  Writer: 'Ashley Miller, Zack Stentz, Don Payne',
  Actors: 'Chris Hemsworth, Anthony Hopkins, Natalie Portman',
  Plot: 'The warrior Thor (Chris Hemsworth) is cast out of the fantastic realm of Asgard by his father Odin (Sir Anthony Hopkins) for his arrogance and sent to Earth to live amongst humans. Falling in love with scientist Jane Foster (Natalie Portman) teaches Thor much-needed lessons, and his new-found strength comes into play as a villain from his homeland sends dark forces toward Earth.',
  Language: 'English',
  Country: 'United States',
  Awards: '5 wins & 30 nominations',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.0/10' },
    { Source: 'Rotten Tomatoes', Value: '77%' },
    { Source: 'Metacritic', Value: '57/100' },
  ],
  Metascore: '57',
  imdbRating: '7.0',
  imdbVotes: '803,194',
  imdbID: 'tt0800369',
  Type: 'movie',
  DVD: '13 Sep 2011',
  BoxOffice: '$181,030,624',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
}
