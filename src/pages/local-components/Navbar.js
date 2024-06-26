import styled from "styled-components";

import {
    Logo, 
    LogoCrown, 
    InputTextSearch, 
    Spacing, 
    ButtonSolid, 
    ButtonProfile
} from "../../components"
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import { HOST_ASSET_URL } from "../../configs/constants";

const Navbar = ({ className, isLoggedIn, isUser, isAdmin }) => {
    
    const navigate = useNavigate();
    const { user, toggleProfileModal, setSearch } = useAppContext();

    const actionSignInClick = () => {
        navigate("/sign-in");        
    }

    // const getDisplayName = () => {
    //     const name = user.username ?? user.email
    //     if (name.length > 17)
    //         return name.slice(0, 12) + '...'
    //     return name
    // }

    const Wrapper = styled.nav`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 0.6875rem;
        padding-bottom: 0.6875rem;
        background-color: var(--color-white);
        border: none;
        border-bottom: 0.0625rem solid var(--color-light-gray);
    `;

    return (
        <Wrapper className={`row-between-center ${className}`} >
            <div className="row-start-center">
                <Logo />
                { isLoggedIn && <Spacing width="0.4375rem" />}
                { isLoggedIn && <InputTextSearch placeholder="Search..." width="21.875rem" onKeyDown={(e) => 
                    {
                        if (e.key === "Enter") {
                            setSearch(e.target.value, "full_name", "contains")
                            navigate("/search", { replace: true })
                        }
                    }}/> } 
            </div>
            {!isLoggedIn && 
                <div className="row-start-center">
                    <ButtonSolid label="Dana Masyarakat" width="15rem" onClick={actionSignInClick} />
                </div>
            }
            {
                isLoggedIn &&
                <div className="row-end-center">
                    {/* <ButtonSolid 
                        label={"Premium"} 
                        height="2.25rem" 
                        width="8.3125rem" 
                        iconPre={ <LogoCrown />} 
                        fontSize="1rem" /> */}
                    <Spacing width="1.25rem" />
                    <ButtonProfile 
                        // imageSource={user.avatar ? HOST_ASSET_URL + user.avatar : null}  
                        // label={getDisplayName()} 
                        height="2.25rem" 
                        fontSize="1rem"
                        width="12.375rem" 
                        style={{ fontSize: "1rem" }} onClick={toggleProfileModal}
                        />
                </div>
            }
        </Wrapper>
    )
}

export default Navbar
