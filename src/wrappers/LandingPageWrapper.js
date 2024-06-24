import styled from 'styled-components'

const Wrapper = styled.main`
    .title-big{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-bigger);
        color: var(--color-primary);
    }
    .description{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal-2);
        color: var(--color-black);
    }
    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-semi-big);
        color: var(--color-primary);
    }
    li {
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal-2);
        color: var(--color-primary);
        padding-bottom: 0.75rem; /* 12px */
    }
    .banner-card{
        margin-left: 1rem;    /* 16px */
        margin-right: 1rem;    /* 16px */
        width: 20.9375rem;    /* 335px */;
        height: 25.2rem;    /* 403px */;
        padding: 1.529375rem;    /* 24.47px */
        background-color: #242644;
        border-radius: 0.5rem;    /* 8px */
    }
    .banner-card h3{
        color: var(--color-white);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: 1.338125rem;
        padding-bottom: 0.9375rem;    /* 15px */
    }
`

export default Wrapper
