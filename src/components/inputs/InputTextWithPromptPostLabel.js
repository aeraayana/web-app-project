import styled from "styled-components";
import { CFormInput } from '@coreui/react';
import Spacing from "../others/Spacing";

const WrapperInputText = styled(CFormInput)`
    padding: 1rem;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    border-radius: 0.3125rem;
`

const Wrapper = styled.div`
    .label{
        color: var(--color-black)
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .post-label{
        color: var(--color-black)
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);
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


const InputTextWithPromptPostLabel = ({ prompt, postLabel, id, type, name, errorMessage, placeholder, className, onChange, width, postWidth, inputHeight, onBlur }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" htmlFor={id} >{prompt}</label> }
            <div className="row-start-center">
                <WrapperInputText 
                    id={id} 
                    name={name} 
                    type={type? type : "text"} 
                    autoComplete="off" 
                    placeholder={placeholder? placeholder : ""} 
                    className={className} 
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{
                        width: width,
                        height: inputHeight,
                        backgroundColor: `${ isError? 'var(--color-error-light)' : 'transparent' }`,
                        border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : 'var(--color-black)'}`,
                    }} >
                </WrapperInputText>
                <Spacing width={"0.5rem"} />    {/* 8px */}
                {postLabel && 
                    <label 
                        className="post-label"
                        style={{
                            width: postWidth
                        }}
                        >{postLabel}</label> }

            </div>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default InputTextWithPromptPostLabel
