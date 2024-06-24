import styled from "styled-components";
import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Wrapper = styled(CInputGroup)`
`

const InputTextWrapper = styled(CFormInput)`
    padding: 0.5rem 1rem;
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-small-2);
    font-weight: var(--font-weight-normal);
    border: 0.0625rem solid #CDCDCD;
    border-radius: 0.3125rem;
    backgroundColor: var(--color-error-light);
`

const InputTextSearch = ({ id, name, placeholder, className, onChange, width, height, onKeyDown }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <CInputGroupText onClick={() => navigate("/search")} style={{ cursor: "pointer" }}> 
                <FaSearch/> 
            </CInputGroupText>
            
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
                }} />
        </Wrapper>
    )
}

export default InputTextSearch
