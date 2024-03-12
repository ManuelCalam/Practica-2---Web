import { Schema, model } from "mongoose"
import {Genre, GenreModel} from '../types/genre.type'

const Genres = new Schema <Genre, GenreModel>({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    origin: {
        type: String,
        required: true,
        trim: true
    },

})

export default model('Genres', Genres)

