import React, {useState} from 'react'
import Movie from './movie'


export default function InputMovie() {
    const [movies,setMovies] = useState(null)

    function searchMovie(e){
        if (e.key === 'Enter'){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGU5NmFhZmRiOGIwNWJkNGMwMzkyNDM3ZTEzNGJjNyIsInN1YiI6IjY1NzcyZWE1NTY0ZWM3MDBhY2Q0ZDFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fjvHhYWM0hzn830zTKHtyuru8HLOqQyuXlntPsVrUQw'
                }
              };
            const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURI(e.target.value)}&include_adult=false&language=en-US&page=1`
            fetch(url,options).then(res=>res.json()).then(movies=>setMovies(movies.results))
        }   
    }

    function scrollRight(){
        console.log(movies)
        document.getElementById('similar-movies').scrollLeft += window.innerWidth*0.70
    }
    function scrollLeft(){
        document.getElementById('similar-movies').scrollLeft -= window.innerWidth*0.70
    }

    return (
        <>
        <div id="input-container">
            <label htmlFor="input-movie">Enter a Movie</label>
            <input id="input-movie" onKeyDown={searchMovie}/>
        </div>

        <article>
            <button id="scroll-left" onClick={scrollLeft}>{'<'}</button>
            <button id="scroll-right" onClick={scrollRight}>{'>'}</button>
            <h1>Results</h1>
            <ul id="similar-movies">
                {!movies ? <li></li> : movies.map(movie=><Movie self={movie}/>)}
            </ul>
        </article>
        </>
    )
}
