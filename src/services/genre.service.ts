import Genres from "../models/genre.model"
import {Genre, GenreModel} from '../types/genre.type'
import boom from "@hapi/boom"

class GenreService{
    async create(genre: Genre){
        const newGenre = await Genres.create(genre).catch((error) => {
            console.log('Could not save genre')
        })

        return newGenre
    }

    async findAll(){
        const genres = await Genres.find().catch((error) => {
            console.log('Error while connecting to DB', error)
        })

        if(!genres){
            throw boom.notFound('There are bit genres')
        }

        return genres
    }

    async findById(id: String){
        const genre = await Genres.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!genre){
            throw boom.notFound('Genre not found')
        }

        return genre;

    }

    async findByName(name: String){
        const genre = await Genres.findOne({name}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!genre){
            throw boom.notFound('Genre not found')
        }

        return genre;

    }
}

export default GenreService
