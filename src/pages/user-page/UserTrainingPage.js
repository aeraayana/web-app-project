import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardTitle } from '@coreui/react';
import { CChartPie } from '@coreui/react-chartjs';
import { ButtonOutlined, ButtonSolid, Spacing } from '../../components';

const UserTrainingPage = () => {
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
        (userData) ? <UserTrainingComponent user={ userData } isEditable={editable} /> : <></>
    )
}

const UserTrainingComponent = ({ user, isEditable }) => {

    const { training_frequencies } = user;
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Wrapper className='row-center-center w-full mt-5'>
                <div style={{ width: '65%' }}>
                    <CCard className='w-full px-5 py-4'>
                        <CCardTitle>Training Frequency (Weekly)</CCardTitle>
                        <CCardBody>
                            <div style={{width:'20%'}}>
                                <CChartPie
                                    data={{
                                        datasets: [
                                        {
                                            backgroundColor: [
                                                '#0096D3',
                                                '#6434A4',
                                                '#002654',
                                                '#FCD425',
                                            ],
                                            data: training_frequencies.map((element) => {
                                                return [parseInt(element.frequency)]
                                            }),
                                        },
                                        ],
                                    }}
                                    options={{
                                        plugins: {
                                        legend: {
                                            labels: {
                                                
                                            }
                                        }
                                        },
                                    }}
                                    />
                            </div>
                            {training_frequencies.map((element) => (
                                <div className='mt-3'>
                                    <div>
                                        <strong>{element.training}</strong>
                                    </div>
                                    <div>
                                        {element.description} 
                                    </div>
                                </div>
                            ))}
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
                                    <ButtonSolid width={'45%'} onClick={() => navigate(`./profile/${user._id}`, { replace: true })} label='Return To Profile'> </ButtonSolid>
                                </>    
                        }
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default UserTrainingPage;
