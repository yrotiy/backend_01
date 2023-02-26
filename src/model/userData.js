class userData {
      // 외부에서 확인 및 출력하지 못하도록 은닉화해주기 : #변수명 
      static #users = {
            name : ['홍길동', '은박지', '오징어'],
            email :  ['test01@gmail.com', 'test02@naver.com', 'test03@hanmail.com'],
            phone : ['01012345678', '0109836283', '024261066'],
            id: ['test01', 'test02', 'test03'],
            pw: ['1234', '5678', '9000']
      };

      // 데이터 보호를 위해 은닉화 작업 후, 
      // 새로운 메서드로 데이터를 넘겨줘야한다.
      static getUser(...fields){
            const users = this.#users;
            const newUsers = fields.reduce((newUsers, field)=>{
                  if(users.hasOwnProperty(field)) {
                        newUsers[field] = users[field];
                  }
                  return newUsers;
            }, {});
            return newUsers;
      }

      static getUserInfo(id) {
            const users = this.#users;
            const idx = users.id.indexOf(id);
            // #users의 key만 배열로 만듬
            const usersKeys = Object.keys(users);
            const userInfo = usersKeys.reduce((newUser, info) => {
                  newUser[info] = users[info][idx];
                  return newUser;
            }, {});

            return userInfo;
      }

      static save(userInfo) {
            const users = this.#users;
            users.name.push(userInfo.name);
            users.email.push(userInfo.email);
            users.phone.push(userInfo.phone);
            users.id.push(userInfo.id);
            users.pw.push(userInfo.pw);
            return {success : true};
      }
}

module.exports = userData;