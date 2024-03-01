import  express  from "express";
import AlbumRouter from './album.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/albums', AlbumRouter)
    router.use('/users', UserRouter)
    router.use('/auth', AuthRouter)
} 

export default routerApi