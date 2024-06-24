import { Outlet } from 'react-router-dom'
import Wrapper from '../../wrappers/admin-page/AdminLayoutPageWrapper'
import { Navbar } from '../local-components'
import AdminSideBar from '../local-components/AdminSideBar'
import ProfileModal from './local-components/ProfileModal'
import { useAppContext } from '../../context/appContext'

const AdminLayoutPage = () => {
    const { showProfileModal } = useAppContext()
    return (
        <Wrapper>
            <div>
                <div className='w-full position-fixed' style={{zIndex: 2}}>
                    <ProfileModal show={showProfileModal} />
                    <Navbar isLoggedIn={true} isUser={true} />
                </div>
                <div className='d-flex w-full' >
                    <AdminSideBar />
                    <div className='dashboard-page w-full'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminLayoutPage