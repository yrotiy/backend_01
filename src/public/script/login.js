const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');
const loginBtn = document.getElementById('loginBtn');

console.log(userId, userPw, loginBtn);


loginBtn.addEventListener('click', login);

function login(){
      // console.log(userId.value, userPw.value);
      const req = {
            id : userId.value,
            pw : userPw.value
      };

      fetch('/login', {
            method : 'POST',
            headers : {
                  'Content-Type' : 'application/json'
            },
            // 문자열로 변환하기
            body : JSON.stringify(req)
      })
      // console.log(req);
}

// form event
$(document).on('click', function(event){
      let loginInput = $('.login-form input');

      if(event.target.tagName == 'INPUT') {
            // form active
            loginInput.parent().parent().addClass('active');
            //label active
            let notActive = $(event.target).parent().siblings().children().first();
            $(event.target).siblings().addClass('active');
            $(notActive).removeClass('active');
      } else {
            loginInput.parent().parent().removeClass('active');
            $('.login-form label').removeClass('active');
      }

})