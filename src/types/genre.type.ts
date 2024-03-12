import type { Model } from "mongoose";

export type Genre = {
    id?: string
    name: string
    description: string
    origin: string
    
}

export type GenreModel = Model<Genre>