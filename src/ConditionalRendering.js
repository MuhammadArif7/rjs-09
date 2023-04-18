import React from 'react'

function AdminPanel(){
    return(
        <div><h2>Welcome Admin!</h2></div>
    )
}

function LoginForm(){
    return(
    <div>
        <h3>From</h3>
        <form>
        <label>User Name</label> <br/>
        <input type='text'/><br/>
        <label>Password</label> <br/>
        <input type='password'/><br/>
        <input type='submit' value="Login" />
        </form>
    </div>
    )
}

export function ConditionalRendering(isLoggedIn) {
    let content;
    isLoggedIn = false;
    if (isLoggedIn) 
    {
        content = <AdminPanel />;
    } else 
    {
        content = <LoginForm />;
    }
    return (
    <div>
    {content}
    </div>
    );
}
