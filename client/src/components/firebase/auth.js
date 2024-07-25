import { auth } from "./firebaseConfig.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signOut,GoogleAuthProvider} from "@firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

export const doSignOut = () => {
    return signOut(auth);
};

/*
export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    const user = auth.currentUser;
    if (user) {
        return updatePassword(user, password);
    } else {
        throw new Error("No authenticated user.");
    }
};

export const doSendEmailVerification = () => {
    const user = auth.currentUser;
    if (user) {
        return sendEmailVerification(user, {
            url: `${window.location.origin}/home`,
        });
    } else {
        throw new Error("No authenticated user.");
    }
};*/
