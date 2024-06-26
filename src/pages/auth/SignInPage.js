import Wrapper from '../../wrappers/auth/SignInPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import {
    ButtonSolid,
    Hyperlink,
    InputTextWithPrompt,
    Logo,
    Spacing
} from '../../components'
import { FaArrowLeft } from 'react-icons/fa';


const initialState = {
    email: '',
    password: '',
}

const SignInPage = () => {
    document.body.style = 'background-image: linear-gradient(145deg, var(--color-primary-dark), var(--color-primary-light));';

    const { isLoading } = useAppContext();
    // const { user, loginUser, isLoading, errorDetail } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 

    const actionCreateAccountClick = () => {
        navigate("/create-account");        
    }
    
    // const actionSignInClick = async (e) => {
    //     e.preventDefault();
    //     const { email, password } = values;
    //     await loginUser( { email: email, password: password} );
    // };

    const actionSignInClick = async (e) => {
        e.preventDefault();
        navigate('/')
    }

    const actionLandingPageClick = () => {
        navigate("/landing")
    }

    const actionForgotPasswordClick = () => {
        navigate("/forgot-password");
    }

    // useEffect(() => {
    //     console.log(user);
    //     if (user) {
    //         setTimeout(() => {
    //             if(user?.username){
    //                 navigate('/');
    //             } else {
    //                 navigate('/sign-up-mandatory-1')
    //             }
    //         }, 1000);
    //     }
    // }, [user, navigate]);

    return (
        <React.Fragment>
            {/* {user && <Navigate to='/' />} */}
            <Wrapper className='d-flex justify-content-center w-full'>
                <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <span className='row-between-start'>
                        <Hyperlink iconPre={<FaArrowLeft />} className='description-subtitle' label="Kembali ke BPLDH.ID" onClick={actionLandingPageClick} />
                        <Logo />
                    </span>
                    <article className='col-center w-full'>
                        <div className='col-start-center'>
                            <Spacing height="3.25rem" />
                            <div className='col-start-start'>    
                                <p className='col-start-start title-sub'>Selamat Datang di</p>
                                <h1 className='title'>Layanan Data Masyarakat</h1>
                            </div> 
                            <Spacing height="5.525rem" />   {/* 34px */}
                            <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Log In</h1>
                            <Spacing height="0.5rem" />
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <InputTextWithPrompt
                                    type="email"
                                    prompt="Email"
                                    id="email"
                                    name="email"
                                    placeholder='olivia@email.com'
                                    // errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                    value={ values.email }
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="password"
                                    prompt="Sandi"
                                    id="password"
                                    name="password"
                                    // errorMessage={errorDetail && generateErrorMessage(errorDetail.password) }
                                    value={ values.password }
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="2.75rem" />   {/* 44px */}
                                <div className='row-end-center w-full'>
                                    <Hyperlink label="Lupa Sandi" onClick={actionForgotPasswordClick} />
                                </div>
                                <Spacing height="1.25rem" />
                                <ButtonSolid className="w-full" 
                                    label="Login" 
                                    color={'white'}
                                    hoverColor={'white'}
                                    disabled={isLoading}
                                    onClick={actionSignInClick} />
                                <Spacing height="1.25rem" />   {/* 20px */}
                            </form>
                        </div>
                    </article>
                    <Spacing height="2.75rem" />   {/* 44px */}
                    <article className='col-center-center w-full'>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description-subtitle' style={{ textAlign: "center" }}>
                            Belum Punya Akun? <Hyperlink label="Daftar Sini" onClick={actionCreateAccountClick} />
                        </p>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default SignInPage;
