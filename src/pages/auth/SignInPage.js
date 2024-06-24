import Wrapper from '../../wrappers/auth/SignInPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ContainerOutlined,
    ButtonSolid,
    Hyperlink,
    InputTextWithPrompt,
    Spacing
} from '../../components'


const initialState = {
    email: '',
    password: '',
}

const SignInPage = () => {

    const { user, loginUser, isLoading, errorDetail } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 
    
    const actionSignInClick = async (e) => {
        e.preventDefault();
        const { email, password } = values;
        await loginUser( {email: email, password: password} );
    };

    const actionRegisterClick = () => {
        navigate('/create-account');
    };

    useEffect(() => {
        console.log(user);
        if (user) {
            setTimeout(() => {
                if(user?.username){
                    navigate('/');
                } else {
                    navigate('/sign-up-mandatory-1')
                }
            }, 1000);
        }
    }, [user, navigate]);

    return (
        <React.Fragment>
            {/* {user && <Navigate to='/' />} */}
            <Wrapper className='row-between-start w-full'>
                <section className='image-container'> 
                    <img src={hockeyImg} alt='hockey-img' className='image' />                
                </section>
                
                <section className='input-container col-start-start w-full'>

                    <article className='col-start-start w-full'>                    
                        <LogoStar/>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <h1 className='title'>Sign In</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>Login with the data you entered during your registration.</p>
                        <Spacing height="2.125rem" />   {/* 34px */}
                        <form className='col-start-start w-full'>
                            <InputTextWithPrompt
                                type="email"
                                prompt="Email"
                                id="email"
                                name="email"
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                value={ values.email }
                                onChange={handleChange}
                                className="w-full"/>
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <InputTextWithPrompt 
                                type="password"
                                prompt="Password"
                                id="password"
                                name="password"
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.password) }
                                value={ values.password }
                                onChange={handleChange}
                                className="w-full"/>
                            <Spacing height="2.75rem" />   {/* 44px */}
                            <ButtonSolid className="w-full" 
                                label="Login" 
                                disabled={isLoading}
                                onClick={actionSignInClick} />
                            <Spacing height="1.25rem" />   {/* 20px */}
                        </form>
                        <div className='row-end-center w-full'>
                                <Hyperlink label="Did you forget your password?" href={"./forgot-password"} />
                        </div>
                    </article>
                    <Spacing height="2.75rem" />   {/* 44px */}
                    <article className='col-start-start w-full'>                    
                        <ContainerOutlined color="#CACACA" className="w-full" padding="2rem">   {/* 32px */}
                            <h2 className='subtitle'>Sign Up</h2>
                            <Spacing height="1rem" />   {/* 16px */}
                            <p className='description-subtitle'>Login with the data you entered during your registration.</p>
                            <Spacing height="2.0625rem" />   {/* 33px */}
                            <ButtonSolid 
                                label="Create Account"
                                color="var(--color-primary)"
                                bgColor="var(--color-primary-light)"
                                onClick={actionRegisterClick}
                                disabled={isLoading}
                                className="w-full" />
                        </ContainerOutlined>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default SignInPage;
