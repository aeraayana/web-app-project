import Wrapper from '../../wrappers/auth/ForgotPasswordPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    ButtonOutlined,
    InputTextWithPrompt,
    Spacing
} from '../../components'


const initialState = {
    email: '',
}

const ForgotPasswordPage = () => {
    const { user, forgotPassword, errorDetail, isLoading } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 

    const actionCancelClick = (e) => {
        e.preventDefault();
        navigate(-1);        
    }

    const actionConfirmClick = async (e) => {
        e.preventDefault();
        const { email } = values;
        const success = await forgotPassword( {email: email} );
        if( success ){
            navigate("/admin/email-sent");
        }
    }

    console.log("ok")

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
                        <h1 className='title'>Forgot Password</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>Enter your email and we will send you the instructions to recover your password</p>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <form className='col-start-start w-full'>
                            <InputTextWithPrompt
                                type="email"
                                prompt="Email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                className="w-full"/>
                            <Spacing height="2rem" />   {/* 32px */}
                            <div className='row-between-center w-full'>
                                <ButtonOutlined className="w-full" label="Cancel" secondary onClick={actionCancelClick}/>
                                <Spacing minWidth="1.25rem" />   {/* 20px */}
                                <ButtonSolid 
                                    className="w-full" 
                                    label="Confirm" 
                                    disabled={isLoading}
                                    onClick={actionConfirmClick}/>
                            </div>
                        </form>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default ForgotPasswordPage;
