import styled from 'styled-components'

const Wrapper = styled.main`
    background-color: var(--color-light-gray);

    .modal-profile {
        border-radius: 1rem;    // 16px 
        width: 21.875rem;    // 350px
        padding: 1.25rem;    // 20px
        position: absolute;
        top: 4.75rem;    // 76px
        right: 2rem;    // 32px
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
`

export default Wrapper
