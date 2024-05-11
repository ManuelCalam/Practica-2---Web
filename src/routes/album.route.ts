import express from 'express';
import { Album } from '../types/album.type';
import AlbumService from '../services/album.service';
import passport from 'passport'
import { UserRequestType } from '../types/user.type'
import { JwtRequestType } from '../types/genre.type';
import { ObjectId } from 'mongoose';

const router = express.Router()
const service = new AlbumService()

router.post('/', passport.authenticate('jwt', {session: false}), async(req: JwtRequestType, res) => {
        const { genre: sub } = req
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



router.get('/name/:name', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findByName(req.params.name)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

router.get('/artist/:artist', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findByArtist(req.params.artist)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

router.get('/genre/:genre', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findByGenre(req.params.genre as string)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

router.get('/releaseYear/:release_year', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const album = await service.findByYear(req.params.release_year as string)
        res.status(200).json(album)

    } catch (error) {
        next(error)
    }
})

export default router

