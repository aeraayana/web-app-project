import { CBadge, CButton, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import React from 'react';

const AdminVerifiedPartnerBadgeListRowDetails = ({rowDetails, approve, reject, pending, activeTab}) => {
    
    return(
        <>
            <CTableRow>
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
                    {(activeTab === 0) ?
                        <>
                            <CButton size="sm" color="danger" style={{color:'white', width:'4.25rem'}} onClick={() => {
                                reject(rowDetails._id)
                            }}>
                                Reject
                            </CButton>
                
                            <CButton size="sm" color="info" style={{ color:'white', marginLeft: '0.5rem' }} onClick={() => {
                                approve(rowDetails._id)
                            }}>
                                Approve
                            </CButton>
                        </> :
                        <CButton size="sm" color="info" variant='outline' style={{ marginLeft: '0.5rem', padding:'0.2rem 1.45rem' }} onClick={() => {
                            pending(rowDetails._id)
                        }}>
                            Make Pending
                        </CButton>
                    }
                </CTableDataCell>
            </CTableRow>
        </>
    )
}

export default AdminVerifiedPartnerBadgeListRowDetails;