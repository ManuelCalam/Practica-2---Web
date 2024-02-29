import  express  from "express";
import AlbumRouter from './album.route'

const routerApi = (app) => {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/albums', AlbumRouter)
} 

export default routerApi