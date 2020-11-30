const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

//application/x-www-from-urlencoded이렇게 된 데이터를 가져와서 분석할 수 있게함
app.use(bodyParser.urlencoded({extended: true}));
//application/json 도 마찬가지
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('hello world! haha'))


app.post('/register', (req, res) => {

  //회원가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body) //bodyparser가 있어 req.body 사용가능

    user.save((err, userInfo) => {
      if(err) return res.json({success: false, err})
      return res.status(200).json({
        success: true
      })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))