const express = require('express');
const router = express.Router();

// controller에서 만든 모듈 가져오기
const {index, login, processLogin,register, searchId, searchPw, processRegister} = require('../controller/index');

router.get('/', index);

// login
router.get('/login', login);
router.post('/login', processLogin);

// register
router.get('/register', register);
router.post('/register', processRegister);

router.get('/searchId', searchId);
router.get('/searchPw', searchPw);

module.exports = router;