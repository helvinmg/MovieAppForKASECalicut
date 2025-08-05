const mongoose=require("mongoose")
//Schema Creation
const moviesSchema= new mongoose.Schema({moviename:{type:String},moviedescription: {type:String},
movierating:{type:Number}})

module.exports= mongoose.model('Movies',moviesSchema)