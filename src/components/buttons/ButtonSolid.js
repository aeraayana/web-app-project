import styled from "styled-components";
import { CButton } from '@coreui/react';

const ButtonSolid = ({ label, iconPre, icon, disabled, iconPost, width, height, onClick, bgColor, color, secondary, className, fontSize }) => {

    if( iconPre && (typeof iconPre == "string" ) ){
        iconPre = <img src={iconPre} alt='pre-img'/>;
    }

    const Wrapper = styled(CButton)`
        padding: 0;
        background-color: ${bgColor? bgColor : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        color: ${color? color : `var(--color-white)`};
        border: none;
        border-radius: 0.3125rem;
        font-weight: var(--font-weight-semibold);
        font-size: ${ fontSize? fontSize : "var(--font-size-normal)"};
        ${ width &&
            `width: ` + width + `;` 
        }
        height: ${ height? height : `3.25rem` }; //52px
    `;

    return (
        <Wrapper onClick={ onClick } className={className} disabled={disabled} >
            {iconPre && iconPre} 
            { label && <span style={{ 
                marginLeft: iconPre? '0.625rem' : '0',
                marginRight: iconPost? '0.625rem' : '0'
            }}> {label} </span>}  
            {icon && icon}
            {iconPost && iconPost} 
        </Wrapper>
    )
}

export default ButtonSolid
