import express from 'express';
import { Album } from '../types/album.type';
import AlbumService from '../services/album.service';

const router = express.Router()
const service = new AlbumService()

router.post('/', async(req, res) => {
    // const album: Album = {
    //         name: "Donda",
    //         artist: "Kanye West",
    //         genre: "Hip-hop/rap",
    //         release_year: "2021"
    //     } 
    
        const album: Album = req.body
    
        const newAlbum = await service.create(album)
    
        res.status(201).json(newAlbum)
    })
    
    
router.get('/', async(req, res, next) =>{
    
    try {
        const albums = await service.findAll()
        res.status(200).json(albums)
        
    } catch (error) {
        next(error)
    }
    // const statusNo = albums.length ? 200 : 404

})

export default router

