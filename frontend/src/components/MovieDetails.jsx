import { useEffect, useState } from "react"
function MovieDetails() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3333/movies/all').
        then(resp=>resp.json()).
        then(data=>setMovies(data))
    },[])
  return (
    <>
      <table border="1">
        <thead>
        <tr><th>Movie Id</th><th>Movie Name</th><th>Movie Description</th><th>Movie Rating</th></tr>
        </thead>
        <tbody>
            {movies.map(mov=>(<tr><td>{mov.movieid}</td><td>{mov.moviename}</td><td>{mov.moviedescription}</td><td>{mov.movierating}</td></tr>))}
        </tbody>
      </table>
    </>
  )
}

export default MovieDetails
