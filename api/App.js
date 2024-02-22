const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        name: 'Son Tung Mtp',
        position: 'Singer 1st vn',
        image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/1/741911/Hay-Trao-Cho-Anh-3.jpg'
    }).status(200)
})
app.get('/api/test', (req,res) => {
    res.send({
        msg: 'ok nha b ei'
    }).status(200)
})

app.listen('4000', () => {
    console.log('App running on port 4000');
})