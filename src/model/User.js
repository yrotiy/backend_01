const userData = require('./UserData');

class User {
      constructor(body) {
            this.body = body;
      }

      login() {
            const client = this.body;
            const { id, pw } = userData.getUserInfo(client.id);

            if(id){
                  if (id === client.id && pw === client.pw) {
                        return {success : true, message : '로그인에 성공했습니다.'};
                  }
                  return {success : false, message : '잘못된 비밀번호입니다.'};
            }
            return{success : false, message : '존재하지 않는 아이디입니다.'};
      }

      register() {
            const client = this.body;
            const response = userData.save(client);
            return response;
      }
}

module.exports = User;