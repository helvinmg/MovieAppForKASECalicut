const mongoose=require("mongoose")
const dbConnect=()=>
{
    try
    {
        mongoose.connect("mongodb://127.0.0.1:27017/MovieDBKASE")
        console.log("DB Connection Successful");
    }
    catch(err)
    {
        console.log(err.message);
    }
}
module.exports={dbConnect}