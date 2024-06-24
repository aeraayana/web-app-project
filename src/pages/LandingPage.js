import { 
    ButtonOutlined, 
    ButtonSolid,
    Spacing,
} from '../components'

import { Navbar } from './local-components'

import hockeyPlayerImg from '../assets/images/landing/hockey-player.png'
import laptopImg from '../assets/images/landing/laptop.png'
import banner1Img from '../assets/images/landing/banner-1.png'
import banner2Img from '../assets/images/landing/banner-2.png'
import banner3Img from '../assets/images/landing/banner-3.png'
import banner4Img from '../assets/images/landing/banner-4.png'
import banner5Img from '../assets/images/landing/banner-5.png'

import Wrapper from '../wrappers/LandingPageWrapper';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const LandingPage = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    const actionSignInClick = () => {
        navigate("/sign-in");        
    }

    const actionCreateAccountClick = () => {
        navigate("/create-account");        
    }

    const actionBannerScrollLeft = () => {
        const bannerContainer = document.getElementById("banner-container");
        bannerContainer.scrollLeft -= 335;
    }

    const actionBannerScrollRight = () => {
        const bannerContainer = document.getElementById("banner-container");
        bannerContainer.scrollLeft += 335;
    }

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='col-start-start w-full'>
                <Navbar className="w-full" />
                <section className='row-between-start w-full'>
                    <div className='col-start-start' 
                        style={{ 
                            width: '50%',
                            paddingLeft : '5rem',
                            paddingTop : '9.8125rem',
                            paddingBottom : '9.8125rem',
                        }}  >
                        <h1 className='title-big'>Elevate Your Hockey Career</h1>
                        <Spacing height="2.5rem" />    {/* 40px */}
                        <p className='description'>
                            Showcase your talent, connect with industry professionals, and seize the opportunities that await. 
                            Create your account now and embark on the path to hockey success.
                        </p>
                        <Spacing height="2.5rem" />    {/* 40px */}
                        <div className='row-start-start'>
                            <ButtonSolid label="Create Account" width="15rem" onClick={actionCreateAccountClick} />
                            <Spacing width="0.9375rem" />
                            <ButtonOutlined label="Login" width="15rem" onClick={actionSignInClick} />
                        </div>
                    </div>
                    <img src={hockeyPlayerImg}
                        style={{
                            width: '50%',
                        }}
                    />
                </section>
                <section className='col-center-center w-full' style={{ backgroundColor : '#1B1D27', 
                        padding: '3.25rem 5rem 3.25rem 5rem' /* 52px 80px 52px 80px */, }}>
                    <h1 className='title'
                        style={{ color: 'var(--color-white)', }}>
                        Discover, Connect, 
                        <span
                            style={{ color: 'var(--color-error)', paddingLeft: '0.65rem', textDecoration: 'underline' }} > 
                            Excel 
                        </span>
                    </h1>
                    <Spacing height="1.625rem" />    {/* 26px */}
                    <p className='description'
                        style={{
                            width: '34rem',
                            textAlign: 'center',
                            color: 'var(--color-white)' }}>
                        Discover new opportunities, connect with fellow hockey enthusiasts, and take your career to the next level.
                    </p>
                    <Spacing height="3.25rem" />    {/* 52px */}
                    <div id="banner-container" className='row-start-start' 
                        style={{
                            overflowX: 'auto',
                            width: '100%',
                            overflow: 'hidden',
                            scrollBehavior: 'smooth'
                        }}>
                        <div className='banner-card col-between-start'>
                            <h3>Showcase Your Hockey Skills</h3>
                            <div>
                                <img src={banner1Img} />
                            </div>
                        </div>
                        <div className='banner-card col-between-start'>
                            <h3>Discover and Connect with People</h3>
                            <div>
                                <img src={banner2Img} />
                            </div>
                        </div>
                        <div className='banner-card col-between-start'>
                            <h3>Display your Training Information</h3>
                            <div>
                                <img src={banner3Img} />
                            </div>
                        </div>
                        <div className='banner-card col-between-start'>
                            <h3>Showcase Academic Achievements</h3>
                            <div>
                                <img src={banner4Img} />
                            </div>
                        </div>
                        <div className='banner-card col-between-start'>
                            <h3>Discover Various Career Path</h3>
                            <div>
                                <img src={banner5Img} />
                            </div>
                        </div>
                    </div>
                    <Spacing height="2rem" />    {/* 32px */}
                    <div className='row-end-center w-full'>
                        <ButtonSolid icon={<FaChevronLeft />} bgColor="#242644" width="2.5rem" height="2.5rem"  onClick={actionBannerScrollLeft} />
                        <Spacing width="1.25rem" />    {/* 20px */}
                        <ButtonSolid icon={<FaChevronRight/>} bgColor="#242644" width="2.5rem" height="2.5rem" onClick={actionBannerScrollRight} />
                    </div>
                </section>
                <section className='row-center-center w-full' 
                        style={{ padding: '6.25rem 5rem 6.25rem 5rem' /* 100px 80px 100px 80px */, }} >
                    <img src={laptopImg} style={{ width: '50%', }} />
                    <Spacing width="3.25rem" />    {/* 52px */}
                    <article  style={{"width" : "50%"}}  className='col-start-start'>
                        <h1 className='title'>Stay updated about what truly matters</h1>
                        <Spacing height="1.625rem" />    {/* 26px */}
                        <ul>
                            <li>Find and connect with athletes, associations, scouts, schools, academies and more</li>
                            <li>Easily create an impressive and readily available portfolio</li>
                            <li>Showcase your skills and achievements.</li>
                            <li>Discover career paths within the hockey world</li>
                            <li>And so many more!</li>
                        </ul>
                    </article>
                </section>
                <footer></footer>
            </Wrapper>
        </React.Fragment>
    );
};

export default LandingPage;
