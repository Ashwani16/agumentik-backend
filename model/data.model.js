const mongoose=require("mongoose");

const data_Schema=mongoose.Schema({
   aboutquote:String,
   certificatequte: String,
   certificates: [String],
   custumersayquote: String,
   days: [ ],
   exclusion: [String],
   heading1: String,
   heading2: String,
   heading2package: [String],
   heading2quote: String,
   heading3: String,
   heading3clients:[String],
   inclusion:[String],
   packageCat:[String],
   packages: [String],
   place: String,
   placeovervie: String,
   teamMembers: [String]
     })
const DataModel=mongoose.model("data",data_Schema)
module.exports={DataModel}