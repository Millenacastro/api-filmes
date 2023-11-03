import { Container, MovieList, Movie } from "./styles";
import { APIKey } from '../../config/key'
import { useState } from "react";

function Home() {

    const {movies, setMovies} = useState([]) 

    return (
        <Container>
        <h1>Movies</h1>
        <MovieList>
            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                      <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}/></a>
                      <span>{movie.title}</span>
                     </Movie>   
                )
            })}


        </MovieList>
        </Container>
    )
}

export default Home;