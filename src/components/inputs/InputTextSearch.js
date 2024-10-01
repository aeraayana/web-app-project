import styled from "styled-components";
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Wrapper = styled(CInputGroup)`
`

const InputTextWrapper = styled(CFormInput)`
    padding: 0.5rem 1rem;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small-2);
    font-weight: var(--font-weight-normal);
    border: 0.0625rem solid #CDCDCD;
    border-radius: 0.3125rem;
    

    &:focus{
        outline: none !important;
        border:1px solid var(--color-primary-dark);
        box-shadow: 0 0 10px var(--color-primary);
    }
`

const InputTextSearch = ({ icon, id, name, placeholder, className, onChange, width, height, onKeyDown, errorMessage, disabled }) => {
    const navigate = useNavigate();
    const isError = errorMessage && errorMessage.length>0;

    return (
        <Wrapper>
            {icon ? (
                <CInputGroupText>     
                    {icon}
                </CInputGroupText>
            ) : (
                <CInputGroupText onClick={() => navigate("/search")} style={{ cursor: "pointer" }}> 
                    <FaSearch/> 
                </CInputGroupText>
            )}
            
            <InputTextWrapper id={id} 
                name={name} 
                autoComplete="off" 
                placeholder={placeholder? placeholder : ""} 
                className={className} 
                onChange={onChange}
                onKeyDown={onKeyDown}
                style={{
                    width: width,
                    height: height,
                    border: `${ isError? '0.125rem' : '0.09375rem'} solid ${ isError? 'var(--color-error)' : !disabled? 'var(--color-black)' : 'var(--color-light-gray)'}`,
                }} />
        </Wrapper>
    )
}

export default InputTextSearch
