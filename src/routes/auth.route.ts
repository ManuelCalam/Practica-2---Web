import express from "express";
import passport from 'passport'
import { UserRequestType as RequestType} from '../types/user.type'
import UserService from "../services/user.service";
import jwt from 'jsonwebtoken'
import { config } from "../config/config";

const router = express.Router()
const service = new UserService()


router.post('/login', passport.authenticate('local', {session:false}), async(req: RequestType, res, next) =>{
    try {
        const {user} = req
        const payload = { sub: user.id }
        const token = jwt.sign(payload, config.jwtSecret)

        res.status(200).json({ user, token })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router