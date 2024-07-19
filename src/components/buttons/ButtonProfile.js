import styled from "styled-components";
import { CButton, CAvatar } from '@coreui/react';
import { FaChevronDown } from "react-icons/fa";

const ButtonProfile = ({ imageSource, label, disabled, width, height, onClick, bgColor, color, showBorder, fontSize, className,  }) => {

    const Wrapper = styled(CButton)`
        --cui-btn-bg: #fff;
        --cui-btn-border-color: #fff;
        --cui-btn-hover-bg: #fff;
        --cui-btn-hover-border-color: #fff;
        --cui-btn-active-bg: #fff;
        --cui-btn-active-border-color: #fff;
        --cui-btn-active-color: var(--color-primary-dark);
        
        img {
            max-width: 100%;
            height: auto;
            width: auto; 
        }
        padding: 0;
        background-color: ${bgColor? bgColor : `transparent`};
        color: ${color? color : `#2E2E2E`};
        border: none;
        border-radius: 50em;
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: ${ fontSize? fontSize : "var(--font-size-normal)" };
        ${ width &&
            `width: ` + width + `;` 
        }
        &:hover{
            background-color: transparent;
            border-color: var(--color-primary);
            border: solid 0.1rem var(--color-primary);
            color: ${color? color : `#2E2E2E`};
            border-radius: 50em;
        }
        height: ${ height? height : `3.25rem` };

        &:focus{
            outline: none !important;
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
            background-color: transparent;
        }

        &:active{
            background-color: #fff;
            border-color: #fff;
            color: ${color? color : `#2E2E2E`};
        }
    `;

    return (
        <Wrapper onClick={ onClick } className={`${className?? ""}`} disabled={disabled}>
            <CAvatar src={imageSource ? imageSource : null} style={{ width:'2.15rem', height:'2.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
        </Wrapper>
    )
}

export default ButtonProfile
