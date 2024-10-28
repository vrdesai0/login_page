const signin_btn = document.getElementById('signin_button');
const signup_btn = document.getElementById('signup_button');
const signin = document.getElementById('signin_contnr');
const signup = document.getElementById('signup_contnr');
const signinside = document.getElementById('signin_side');
const signupside = document.getElementById('signup_side');

signup_btn.addEventListener('click', ()=>{
    signin.classList.add('signin_active');
    signup.classList.add('signup_active');
    signinside.classList.add('signin_side_active');
    signupside.classList.add('signup_side_active');
});

signin_btn.addEventListener('click', ()=>{
    signin.classList.remove('signin_active');
    signup.classList.remove('signup_active');
    signinside.classList.remove('signin_side_active');
    signupside.classList.remove('signup_side_active');
});