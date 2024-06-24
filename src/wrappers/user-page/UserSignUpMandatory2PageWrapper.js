import styled from 'styled-components'

const Wrapper = styled.main`
    padding: 2.5rem;

    .title{
        padding: 0;
        margin: 0;
        color: black;
        font-family: var(--font-family-primary);
        font-size: 2rem;    // 32px
        font-weight: var(--font-weight-semibold);
    }

    .description{
        padding: 0;
        margin: 0;
        color: black;
        font-family: var(--font-family-secondary);
        font-size: var(--font-size-normal);    // 32px
        font-weight: var(--font-weight-normal);
    }
`

export default Wrapper
