setTimeout(()=>{
         document.getElementById('loader-container').style.display="none";
} , 4000);
const hideLog = () =>{
    document.getElementById('login-form').style.display="none";
};
const seeLog = () =>{
    document.getElementById('login-form').style.display="flex";
    document.getElementById('signup-form').style.display="none";
    
}
const hideSign = () =>{
    document.getElementById('signup-form').style.display="none";
};
const showSign = () =>{
    alert('Create An account before use')
    document.getElementById('signup-form').style.display="flex";
    document.getElementById('login-form').style.display="none";
}

function next(){
    document.getElementById('loader-container').style.display="flex";
};
setTimeout(()=>{
    document.getElementById('loader-container').style.display="none";
} , 5000);
 function navs(){
    document.getElementById('nav').style.display="flex";
}

const hiSing = () =>{
    document.getElementById('nav').style.display="none";
};