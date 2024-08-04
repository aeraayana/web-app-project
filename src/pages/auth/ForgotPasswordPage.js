import Wrapper from '../../wrappers/auth/ForgotPasswordPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    ButtonSolid,
    Spacing,
    Hyperlink,
    InputTextSearch
} from '../../components'
import { FaArrowLeft, FaAt } from 'react-icons/fa';


const initialState = {
    email: '',
}

const ForgotPasswordPage = () => {
    document.body.style = 'background-image: linear-gradient(145deg, var(--color-primary-dark), var(--color-primary-light));';

    const { user, forgotPassword, errorDetail, isLoading } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 

    const actionCancelClick = (e) => {
        e.preventDefault();
        navigate('/sign-in');        
    }

    const actionConfirmClick = async (e) => {
        e.preventDefault();
        // const { email } = values;
        // const success = await forgotPassword( {email: email} );
        // if( success ){
        //     navigate("/admin/email-sent");
        // }
        navigate('/layanan-masyarakat/admin/email-sent');
    }

    return (
        <React.Fragment>
            {/* {user && <Navigate to='/' />} */}
            <Wrapper className='d-flex justify-content-center w-full'>
                <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <span className='row-between-start'>
                        <Hyperlink iconPre={<FaArrowLeft />} small={'14px'} className='description-subtitle' label="Kembali ke Login Page" onClick={actionCancelClick} />
                    </span>
                    <article className='col-center w-full'>
                        <div className='col-start-center'>
                            <Spacing height="7.525rem" />   {/* 34px */}
                            <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Lupa Password</h1>
                            <Spacing height="5.25rem" />
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <span className='text-center description'>Masukkan Email terdaftar untuk Reset Sandi</span>
                                <InputTextSearch
                                    type="email"
                                    prompt="Masukkan email terdaftar untuk mereset Sandi"
                                    id="email"
                                    name="email"
                                    placeholder='email'
                                    icon={<FaAt />}
                                    // errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                    value={ values.email }
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="2.75rem" />   {/* 44px */}
                                <ButtonSolid className="w-full" 
                                    label="Reset sandi" 
                                    onClick={actionConfirmClick}
                                    color={'white'}
                                    hoverColor={'white'}
                                    disabled={isLoading} />
                                <Spacing height="10.525rem" />   {/* 20px */}
                            </form>
                        </div>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default ForgotPasswordPage;
