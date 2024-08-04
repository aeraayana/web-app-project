import styled from "styled-components";
import { 
    ButtonOutlined,
    Spacing
} from "../../../components";
import { CAvatar } from '@coreui/react';
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
import { MobileOnlyView } from "react-device-detect";
// import { HOST_ASSET_URL } from "../../../configs/constants";

const Wrapper = styled.section`
    border-radius: 1rem;    // 16px 
    width: 21.875rem;    // 350px
    padding: 1.25rem;    // 20px
    position: absolute;
    top: 4.75rem;    // 76px
    right: 2rem;    // 32px
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;

    h1, a, span {
        padding: 0;
        margin: 0;
        color: black;
    }

    h1 {
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
    }

    .profile > span {
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: 0.875rem;
    }

    a {
        width: 100%;
        cursor: pointer;
        text-decoration: none;
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }

    .notif-count-label {
        border-radius: 31.25rem;    // 500px
        padding-top: 0.125rem;    // 2px
        padding-left: 0.46875rem;    // 7.5px
        padding-right: 0.46875rem;    // 7.5px
        color: var(--color-white);
        background-color: #F92F2F;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-small-2);
        font-weight: var(--font-weight-bold);
    }
`;

const ProfileModal = ({ show, imageSource }) => {
    const { user, toggleProfileModal, logoutUser, } = useAppContext()
    const navigate = useNavigate();

    const getDisplayName = () => {
        const name = user.username ?? user.email
        if (name.length > 17)
            return name.slice(0, 17) + '...'
        return name
    }

    const navigateToProfile = () => {
        navigate("/profile/" + user._id);  
        toggleProfileModal();
    }

    const handleLogout = () => {
        logoutUser();
        window.location.reload();
    }

    return (
        <MobileOnlyView>
            <Wrapper style={{ display: show? "block" : "none" }} >
                {/* <article className="row-center-center">
                    <CAvatar src={null} 
                        size='xl'
                        style={{ 
                            backgroundColor: 'rgb(179, 190, 204)', 
                            width: '3.75rem',  
                            height: '3.75rem'  
                        }} />
                    <Spacing width="0.75rem" /> 
                    <div className="col-start-start profile">
                        <h1>{ getDisplayName() }</h1>
                        <Spacing height="0.25rem" />
                        <span>Ross Sheppard High School</span>
                        <span>Junior Player at Peterborough Petes</span>
                    </div>
                </article> */}
                <Spacing height="1.25rem" />    {/* 20px */}
                <ButtonOutlined className="w-full" label="Logout" height="2rem" onClick={() => handleLogout()}/>
            </Wrapper>
        </MobileOnlyView>
    )
}

export default ProfileModal