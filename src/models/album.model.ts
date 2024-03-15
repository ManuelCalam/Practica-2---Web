import { Schema, model } from "mongoose"
import {Album, AlbumModel} from '../types/album.type'
import { Genre_Reference } from "./genre.model"

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
        type: Schema.Types.ObjectId,
        ref: Genre_Reference
    },

    release_year: {
        type: String,
        required: true,
        trim: true
    }


})

export default model('Albums', Albums)