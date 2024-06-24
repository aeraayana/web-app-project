import Wrapper from '../../wrappers/auth/VerifyEmailPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React from 'react';
import { useNavigate } from "react-router-dom";

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    Spacing
} from '../../components'

const VerifyEmailPage = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    const actionOkayClick = (e) => {
        e.preventDefault();
        navigate('/sign-in');        
    }

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
                        <h1 className='title'>Please verify your email</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>The verification mail  has been sent to your e-mail, kindly check your inbox.</p>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <ButtonSolid className="w-full" label="Okay" onClick={actionOkayClick}/>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default VerifyEmailPage;
