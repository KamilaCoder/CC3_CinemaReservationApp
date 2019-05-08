import React from 'react';
import ReactDOM from 'react-dom';
import basePath from './api/basePath';
import LoginForm from './components/LoginForm';


ReactDOM.render(<LoginForm />, document.querySelector('#root'))

/*
// testowanie Logowania
document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    login(email, password);
});

async function login(email, password) {
    const loginResponse = await basePath({
        method: 'post',
        url: '/login',
        data: {
            email: email,
            password: password
        }
    });
    console.log(loginResponse);
    if (loginResponse.status === 200) {
        console.log('Logged in successfully')
    }
}
//////////////////////////
*/
