import type { Model } from "mongoose";

export type Album = {
    id?: string
    name: string
    artist: string
    genre: string
    release_year: string
}

export type AlbumModel = Model<Album>