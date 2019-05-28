const secretUsername = 'admin';
const secretPassword = 'admin123';
document.querySelector(".signin").addEventListener('click' , checkValidation , {
    once : true
});


function checkValidation(i){
    i.preventDefault();
    const usernameInput = document.getElementById("usernamesignup").value;
    const passwordInput = document.getElementById("passwordsignup").value;

    if(usernameInput === '' || passwordInput === ''){

    }

    else if(usernameInput === secretUsername && passwordInput === secretPassword){
        const successDiv = document.createElement('div');
        successDiv.classList.add('divsuccess');
        successDiv.textContent = "LOGIN SUCCESS !!";
        document.querySelector('.signin').insertAdjacentElement('afterend' , successDiv);

    }else{
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = '<p>Incorrect <em>username</em> or <em>password</em></p><p>Try again</p>';
        document.querySelector('.signin').insertAdjacentElement('afterend' , errorDiv);
        errorDiv.classList.add('diverror');

    };
}

