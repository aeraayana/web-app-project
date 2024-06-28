import React from 'react';
import Wrapper from '../../wrappers/admin-page/AdminSideBarWrapper';

import { 
    CSidebar, 
    CNavItem,
    CSidebarNav
} from '@coreui/react';

import { Link } from 'react-router-dom';
import LogoHouse from '../../components/logo-icon/LogoHouse';

const AdminSideBar = () => {
    const sidebarStyle = {
        '--cui-sidebar-width':'100%',
        '--cui-sidebar-toggler-indicator':'var(--color-primary-dark)',
        '--cui-sidebar-nav-link-hover-bg': 'var(--color-primary)',
        '--cui-sidebar-bg': 'var(--color-white)',
        '--cui-sidebar-toggler-hover-bg': 'var(--color-primary)',
    }
    
    return (
        <React.Fragment>
            <Wrapper >
                <CSidebar style={sidebarStyle}>
                    <CSidebarNav>
                        <CNavItem className=' fs-2'> 
                            <Link className='nav-link fs-2' to={'/admin/myhockey-user-list'}>
                                <LogoHouse />
                            </Link>
                        </CNavItem>
                        <CNavItem className='fs-6'> 
                            <Link className='nav-link fs-6' to={'/admin/username-approval'}>
                                <LogoHouse /> 
                            </Link>
                        </CNavItem>
                        {/* <CNavItem className='fs-6'>
                            <Link className='nav-link fs-6' to={'/admin/create-assessment-test-1'}>
                                Create Assessment Test 
                            </Link> 
                        </CNavItem>
                        <CNavItem className='fs-6'>
                            <Link className='nav-link fs-6' to={'/admin/generate-blast-email'}>
                                Generate & Blast Email 
                            </Link> 
                        </CNavItem> */}
                    </CSidebarNav>
                </CSidebar>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminSideBar;
