const path = require('path');
const fs = require('fs');
const userData = require('../model/userData');


const index = (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
}

const login = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','login.html'))
}

const processLogin = (req, res) => {
      // console.log(req.body);
      const id = req.body.id;
      const pw = req.body.pw;
      const users = userData.getUser('id', 'pw');
      // console.log(userData.getUser('id', 'pw'));

      const response = {};
      if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                  response.success = true;
                  response.message = '로그인에 성공했습니다.';    
                  return res.json(response);
            }
      }
      // // 로그인 실패했을 경우,
      response.success = false; //false로 다시 바꿔야함
      response.message = '로그인에 실패했습니다.';
      return res.json(response);
}

const register = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','register.html'))
}

const searchId = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','searchId.html'))
}

const searchPwd = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','searchPwd.html'))
}

// 해당 함수를 라우터의 index.js에서 사용할 수 있도록
// 객체 타입의 모듈로 만들어서 빼주기
// key와 value 값이 동일하므로 value는 생략 가능
module.exports = {index, login, register, searchId, searchPwd, processLogin};