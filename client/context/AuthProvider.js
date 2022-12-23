import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { fireApp } from '../Firebase/Firebase.cofig';

// import { Navigate, useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const auth = getAuth(fireApp);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [tokenId, setTokenId] = useState('');
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

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            return () => unsbscribe();
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
        setLoading,
        handleGithubSignIn,
        googleSignIn,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
