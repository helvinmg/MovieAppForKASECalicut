import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import axios from 'axios';
function MovieDetails() 
{
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState("");
    const fetchMovies=()=>
    { 
        axios.get("http://localhost:3333/movies/all")
        .then((resp)=>setMovies(resp.data))
    }
    fetchMovies()
    const deleteMovie=(id)=>
        {
          if(window.confirm("Are you sure to delete"))
          {
            axios.delete(`http://localhost:3333/movies/delete/${id}`).then(resp=> setMessage(resp.data))
            // setMovies([])
            fetchMovies()
          }
        }
  return (
    <>
      <table border="1" className="table table-primary">
        <thead>
        <tr><th>Movie Id</th><th>Movie Name</th><th>Movie Description</th><th>Movie Rating</th><th>Action</th></tr>
        </thead>
        <tbody>
            {movies.map(mov=>(<tr><td>{mov.movieid}</td><td>{mov.moviename}</td><td>{mov.moviedescription}</td><td>{mov.movierating}</td><td><button onClick={()=>deleteMovie(mov.movieid)} className="btn btn-primary">Delete</button></td></tr>))}
        </tbody>
      </table>
      {message && <h3 className="bg-warning text-danger">{message}</h3>}
    </>
  )
}

export default MovieDetails
