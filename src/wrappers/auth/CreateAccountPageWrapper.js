import styled from 'styled-components'

const Wrapper = styled.main`
    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: 32px;
        color: var(--color-black);
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal-2);
        color: var(--color-black);
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: 1.5rem;   /* 24px */
        color: var(--color-black);
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal-2);
        color: #4D4D4D;
    }

    .input-container{
        width: 50%;
        padding: 2.875rem 1.8125rem 3.875rem 1.8125rem;  
    }

    .image-container{
        width: 95%;
    }

    .image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .label-or {
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-semibold);
        font-size: 1.5rem;   /* 24px */
        color: #0F182B80;
        padding-left: 1.0625rem;   /* 17px */
        padding-right: 1.0625rem;   /* 17px */
    }

    .or-line{
        width: 100%;
        background-color: #0F182B80;
        height: 0.0625rem;
    }

    .toast-message{
        width: 50vh;
        background-color: var(--color-disable-light);
        padding: 20px 20px;
        --toastify-color-progress-light: red;
    }
`

export default Wrapper
