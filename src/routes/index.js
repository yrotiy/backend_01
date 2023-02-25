"use strict";

const express = require('express');
const router = express.Router();

// controller에서 만든 모듈 가져오기
const {index, login, processLogin,register, searchId, searchPwd} = require('../controller/index');

router.get('/', index);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/register', register);
router.get('/searchId', searchId);
router.get('/searchPwd', searchPwd);

module.exports = router;