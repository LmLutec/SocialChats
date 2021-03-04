import { React, useState } from 'react';
import { signInWithGoogle } from '../../services/auth';
import './style.css';

export default function SignInBtn() {
    const [user, setUser] = useState();

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();

        if(userBySignIn) setUser(userBySignIn);
    };

    return (<div className='signInBtn'>
        <p>
            Sign In With Google
        </p>
    </div>);
}