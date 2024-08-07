import React from 'react';
import Wrapper from '../../wrappers/admin-page/AdminSideBarWrapper';

import { 
    CSidebar, 
    CNavItem,
    CSidebarNav
} from '@coreui/react';

import { Link, Navigate } from 'react-router-dom';
import LogoHouse from '../../components/logo-icon/LogoHouse';
import LogoDocument from '../../components/logo-icon/LogoDocument';

const AdminSideBar = () => {
    const sidebarStyle = {
        '--cui-sidebar-width':'100%',
        '--cui-sidebar-toggler-indicator':'var(--color-primary-dark)',
        '--cui-sidebar-nav-link-hover-bg': 'var(--color-primary)',
        '--cui-sidebar-bg': 'var(--color-white)',
        '--cui-sidebar-toggler-hover-bg': 'var(--color-primary)',
    }
    
    const user = JSON.parse(localStorage.getItem("user_data"));

    return (
        <React.Fragment>
            <Wrapper >
                <CSidebar style={sidebarStyle}>
                    <CSidebarNav>
                        {user.role_user === 'verifikator' ? (
                            <CNavItem className='fs-2'> 
                                <Link className='nav-link fs-2' to={'/layanan-masyarakat/admin'}>
                                    <LogoHouse /> 
                                </Link>
                            </CNavItem>
                        ) : (
                            <CNavItem className='fs-2'> 
                                <Link className='nav-link fs-2' to={'/layanan-masyarakat/'}>
                                    <LogoHouse />
                                </Link>
                            </CNavItem>
                        )}
                        <CNavItem className='fs-2'>
                            <Link className='nav-link fs-2' to={'/layanan-masyarakat/downloads'}>
                               <LogoDocument />
                            </Link> 
                        </CNavItem>
                    </CSidebarNav>
                </CSidebar>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminSideBar;
