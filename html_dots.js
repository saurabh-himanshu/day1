function login()
{
    let name=document.getElementById("input").value;
    let pin=document.getElementById("password").value;
    if(name && pin){
    console.log(name);
    console.log(pin);
    document.getElementById("output").innerText="Login as "+name;
    }else{
        alert("please fill");
    }
}
function createAccount() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    if(username==""||email==""||password==""||confirmPassword=="")
    {
        alert("All fiels are required!");
        //document.getElementById('output').textContent='please fill all fields';
        return;
    }
    else if (password !== confirmPassword) {
        alert("Password and confirm password don't matched");
        //document.getElementById('output').textContent = 'Passwords do not match!';
        return;
    }
    document.getElementById('create').style.visibility='hidden';
    document.getElementById('output').textContent = 'Account created successfully!';
    document.getElementById('lbtn').textContent='login';
    document.getElementById('lbtn').style.background='blue';
    document.getElementById('lbtn').style.visibility='visible';
}
