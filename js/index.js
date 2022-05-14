var home = document.getElementById("home");
var jobs = document.getElementById("jobs");
var roles = document.getElementById("roles");
var users = document.getElementById("users");

var role_page = document.getElementById("roles_page");
var users_page = document.getElementById("users_page")
var profile_page = document.getElementById("profile_page")
var jobs_page = document.getElementById("jobs_page")
var home_page = document.getElementById("home_page")


home_page.style.display = 'block';
roles_page.style.display = 'none';
users_page.style.display = 'none';
profile_page.style.display = 'none';
jobs_page.style.display = 'none';

home.addEventListener("change",
    function(){
        if(this.checked){
            home_page.style.display = 'block';
            roles_page.style.display = 'none';
            users_page.style.display = 'none';
            profile_page.style.display = 'none';
            jobs_page.style.display = 'none';
            
        }
    }
)

jobs.addEventListener("change",
function(){
    if(this.checked){
        home_page.style.display = 'none';
        roles_page.style.display = 'none';
        users_page.style.display = 'none';
        profile_page.style.display = 'none';
        jobs_page.style.display = 'block';  
    }
})

roles.addEventListener("change",
function(){
    if(this.checked){
        home_page.style.display = 'none';
        roles_page.style.display = 'block';
        users_page.style.display = 'none';
        profile_page.style.display = 'none';
        jobs_page.style.display = 'none';
    }
})

users.addEventListener("change",
function(){
    if(this.checked){
        home_page.style.display = 'none';
        roles_page.style.display = 'none';
        users_page.style.display = 'block';
        profile_page.style.display = 'none';
        jobs_page.style.display = 'none';
       }
})
