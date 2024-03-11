import express from 'express';
import { Album } from '../types/album.type';
import AlbumService from '../services/album.service';
import passport from 'passport'
import { UserRequestType } from '../types/user.type'

const router = express.Router()
const service = new AlbumService()

router.post('/', passport.authenticate('jwt', {session: false}), async(req, res) => {
    // const album: Album = {
    //         name: "Donda",
    //         artist:  "Kanye West",
    //         genre: "Hip-hop/rap",
    //         release_year: "2021"
    //     } 

        const album: Album = req.body
        const newAlbum = await service.create(album)
        res.status(201).json(newAlbum)
    })
    
    
router.get('/', passport.authenticate('jwt', {session: false}), async(req: UserRequestType, res, next) =>{
    
    try {
        const {user} = req
        console.log(user)
        const albums = await service.findAll()
        res.status(200).json(albums)
        
    } catch (error) {
        next(error)
    }
    // const statusNo = albums.length ? 200 : 404

})

router.get('/:id', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findById(req.params.id)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

router.get('/', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findById(req.query.name as String)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

export default router

