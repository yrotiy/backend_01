const fs = require('fs').promises;

class userData {
      // 데이터 보호를 위해 은닉화 권장
      // 최상단에 위치하는 것이 좋음
      static #getUserInfo(data, id) {
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser, info) => {
                  newUser[info] = users[info][idx];
                  return newUser;
            }, {});
            return userInfo;
      }

      static #getUser(data, isAll, fields){
            const users = JSON.parse(data);
            if(isAll) return users;
            const newUsers = fields.reduce((newUsers, field)=>{
                  if(users.hasOwnProperty(field)) {
                        newUsers[field] = users[field];
                  }
                  return newUsers;
            }, {});
            return newUsers;
      }

      static getUser(isAll, ...fields){
            return fs.readFile('./src/database/users.json')
            .then((data) => {
                  return this.#getUser(data, isAll, fields);
            })
            .catch(err => console.error(err));
      }

      static getUserInfo(id) {
            return fs.readFile('./src/database/users.json')
            .then((data) => {
                  return this.#getUserInfo(data, id);
            })
            .catch(err => console.error(err));
      }

      static async save(userInfo) {
            const users = await this.getUser(true);
            if(users.id.includes(userInfo.id)) {
                  throw '이미 존재하는 회원입니다.';
            } 
            users.name.push(userInfo.name);
            users.email.push(userInfo.email);
            users.phone.push(userInfo.phone);
            users.id.push(userInfo.id);
            users.pw.push(userInfo.pw);
            fs.writeFile('./src/database/users.json', JSON.stringify(users));
            return {success : true, message : '성공적으로 회원가입되었습니다!'};
      }
}

module.exports = userData;