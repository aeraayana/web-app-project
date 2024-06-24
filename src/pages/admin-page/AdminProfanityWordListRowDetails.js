import { CBadge, CButton, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import moment from "moment";
import React from 'react';

const AdminProfanityWordListRowDetails = ({rowDetails, remove}) => {

    return(
        <>
            <CTableRow>
                <CTableDataCell style={{padding:'0 10rem 0 0.5rem'}}>
                    {rowDetails.word?? '-'}
                </CTableDataCell>
                <CTableDataCell >
                    {moment(rowDetails.createdAt).format('D MMMM yyyy')?? '-'}
                </CTableDataCell>
                <CTableDataCell>
                    <CButton
                        color="danger"
                        variant="outline"
                        shape="square"
                        size="sm"
                        style={{padding:'0.15rem 2.5rem'}}
                        onClick={() => {
                            remove(rowDetails._id)
                        }}
                    >
                        Remove
                    </CButton>
                </CTableDataCell>
            </CTableRow>
        </>
    )
}

export default AdminProfanityWordListRowDetails;