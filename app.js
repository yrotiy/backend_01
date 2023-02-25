// 모듈
const express = require('express');
const app = express();

//middleware
const fs = require('fs');
const path = require('path');
const PORT = 3500;

// 라우터의 index.js 불러오기
const index = require('./src/routes/index');

// use : middleware를 등록해주는 method
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// 라우팅 분리
app.use('/', index);

app.get('/*', (req, res)=>{
      res.send('NOT YET  READY');
})

app.listen(PORT, ()=>{
      console.log('APP LISTENING 3500');
});
