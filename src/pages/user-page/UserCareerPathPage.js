import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React from 'react';
import CareerPathCard from './local-components/CareerPath';
import Centre from '../../assets/images/Centre.svg';
import OnIce from '../../assets/images/on-ice.svg';
import Goaltender from '../../assets/images/Goaltender.svg'
import { CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react';
import { Spacing } from '../../components';

const UserCareerPathPage = () => {
    const DATA = [
        {
            title: 'On-Ice Officials',
            href: '/career-path/detail',
            image: OnIce,
            text: 'Praesent porta orci metus, vel varius neque rutrum sit amet. Sed consectetur augue quis malesuada mollis... More'
        },
        {
            title: 'Goaltender',
            href: '/career-path/detail',
            image: Goaltender,
            text: 'Praesent porta orci metus, vel varius neque rutrum sit amet. Sed consectetur augue quis malesuada mollis... More'
        },
        {
            title: 'Centre',
            href: '/career-path/detail',
            image: Centre,
            text: 'Praesent porta orci metus, vel varius neque rutrum sit amet. Sed consectetur augue quis malesuada mollis... More'
        },
    ]

    return (
        <React.Fragment>
            <Wrapper className='w-full'>
                <div className='d-flex flex-column' style={{ width: '80%', margin:'2rem auto'}}>
                    <CCard className='w-full mb-3'>
                        <CCardBody className='px-5'>
                            <CCardTitle>CareerPath</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                Praesent porta orci metus, vel varius neque rutrum sit amet. Sed consectetur augue quis malesuada mollis.   
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <div className='d-flex justify-content-between'>
                        {DATA.map((item) => {
                            return(<CareerPathCard buttonHref={item.href} image={item.image} text={item.text} title={item.title}/>)
                        })}
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default UserCareerPathPage;
