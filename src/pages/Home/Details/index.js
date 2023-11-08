import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { APIkey } from "../../../config/key"
import { Container } from "./styles.js"

function Details() {

    const { id } = useParams()
 
    const [movie, setMovie] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          const {title, poster_path, overview, release_date} = data 
          const movie = {
            id,
            title,
            sinopse: overview,
            image:`${image_path}${data.poster_path}`,
            releaseDate: release_date

            }
            setMovie(movie)
        })
    }, [id])

    return (
        <Container>
      <div className="movie">
      <img src={movie.image} alt={movie.sinopse}/>
      <div className="details">
      <h1>{movie.title}</h1>
      <span>Sinopse: {movie.sinopse}</span>
      <span className='release-date'>Release date: {movie.releaseDate}</span>
      <Link to="/"><button>Go Back</button></Link>
      </div>
      </div>
        </Container>
    )
}

export default Details;