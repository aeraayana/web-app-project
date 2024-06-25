import Wrapper from '../../wrappers/auth/SignInPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import {
    ButtonSolid,
    Hyperlink,
    InputTextWithPrompt,
    Spacing
} from '../../components'
import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa';


const initialState = {
    email: '',
    password: '',
}

const SignInPage = () => {
    document.body.style = 'background-image: linear-gradient(var(--color-primary-dark), var(--color-primary));';

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
            <Wrapper className='d-flex justify-content-center w-full'>
                <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <span>
                        <Hyperlink iconPre={<FaArrowLeft />} className='description-subtitle' label="Kembali ke BPLDH.ID" url={"/landing"} />
                    </span>
                    <article className='col-center w-full'>
                        <Spacing height="3.25rem" /> 
                        <p className='subtitle'>Selamat Datang di</p>
                        <h1 className='title'>Layanan Data Masyarakat</h1>
                        <Spacing height="5.525rem" />   {/* 34px */}
                        <h1 className='text-center' style={{ color: "var(--color-primary-dark)" }}>Log In</h1>
                        <Spacing height="0.5rem" />
                        <form className='col-start-start w-full'>
                            <InputTextWithPrompt
                                type="email"
                                prompt="Email"
                                id="email"
                                name="email"
                                placeholder='olivia@email.com'
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                value={ values.email }
                                onChange={handleChange}
                                className="w-full"/>
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <InputTextWithPrompt 
                                type="password"
                                prompt="Sandi"
                                id="password"
                                name="password"
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.password) }
                                value={ values.password }
                                onChange={handleChange}
                                className="w-full"/>
                            <Spacing height="2.75rem" />   {/* 44px */}
                            <div className='row-end-center w-full'>
                                <Hyperlink label="Lupa Sandi" href={"./forgot-password"} />
                            </div>
                            <Spacing height="1.25rem" />
                            <ButtonSolid className="w-full" 
                                label="Login" 
                                disabled={isLoading}
                                onClick={actionSignInClick} />
                            <Spacing height="1.25rem" />   {/* 20px */}
                        </form>
                    </article>
                    <Spacing height="2.75rem" />   {/* 44px */}
                    <article className='col-center-center w-full'>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description-subtitle' style={{ textAlign: "center" }}>
                            Belum Punya Akun? <Hyperlink label="Daftar Sini" url={"/create-account"} />
                        </p>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default SignInPage;
