import styled from 'styled-components'

const Wrapper = styled.main`
    background-color: var(--color-light-gray);

    .dashboard-page{
        padding: 1.75rem;    //28px
        overflow-y: auto;
        padding-left: calc(25% + 1.75rem);
        padding-top: calc(5.75rem + 1px);
    }
`

export default Wrapper
