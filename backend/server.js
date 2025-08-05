const express=require("express")
const db=require("./config/dbConnection")
const Movies=require("./models/movieModel")
const server=express()
server.use(express.json())
//db connectivity
db.dbConnect()
//routing
server.get("/movies/all", async (req,res)=>
{
    try
    {
    const allmovies=await Movies.find({})
    console.log(allmovies);
    res.send(allmovies)
    }
    catch(error)
    {
        console.log(error);
    }
})
server.post("/movies/add",async (req,res)=>
{
    const newmovie=req.body
    const movie=new Movies(newmovie)//creating Movie object
    await movie.save()//saving to db
    res.send("Movie Saved")
})
server.get("movies/:mid",(req,res)=>
{

})
server.put("movies/update/:mid",(req,res)=>
{

})
server.delete("movies/delete/:mid",(req,res)=>
{

})

server.listen(3333,()=>console.log("Server is running on PORT 3333"))