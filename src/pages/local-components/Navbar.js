import styled from "styled-components";

import {
    Logo, 
    LogoCrown, 
    InputTextSearch, 
    Spacing, 
    ButtonSolid, 
    ButtonProfile,
    ButtonOutlined
} from "../../components"
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import { HOST_ASSET_URL } from "../../configs/constants";
import { BrowserView, MobileView } from 'react-device-detect';

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
        <>
        <MobileView>
            <Wrapper className={`row-between-center ${className}`} >
                <div className="row-start-center">
                    <Logo />
                    {/* { isLoggedIn && <Spacing width="0.4375rem" />}
                    { isLoggedIn && <InputTextSearch placeholder="Search..." width="21.875rem" onKeyDown={(e) => 
                        {
                            if (e.key === "Enter") {
                                setSearch(e.target.value, "full_name", "contains")
                                navigate("/search", { replace: true })
                            }
                        }}/> }  */}
                </div>
                {!isLoggedIn && 
                    <div className="row-start-center">
                        <ButtonSolid label="Dana Masyarakat" width="15rem" onClick={actionSignInClick} />
                    </div>
                }
                {
                    isLoggedIn &&
                    <div className="row-end-center">
                        <Spacing width="1.25rem" />
                        <ButtonProfile 
                            // imageSource={user.avatar ? HOST_ASSET_URL + user.avatar : null}  
                            // label={'Budi Hendrawan'} 
                            height="2.4rem" 
                            fontSize="1rem"
                            width="2.4rem"
                            style={{ fontSize: "1rem" }} onClick={toggleProfileModal}
                            />
                    </div>
                }
            </Wrapper>
        </MobileView>
        <BrowserView>
            <Wrapper className={`row-between-center ${className}`} >
                <div className="row-start-center">
                    <Logo />
                    {/* { isLoggedIn && <Spacing width="0.4375rem" />}
                    { isLoggedIn && <InputTextSearch placeholder="Search..." width="21.875rem" onKeyDown={(e) => 
                        {
                            if (e.key === "Enter") {
                                setSearch(e.target.value, "full_name", "contains")
                                navigate("/search", { replace: true })
                            }
                        }}/> }  */}
                </div>
                {!isLoggedIn && 
                    <div className="row-start-center">
                        <ButtonSolid label="Dana Masyarakat" width="15rem" onClick={actionSignInClick} />
                    </div>
                }
                {
                    isLoggedIn &&
                    <div className="row-end-center">
                        <Spacing width="1.25rem" />
                        <ButtonProfile 
                            // imageSource={user.avatar ? HOST_ASSET_URL + user.avatar : null}  
                            // label={'Budi Hendrawan'} 
                            height="2.4rem" 
                            fontSize="1rem"
                            width="2.4rem"
                            style={{ fontSize: "1rem" }} onClick={toggleProfileModal}
                            />
                        <span style={{ 
                                fontFamily: 'var(--font-family-primary)',
                                fontWeight: 'var(--font-weight-semibold)',
                                color: 'rgb(100, 100, 100)',
                                paddingLeft: "0.5rem",
                                paddingRight: '3.5rem', 
                            }} > Budi Hendrawan </span>
                        <ButtonOutlined
                            color={"rgb(166, 166, 166);"}
                            label={"Log Out"} 
                            hoverColor={'var(--color-primary-dark)'}
                            onClick={actionSignInClick}
                            height="2.25rem" 
                            width="8.3125rem" 
                            fontSize="1rem" />
                    </div>
                }
            </Wrapper>
        </BrowserView>
        </>
    )
}

export default Navbar
