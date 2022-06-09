/*Start Menu */

var menu = document.getElementById("menu");

function colsemenu()
{
    menu.style.top="-100vh";
}

function openmenu()
{
    menu.style.top="0";
}

/*End Menu */

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
// var login = document.getElementById("login");

function  check()
{
    var valid = false;

    if (email.value=="" & password.value=="" & username.value=="") 
    {
        alert("Complete all login data..");
        valid=false; 
    }

    else if (email.value=="") 
    {
        alert("Email is empty..");
        email.focus();
        valid=false; 
    }

    else if (password.value=="") 
    {       
        alert("Password is empty..");
        password.focus();
        valid=false; 
    }

    else if (username.value=="") 
    {
        alert("Username is empty..");
        username.focus();
        valid=false; 
    }

    else if(email.value.indexOf("@")==-1||email.value.indexOf(".")==-1||email.value.indexOf("  ")!=-1)
    {
        alert("Please Enter valid email, e.g:info@yahoo.com");
        email.focus();
        valid=false; 
    }

    else
    {
        valid=true; 
    }
    return valid;       
}

