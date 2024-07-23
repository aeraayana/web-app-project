import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border-radius: 15px;
  border: solid 0.05rem;

  .icon {
    font-size: 0.6rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--color-grey);
  }

  }
  .text {
    text-transform: capitalize;
    margin-right: 0.5rem;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
