import express from 'express'

import mongoose from 'mongoose'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'

import routerApi from './routes'
import {config} from './config/config'
import passport from 'passport'
import cors from 'cors'
import './utils/auth/'

const {mongoUri, port} = config

const app = express();

app.use(passport.initialize())
app.use(express.json())
app.use(cors())
routerApi(app)


const connectDB = () =>{

mongoose.connect(mongoUri)}

app.get('/', (req, res) => {
    res.send("Bye World 222");
})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
    connectDB()
})


 



app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)