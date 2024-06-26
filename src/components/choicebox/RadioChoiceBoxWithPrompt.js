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
    
    input[type="checkbox"]:checked + label::after {
        content: '';
        position: absolute;
        height: 2ex;
        width: 2ex;
        background: rgba(0, 0, 0, 0);
        top: 0.4ex;
        left: 0ex;
        border-radius: 20px;
        border: 6px solid var(--color-primary-light);
    }
            
    input[type="checkbox"] {
        line-height: 2.1ex;
    }

    input[type="radio"],
        input[type="checkbox"] {
        display: none;
    }
            
    input[type="checkbox"] + label {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
            
    input[type="checkbox"] + label::before {
        content: "";
        display: inline-block;
        vertical-align: -10%;
        height: 2ex;
        width: 2ex;
        background-color: white;
        border: 1px solid rgb(166, 166, 166);
        border-radius: 20px;
        margin-right: 0.5em;
    }
`;

const RadioChoiceBoxWithPrompt = ({ prompt, color, type, options, name, onChange, errorMessage, className, width, onBlur, value }) => {

    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" htmlFor={name} >{prompt}</label> }
            <div className="row-start-start">
                {options.map((option, i) => (
                    <WrapperChoiceBox 
                        className="regular-radio"
                        checked={option === value}
                        type={type}
                        name={name}
                        color={color}
                        onChange={onChange}
                        onBlur={onBlur}
                        id={`${name}${i}`}
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
