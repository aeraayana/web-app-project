import styled from 'styled-components'

const Wrapper = styled.section`
    // width: 23.5rem;        
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-semibold);
    height: calc(100vh - 4rem - 1px);  //- 64px
    background-color: var(--color-primary);
    position: fixed;
    z-index: 1;
    left: 0;
    top: calc(4rem + 1px);

    .sidebar-nav{
        // width: 23.5rem;        
    }

    .nav-group, .nav-link, .nav-group-toggle {
        background-color: var(--color-primary);
    }
`

export default Wrapper
