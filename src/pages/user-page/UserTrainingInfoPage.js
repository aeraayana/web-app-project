import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardTitle, CProgress } from '@coreui/react';
import { CChartPie } from '@coreui/react-chartjs';
import { ButtonOutlined, ButtonSolid, Spacing } from '../../components';

const UserTrainingInfoPage = () => {
    const { user, getOneData } = useAppContext()
    const { id } = useParams()
    const [userData, setUserData] = useState();
    const [editable, isEditable] = useState(false)
    
    useEffect(() => {
        if (!id) return
        getUserData(id);
    },[id]);

    const getUserData = async (id) => {
        const data = await getOneData('users', id);
        if (!data || data.length === 0) return;
        setUserData(data);
        if (data._id === user._id)
            isEditable(true);
    }

    return (
        (userData) ? <UserTrainingInfoComponent user={ userData } isEditable={editable} /> : <></>
    )
}

const UserTrainingInfoComponent = ({ user, isEditable }) => {
    const { skill_set } = user;
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Wrapper className='row-center-center w-full mt-5'>
                <div style={{ width: '65%' }}>
                    <CCard className='w-full px-5 py-4'>
                        <CCardTitle>Training Information</CCardTitle>
                        <CCardBody>
                            <div className='mt-3'>
                                <div>
                                    <strong>Skating</strong>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Your Score
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='info' value={skill_set.skating/10*100}>{skill_set.skating}/10</CProgress>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Comparison
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='warning' value={5/10*100}>5/10</CProgress>
                                    </div>
                                </div>
                                <div>
                                    Daily skating training on ice rink as an extracurricular activity every 4-5 PM after school. 
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div>
                                    <strong>Stickhandling</strong>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Your Score
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='info' value={skill_set.stick_handling/10*100}>{skill_set.stick_handling}/10</CProgress>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Comparison
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='warning' value={5/10*100}>5/10</CProgress>
                                    </div>
                                </div>
                                <div>
                                    Daily skating training on ice rink as an extracurricular activity every 4-5 PM after school.
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div>
                                    <strong>Offense</strong>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Your Score
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='info' value={skill_set.offense/10*100}>{skill_set.offense}/10</CProgress>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Comparison
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='warning' value={5/10*100}>5/10</CProgress>
                                    </div>
                                </div>
                                <div>
                                    Daily skating training on ice rink as an extracurricular activity every 4-5 PM after school.
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div>
                                    <strong>Defense</strong>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Your Score
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='info' value={skill_set.defense/10*100}>{skill_set.defense}/10</CProgress>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Comparison
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='warning' value={5/10*100}>5/10</CProgress>
                                    </div>
                                </div>
                                <div>
                                    Daily skating training on ice rink as an extracurricular activity every 4-5 PM after school. 
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div>
                                    <strong>Goaltending</strong>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Your Score
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='info' value={skill_set.goal_tending/10*100}>{skill_set.goal_tending}/10</CProgress>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div style={{width:'10%'}}>
                                        Comparison
                                    </div>
                                    <div className='d-flex align-items-center' style={{width:'90%'}}>
                                        <CProgress className='w-full' color='warning' value={5/10*100}>5/10</CProgress>
                                    </div>
                                </div>
                                <div>
                                    Daily skating training on ice rink as an extracurricular activity every 4-5 PM after school. 
                                </div>
                            </div>
                        </CCardBody>
                    </CCard>
                    <Spacing height="1.675rem"></Spacing>
                    <div className='d-flex flex-row justify-content-around'>
                        {
                            isEditable ?
                                <>
                                    <ButtonOutlined width={'45%'} onClick={() => navigate(`/profile/${user._id}`, { replace: true })} secondary label='Return To Profile'> </ButtonOutlined>
                                    <ButtonSolid width={'45%'} onClick={() => navigate(`./edit`, { replace: true })} label='Edit Information'> </ButtonSolid>
                                </>
                            :
                                <>
                                    <ButtonSolid width={'45%'} onClick={() => navigate(`/profile/${user._id}`, { replace: true })} label='Return To Profile'> </ButtonSolid>
                                </>
                        }
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default UserTrainingInfoPage;
