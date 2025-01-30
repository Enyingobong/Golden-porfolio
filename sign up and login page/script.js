//Toggle between sign up and sign in form
function toggleForm(formId){
    document.getElementById('signup-form').style.display='none';
    document.getElementById('signin-form').style.display='none';
    document.getElementById(formId).style.display='block';
}

//Sign Up Functionality
function signUp(){
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if(username&& password){
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign Up successful! Please Sign In');
        toggleForm('signin-form');
    } else{
        alert('Please fill in all fields.');
    }
}

//Sign In Functionality
function signIn(){
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const storedusername = localStorage.getItem('username').value;
    const storedpassword = localStorage.getItem('password').value;

    if(username === storedUsername && password === storedPassword){
        alert('Sign Up successful! Welcome,' + username);
        toggleForm('signin-form');
    } else{
        alert('Invalid credentials. Please try again or Sign up');
    }
}
