import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { CCard, CCardBody, CCardTitle} from '@coreui/react';
import { ButtonOutlined, ButtonSolid, Spacing } from '../../components';
import { CHeaderDivider } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin-top: 5px;
`


const UserVisibilityDenyPage = () => {

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

    const renderAcceptedUserStatus = () => {
        const approved = getApprovedUser();
        const handleRequest = (status, id) => {
            updateUserViewRule(status, id);
            window.location.reload();
        }
        return (
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
                {approved.map((e)=>(
                    <div className='d-flex flex-row justify-content-between'>
                        <div>
                            {e.username}
                        </div>
                        <div style={{marginLeft:"2.125rem"}}>
                            {e.role}
                        </div>
                        <div >
                            <ButtonSolid width={'5rem'} onClick={() => handleRequest("blocked", e._id)} secondary label="remove"></ButtonSolid>
                        </div>
                    </div>
                ))}
            </CCardBody>
        )
    }

    return(
        <React.Fragment>
            <Wrapper className='d-flex justify-content-center w-xl mt-5'>
                <div style={{width: '80%'}}>
                    <CCard className='w-full'>
                        {renderAcceptedUserStatus()}
                    </CCard>
                    <CHeaderDivider />
                    <div className='d-flex flex-row justify-content-center mt-5'>
                        <ButtonOutlined width={'75%'} onClick={() => navigate(`/profile/${user._id}/visibility`, { replace: true })} secondary label='cancel'> </ButtonOutlined>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )

}

export default UserVisibilityDenyPage