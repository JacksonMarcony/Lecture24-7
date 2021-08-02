import { config } from 'dotenv'
import 'express-async-errors'
import express, { NextFunction, Request, Response, urlencoded } from 'express'
import { router } from "./routes";
import cors from 'cors';

config()
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: 'GET, PUT, DELETE, POST' 
} 

const app = express()

app.use(express.json())
app.use(cors(options))
app.use(urlencoded({ extended: true }))
app.use(router)


app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({
        status: "Error",
        message: error.message
    })
})
const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server is running on port 🔥${port}🔥`))