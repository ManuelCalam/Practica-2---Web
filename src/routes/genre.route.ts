import express from 'express';
import { Genre } from '../types/genre.type';
import GenreService from '../services/genre.service';
import passport from 'passport'
import { UserRequestType } from '../types/user.type'


const router = express.Router()
const service = new GenreService()


router.post('/', passport.authenticate('jwt', {session: false}), async(req, res) => {

    const genre: Genre = req.body
    const newGenre = await service.create(genre)
    res.status(201).json(newGenre)
})


router.get('/', passport.authenticate('jwt', {session: false}), async(req: UserRequestType, res, next) =>{
    
    try {
        const {user} = req
        console.log(user)
        const genres = await service.findAll()
        res.status(200).json(genres)
        
    } catch (error) {
        next(error)
    }

})


router.get('/:id', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const genre = await service.findById(req.params.id)
        res.status(200).json(genre)

    } catch (error) {
        next(error)
    }
})


router.get('/', passport.authenticate('jwt', {session: false}), async(req, res, next) =>{
    try {
        const genre = await service.findById(req.query.name as String)
        res.status(200).json(genre)

    } catch (error) {
        next(error)
    }
})


export default router
