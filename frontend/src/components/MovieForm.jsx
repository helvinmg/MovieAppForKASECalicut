import { useState } from "react";
import axios from 'axios';
function MovieForm() {
    const [movid, setMovid] = useState(0);
    const [movname, setMovname] = useState("");
    const [movdesc, setMovdesc] = useState("");
    const [movrating, setMovrarting] = useState(0);
    const handleIdChange=(e)=>setMovid(e.target.value)
    const handleNameChange=(e)=>setMovname(e.target.value)
    const handleDescChange=(e)=>setMovdesc(e.target.value)
    const handleRatingChange=(e)=>setMovrarting(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            movieid: movid,
            moviename: movname,
            moviedescription: movdesc,
            movierating: movrating,
        };
        console.log(newMovie);
        axios.post("http://localhost:3333/movies/add", newMovie)
            .then((resp) => alert(resp.data))
         window.location.reload();

        //  fetch("http://localhost:3333/movies/add", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newMovie)
        // }).then(() => console.log("Review added successfully!"))
    };
  return (
    <>
    <form onSubmit={handleSubmit} class="form">
        <label class="form-label">Movie ID</label><input class="form-control" type="text" onChange={handleIdChange}></input>
        <label class="form-label">Movie Name</label><input class="form-control" type="text" onChange={handleNameChange}></input>
        <label class="form-label">Movie Description</label>
        <textarea class="form-control" onChange={handleDescChange}></textarea>
        <label class="form-label">Movie Rating</label>
        <select class="form-control" onChange={handleRatingChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button class="btn btn-outline-danger">Add Movie</button>
    </form>
    </>
  )
}

export default MovieForm;