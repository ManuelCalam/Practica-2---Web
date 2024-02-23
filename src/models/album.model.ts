import { Schema, model } from "mongoose"
import {Album, AlbumModel} from '../types/album.type'

const Albums = new Schema <Album, AlbumModel>({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },

    artist: {
        type: String,
        required: true,
        trim: true
    },

    genre: {
        type: String,
        required: true,
        trim: true
    },

    release_year: {
        type: String,
        required: true,
        trim: true
    }
})

export default model('Albums', Albums)