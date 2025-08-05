const express=require("express")
const cors=require("cors")
const db=require("./config/dbConnection")
const Movies=require("./models/movieModel")
const server=express()
server.use(express.json())
server.use(cors())//allow all origin
//db connectivity
db.dbConnect()
//routing
server.get("/movies/all", async (req,res)=>
{
    try
    {
    const allmovies=await Movies.find({})
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
server.get("/movies/:mid", async (req,res)=>
{
    try
    {
    const allmovies=await Movies.findOne({movieid:req.params.mid})
    res.send(allmovies)
    }
    catch(error)
    {
        console.log(error);
    }
})
server.put("/movies/update/:mid",async (req,res)=>
{
    let id=req.params.mid
    let newmovie=req.body
    try
    {
    await Movies.findOneAndUpdate({movieid:id},newmovie)
    res.send("Updated requested movie details")
    }
    catch(error)
    {
        console.log(error);
    }
})
server.delete("/movies/delete/:mid",async (req,res)=>
{
try
    {
    await Movies.findOneAndDelete({movieid:req.params.mid})
    res.send("Deleted requested movie details")
    }
    catch(error)
    {
        console.log(error);
    }
})

server.listen(3333,()=>console.log("Server is running on PORT 3333"))