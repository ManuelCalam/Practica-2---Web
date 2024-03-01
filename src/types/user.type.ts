import type { Model } from "mongoose"

export type User = {
    id?: String
    name: String
    email: String
    password: String
    address: String
    phoneNumber: String
    createdAt?: Date
    lastModified?: Date
}

export type UserModel = Model<User>

