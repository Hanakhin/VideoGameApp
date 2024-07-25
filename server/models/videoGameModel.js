const mongoose= require('mongoose');

const VideoGameSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        imagePath:{
            type:String,
            required:false
        },
        price:{
            type:Number,
            required:true
        },
        dateSortie:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:false
        }
    }
)
const VideoGame = mongoose.model('Videogame', VideoGameSchema)
module.exports = VideoGame;