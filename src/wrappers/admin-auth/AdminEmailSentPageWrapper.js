import styled from 'styled-components'

const Wrapper = styled.main`
    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-big);
        color: var(--color-black);
    }

    .title-sub{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-light);
        font-size: var(--font-size-big);
        color: var(--color-black);
    }

    .description{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-black);
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: 1.5rem;   /* 24px */
        color: var(--color-black);
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-light);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
    }

    .input-container{
        width: 50%;
        padding: 1.875rem 1.8125rem 3.875rem 1.8125rem;  
    }

    .image-container{
        width: 95%;
    }

    .image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export default Wrapper
