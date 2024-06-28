import styled from 'styled-components'

const Wrapper = styled.main`
    padding: 2.5rem 5.5rem 2.5rem 5.5rem;
    background-color: var(--color-white);

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-big);
        color: var(--color-black);
    }

    .title-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-thin);
        font-size: var(--font-size-big);
        color: var(--color-black);
    }

    .description{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-black);
    }

    .price-tag {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-semibold);
        color: black;
    }

    .subtitle{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: 1.5rem;   /* 24px */
        color: var(--color-black);
    }

    .description-subtitle{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
    }
`

export default Wrapper
