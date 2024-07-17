import styled from "styled-components";
import { CFormInput } from '@coreui/react';

const Wrapper = styled(CFormInput)`
    padding: 1rem;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    border-radius: 0.3125rem;

    &:focus{
        outline: none !important;
        border:1px solid var(--color-primary-dark);
        box-shadow: 0 0 10px var(--color-primary);
    }
`

const InputText = ({ id, name, type, isError, placeholder, className, onChange }) => {
    return (
        <Wrapper id={id} 
            name={name} 
            type={type? type : "text"} 
            autoComplete="off" 
            placeholder={placeholder? placeholder : ""} 
            className={className} 
            onChange={onChange}
            style={{
                backgroundColor: `${ isError? 'var(--color-error-light)' : 'none' }`,
                border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
            }} >
        </Wrapper>
    )
}

export default InputText
