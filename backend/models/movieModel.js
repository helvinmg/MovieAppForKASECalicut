const mongoose=require("mongoose")
//Schema Creation
const moviesSchema= new mongoose.Schema(
    {movieid:{type:Number, unique:true},
    moviename:{type:String},
    moviedescription: {type:String},
    movierating:{type:Number}})
//Exporting as model
module.exports= mongoose.model('Movies',moviesSchema)