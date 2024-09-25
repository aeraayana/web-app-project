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

const ProfileModal = ({ show }) => {
    const { logoutUser } = useAppContext()

    const handleLogout = () => {
        logoutUser();
        window.location.reload();
    }

    return (
        <MobileOnlyView>
            <Wrapper style={{ display: show? "block" : "none" }} >
                <Spacing height="1.25rem" />    {/* 20px */}
                <ButtonOutlined className="w-full" label="Logout" height="2rem" onClick={() => handleLogout()}/>
            </Wrapper>
        </MobileOnlyView>
    )
}

export default ProfileModal
