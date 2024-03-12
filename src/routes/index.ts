import  express  from "express";
import AlbumRouter from './album.route'
import UserRouter from './user.route'
import AuthRouter from './auth.route'
import GenreRouter from './genre.route'


const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/albums', AlbumRouter)
    router.use('/users', UserRouter)
    router.use('/auth', AuthRouter)
    router.use('/genres', GenreRouter)
} 

export default routerApi