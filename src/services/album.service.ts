import Albums from "../models/album.model"
import { Album, AlbumModel } from "../types/album.type"
import boom from "@hapi/boom"

class AlbumService{
    async create(album: Album){
        const newAlbum = await Albums.create(album).catch((error) => {
            console.log('Could not save album')
        })

        return newAlbum
    }
    
    async findAll(){
        const albums = await Albums.find().catch((error) => {
            console.log('Error while connecting to DB', error)
        })

        if(!albums){
            throw boom.notFound('There are bit albums')
        }

        return albums
    }
}


export default AlbumService

