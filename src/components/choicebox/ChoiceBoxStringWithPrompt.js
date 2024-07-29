import styled from "styled-components";
import ChoiceBoxString from "./ChoiceBoxString";
import { CFormSelect } from '@coreui/react';

const WrapperChoiceBox = styled(CFormSelect)`
    border-radius: 0.3125rem;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
`

const Wrapper = styled.div`
    .label{
        color: var(--color-black)
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding-top: 0.5rem;
    }

    &:focus{
        outline: none !important;
        border:1px solid var(--color-primary-dark);
        background-color: var(--color-primary);
    }
`;

const ChoiceBoxStringWithPrompt = ({ prompt,  options, id, name, onChange, height, errorMessage, className, width, value, onBlur }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" htmlFor={id} >{prompt}</label> }
            <WrapperChoiceBox id={id} name={name} onChange={onChange} onBlur={onBlur}
                style={{
                    width: width,
                    height: `${ height? height : '3.85rem' }`,
                    border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
                }}>
                {options?.map((option) => (
                    <option key={option} selected={value === option[`id`].toLowerCase()} value={option[`id`].toLowerCase()}>
                        {option[id]}
                    </option>
                ))}
            </WrapperChoiceBox>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default ChoiceBoxStringWithPrompt
