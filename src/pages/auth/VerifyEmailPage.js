import Wrapper from '../../wrappers/admin-auth/AdminEmailSentPageWrapper';
import { useAppContext } from '../../context/appContext';
import React from 'react';
import { useNavigate } from "react-router-dom";

import {
    ButtonSolid,
    Spacing
} from '../../components'


const VerifyEmailPage = () => {
    document.body.style = 'background-image: linear-gradient(145deg, var(--color-primary-dark), var(--color-primary-light));';
    // const { user } = useAppContext();
    const navigate = useNavigate();

    const actionOkayClick = (e) => {
        e.preventDefault();
        navigate("/layanan-masyarakat/sign-in");        
    }

    return (
        <React.Fragment>
            {/* {user && <Navigate to='/' />} */}
            <Wrapper className='d-flex justify-content-center w-full'>
                <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <article className='col-center w-full'>
                        <div className='col-start-center'>
                            <Spacing height="10.525rem" />   {/* 34px */}
                            <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Registrasi Akun Berhasil</h1>
                            <Spacing height="5.25rem" />
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <span className='description'>Cek Email secara berkala untuk detail log in <br/> Anda dapat mengubah sandi anda pada halaman akun</span>
                                <Spacing height="2.75rem" />   {/* 44px */}
                                <ButtonSolid className="w-full" 
                                    label="Kembali ke halaman login" 
                                    onClick={actionOkayClick}
                                    color={'white'}
                                    hoverColor={'white'} />
                                <Spacing height="10.525rem" />   {/* 20px */}
                            </form>
                        </div>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );};

export default VerifyEmailPage;
