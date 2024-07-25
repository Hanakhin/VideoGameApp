const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const VideoGame = require('./models/videoGameModel');
const res = require("express/lib/response");
const uri = "mongodb+srv://snow44111:admin@mernreactern24.tnl84l2.mongodb.net/?retryWrites=true&w=majority&appName=MernReactERN24";
const app = express()
app.use(cors())

app.use(express.json());
mongoose.set("strictQuery", false)

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to db !")
    })
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Welcome to the server');
})
app.listen(3002,()=>{
    console.log('Server started on port 3002');
})

app.post('/newuser', async (req, res) => {
    try{
       const user = await User.create(req.body);
       res.status(200).json(user)
    }catch(err){
        res.status(500).json({message: err})
        console.error(err);
    }
})

app.get('/videogames', async (req, res) => {

    try{
    const videoGame = await VideoGame.find();
    res.status(200).json(videoGame)
        }
    catch(err){
    res.status(500).json({message: err})
    }
})

app.post('/newgame',async (req, res) => {
    try{
        const videoGame = await VideoGame.create(req.body);
        res.status(200).json(videoGame)
    }catch(err){
        res.status(500).json({message: err})
        console.error(err);
    }
})

