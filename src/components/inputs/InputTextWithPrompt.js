import styled from "styled-components";
import { CFormInput } from '@coreui/react';

const WrapperInputText = styled(CFormInput)`
    padding: 0.75rem 1rem;
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

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-small-2);
        font-size: var(--font-size-normal);
    }

    .password{
        -webkit-text-security: disc;
        text-security: disc;
    }
`;


const InputTextWithPrompt = ({ onInput, required, textAlign, disabled, defaultValue, prompt, id, type, name, errorMessage, placeholder, className, onChange, width, inputHeight, value, onBlur, onKeyDown }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" style={{ color:`${!disabled? 'var(--color-black)' : 'var(--color-disable)'}` }} htmlFor={id} >{prompt}</label> }
            <WrapperInputText id={id} 
                // accept="image/png, image/jpeg, application/pdf, image/png"
                name={name} 
                type={type? type : "text"} 
                autoComplete="off" 
                placeholder={placeholder? placeholder : ""} 
                className={className} 
                onChange={onChange}
                disabled={disabled}
                onChangeCapture={onInput}
                defaultValue={defaultValue}
                value={value}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                style={{
                    textAlign: textAlign,
                    width: width,
                    height: inputHeight,
                    color: `${ disabled? 'var(--color-disable)' : 'black'}`,
                    backgroundColor: `${ disabled? 'var(--color-disable-light)' : 'white' }`,
                    border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : !disabled? 'var(--color-black)' : 'var(--color-light-gray)'}`,
                }} >
            </WrapperInputText>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default InputTextWithPrompt
