import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Hyperlink = ({ label, iconPre, icon, iconPost, width, height, url, color, colorHover, secondary, small, className }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(url)
    }

    const Wrapper = styled.a`
        cursor: pointer;
        color: ${color? color : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        text-decoration: none;
        font-weight: var(--font-weight-bold);
        font-family: var(--font-family-secondary);
        font-size: ${ small? `var(--font-size-small)` : `var(--font-size-small-2)` };
        &:hover,
        &:focus{
            color: ${colorHover? colorHover : ( secondary? `var(--color-secondary-dark)` : `var(--color-primary-dark)` )};
        }
    `;

    return (
        <Wrapper onClick={onClick} className={className}>
            {iconPre && iconPre}
            <span  style={{ 
                marginLeft: iconPre? '0.625rem' : '0',
                marginRight: iconPost? '0.625rem' : '0'
            }}> {label} </span>  
            {icon && icon}
            {iconPost && iconPost} 
        </Wrapper>
    )
}

export default Hyperlink
