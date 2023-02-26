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

      // 새로운 메서드로 데이터를 넘겨줘야한다.
      static getUser(...fields){
            // const users = this.#users;
            const newUsers = fields.reduce((newUsers, field)=>{
                  if(users.hasOwnProperty(field)) {
                        newUsers[field] = users[field];
                  }
                  return newUsers;
            }, {});
            return newUsers;
      }

      static getUserInfo(id) {
            return fs.readFile('./src/database/users.json')
            .then((data) => {
                  return this.#getUserInfo(data, id);
            })
            .catch(err => console.error(err));
      }

      static save(userInfo) {
            // const users = this.#users;
            users.name.push(userInfo.name);
            users.email.push(userInfo.email);
            users.phone.push(userInfo.phone);
            users.id.push(userInfo.id);
            users.pw.push(userInfo.pw);
            return {success : true};
      }
}

module.exports = userData;