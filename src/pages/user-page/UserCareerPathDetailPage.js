import React from 'react';
import Goaltender from '../../assets/images/Goaltender.svg'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { ButtonSolid, ContainerCardSection, Spacing } from '../../components';
import { CChart, CChartBar } from '@coreui/react-chartjs';
import { useNavigate } from 'react-router-dom';

const UserCareerPathDetailPage = () => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <div style={{ width: '75%', margin:'2rem auto'}}>
                <CCard className='w-full px-5 py-4'>
                    <CCardTitle style={{ fontSize:'2rem'}}>Goaltender</CCardTitle>
                    <CCardBody>
                        <div style={{textAlign:'center'}}>
                            <CCardImage style={{width:'65%'}} className="p-3" src={Goaltender} />
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, felis at blandit porttitor, justo quam semper nunc, eget efficitur augue massa quis enim. Nullam a vulputate mauris. Phasellus quis scelerisque justo. In pellentesque tempus orci, quis posuere risus aliquam quis.
                        </div>
                        <Spacing height='1.2rem'/>
                        <div>
                            Ut ullamcorper fringilla lobortis. Maecenas feugiat tellus in quam bibendum, sit amet tempor odio commodo. In maximus magna ac lectus tincidunt, nec gravida ex varius. Ut sed diam ut dui molestie ultrices. Nulla at ante eu arcu condimentum tempus. Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor, vulputate metus quis, blandit quam. Cras egestas faucibus risus, sit amet molestie felis hendrerit a.
                        </div>
                        <Spacing height='1.2rem'/>
                        <div style={{ fontSize: '2rem', fontWeight:'bold' }}>
                            Average Stats
                        </div>
                        <Spacing height='1.2rem' />
                        <div className='d-flex justify-content-center'>
                            <CChartBar
                                style={{width:'65%'}}
                                data={{
                                    labels: ['Skating', 'Offensive', 'Defensive', 'Analytic Skill', 'Etc'],
                                    datasets: [{
                                        label: 'Stats',
                                        backgroundColor: '#002654',
                                        data: [9, 3.5, 7, 9, 8, 10],
                                        maxBarThickness: 30
                                    },],
                                }}
                                labels="Parameter"
                                options={{
                                    plugins: {
                                        legend: {
                                            labels: {
                                            }
                                        }
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                            },
                                            ticks: {
                                            },
                                        },
                                        y: {
                                            grid: {
                                            },
                                            ticks: {
                                            },
                                        },
                                    },
                                }}
                                />
                        </div>
                        <div>
                            <strong>Skating</strong>
                        </div>
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor.
                        </div>
                        <Spacing height='1.2rem' />
                        <div>
                            <strong>Stickhandling</strong> 
                        </div>
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor.
                        </div>
                        <Spacing height='1.2rem' />
                        <div>
                            <strong>Defensive</strong>
                        </div>
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor.
                        </div>
                        <Spacing height='1.2rem' />
                        <div>
                            <strong>Offensive</strong>
                        </div>
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor.
                        </div>
                        <Spacing height='1.2rem' />
                        <div>
                            <strong>Goaltending</strong>
                        </div>
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor.
                        </div>
                        <Spacing height='1.2rem'/>
                        <div style={{ fontSize: '2rem', fontWeight:'bold' }}>
                            Jobdesk & Minimum Requirements
                        </div>
                        <Spacing height='1.2rem' />
                        <div>
                            Quisque feugiat, velit luctus rutrum mollis, lacus ligula laoreet dui, ac bibendum purus enim non massa. Aliquam a fermentum quam. Nunc suscipit turpis auctor, vulputate metus quis, blandit quam. Cras egestas faucibus risus, sit amet molestie felis hendrerit a. 
                        </div>
                    </CCardBody>
                </CCard>
                <div style={{width:'100%', textAlign:'center', marginTop:'1.2rem'}}>
                    <ButtonSolid label={'Return to Career Path'} onClick={()=> {navigate('/career-path')}} width={'15rem'} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserCareerPathDetailPage;
