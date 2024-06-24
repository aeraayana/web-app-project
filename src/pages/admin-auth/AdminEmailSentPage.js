import Wrapper from '../../wrappers/admin-auth/AdminEmailSentPageWrapper';
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


const AdminEmailSentPage = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    const actionOkayClick = (e) => {
        e.preventDefault();
        navigate("/admin/sign-in");        
    }

    return (
        <React.Fragment>
            {user && <Navigate to='/admin' />}
            <Wrapper className='row-between-start w-full'>
                <section class='image-container'> 
                    <img src={hockeyImg} alt='hockey-img' className='image' />                
                </section>
                
                <section class='input-container col-start-start w-full'>
                    <article class='col-start-start w-full'>                    
                        <LogoStar/>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <h1 className='title'>E-mail Sent!</h1>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description'>An email has been sent to your e-mail with further instructions. kindly check your inbox.</p>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <ButtonSolid className="w-full" label="Confirm" onClick={actionOkayClick}/>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );};

export default AdminEmailSentPage;
