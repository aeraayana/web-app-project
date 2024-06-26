import { Outlet } from 'react-router-dom'
import Wrapper from '../../wrappers/user-page/UserLayoutPageWrapper'
import { Navbar } from '../local-components'
import { ProfileModal } from './local-components'
import { useAppContext } from '../../context/appContext'

const UserLayoutPage = () => {
    // const { showProfileModal } = useAppContext()
    return (
        <Wrapper>
            <div>
                <Navbar isLoggedIn={true} isUser={true} />
                <div className='dashboard-page'>
                    <Outlet />
                    {/* <ProfileModal show={showProfileModal} /> */}
                </div>
            </div>
        </Wrapper>
    )
}

export default UserLayoutPage