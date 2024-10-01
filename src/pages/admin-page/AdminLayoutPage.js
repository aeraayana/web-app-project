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
                <Navbar isLoggedIn={true} isUser={true} />
                <div className='d-flex w-full' >
                    <AdminSideBar />
                    <div className='dashboard-page w-full'>
                        <Outlet />
                        <ProfileModal show={showProfileModal} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AdminLayoutPage