import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const navigate = useNavigate()
    

    if (user) {
        navigate('/home')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, name)
      
    }
    return (
        <div class="container_box">
            <div class="content_box">
                <div class="input_box">

                    <div class="input_left">
                        <h1>Welcome to IT world</h1>
                        <div class="log_btn">
                            <Link to='/login'><button class="log">Login</button></Link>
                              <button class="sin">Signup</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div class="name_box">
                                <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="First name " />
                            <input type="text" placeholder="Last name " />
                        </div>
                    
                            <div class="all_input">
                                <input type="text" placeholder="Phone number" />
                                <input onChange={(e) => setEmail(e.target.value)}  name='email' type="email" placeholder="Email address" />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            </div>
                            {errorElement}
                            <div class="login_btn">
                                <div class="chack">
                                    <input type="checkbox" />
                                    <p>I agree and accept all </p>
                                </div>
                                <button type="submit">Signup</button>
                            </div>
                        </form>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;