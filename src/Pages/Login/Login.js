import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInWithGoogle, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((res) => {
                console.log(res);
                setUser(res.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-success"> Google Sign in</button>
            </div>

        </div>
    );
};

export default Login;