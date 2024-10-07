import React from 'react';
import Wrapper from '../../wrappers/admin-page/AdminSideBarWrapper';

import { 
    CSidebar, 
    CNavItem,
    CSidebarNav
} from '@coreui/react';
import { Link, Navigate, useParams } from 'react-router-dom';

import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const AdminSideBar = () => {

    const isActive = window.location.hash.split('/');
    const length = window.location.hash.split('/').length;

    const sidebarStyle = {
        '--cui-sidebar-width':'100%',
        '--cui-sidebar-toggler-indicator':'var(--color-primary-dark)',
        '--cui-sidebar-nav-link-hover-bg': 'var(--color-primary)',
        '--cui-sidebar-bg': 'var(--color-white)',
        '--cui-sidebar-nav-link-icon-color': 'black',
        '--cui-sidebar-nav-link-color': 'black',
        '--cui-sidebar-toggler-hover-bg': 'var(--color-primary)',
    }
    
    const user = JSON.parse(localStorage.getItem("user_data"));

    return (
        <React.Fragment>
            <Wrapper >
                <CSidebar style={sidebarStyle}>
                    <CSidebarNav>
                        { ['verifikator', 'approver'].find((item) => item === user.role_user) ? (
                            <>
                                <CNavItem className='fs-2'> 
                                    <Link className='nav-link fs-2' to={'/dashboard-admin'}>
                                        <HomeIcon sx={{ color: `${isActive[length - 1] === 'dashboard-admin' ? 'var(--color-primary)' : 'var(--color-black)'} `}}/> 
                                    </Link>
                                </CNavItem>
                            </>
                        ) : (
                            <></>
                        )}

                        { "maker" === user.role_user ? (
                            <>
                                <CNavItem className='fs-2'> 
                                    <Link className='nav-link fs-2' to={'/'}>
                                        <HomeIcon sx={{ color: `${isActive[length - 1] === 'layanan-masyarakat'? 'var(--color-primary)' : 'var(--color-black)'} `}}/> 
                                    </Link>
                                </CNavItem>
                            </>
                        ) : (
                            <></>
                        )}

                        { 'pmu-bpdlh' === user.role_user ? (
                            <>
                                <CNavItem className='fs-2'> 
                                    <Link className='nav-link fs-2' to={'/dashboard-bpdlh'}>
                                        <HomeIcon sx={{ color: `${isActive[length - 1] === 'dashboard-bpdlh'? 'var(--color-primary)' : 'var(--color-black)'} `}}/> 
                                    </Link>
                                </CNavItem>
                            </>
                        ) : (
                            <></>
                        )}

                        { ['verifikator', 'approver', 'pmu-bpdlh'].find((item) => item === user.role_user) ? (
                            <CNavItem className='fs-2'> 
                                <Link className='nav-link fs-2' to={'/riwayat-pengajuan'}>
                                    <ArtTrackIcon sx={{ color: `${isActive[length - 1] === 'riwayat-pengajuan'? 'var(--color-primary)' : 'var(--color-black)'} `}}/>
                                </Link>
                            </CNavItem>
                        ) : (
                            <></>
                        ) }
                        
                        <CNavItem className='fs-2'>
                            <Link className='nav-link fs-2' to={'/downloads'}>
                               <FolderCopyIcon sx={{ color: `${isActive[length - 1] === 'downloads'? 'var(--color-primary)' : 'var(--color-black)'} `}}/>
                            </Link> 
                        </CNavItem>
                    </CSidebarNav>
                </CSidebar>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminSideBar;
