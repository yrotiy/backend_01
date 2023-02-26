const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');
const userPwCheck = document.getElementById('userPwCheck');

const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', register);

function register() {
      const req = {
            name : userName.value,
            email : userEmail.value,
            phone : userPhone.value,
            id : userId.value,
            pw : userPw.value      
      };
      
      for(data in req) {
            let checkEmpty = Boolean(req[data]);
            if(checkEmpty == false) return alert('모든 정보를 입력해주세요.');
      }

      if(userPw.value !== userPwCheck.value) return alert('비밀번호를 다시 확인해주세요.');

      fetch('/register', {
            method : 'POST',
            headers : {
                  'Content-Type' : 'application/json'
            },
            body : JSON.stringify(req)
      }).then((res) => res.json())
      .then((res) => {
            if(res.success) {
                  location.href = '/login';
                  alert(res.message);
            } else {
                  alert(res.message);
            }
      })
      .catch((err) => {
            console.error('회원가입 중 에러가 발생했습니다.');
      })
}


