const mongoose=require("mongoose")
const dbConnect=()=>
{
    try
    {
        mongoose.connect("mongodb://localhost:27017/newmoviedb")
        console.log("DB Connection Successful");
    }
    catch(err)
    {
        console.log(err.message);
    }
}
module.exports={dbConnect}