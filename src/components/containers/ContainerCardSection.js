import styled from "styled-components";

const ContainerCardSection = ({ color, secondary, thickness, children, padding, className, style}) => {

    const Wrapper = styled.section`
        background-color: white;
        padding: ${ padding? padding : '1.25rem' };    // 20px
        border-radius: 0.625rem;
        background-color: var(--color-disable-light);
        overflow: auto;
        border: solid 0.0625rem var(--color-disable);
    `;

    return <Wrapper style={style} className={className}> {children} </Wrapper>;
}

export default ContainerCardSection
