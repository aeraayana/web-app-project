import Wrapper from '../../wrappers/auth/CreateAccountPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { generateErrorMessage } from "../../configs/globalfunctions"

import hockeyImg from '../../assets/images/auth/hockey.png'
import appleLogo from '../../assets/images/auth/createaccount/apple.svg'
import facebookLogo from '../../assets/images/auth/createaccount/facebook.svg'
import googleLogo from '../../assets/images/auth/createaccount/google.svg'

import {
    LogoStar,
    ButtonSolid,
    ButtonOutlined,
    InputTextWithPrompt,
    Spacing,
    ChoiceBoxStringWithPrompt
} from '../../components'

const roleOptions = ['Coach','Athlete','Scout','School'];

const initialState = {
    email: '',
    password: '',
    passwordConfirm: '',
    role: roleOptions[0],

    passwordNotMatchError: '',
}

const CreateAccountPage = () => {
    const { user, errorDetail, registerUser, isLoading } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 
        
    const actionCancelClick = (e) => {
        e.preventDefault();
        navigate(-1);        
    }

    const actionCreateAccountClick = async (e) => {
        e.preventDefault();
        const { email, password, passwordConfirm, role} = values;

        if( password===passwordConfirm ){
            setValues({ ...values, passwordNotMatchError: ""})
        }else{
            setValues({ ...values, passwordNotMatchError: "Password do not match"})
            return;
        }

        const success = await registerUser({ email: email, password: password,  role: role});
        if( success ){
            navigate("/verify-email");        
        }
    }

    const actionChangeRole = (e) => {
        setValues({ ...values, role: e.target.value});
    };

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='row-between-start w-full'>
                <section className='image-container'> 
                    <img src={hockeyImg} alt='hockey-img' className='image' />                
                </section>
                
                <section className='input-container col-start-start w-full'>
                    <article className='col-start-start w-full'>                    
                        <LogoStar/>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <h1 className='title'>Create Account</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>Enter your e-mail and password to create a new account.</p>
                        <Spacing height="2.125rem" />   {/* 34px */}
                        <form className='col-start-start w-full'>
                            <InputTextWithPrompt
                                type="email"
                                prompt="Email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                className="w-full"/>
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <div className='row-between-center w-full'>
                                <InputTextWithPrompt 
                                    type="password"
                                    prompt="Password"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    errorMessage={ values.passwordNotMatchError || (errorDetail && generateErrorMessage(errorDetail.password) )}
                                    className="w-full"/>
                                <Spacing minWidth="1.25rem" width="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="password"
                                    prompt="Re-enter Password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    errorMessage={ values.passwordNotMatchError || (errorDetail && generateErrorMessage(errorDetail.passwordConfirm) )}
                                    onChange={handleChange}
                                    className="w-full"/>
                            </div>
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <ChoiceBoxStringWithPrompt
                                className="w-full"
                                id="role"
                                name="role"
                                prompt="Role"
                                options={roleOptions}
                                errorMessage={errorDetail && generateErrorMessage(errorDetail.role) }
                                onChange={actionChangeRole} />
                            <Spacing height="2.75rem" />   {/* 44px */}
                            <div className='row-between-center w-full'>
                                <ButtonOutlined 
                                    className="w-full" 
                                    label="Cancel" 
                                    secondary 
                                    disabled={isLoading}
                                    onClick={actionCancelClick}/>
                                <Spacing minWidth="1.25rem" />   {/* 20px */}
                                <ButtonSolid 
                                    className="w-full" 
                                    label="Create Account" 
                                    disabled={isLoading}
                                    onClick={actionCreateAccountClick}/>
                            </div>
                        </form>
                    </article>
                    <Spacing height="2.75rem" />   {/* 44px */}
                    <article className='col-center-center w-full'>
                        <div className='row-center-center w-full'>
                            <div className='or-line'></div>
                            <span className='label-or' >Or</span>
                            <div className='or-line'></div>
                        </div>    
                        <Spacing height="1.25rem" />   {/* 20px */}
                        <ButtonOutlined iconPre={googleLogo} borderColor="var(--color-disable-light)" color="var(--color-black)" className="w-full" label="Continue with Google"/>
                        <Spacing height="1.25rem" />   {/* 20px */}
                        <ButtonSolid iconPre={facebookLogo} bgColor="#1877F2" color="var(--color-white)" className="w-full" label="Continue with Facebook"/>
                        <Spacing height="1.25rem" />   {/* 20px */}
                        <ButtonSolid iconPre={appleLogo} bgColor="var(--color-black)" color="var(--color-white)" className="w-full" label="Continue with Apple"/>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default CreateAccountPage;
