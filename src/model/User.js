const userData = require('./UserData');

class User {
      constructor(body) {
            this.body = body;
      }

      async login() {
            const client = this.body;
            const {id, pw} = await userData.getUserInfo(client.id);

            if(id){
                  if (id === client.id && pw === client.pw) {
                        return {success : true, message : '로그인에 성공했습니다.'};
                  }
                  return {success : false, message : '잘못된 비밀번호입니다.'};
            }
            return{success : false, message : '존재하지 않는 아이디입니다.'};
      }

      async register() {
            const client = this.body;
            try {
                  const response = await userData.save(client);
                  return response;
            } catch (err) {
                  return {success : false , message : err};
            }
      }
}

module.exports = User;