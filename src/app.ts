import express from 'express'

import mongoose from 'mongoose'
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'

import routerApi from './routes'
import {config} from './config/config'

const {mongoUri, port} = config

const app = express();

app.use(express.json())
routerApi(app)

const connectDB = () =>{

mongoose.connect(mongoUri
//     , {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }as ConnectOptions)
 
)}
// .then(() =>{ 
//    console.log('Connected to Database') 
// })
// .catch((error) => {
//     console.log('Could not connect to Database', error)
// })

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