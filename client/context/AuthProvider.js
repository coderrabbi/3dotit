import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { fireApp } from '../Firebase/Firebase.cofig';

import { axiosAuth } from '../utils/axios';

// import { Navigate, useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const auth = getAuth(fireApp);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [tokenId, setTokenId] = useState('');
    const [token, setToken] = useState('');
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
                if (user.uid) {
                    setTokenId(user.uid);
                    // navigate(from, { replace: true });
                    setLoading(false);
                    setMessage('login sucessfull');
                }
            })
            .catch((error) => {
                console.log(error);
                setMessage(error);
            });
    };

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                if (user.uid) {
                    setTokenId(user.uid);
                    // navigate(from, { replace: true });
                    setMessage('login success');
                    setLoading(false);
                }
                setUser(user);
            })
            .catch((error) => {
                console.error(error);
                setMessage(error.message);
            });
    };
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };
    function updateDisplayName(displayName) {
        // Get the currently signed-in user
        const user = auth.currentUser;

        // Update the display name
        user.updateProfile({
            displayName: displayName,
        })
            .then(function () {
                // Update successful.
                console.log('Display name successfully updated');
            })
            .catch(function (error) {
                // An error happened.
                console.error(error);
            });
    }

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            return () => unsbscribe();
        });
        const fireToken = auth.onIdTokenChanged(async (user) => {
            if (user) {
                const { token } = await user.getIdTokenResult();
                setToken(token);
                axiosAuth
                    .post(`/current-user`, {})
                    .then((res) => {
                        console.log('RES====>', res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    }, []);
    const logOut = () => {
        setLoading(true);
        signOut(auth);
    };
    const authInfo = {
        createUser,
        signIn,
        logOut,
        updateUser,
        user,
        loading,
        setTokenId,
        tokenId,
        token,
        setLoading,
        handleGithubSignIn,
        googleSignIn,
        verifyEmail,
        updateDisplayName,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
