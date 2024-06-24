import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import styled from 'styled-components';
import { BsDot, BsPencilFill, BsPlus } from 'react-icons/bs';
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import { ButtonOutlined, ButtonSolid, Spacing } from '../../components';
import { CButton, CHeaderDivider } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin-top: 5px;
`


const UserVisibilityPage = () => {

    const navigate = useNavigate();

    const { user, data, getUserVisibility, updateUserViewRule } = useAppContext();
    const visibilityRules = user.view_rules?? [];

    React.useEffect(() => {
        getUserVisibility();
    }, []);

    const getApprovedUser = () => {
        if (!data) return []
        return data.filter((item) => {
            return item.rule_status === "approved"
        })
    }

    const renderUpdateUserStatus = () => {
        const request = getRequestedUser();
        const handleRequest = (status, id) => {
            updateUserViewRule(status, id);
            window.location.reload();
        }
        return(
            <CCardBody className='px-5'>
            <CCardTitle>Visibility Access List</CCardTitle>
            <Spacing height='1rem'/>
            <div className='d-flex flex-row justify-content-between'>
                <h6>
                    Username
                </h6>
                <h6>
                    Role
                </h6>
                <div>
                </div>
            </div>
            {request.map((e)=>(
                <div className='d-flex flex-row justify-content-between'>
                    <div>
                        {e.username}
                    </div>
                    <div style={{marginLeft:"3.325rem"}}>
                        {e.role}
                    </div>
                    <div >
                        <ButtonSolid className='mx-1' width={'5rem'} onClick={() => handleRequest("blocked", e._id)} label="reject" secondary></ButtonSolid>
                        <ButtonSolid width={'5rem'} onClick={() => handleRequest("approved", e._id)} label="accept"></ButtonSolid>
                    </div>
                </div>
            ))}
        </CCardBody>
        )
    }

    const renderAcceptedUserStatus = () => {
        const approved = getApprovedUser();
        return (
            <CCardBody className='px-5'>
                <CButton onClick={() => navigate(`/profile/${user._id}/visibility/remove`)}variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                <CCardTitle>Visibility Access List</CCardTitle>
                <Spacing height='1rem'/>
                <StyledDiv>
                    <h6>
                        Username
                    </h6>
                    <h6>
                        Role
                    </h6>
                </StyledDiv>
                {approved.map((e)=>(
                    <StyledDiv>
                        <div>
                            {e.username}
                        </div>
                        <div>
                            {e.role}
                        </div>
                    </StyledDiv>
                ))}
            </CCardBody>
        )
    }

    const getRequestedUser = () => {
        if (!data) return []
        return data.filter((item) => {
            return item.rule_status === "pending"
        })
    }

    return(
        <React.Fragment>
            <Wrapper className='d-flex justify-content-center w-xl mt-5'>
                <div style={{width: '80%'}}>
                    <CCard className='w-full'>
                        {renderUpdateUserStatus()}
                    </CCard>
                    <CHeaderDivider />
                    <CCard className='w-full'>
                        <CCardBody className='px-5'>
                            <CButton variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                            <CCardTitle>Set Profile Visibility</CCardTitle>
                            <Spacing height='1rem'/>
                            <StyledDiv>
                                <h6>
                                    Profile Section
                                </h6>
                                <h6>
                                    Can View
                                </h6>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Download CV Button
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Download CV Button")[0] ? 
                                        visibilityRules.filter((item) => item.rule_name === "Download CV Button")[0]?.rule_view : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Basic Profile
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Basic Profile")[0] ? 
                                        visibilityRules.filter((item) => item.rule_name === "Basic Profile")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Highlight Video
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Highlight Video")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Highlight Video")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Training Information
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Training Information")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Training Information")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Assesment Result
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Assesment Result")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Assesment Result")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Activity
                                </div>
                                <div>
                                {visibilityRules.filter((item) => item.rule_name === "Activity")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Activity")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Academics
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Academics")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Academics")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                            <StyledDiv>
                                <div>
                                    Parent Information
                                </div>
                                <div>
                                    {visibilityRules.filter((item) => item.rule_name === "Parent Information")[0]?
                                        visibilityRules.filter((item) => item.rule_name === "Parent Information")[0]?.rule_view.toString() : "None"}
                                </div>
                            </StyledDiv>
                        </CCardBody>
                    </CCard>
                    <CHeaderDivider />
                    <CCard className='w-full'>
                        {renderAcceptedUserStatus()}
                    </CCard>
                    <CHeaderDivider />
                    <CCard className='w-full mb-5'>
                        <CCardBody className='px-5'>
                            <CCardTitle>Email & Password</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                <h6>
                                    Email
                                </h6>
                                <span>
                                    {user.email}
                                </span>
                            </CCardText>
                            <CCardText>
                                <h6>
                                    Password
                                </h6>
                                <span>
                                    ************
                                </span>
                            </CCardText>
                            <ButtonOutlined onClick={() => navigate("/forgot-password", { replace: true })} secondary className='position-absolute bottom-0 end-0 m-3 p-2' label='Reset Password'> </ButtonOutlined>
                        </CCardBody>
                    </CCard>
                    <div className='d-flex flex-row justify-content-center'>
                        <ButtonOutlined width={'75%'} onClick={() => navigate(`/profile/${user._id}`, { replace: true })} secondary label='Return To Profile'> </ButtonOutlined>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )

}

export default UserVisibilityPage