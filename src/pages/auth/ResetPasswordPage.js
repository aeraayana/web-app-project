import Wrapper from '../../wrappers/auth/ResetPasswordPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    InputTextWithPrompt,
    Spacing
} from '../../components'


const initialState = {
    password: '',
    passwordConfirm: '',

    passwordNotMatchError: '',
}

const ResetPasswordPage = () => {
    const { user, errorDetail, resetPassword, isLoading  } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );
    const { serial } = useParams();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 
    
    const actionResetPasswordClick = async (e) => {
        e.preventDefault();
        const { password, passwordConfirm } = values;

        if( password===passwordConfirm ){
            setValues({ ...values, passwordNotMatchError: ""})
        }else{
            setValues({ ...values, passwordNotMatchError: "Password do not match"})
            return;
        }

        const success = await resetPassword({ password: password,  serial: serial});
        if( success ){
            navigate("/sign-in");        
        }
    }

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='row-between-start w-full'>
                <section class='image-container'> 
                    <img src={hockeyImg} alt='hockey-img' className='image' />                
                </section>
                
                <section class='input-container col-start-start w-full'>
                    <article class='col-start-start w-full'>                    
                        <LogoStar/>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <h1 className='title'>Reset Password</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>Please enter your new password.</p>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <form className='col-start-start w-full'>
                            <InputTextWithPrompt
                                type="password"
                                prompt="Password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                errorMessage={ values.passwordNotMatchError || (errorDetail && generateErrorMessage(errorDetail.password) )}
                                className="w-full"/>
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <InputTextWithPrompt
                                type="password"
                                prompt="Re-enter Password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                onChange={handleChange}
                                errorMessage={ values.passwordNotMatchError || (errorDetail && generateErrorMessage(errorDetail.passwordConfirm) )}
                                className="w-full"/>
                            <Spacing height="2rem" />   {/* 32px */}
                            <ButtonSolid className="w-full" label="Reset Password" onClick={actionResetPasswordClick}/>
                        </form>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default ResetPasswordPage;
