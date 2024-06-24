import Wrapper from '../../wrappers/admin-auth/AdminSignInPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    Hyperlink,
    InputTextWithPrompt,
    Spacing
} from '../../components'


const initialState = {
    email: '',
    password: '',
}

const AdminSignInPage = () => {
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

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/admin');
            }, 1000);
        }
    }, [user, navigate]);
    
    return (
        <React.Fragment>
            <Wrapper className='row-between-start w-full'>
                <section class='image-container'> 
                    <img src={hockeyImg} alt='hockey-img' className='image' />                
                </section>
                
                <section class='input-container col-start-start w-full'>
                    <article class='col-start-start w-full'>                    
                        <LogoStar/>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <h1 className='title'>Log In</h1>
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
                            <ButtonSolid className="w-full" label="Login" disabled={isLoading} onClick={actionSignInClick} />
                            <Spacing height="1.25rem" />   {/* 20px */}
                        </form>
                        <div className='row-end-center w-full'>
                                <Hyperlink label="Did you forget your password?" href={"./forgot-password"} />
                        </div>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminSignInPage;
