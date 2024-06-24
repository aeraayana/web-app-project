import styled from "styled-components";

const ContainerCardSection = ({ color, secondary, thickness, children, padding, className}) => {

    const Wrapper = styled.section`
        background-color: white;
        padding: ${ padding? padding : '1.25rem' };    // 20px
        border-radius: 1rem;
        border: solid 0.0625rem var(--color-light-gray);
    `;

    return <Wrapper className={className}> {children} </Wrapper>;
}

export default ContainerCardSection
