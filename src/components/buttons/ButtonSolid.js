import styled from "styled-components";
import { CButton } from '@coreui/react';

const ButtonSolid = ({ hoverColor, thickness, label, iconPre, icon, borderColor, disabled, iconPost, width, height, onClick, bgColor, color, secondary, className, fontSize }) => {

    if( iconPre && (typeof iconPre == "string" ) ){
        iconPre = <img src={iconPre} alt='pre-img'/>;
    }

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
        flex-direction: column;
        background-color: ${bgColor? bgColor : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        color: ${color? color : `var(--color-white)`};
        border: ${thickness ? 'solid ' + thickness : "none"};
        border-color: ${borderColor? borderColor : 'black'};
        border-radius: 0.3125rem;
        font-weight: var(--font-weight-normal);
        &:hover {
            color: ${hoverColor? hoverColor : `var(--color-white)`};
            background-color: ${bgColor? bgColor : 'var(--color-primary-dark)'};
            border-color: var(--color-primary-dark);
        },
        font-size: ${ fontSize? fontSize : "var(--font-size-normal)"};
        ${ width &&
            `width: ` + width + `;` 
        }
        height: ${ height? height : `3.25rem` }; //52px

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
        <Wrapper onClick={ onClick } className={className} disabled={disabled} >
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

export default ButtonSolid
