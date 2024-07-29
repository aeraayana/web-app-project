import styled from 'styled-components'

const MobileWrapper = styled.main`
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    background-color: var(--color-white);

    img {
        max-width: 100%;
        height: auto;
        width: auto; /* ie8 */
    }

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal-2);
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
        font-size: var(--font-size-small-2);
        color: var(--color-semiblack);
    }

    .price-tag {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-semi-big);
        font-weight: var(--font-weight-semibold);
        color: black;
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-normal);   /* 24px */
        letter-spacing: 2px;
        color: #667085;
    }

    .description-subtitle{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
    }
`

export default MobileWrapper
