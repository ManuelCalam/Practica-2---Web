import type { Model } from "mongoose";
import type { Request } from "express"
import { ObjectId } from "mongoose";



export type Genre = {
    id?: string
    name: string
    description: string
    origin: string
    
}

//export type GenreRequestType = Request & { genre: Genre }

export type JwtRequestType = Request & {  
    genre: {
        sub: ObjectId
  }
}

export type GenreModel = Model<Genre>