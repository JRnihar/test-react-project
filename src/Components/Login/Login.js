import React, { useRef, useState } from 'react';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    //     auth
    // );
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handelSubmit =  async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pasword = passwordRef.current.value
         await signInWithEmailAndPassword(email, pasword);
        console.log(email,pasword);
       

    }
    return (
        <div class="container_box">
            <div class="content_box">
                <div class="input_box">

                    <div class="input_left">
                        <h1>Welcome to IT world</h1>
                        <div class="log_btn">
                            <button class="log">Login</button>
                            <Link to='/register'>  <button class="sin">Sign up</button></Link> 
                        </div>
                        <form onSubmit={handelSubmit}>
                            <div class="all_input">
                                <input type="text" placeholder="Phone number" />
                                <input ref={emailRef} type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                                <input ref={passwordRef} type="password" placeholder="Password" />
                            </div>
                            {errorElement}
                            <div class="login_btn">
                                <div class="chack">
                                    <input type="checkbox" />
                                    <p>I agree and accept all </p>
                                </div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;