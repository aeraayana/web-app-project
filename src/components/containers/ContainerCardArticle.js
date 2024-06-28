import styled from "styled-components";

const ContainerCardArticle = ({ bgColor, thickness, border, borderRadius, children, className }) => {

    const Wrapper = styled.article`
        background-color: ${bgColor ? bgColor : 'white'};
        padding: 1.25rem;
        border-radius: ${borderRadius ? borderRadius : '1rem'};
        border: solid ${thickness ? thickness : "0.0625rem"} ${border ? border : 'var(--color-grey)'};
    `;

    return <Wrapper className={className}> {children} </Wrapper>;
}

export default ContainerCardArticle
