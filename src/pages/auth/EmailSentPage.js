import Wrapper from '../../wrappers/auth/EmailSentPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React from 'react';
import { useNavigate } from "react-router-dom";

import hockeyImg from '../../assets/images/auth/hockey.png'

import {
    LogoStar,
    ButtonSolid,
    Spacing,
    Hyperlink
} from '../../components'
import { FaArrowLeft } from 'react-icons/fa';


const EmailSentPage = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    const actionOkayClick = (e) => {
        e.preventDefault();
        navigate("/sign-in");        
    }

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='d-flex justify-content-center w-full'>
                <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <span className='row-between-start'>
                        <Hyperlink iconPre={<FaArrowLeft />} small={'14px'} className='description-subtitle' label="Kembali ke Login Page" onClick={actionOkayClick} />
                    </span>
                    <article className='col-center w-full'>
                        <div className='col-start-center'>
                            <Spacing height="7.525rem" />   {/* 34px */}
                            <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Lupa Password</h1>
                            <Spacing height="5.25rem" />
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <span className='text-center description'>Periksa email untuk link reset password</span>
                            </form>
                        </div>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );};

export default EmailSentPage;
