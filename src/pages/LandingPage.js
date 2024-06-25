import { 
    ButtonOutlined, 
    ButtonSolid,
    Spacing,
} from '../components'

import { Navbar } from './local-components'

import hockeyPlayerImg from '../assets/images/placeholder_img.jpg'
import readMoreImg from '../assets/images/readMoreImg.svg'

import Wrapper from '../wrappers/LandingPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';


const LandingPage = () => {
    const { user } = useAppContext();

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='col-start-start w-full'>
                <Navbar className="w-full" />
                <section className='row-between-start w-full'>
                    <div className='col-start-start' 
                        style={{ 
                            width: '100%',
                            height: '43.5rem',
                            paddingLeft : '5rem',
                            paddingTop : '9.8125rem',
                            paddingBottom : '9.8125rem',
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${hockeyPlayerImg})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}  >
                        <Spacing height="4.5rem" />    {/* 40px */}
                        <h1 className='title-big' style={{ color: "white" }} >Ringkasan Pertemuan Tahunan FOLU Net Sink 2030</h1>
                        <Spacing height="1.5rem" />    {/* 40px */}
                        <p className='description' style={{ color: "white" }} >
                            Ringkasan pertemuan antara BPDLH dengan Kementrian Luar Negeri Kerajaan
                        </p>
                        <Spacing height="2.5rem" />    {/* 40px */}
                        <div className='row-start-start'>
                            <img src={readMoreImg}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </div>
                    </div>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default LandingPage;
