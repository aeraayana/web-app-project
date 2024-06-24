import styled from "styled-components";

const ContainerCardArticle = ({ color, secondary, thickness, children, padding, className }) => {

    const Wrapper = styled.article`
        background-color: white;
        padding: 1.25rem;
        border-radius: 1rem;
        border: solid 0.0625rem var(--color-light-gray);
    `;

    return <Wrapper className={className}> {children} </Wrapper>;
}

export default ContainerCardArticle
