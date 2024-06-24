import { CBadge, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import React from 'react';


const ShareProfileWrapper = styled.section`
    border-radius: 1rem;    // 16px 
    width: 12.875rem;    // 350px
    padding: 0.125rem;    // 20px
    background-color: white;
    position:absolute;
    left: 1.425rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;

    h1, a, span {
        padding: 0;
        margin: 0;
        color: black;
    }

    a {
        width: 100%;
        border-radius: 1rem; 
        cursor: pointer;
        text-decoration: none;
        font-size: var(--font-size-small-2);
    }
`;

const AdminMyHockeyUserListRowDetails = ({rowDetails, suspend, unsuspend, activeTab}) => {
    
    const [details, setDetails] = React.useState(false)
    
    const handleUserSuspension = (activeTab, index) => {
        if(!activeTab){
            suspend(index._id);
        } else {
            unsuspend(index._id);
        }
        setDetails(!details);
    }
    
    const renderUserOptions = (index) => {

        return(
            <ShareProfileWrapper style={{ display: details? "block" : "none" }} >
                <div className="w-full row-between-center link-row">
                    <a onClick={() => handleUserSuspension(activeTab, index)} > {!activeTab ? 'Give Suspension' : 'Unsuspend User'} </a>
                </div>
                <div className="w-full row-between-center link-row">
                    <a href={`/profile/${index._id}/`}> View Profile </a>
                </div>
            </ShareProfileWrapper>
        )
    }

    return(
        <>
            {renderUserOptions(rowDetails)}
            <CTableRow>
                <CTableHeaderCell scope='row' style={{cursor:'pointer'}} onClick={(rowDetails) => setDetails(!details)}><BsThreeDotsVertical/></CTableHeaderCell>
                <CTableDataCell>
                    {rowDetails.username?? '-'}
                </CTableDataCell>
                <CTableDataCell>
                    <CBadge color="secondary" style={{padding:'0.425rem 1.125rem'}}>{rowDetails.role?? '-'}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                    {rowDetails.email?? '-'}
                </CTableDataCell>
                <CTableDataCell>
                    {rowDetails.gender?? '-'}
                </CTableDataCell>
                <CTableDataCell>
                    <CBadge color="secondary" style={{padding:'0.425rem 1.125rem'}}>{rowDetails.membership?? '-'}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                    {rowDetails.isVerified ? 'yes' : 'no'}
                </CTableDataCell>
                <CTableDataCell>
                    {moment(rowDetails.createdAt).format('D MMMM yyyy')?? '-'}
                </CTableDataCell>
            </CTableRow>
        </>
    )
}

export default AdminMyHockeyUserListRowDetails;