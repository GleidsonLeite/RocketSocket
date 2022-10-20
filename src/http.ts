import express, { Request, Response } from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'

const app = express();

const server = createServer(app)

mongoose.connect("mongodb://localhost/rocketsocket")



app.use(express.static(path.join(__dirname, '..', 'public')))

const io = new Server(server)

io.on("connection", socket => {
  console.log("socket", socket.id)
})

app.get("/", (request:Request, response:Response) => {
  return response.json({
    message: "Hello Websocket"
  })
})

export { server, io }