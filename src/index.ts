import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import router from './routers'

const app = express()

app.get('/', (req, res) => res.send('Express on Vercel'))

app.use(
	cors({
		credentials: true,
	})
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
	console.log('Server running on http://localhost:8080/')
})

const MONGO_URL =
	'mongodb+srv://nagalskynikita:R543VG3n2AnyPpI3@cluster0.j6hn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(console.error))

app.use('/', router())

module.exports = app
