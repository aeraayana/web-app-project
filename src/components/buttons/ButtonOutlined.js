import styled from "styled-components";
import { CButton } from '@coreui/react';

const ButtonOutlined = ({ fontSize, hoverColor, label, borderRadius, iconPre, icon, disabled, iconPost, width, height, onClick, color, borderColor, coreUiColor, secondary, className }) => {

    if( !borderColor ){
        borderColor = color;
    }

    if( iconPre && (typeof iconPre == "string" ) ){
        iconPre = <img src={iconPre} alt='pre-img'/>;
    }

    const Wrapper = styled(CButton)`
        --cui-btn-bg: #fff;
        --cui-btn-border-color: #fff;
        --cui-btn-hover-bg: #fff;
        --cui-btn-hover-border-color: #fff;
        --cui-btn-active-bg: transparent;
        --cui-btn-active-border-color: transparent;
        --cui-btn-active-color: var(--color-primary-dark);
        img {
            max-width: 100%;
            height: auto;
            width: auto; 
        }
        padding: 0;
        flex-direction: column;
        background-color: transparent;
        color: ${color? color : `var(--color-primary-dark)`};
        border-color: ${borderColor? borderColor : 'black'};
        border-radius: ${borderRadius? borderRadius : '0.3125rem'};
        font-weight: var(--font-weight-normal);
        &:hover {
            color: ${hoverColor? hoverColor : ( hoverColor? `var(--color-secondary)` : `var(--color-primary-dark)` )};
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
        font-size: ${ fontSize? fontSize : "var(--font-size-normal)"};
        ${ width &&
            `width: ` + width + `;` 
        }
        height: ${ height? height : `3.25rem` }; //52px
        
        &:disabled{
            color: var(--color-disable);
            background-color: white;
            border-color: var(--color-disable);
        }

        &:focus{
            outline: none !important;
            color: ${hoverColor? hoverColor : ( hoverColor? `var(--color-secondary)` : `var(--color-primary-dark)` )};
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
            background-color: transparent;
        }

        &:active{
            color: ${hoverColor? hoverColor : ( hoverColor? `var(--color-secondary)` : `var(--color-primary-dark)` )};
            background-color: transparent;
        }

    `;

    return (
        <Wrapper onClick={ onClick } className={className}  disabled={disabled} color={coreUiColor}>
            <div>
                {icon && icon}
            </div>
            <div>
                {iconPre && iconPre}
                { label && <span style={{ 
                    marginLeft: iconPre? '0.625rem' : '0',
                    marginRight: iconPost? '0.625rem' : '0'
                }}> {label} </span>}  
                {iconPost && iconPost} 
            </div>
        </Wrapper>
    )
}

export default ButtonOutlined
