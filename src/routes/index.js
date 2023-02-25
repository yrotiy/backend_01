"use strict";

const express = require('express');
const router = express.Router();

// controller에서 만든 모듈 가져오기
const {index, login, register, searchId, searchPwd} = require('../controller/index');

// 해당 라우터로 들어오면, 해당 함수를 실행해서 불러오는 것
// router.get('/', (req, res)=> {
//       res.render('view/index');
// })

// controller 역할을 수행하는 코드
// (req, res)=> {
//       res.render('view/index');
// }

router.get('/', index);
router.get('/login', login);
// router.posts('/login', login);
router.get('/register', register);
router.get('/searchId', searchId);
router.get('/searchPwd', searchPwd);

module.exports = router;