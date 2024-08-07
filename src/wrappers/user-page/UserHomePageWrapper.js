import styled from 'styled-components'

const Wrapper = styled.main`
    padding: 2.5rem 5.5rem 2.5rem 5.5rem;
    background-color: var(--color-white);
    
    .label{
        color: currentColor;
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
    }

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-black);
    }

    .title-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-light);
        font-size: var(--font-size-semi-big);
        color: var(--color-black);
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
    }

    .price-tag{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        border-radius: 10px;
        border: 1px solid var(--color-disable);
        padding: 10px 10px;
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-regular);
        font-size: 1.5rem;   /* 24px */
        letter-spacing: 2px;
        color: #667085;
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-black);
    }
`

export default Wrapper
