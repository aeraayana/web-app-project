import React from 'react';
import Wrapper from '../../wrappers/user-page/UserSignUpMandatory1PageWrapper';
import { useAppContext } from "../../context/appContext"
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CAvatar, CButton, CCard, CCardBody, CCardHeader, CCardText, CFormCheck } from '@coreui/react'
import { BsDot, BsPencilFill, BsThreeDotsVertical } from 'react-icons/bs'

import {
    CNav,
    CNavItem,
    CNavLink,
} from '@coreui/react'
import { 
    ButtonSolid,
    Spacing,
    InputTextWithPrompt,
} from '../../components'

import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';
import { HOST_ASSET_URL } from '../../configs/constants';

const initialState = {
    username: '',
    role: '',
    location: '',
    age: '',
    height: '',
}

const Container = styled.section`
    background-color: white;
    padding: 1.25rem;    // 20px
    border: solid 0.0625rem var(--color-light-gray);
    border-radius: 1rem;
    margin: 1rem;
    width: 100%;
`;

const AccordionContainer = styled.section`
    background-color: white;
    padding: 1.25rem;    // 20px
    border: solid 0.0625rem var(--color-light-gray);
    border-radius: 1rem;
    margin: 1rem;
    width: 100%;
`;

const UserSearchPage = () => {
    const { totalUsers, getAllUsers, users, changePage, sortColumn, isLoading, search } = useAppContext();
    const [searchValue, setSearchValue] = React.useState(initialState);
    const [activePage, setActivePage] = React.useState(1)
    const [records, setRecords] = React.useState([])

    const getAllActiveUsers = async () =>{
        await getAllUsers()
        setRecords(users)
    }

    const getUsers = () => {
        changePage(activePage)
        getAllActiveUsers()
    }

    console.log(records);

    React.useEffect(getUsers, [search]);

    const accordionHeaderStyle = {
        '--cui-accordion-btn-focus-border-color': "white",
        '--cui-accordion-active-bg': "white"
    }

    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full" >
                
                <div className='row-start-start w-full' >

                <AccordionContainer className="row-start-center" style={{width:"30%"}}>
                    <CAccordion alwaysOpen flush activeItemKey={1} className='w-full'>
                        <CAccordionItem itemKey={1}>
                            <CAccordionHeader style={accordionHeaderStyle}>Role</CAccordionHeader>
                            <CAccordionBody>
                                <CFormCheck id="Athlete" value='athlete' label="Athlete"/>
                                <CFormCheck id="Coach" value='coach' label="Coach"/>
                                <CFormCheck id="School" value='school' label="School"/>
                                <CFormCheck id="Association" value='association' label="Association"/>
                                <CFormCheck id="Scout" value='scout' label="Scout"/>
                                <CFormCheck id="Advisors" value='advisor' label="Advisors/Agencies"/>
                                <CFormCheck id="IndependentLeagues" value='league' label="Independent Leagues"/>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={2}>
                            <CAccordionHeader style={accordionHeaderStyle}>Location</CAccordionHeader>
                            <CAccordionBody>
                                <InputTextWithPrompt width="17rem"
                                    prompt={"Location"} type={"text"} id={"location"} placeholder="Search..." />    {/* 415px */}
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={3}>
                            <CAccordionHeader style={accordionHeaderStyle}>Age</CAccordionHeader>
                            <CAccordionBody>
                            <div className='row-between-center'>
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"From"} type={"text"} id={"age_from"} name={"age_from"} />    {/* 415px */}
                                <Spacing width="0.75rem" />    {/* 12px */}
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"To"} type={"text"} id={"age_to"} name={"age_to"} />    {/* 415px */}
                            </div>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={4}>
                            <CAccordionHeader style={accordionHeaderStyle}>Height</CAccordionHeader>
                            <CAccordionBody>
                            <div className='row-between-center'>
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"From"} type={"text"} id={"height_from"} name={"height_from"} />    {/* 415px */}
                                <Spacing width="0.75rem" />    {/* 12px */}
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"To"} type={"text"} id={"height_to"} name={"height_to"} />    {/* 415px */}
                            </div>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={5}>
                            <CAccordionHeader style={accordionHeaderStyle}>Weight</CAccordionHeader>
                            <CAccordionBody>
                            <div className='row-between-center'>
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"From"} type={"text"} id={"weight_from"} name={"weight_from"} />    {/* 415px */}
                                <Spacing width="0.75rem" />    {/* 12px */}
                                <InputTextWithPrompt width="8.9375rem"
                                    prompt={"To"} type={"text"} id={"weight_to"} name={"weight_to"} />    {/* 415px */}
                            </div>
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>
                </AccordionContainer> 

                    <div className='dashboard-page w-full'>
                        <Container className="row-start-center" > 
                            <Spacing width="2rem" />    {/* 20px */}
                            Clear Filter
                        </Container>
                        <Spacing height="1rem" />
                        <div className='row-start-start justify-content-between w-full'>  
                            {users.map((user) => (
                                <CCard style={{ width: "33%", borderRadius: "1.5rem", margin:"12px" }}>
                                    <CCardBody className='position-relative px-5'>
                                        <CAvatar src={user.avatar ? HOST_ASSET_URL+user.avatar : null} 
                                            size='xl'
                                            style={{ 
                                                backgroundColor: 'rgb(179, 190, 204)', 
                                                width: '7rem',  /* 60px */ 
                                                height: '7rem',  /* 60px */
                                                left: '4.8rem'
                                        }} className='d-flex flex-column align-items-center'/>
                                            <h4 className='d-flex flex-column align-items-center' style={{ marginTop: '3rem' }}>
                                                { user.full_name || user.email }
                                            </h4>
                                            <CCardText>
                                            <div className='d-flex flex-column align-items-center'>
                                                <h6>
                                                    {`${user.role} • ${user.address?? "Indonesia"}`}
                                                </h6>
                                                <div>
                                                    {user.username ?? '@default'}
                                                </div>
                                                <div>
                                                    {user.position ?? "Not Set"}
                                                </div>
                                            </div>
                                            </CCardText>
                                            <ButtonSolid className='w-full' label='View Profile'></ButtonSolid>
                                    </CCardBody>
                                </CCard>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    );
}

export default UserSearchPage