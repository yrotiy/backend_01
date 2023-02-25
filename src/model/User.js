const userData = require('./UserData');

class User {
      constructor(body) {
            this.body = body;
      }

      login() {
            const body = this.body;
            const { id, pw } = userData.getUserInfo(body.id);

            // 아이디가 있으면,
            if(id){
                  if (id === body.id && pw === body.pw) {
                        return {success : true, message : '로그인에 성공했습니다.'};
                  }
                  // 아이디만 존재할 경우,
                  return {success : false, message : '잘못된 비밀번호입니다.'};
            }
            // 아이디&비밀번호 둘다 존재하지 않을 경우,
            return{success : false, message : '존재하지 않는 아이디입니다.'};
      }
}

module.exports = User;