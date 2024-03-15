import Albums from "../models/album.model"
import { Album, AlbumModel } from "../types/album.type"
import boom from "@hapi/boom"
import {ObjectId} from 'mongoose'
import { Genre_Reference } from "../models/genre.model"


class AlbumService{
    async create(album: Album){
        const newAlbum = await Albums.create({...album}).catch((error) => {
            console.log('Could not save album')
        })

        const existingAlbum = await this.findById((newAlbum as any)._id)
        return existingAlbum.populate([{ path: 'genre', strictPopulate: false }])
    }
    
    async findAll(){
        const albums = await Albums.find().populate([{path: 'genre', strictPopulate: false}]).catch((error) => {
            console.log('Error while connecting to DB', error)
        })

        if(!albums){
            throw boom.notFound('There are bit albums')
        }

        return albums
    }

    async findById(id: String){
        const album = await Albums.findById(id).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!album){
            throw boom.notFound('Album not found')
        }

        return album;

    }

    async findByName(name: String){
        const album = await Albums.findOne({name}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!album){
            throw boom.notFound('Album not found')
        }

        return album;

    }

    async findByArtist(artist: String){
        const album = await Albums.find({artist}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!album){
            throw boom.notFound('Artist not found')
        }

        return album;
    }

    async findByGenre(genre: String){
        const album = await Albums.find({genre}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!album){
            throw boom.notFound('Release year not found')
        }

        return album;
    }

    async findByYear(release_year: String){
        const album = await Albums.find({release_year}).catch((error) => {
            console.log('Error while connecting to the DB', error)
        })

        if(!album){
            throw boom.notFound('Release year not found')
        }

        return album;
    }
}


export default AlbumService

