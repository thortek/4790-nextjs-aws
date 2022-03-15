// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Amplify } from "aws-amplify"
import config from '../../aws-exports'

Amplify.configure(config)

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const title = req.body.title

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_APIKEY}&t=${title}&plot=full`
    )

    const movieData = await response.json()

    res.status(200).json(movieData)
  }
}
