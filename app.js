const express = require("express")
const path = require("path")
const app = express()
app.use(express.json())

const userRouter = require('./Routes/userRoutes')
const cookieParser = require('cookie-parser')
const viewRouter = require('./Routes/viewRoutes')
app.use(cookieParser())

app.use('/api/v1/users',userRouter)
app.use('/', viewRouter)



app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static('users'));

module.exports=app;