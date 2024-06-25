import styled from "styled-components";
import ChoiceBoxString from "./ChoiceBoxString";
import { CFormCheck } from '@coreui/react';

const WrapperChoiceBox = styled(CFormCheck)`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    padding-right: 1rem;
`

const Wrapper = styled.div`
    .label{
        color: var(--color-black)
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding-top: 0.5rem;
    }
`;

const RadioChoiceBoxWithPrompt = ({ prompt, type, options, name, onChange, errorMessage, className, width, onBlur }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" htmlFor={name} >{prompt}</label> }
            <div className="row-start-start">
                {options.map((option) => (
                    <WrapperChoiceBox 
                        type={type}
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        id={`jenis${option}`}
                        value={option}
                        label={option}
                        style={{
                            width: width,
                            border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
                        }} />
                ))}
            </div>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default RadioChoiceBoxWithPrompt
