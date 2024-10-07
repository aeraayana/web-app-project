import styled from 'styled-components';
import { CFormSelect } from '@coreui/react';

const Wrapper = styled(CFormSelect)`
    border-radius: 0.3125rem;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
`

const ChoiceBoxString = ({ options, id, name, onChange, isError, width, height, className }) => {

    const firstOption = options.length>0? options[0] : "";

    return (
        <Wrapper id={id} name={name} aria-label={firstOption} onChange={onChange}
            style={{
                height: `${ height? height : '3.85rem' }`,
                width: `${ width? width: '2.25rem'}`,
                border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
            }}>
            {options.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                    {option}
                </option>
            ))}
        </Wrapper>            
    )
}

export default ChoiceBoxString
