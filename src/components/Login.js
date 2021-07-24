import React from 'react';
import { GoogleOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { div } from 'prelude-ls';
import "firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <WhatsAppOutlined style={{ fontSize:'100px' , color:'#128C7E' }}/>
                <h2>Welcome to AniChat
                    <br/><br/> 
                    <div
                        className="login-button google"
                        onClick = { () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <GoogleOutlined /> Sign in with Google
                    </div>
                    <br /> <br />

                    <div
                        className="login-button facebook"
                        onClick = { () => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}

                    >
                        <FacebookOutlined /> Sign in with Facebook
                    </div>
                    <br /> <br />

                </h2>
            </div>
        </div>
    );
}

export default Login;