// express 설치
const express = require('express')
const app = express()
const port = 5000

// 몽고DB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://movie:1234@cluster0.a3x5545.mongodb.net/')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error:', e))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

