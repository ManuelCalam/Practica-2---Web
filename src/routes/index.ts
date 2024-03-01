import  express  from "express";
import AlbumRouter from './album.route'
import UserRouter from './user.route'

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/albums', AlbumRouter)
    router.use('/users', UserRouter)
} 

export default routerApi