import Wrapper from '../../wrappers/auth/SignInPageWrapper';
import { useAppContext } from '../../context/appContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DOCPanduan from '../../assets/Draft 3-User Guide Aplikasi Dana Masyarakat.pdf'

import {
    ButtonSolid,
    Hyperlink,
    InputTextWithPrompt,
    Logo,
    Spacing
} from '../../components'
import { FaArrowLeft } from 'react-icons/fa';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWrapper from '../../wrappers/auth/mobile/SignInPageWrapper';
import { toast, ToastContainer } from 'react-toastify';
import { RECAPTCHA_SITE_KEY } from '../../configs/constants';


const initialState = {
    email: '',
    password: '',
}

const SignInPage = () => {
    document.body.style = 'background-image: linear-gradient(145deg, var(--color-primary-dark), var(--color-primary-light));';
    
    const { loginUser, isLoading, getRangeOpening } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );
    const [validate, setValidate] = useState(null);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    } 

    useEffect(() => {
        getRangeOpening();
    }, [])

    const handleLoaded = _ => {
        window.grecaptcha.ready(_ => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "login" }).then(token => {
                setValidate(token);
            })
        })
    }

    useEffect(() => {
        const script = document.createElement("script")
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.addEventListener("load", handleLoaded)
        document.body.appendChild(script)
    }, [])

    const actionCreateAccountClick = () => {
        navigate("/create-account");        
    }

    const actionSignInClick = async (e) => {
        e.preventDefault();
        const response = await loginUser({ email: values.email, password: values.password });
        // console.log(response);
        if( response ){
            if(["verifikator", "approver"].find((item) => item === JSON.parse(localStorage.getItem('user_data')).role_user)){
                navigate('/dashboard-admin');            
            }else if("maker" === JSON.parse(localStorage.getItem('user_data')).role_user){
                navigate('/');
            }else{
                navigate('/dashboard-bpdlh');
            }
        }else{
            toast.error('username dan password salah, mohon periksa lagi', { position: toast.POSITION.TOP_CENTER })
            // console.log(response);
        }
    }

    const actionLandingPageClick = () => {
        navigate("/landing")
    }

    const actionForgotPasswordClick = () => {
        navigate("/forgot-password");
    }

    return (
        <React.Fragment>
            <MobileView>
                <MobileWrapper>
                    <ToastContainer />
                    <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"1.025rem" }}>
                        <span className='row-between-center'>
                            <Hyperlink iconPre={<FaArrowLeft />} className='description-subtitle' small={'14px'} label="Kembali ke BPDLH.ID" onClick={actionLandingPageClick} />
                            <Logo />
                        </span>
                        <article className='col-center w-full'>
                            <div className='col-start-center w-full'>
                                <Spacing height="3.25rem" />
                                <div className='col-start-start'>    
                                    <p className='col-start-start title-sub'>Selamat Datang di</p>
                                    <h1 className='title'>Layanan Dana Masyarakat untuk Lingkungan</h1>
                                    <div style={{ borderRadius:'6px', border:'1px solid #debaba', padding:'0.45rem', backgroundColor: '#f5d3d3', marginTop:'2.25rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                                        <div style={{ textAlign: 'center', color: '#734040' }}>
                                            <b>PENGUMUMAN</b>
                                        </div>
                                        <Spacing height={'0.75rem'}/>
                                        <span style={{ color: '#734040' }}>    
                                            Pengajuan proposal Layanan Dana Masyarakat Batch I telah ditutup dan saat ini dalam proses verifikasi oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK).
                                        </span>
                                        <Spacing height={'0.75rem'}/>
                                        <span style={{ color: '#734040' }}>
                                            Daftar individu/kelompok yang berhak mengajukan proposal pada Batch I merupakan daftar yang telah terafiliasi dengan KLHK.
                                        </span>
                                        <Spacing height={'0.75rem'}/>
                                        <span style={{ color: '#734040' }}>
                                            Daftar individu/kelompok afiliasi dan proses verifikasi proposal merupakan kewenangan KLHK.
                                        </span>
                                        <Spacing height={'0.75rem'}/>
                                        <span style={{ color: '#734040' }}>
                                            Informasi lebih lanjut dapat menghubungi email: <b>layanandanamasyarakat@bpdlh.id</b> 
                                        </span>
                                    </div>
                                </div> 
                                <Spacing height="5.525rem" />   {/* 34px */}
                                <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Log In</h1>
                                <Spacing height="0.5rem" />
                                <form className='col-start-start w-full' style={{ width: "100%" }}>
                                    <InputTextWithPrompt
                                        type="email"
                                        prompt="Email"
                                        id="email"
                                        name="email"
                                        placeholder='masukkan email'
                                        inputHeight={"2.25rem"}
                                        // errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                        value={ values.email }
                                        onChange={handleChange}
                                        className="w-full"/>
                                    <Spacing height="1.25rem" />   {/* 20px */}
                                    <InputTextWithPrompt 
                                        type="password"
                                        prompt="Sandi"
                                        id="password"
                                        name="password"
                                        inputHeight={"2.25rem"}
                                        placeholder='masukkan password'
                                        // errorMessage={errorDetail && generateErrorMessage(errorDetail.password) }
                                        value={ values.password }
                                        onChange={handleChange}
                                        className="w-full"/>
                                    <Spacing height="2.75rem" />   {/* 44px */}
                                    <div className='row-end-center w-full'>
                                        <Hyperlink label="Lupa Sandi" small={'14px'} onClick={actionForgotPasswordClick} />
                                    </div>
                                    <Spacing height="1.25rem" />
                                    <ButtonSolid className="w-full" 
                                        label="Login" 
                                        color={'white'}
                                        height={'2.25rem'}
                                        hoverColor={'white'}
                                        disabled={isLoading}
                                        onClick={actionSignInClick} />
                                    <Spacing height="1.25rem" />   {/* 20px */}
                                </form>
                            </div>
                        </article>
                        <Spacing height="2.75rem" />   {/* 44px */}
                        <article className='col-center-center w-full'>
                            <Spacing height="1rem" />   {/* 16px */}
                            <p className='description-subtitle' style={{ textAlign: "center" }}>
                                Belum Punya Akun? <Hyperlink label="Daftar Sini" small={'14px'} onClick={actionCreateAccountClick} />
                            </p>
                            <Spacing height="1rem" />   {/* 16px */}
                            <span className='description' style={{ textAlign: "center" }}>
                               Kontak kami: layanandanamasyarakat@bpdlh.id
                            </span>
                            <span className='description'>
                                Jam layanan: Senin - Jumat  08.00 - 17.00
                            </span>
                            <span className='description'>
                                untuk unduh panduan aplikasi bagi masyarakat<a className='hyperlink' href={DOCPanduan} > klik di sini</a>
                            </span>
                        </article>
                    </section>
                </MobileWrapper>
            </MobileView>
            <BrowserView>
                <Wrapper className='d-flex justify-content-center w-full'>
                    <ToastContainer />
                    <section className='input-container rounded col-center' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                        <span className='row-between-start'>
                            <Hyperlink iconPre={<FaArrowLeft />} className='description-subtitle' small={'14px'} label="Kembali ke BPDLH.ID" onClick={actionLandingPageClick} />
                            <Logo />
                        </span>
                        <article className='col-center w-full'>
                            <div className='col-start-center'>
                                <Spacing height="3.25rem" />
                                <div className='col-start-center' style={{ textWrap:'balance', textAlign:'center' }}>    
                                    <p className='title-sub'>Selamat Datang di</p>
                                    <h1 className='title'>Layanan Dana Masyarakat untuk Lingkungan</h1>
                                </div> 
                                <div style={{ borderRadius:'6px', border:'1px solid #debaba', padding:'1.25rem', backgroundColor: '#f5d3d3', marginTop:'2.25rem', textAlign: 'justify', textJustify: 'inter-word' }}>
                                    <div style={{ textAlign: 'center', color: '#734040' }}>
                                        <b>PENGUMUMAN</b>
                                    </div>
                                    
                                    <Spacing height={'1.15rem'}/>
                                    
                                    <span style={{ color: '#734040' }}>    
                                        Pengajuan proposal Layanan Dana Masyarakat Batch I telah ditutup dan saat ini dalam proses verifikasi oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK).
                                    </span>
                                    
                                    <Spacing height={'1.15rem'}/>
                                    
                                    <span style={{ color: '#734040' }}>
                                        Daftar individu/kelompok yang berhak mengajukan proposal pada Batch I merupakan daftar yang telah terafiliasi dengan KLHK.
                                    </span>
                                    
                                    <Spacing height={'1.15rem'}/>
                                    
                                    <span style={{ color: '#734040' }}>
                                        Daftar individu/kelompok afiliasi dan proses verifikasi proposal merupakan kewenangan KLHK.
                                    </span>
                                    
                                    <Spacing height={'1.15rem'}/>
                                    
                                    <span style={{ color: '#734040' }}>
                                        Informasi lebih lanjut dapat menghubungi email: <b>layanandanamasyarakat@bpdlh.id</b> 
                                    </span>
                                </div>
                                <Spacing height="3.525rem" />   {/* 34px */}
                                <h1 className='text-center title' style={{ color: "var(--color-primary-dark)" }}>Log In</h1>
                                <Spacing height="0.5rem" />
                                <form className='col-start-start' style={{ width: "80%" }}>
                                    <InputTextWithPrompt
                                        type="email"
                                        prompt="Email"
                                        id="email"
                                        name="email"
                                        placeholder='masukkan email'
                                        // errorMessage={errorDetail && generateErrorMessage(errorDetail.email) }
                                        value={ values.email }
                                        onChange={handleChange}
                                        className="w-full"/>
                                    <Spacing height="1.25rem" />   {/* 20px */}
                                    <InputTextWithPrompt 
                                        type="password"
                                        prompt="Sandi"
                                        id="password"
                                        name="password"
                                        placeholder='masukkan password'
                                        // errorMessage={errorDetail && generateErrorMessage(errorDetail.password) }
                                        value={ values.password }
                                        onChange={handleChange}
                                        className="w-full"/>
                                    <Spacing height="2.75rem" />   {/* 44px */}
                                    <div className='row-end-center w-full'>
                                        <Hyperlink label="Lupa Sandi" small={'14px'} onClick={actionForgotPasswordClick} />
                                    </div>
                                    <Spacing height="1.25rem" />
                                    
                                    
                                    <ButtonSolid className="w-full" 
                                        label="Login" 
                                        color={'white'}
                                        hoverColor={'white'}
                                        disabled={isLoading && !validate}
                                        onClick={actionSignInClick} />
                                    <Spacing height="0.25rem" />   {/* 20px */}
                                </form>
                            </div>
                        </article>
                        <Spacing height="1.05rem" />   {/* 44px */}
                        <article className='col-center-center w-full'>
                            <Spacing height="1rem" />   {/* 16px */}
                            <p className='description-subtitle' style={{ textAlign: "center" }}>
                                Belum Punya Akun? <Hyperlink label="Daftar Sini" small={'14px'} onClick={actionCreateAccountClick} />
                            </p>
                            <Spacing height="6.5rem" />   {/* 16px */}
                            <span className='description' style={{ fontWeight:'bold', textAlign: "center" }}>
                               Kontak kami: layanandanamasyarakat@bpdlh.id
                            </span>
                            <span className='description'>
                                Jam layanan: Senin - Jumat  08.00 - 17.00
                            </span >
                            <Spacing height="1.025rem" />
                            <span className='description'>
                                untuk unduh panduan aplikasi bagi masyarakat <a className='hyperlink' href={DOCPanduan} >klik di sini</a>
                            </span>
                        </article>
                    </section>
                    
                </Wrapper>
            </BrowserView>
            {/* {token && <Navigate to='/' />} */}
        </React.Fragment>
    );
};

export default SignInPage;
