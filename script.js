const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  showLoginBtn=document.querySelector("#ShowLoginBtn"),
  showRegistrationBtn=document.querySelector("#ShowRegistrationBtn");



  formOpenBtn.addEventListener("click", () => home.classList.add("show"));
  formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
showLoginBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  formContainer.classList.remove("active");
});
showRegistrationBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  formContainer.classList.add("active");
});


const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById("form")



form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
  
   

    //User name check

    if(nameValue===''){
        setError(username,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(username,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(username)
    }
    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
    }
   
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}


