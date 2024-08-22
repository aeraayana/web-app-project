import styled from "styled-components";
import { CFormTextarea } from '@coreui/react';

const WrapperInputText = styled(CFormTextarea)`
    padding: 1rem;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    border-radius: 0.3125rem;

    &:focus{
        outline: none !important;
        border:1px solid var(--color-primary-dark);
        box-shadow: 0 0 10px var(--color-primary);
    }
`

const Wrapper = styled.div`
    .label{
        color: var(--color-black)
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .sublabel{
        color: var(--color-semiblack);
        font-family: var(--font-family-primary);
        font-style: italic;
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding: 0rem 0.25rem;
    }

    .text-limit{
        color: var(--color-semiblack);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding: 0rem 0.25rem;
    }

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding-top: 0.5rem;
    }

    .password{
        -webkit-text-security: disc;
        text-security: disc;
    }
`;


const InputTextArea = ({ rows, defaultValue, disabled, subLabel, textLimit, prompt, id, type, name, errorMessage, placeholder, className, onChange, width, inputHeight, value, onBlur, onKeyDown }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt &&
                <div className="row-start-start">
                    <label className="label" htmlFor={id} >{prompt}</label> 
                    <label className="sublabel" htmlFor={id} >/ {subLabel}</label>
                    <label className="text-limit" htmlFor={id}> {textLimit}</label>
                </div> 
            }
            <WrapperInputText id={id} 
                name={name} 
                type={type? type : "text"} 
                autoComplete="off" 
                placeholder={placeholder? placeholder : ""} 
                className={className} 
                rows={rows}
                disabled={disabled}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                style={{
                    width: width,
                    height: inputHeight,
                    backgroundColor: `${ disabled? 'var(--color-disable)' : 'white' }`,
                    border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
                }} >
            </WrapperInputText>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default InputTextArea;
