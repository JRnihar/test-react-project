import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || gituser) {
        navigate(from, { replace: true });
    }
    let errorElement;

    // if (loading || loading1) {
    // return <Loading></Loading>
    // }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
    }

   
    return (
      
        <div class="input_right">
            {errorElement}
            <h5>Sing up using social media</h5>
            <div class="social">
        
                <button class="gl">
                    <i class="fa-brands fa-google"></i>
                    <span onClick={() => signInWithGoogle()}>Sinup with google</span>
                </button>
                <button class="ap">
                    <i class="fa-brands fa-github"></i>
                    <span onClick={() => signInWithGithub()}>Sinup with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;