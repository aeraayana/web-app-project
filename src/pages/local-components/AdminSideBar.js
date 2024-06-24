import { useAppContext } from '../../context/appContext';
import React from 'react';
import Wrapper from '../../wrappers/admin-page/AdminSideBarWrapper';

import { 
    CSidebar, 
    CNavGroup, 
    CNavItem,
    CSidebarNav
} from '@coreui/react';

import {
    FaPuzzlePiece 
} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    const sidebarStyle = {
        '--cui-sidebar-width':'100%'
    }

    return (
        <React.Fragment>
            <Wrapper className='w-25'>
                <CSidebar style={sidebarStyle}>
                    <CSidebarNav>
                        <CNavGroup className='fs-6' toggler="User & Role Management">
                            <CNavItem className='fs-6'> 
                                <Link className='nav-link fs-6' to={'/admin/myhockey-user-list'}>
                                    MyHockey User List 
                                </Link>
                            </CNavItem>
                            <CNavItem className='fs-6'>
                                <Link className='nav-link fs-6' to={'/admin/verified-partner-badge-list'}>
                                    Verified Partner Badge List 
                                </Link>
                            </CNavItem>
                        </CNavGroup>
                        <CNavGroup className='fs-6' toggler="Approval System">
                            <CNavItem className='fs-6'> 
                                <Link className='nav-link fs-6' to={'/admin/username-approval'}>
                                    Username Approval 
                                </Link>
                            </CNavItem>
                            <CNavItem className='fs-6'> 
                                <Link className='nav-link fs-6' to={'/admin/profanity-word-list'}>
                                    Profanity Word List 
                                </Link>
                            </CNavItem>
                        </CNavGroup>
                        <CNavItem className='fs-6'>
                            <Link className='nav-link fs-6' to={'/admin/create-assessment-test-1'}>
                                Create Assessment Test 
                            </Link> 
                        </CNavItem>
                        <CNavGroup className='fs-6' toggler="Others">
                            <CNavItem className='fs-6'>
                                <Link className='nav-link fs-6' to={'/admin/generate-blast-email'}>
                                    Generate & Blast Email 
                                </Link> 
                            </CNavItem>
                        </CNavGroup>
                    </CSidebarNav>
                </CSidebar>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminSideBar;
