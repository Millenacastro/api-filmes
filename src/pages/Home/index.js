import { Container, MovieList, Movie } from "./styles";


function Home() {

    const movies = [
     {
        id: 1,
        title: 'Spider Man',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
     },
     
     {
        id: 2,
        title: 'Avengers',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
     },
    
    {
        id: 3,
        title: 'Batman',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
    },

    {
        id: 1,
        title: 'Spider Man',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
     },
     
     {
        id: 2,
        title: 'Avengers',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
     },
    
    {
        id: 3,
        title: 'Batman',
        image_url:'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
    }

    ]

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