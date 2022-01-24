export async function getMovieByTitle(title) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=e38dd421&t=${title}&plot=full`)
    return await response.json()
}