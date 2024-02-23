import express from 'express';
import mongoose from 'mongoose';
import { Album } from './types/album.type';
import AlbumService from './services/album.service';

const MONGO_URI = 'mongodb://localhost:27017/Practica-2'


const app = express();
app.use(express.json())
const port = 3010;

const connectDB = () =>{

mongoose.connect(MONGO_URI
//     , {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }as ConnectOptions)
 
)}
// .then(() =>{ 
//    console.log('Connected to Database') 
// })
// .catch((error) => {
//     console.log('Could not connect to Database', error)
// })

app.get('/', (req, res) => {
    res.send("Bye World 222");
})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
    connectDB()
})


const albumService = new AlbumService()

app.post('/Album', async(req, res) => {
// const album: Album = {
//         name: "Donda",
//         artist: "Kanye West",
//         genre: "Hip-hop/rap",
//         release_year: "2021"
//     } 

    const album: Album = req.body

    const newAlbum = await albumService.create(album)

    res.status(201).json(newAlbum)
})


app.get('/Album', async(req, res) =>{
    const albums = await albumService.findAll()
    // const statusNo = albums.length ? 200 : 404

    res.status(200).json(albums)
})