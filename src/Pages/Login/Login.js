import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import google from '../../images/logo/google.png';

const Login = () => {

    const { allContexts } = useAuth();
    const { signInWithGoogle, setUser } = allContexts;
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((res) => {
                // console.log(res);
                const user = res.user;
                setUser(user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }

    return (
        <div className="text-center">
            <div className="m-5 p-5">
                <button onClick={handleGoogleSignIn} className="btn bg-success bg-opacity-50 rounded-pill"> Google Sign in <img src={google} width="46px" alt="google-icon" /> </button>
            </div>
        </div>
    );
};

export default Login;