import express from 'express'
import { ENV } from './lib/env.js'


const app   = express()



app.get("/",(req,res)=>{
    res.status(200).json("server started")
})
app.listen(ENV.PORT,()=>{
    console.log(`server started ${ENV.PORT} `)
})