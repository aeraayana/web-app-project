import styled from 'styled-components'

const Wrapper = styled.section`
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-semibold);
    height: calc(100vh - 4rem - 1px);  //- 64px
    background-color: var(--color-white);
    position: fixed;
    z-index: 1;
    left: 0;

    .logo-icon:hover {
        color: red;
    }
`

export default Wrapper
