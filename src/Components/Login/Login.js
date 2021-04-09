import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div className="text-container p-5">
            <button className="btn btn-primary google-login-btn" onClick={handleGoogleSignIn}><i class="fab fa-google"></i> Google Sign In</button>
            <br />
            <button className="btn btn-success mt-3 fb-login-btn" onClick={handleFbSignIn}><i class="fab fa-facebook"></i> Facebook Sign In</button>
            <p className="break-line1"></p>
            <p style={{textAlign: 'center'}} >OR</p>
            <p className="break-line2"></p>
            <form>
                <input className="login-email" name="name" type="text" placeholder="Enter Your E-Mail" />
                <br />
                <input className="login-password" name="password" type="password" placeholder="Enter Your Password" />
                <br/>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-warning" type="button">Login</button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;