import React from 'react'
import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin, useOneTap } from '@react-oauth/google';

const GoogleAuth = () => {
  return (
    <>
      <div>GoogleAuth</div>
      <GoogleOAuthProvider 
        clientId='436427675830-0bq5llpkm7d8ng6halb2qd0fdprushm4.apps.googleusercontent.com'
      >
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default GoogleAuth