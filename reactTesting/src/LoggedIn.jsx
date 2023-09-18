import React from 'react'

const LoggedIn = () => {
    // let content;

    // if (isLoggedIn) {
    //     content = <AdminPanel />
    // } else {
    //     content = <LoginForm /> 
    // }
let content; 
 {isLoggend ? (
  <AdminPanel />
  ):( 
  <loginForm />
  )}

    
  return (
    <div>
      {content}
    </div>
  )
}

export default LoggedIn
