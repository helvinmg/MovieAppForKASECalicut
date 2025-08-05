import { useEffect } from "react"
function MovieDetails() {
    useEffect(()=>{
        fetch('http://localhost:3333/movies/all').
        then(resp=>resp.json()).
        then(data=>console.log(data))
    },[])
  return (
    <>
      <table border="1">
        <thead>
        <tr><th>Movie Id</th><th>Movie Name</th><th>Movie Description</th><th>Movie Rating</th></tr>
        </thead>

      </table>
    </>
  )
}

export default MovieDetails
