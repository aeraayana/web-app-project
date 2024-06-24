import styled from "styled-components";
import { CButton, CAvatar } from '@coreui/react';
import { FaChevronDown } from "react-icons/fa";

const ButtonProfile = ({ imageSource, label, disabled, width, height, onClick, bgColor, color, showBorder, fontSize, className,  }) => {

    const Wrapper = styled(CButton)`
        padding: 0;
        background-color: ${bgColor? bgColor : `transparent`};
        color: ${color? color : `#2E2E2E`};
        border: none;
        border-radius: 0.3125rem;
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-semibold);
        font-size: ${ fontSize? fontSize : "var(--font-size-normal)" };
        ${ width &&
            `width: ` + width + `;` 
        }
        height: ${ height? height : `3.25rem` };
    `;

    return (
        <Wrapper onClick={ onClick } className={`row-center-center ${className?? ""}`} disabled={disabled}>
            < CAvatar src={imageSource ? imageSource : null} style={{ backgroundColor: 'rgb(179, 190, 204)' }} />
            { label && <span style={{ 
                                fontFamily: 'var(--font-family-secondary)',
                                paddingLeft: "0.5rem",
                                paddingRight: "0.25rem", 
                            }} > {label} </span>}
            <FaChevronDown/>
        </Wrapper>
    )
}

export default ButtonProfile
