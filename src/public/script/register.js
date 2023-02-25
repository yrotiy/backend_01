$(document).on('click', function (event) {
      let registerInput = $('.register-contents input');
      if (event.target.tagName == 'INPUT') {
            let notActive = $(event.target).parent().parent().siblings().children().children();
            $(event.target).siblings().addClass('active');
            $(event.target).addClass('active');
            $(notActive).removeClass('active');
      } else {
            $('.register-contents input').removeClass('active');
            $('.register-contents label').removeClass('active');
      }
})

// regexHandle
const regexHandle = (regex, input, event) => {
      const checked = regex.test(input.value);
      const inputValue = input.value;
      const userErr = $(input).parent().siblings().first();
      const userAlert = $(input).parent().siblings().last();
      const label = $(input).siblings().first();

      if (!checked && inputValue) {
            userErr.css('display', 'block');
            label.addClass('invalid');
            $(input).addClass('invalid');
      }
      else {
            userErr.css('display', 'none');
            label.removeClass('invalid');
            $(input).removeClass('invalid');
            label.addClass('valid');
            $(input).addClass('valid');

      }
      if (inputValue.length === 0) {
            userErr.css('display', 'none');
            label.removeClass('valid');
            $(input).removeClass('valid');
      }
}

$('#userName').on('input', (event) => {
      const regex = /^[가-힣]{2,4}|^[a-z]{2,30}/gmi;
      const input = event.target;
      regexHandle(regex, input);
})

$('#userEmail').on('input', (event) => {
      const regex = /[a-z\d.+-]+@[A-Z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?/gmi;
      const input = event.target;
      moveNext(regex, input);
})

$('#userPhone').on('input', (event) => {
      const regex = /\(?\d{2,3}\)?[- ]?\d{4}[- ]?\d{4}/gm;
      const input = event.target;
      moveNext(regex, input);
})

$('#userId').on('input', (event) => {
      const regex = /^\w{5,12}(\d|\+|\$)?/gmi;
      const input = event.target;
      moveNext(regex, input);
})

$('#userPw').on('input', (event) => {
      const regex = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[%$!])\w+/gm;
      const input = event.target;
      moveNext(regex, input);

})

// userPwCheck
document.querySelector('#userPwCheck').addEventListener('input', function (event) {
      const input = event.target;
      const inputValue = input.value;
      const pw = document.querySelector('#userPw');
      const pwCheck = document.querySelector('#userPwCheck');
      const userErr = $(input).parent().siblings().first();
      const userAlert = $(input).parent().siblings().last();
      const label = $(input).siblings().first();

      if (pw.value !== pwCheck.value) {
            userAlert.css('display', 'block');
      } else {
            userAlert.css('display', 'none');
      }
      if (inputValue.length === 0) {
            userErr.css('display', 'none');
            label.removeClass('invalid');
            label.addClass('active');
            $(input).removeClass('invalid');
            $(input).addClass('active');
      }
})

// 순차적 입력
function moveNext(regex, input) {
      const registerInputs = document.querySelectorAll('.beforCheckInput');
      registerInputs.forEach((input) => {
            input.addEventListener('input', function () {
                  let checkBefore = input.parentElement.parentElement.previousElementSibling.children[0].children[1].value;
                  const userAlert = $(input).parent().siblings().last();
                  const label = $(input).siblings().first();
                  if (checkBefore.length === 0) {
                        userAlert.css('display', 'block');
                        label.addClass('invalid');
                        label.removeClass('active');
                        $(input).addClass('invalid');
                        $(input).removeClass('active');
                  } else {
                        userAlert.css('display', 'none');
                        regexHandle(regex, input);
                  }
            })
      })
}

// showPw
$('.show-pw').on('click', function () {
      $(this).toggleClass('activePw');
      let pw = $(this).siblings()[1];
      if ($(this).hasClass('activePw')) {
            $(pw).attr('type', 'text');
      } else {
            $(pw).attr('type', 'password');
      }
})

const userName = document.getElementById('userName');
const userPhone = document.getElementById('userPhone');
const userEmail = document.getElementById('userEmail');
const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');
const userPwCheck = document.getElementById('userPwCheck');
const registerBtn = document.getElementById('registerBtn');


registerBtn.addEventListener('click', register);

function register(){
      const req = {
            name : userName.value,
            phone : userPhone.value,
            email : userEmail.value,
            id : userId.value,
            pw : userPw.value,
            pwCheck : userPwCheck.value
      };

      console.log(req);

      fetch('/register', {
            method : 'POST',
            headers : {
                  'Content-Type' : 'application/json'
            },
            body : JSON.stringify(req)
      }).then((res) => res.json())
      .then((res) => {
            if(res.success) {
                  location.href = '/registerSuccess';
                  alert(res.message);
            } else {
                  alert(res.message);
            }
      })
      .catch((err) => {
            console.error('회원가입 중 에러가 발생했습니다.');
      })
}