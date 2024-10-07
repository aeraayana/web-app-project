import Wrapper from '../../wrappers/auth/VerifyEmailPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    Spacing
} from '../../components'

const VerifyRegisterPage = () => {
    const { user, isLoading, verifyRegister } = useAppContext();
    const navigate = useNavigate();
    const { serial } = useParams();

    const actionLoginClick = (e) => {
        e.preventDefault();
        navigate('/sign-in');        
    }

    useEffect(() => {
        if( !isLoading ){
            verifyRegister({serial: serial});
        }
    }, []);

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
                        <h1 className='title'>Email Verification Success</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>Your email has been successfully verified, you can login now</p>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <ButtonSolid disabled={isLoading} className="w-full" label="Back To Login" onClick={actionLoginClick}/>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default VerifyRegisterPage;
