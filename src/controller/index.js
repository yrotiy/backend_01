const path = require('path');
const User = require('../model/User');

const index = (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
}

const login = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','login.html'));
}

const processLogin = async (req, res) => {
      const user = new User(req.body);
      const response = await user.login();
      return res.json(response);
}

const register = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','register.html'));
}

const processRegister = async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      return res.json(response);
}

const searchId = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','searchId.html'));
}

const searchPw = (req, res) => {
      res.sendFile(path.join(__dirname, '..' , 'view','subdir','searchPw.html'));
}

// 해당 함수를 라우터의 index.js에서 사용할 수 있도록
// 객체 타입의 모듈로 만들어서 빼주기
// key와 value 값이 동일하므로 value는 생략 가능
module.exports = {index, login, processLogin, register, searchId, searchPw, processRegister};