import styled from 'styled-components'

const Wrapper = styled.main`
    
    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: 32px;
        color: var(--color-black);
    }

    .title-sub{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-light);
        font-size: 32px;
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
        font-size: var(--font-size-normal-2);   /* 24px */
        color: var(--color-black);
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-light);
        font-size: var(--font-size-normal-2);
        color: #4D4D4D;
    }

    .input-container{
        width: 50%;
        padding: 1.875rem 1.8125rem 3.875rem 1.8125rem;  
    }

    .hyperlink{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal);
        color: var(--color-primary);
        text-decoration: none;
    }

    .image-container{
        width: 95%;
    }

    .image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .toast-message{
        width: 90vh;
        height: 40vh;
        background-color: var(--color-disable-light);
        margin-top: 30vh;
        margin-left: 46.25vh;
        padding: 20px 20px;
    }
`

export default Wrapper
