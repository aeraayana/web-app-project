import styled from "styled-components";

const ContainerOutlined = ({ color, secondary, thickness, children, padding, className }) => {

        // background-color: var(--color-primary);
    const Wrapper = styled.div`
        border: solid ${ thickness? thickness : `0.0625rem`} ${color? color : ( secondary? `var(--color-secondary)` : `var(--color-primary)` )};
        border-radius: 0.3125rem;
        padding: ${padding? padding: `2rem`};
    `;

    return <Wrapper className={className}> {children} </Wrapper>;
}

export default ContainerOutlined
