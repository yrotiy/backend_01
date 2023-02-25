class userData {
      // 외부에서 확인 및 출력하지 못하도록 은닉화해주기 : #변수명 
      static #users = {
            id: ['test01', 'test02', 'test03'],
            pw: ['1234', '5678', '9000'],
            email :  ['test01@gmail.com', 'test02@naver.com', 'test03@hanmail.com']
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
}

module.exports = userData;