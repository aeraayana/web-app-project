import styled from "styled-components";
import { 
    ButtonOutlined,
    Spacing
} from "../../../components";
import { CAvatar } from '@coreui/react';
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
import { HOST_ASSET_URL } from "../../../configs/constants";

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
        <Wrapper style={{ display: show? "block" : "none" }} >
            <article className="row-center-center">
                <CAvatar src={user.avatar ? HOST_ASSET_URL + user.avatar : null} 
                    size='xl'
                    style={{ 
                        backgroundColor: 'rgb(179, 190, 204)', 
                        width: '3.75rem',  /* 60px */ 
                        height: '3.75rem'  /* 60px */
                    }} />
                <Spacing width="0.75rem" />    {/* 14px */}
                <div className="col-start-start profile">
                    <h1>{ getDisplayName() }</h1>
                    <Spacing height="0.25rem" />    {/* 4px */}
                    <span>Ross Sheppard High School</span>
                    <span>Junior Player at Peterborough Petes</span>
                </div>
            </article>
            <Spacing height="1.25rem" />    {/* 20px */}
            <ButtonOutlined className="w-full" label="View Profile" height="2rem" onClick={navigateToProfile}/>
            <Spacing height="1.25rem" />    {/* 20px */}
            <h1 className="header-label"> Account </h1>
            <Spacing height="0.75rem" />    {/* 12px */}
            <div className="w-full">
                <a className="row-between-center" href="/notifications"> Notifications {(user.notifications && user.notifications.length !== 0)? <span className="row-center-center notif-count-label" > {user.notifications.length} </span> : <></>} </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href="/assessment"> Assessment Test </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href="/career-path"> Career Path </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href="/settings"> Setting & Privacy </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href="/forgot-password"> Forgot Password </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href=""> Privacy Policy & Terms of Service </a>
            </div>
            <Spacing height="0.75rem" />    {/* 12px */}
            <h1 className="header-label"> Membership </h1>
            <Spacing height="0.75rem" />    {/* 12px */}
            <div className="w-full row-between-center link-row">
                <a> Request Verified Badge </a>
            </div>
            <div className="w-full row-between-center link-row">
                <a href=""> Upgrade Membership </a>
            </div>
            <Spacing height="1.25rem" />    {/* 20px */}
            <ButtonOutlined className="w-full" label="Logout" height="2rem" onClick={() => handleLogout()}/>
        </Wrapper>
    )
}

export default ProfileModal
