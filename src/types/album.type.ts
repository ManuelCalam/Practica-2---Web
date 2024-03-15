import type { Model } from "mongoose";
import { Genre } from "./genre.type";

export type Album = {
    id?: string
    name: string
    artist: string
    release_year: string
    genre: Genre
}

export type AlbumModel = Model<Album>