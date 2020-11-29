const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //공백없애주는역할
        unique: 1 //똑같은 이름을 쓰지 못하게 함
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //role을 주는 이유는 관리자 또는 일반 유저가 될 수 있기 때문
        type: Number,
        default: 0 //내가 role 값을 주지않으면 기본이 0, 0일반유저 1관리자
    },
    image: String,//그사람에 대한 이미지 지정 가능
    token: { //토큰을 이용하여 유효성 관리 가능
        type: String
    },
    tokenExp: { //토큰 유효 기간 지정
        type: Number
    }
})

const User = mongoose.model('User', userSchema)//위의 스키마를 모델로 감싸줘야함

module.exports = {User}// 위 모델을 다른곳에서도 쓰고싶을때 exports를 User로 해주면 됨