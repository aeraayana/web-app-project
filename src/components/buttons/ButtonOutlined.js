import styled from "styled-components";
import { CButton } from '@coreui/react';

const ButtonOutlined = ({ label, iconPre, icon, disabled, iconPost, width, height, onClick, color, borderColor, coreUiColor, secondary, className }) => {

    if( !borderColor ){
        borderColor = color;
    }

    if( iconPre && (typeof iconPre == "string" ) ){
        iconPre = <img src={iconPre} alt='pre-img'/>;
    }

    const Wrapper = styled(CButton)`
        padding: 0;
        background-color: transparent;
        border: solid 0.125rem ${borderColor? borderColor : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        color: ${color? color : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        border-radius: 0.3125rem;
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal);
        ${ width &&
            `width: ` + width + `;` 
        }
        height: ${ height? height : `3.25rem` };    // 52px
    `;

    return (
        <Wrapper onClick={ onClick } className={className}  disabled={disabled} color={coreUiColor}>
            {iconPre && iconPre} 
            <span style={{ 
                marginLeft: iconPre? '0.625rem' : '0',
                marginRight: iconPost? '0.625rem' : '0'
            }}> {label} </span>  
            {icon && icon}
            {iconPost && iconPost} 
        </Wrapper>
    )
}

export default ButtonOutlined
