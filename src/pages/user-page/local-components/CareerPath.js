import styled from "styled-components";
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react";

const CareerPathCard = ({ image, title, text, buttonHref }) => {
    const Wrapper = styled(CCard)`
        width: 30%;
    `;

    return (
        <Wrapper className="w-sm-full">
            <CCardImage orientation="top" className="p-3" src={image} />
            <CCardBody>
                <CCardTitle>{ title }</CCardTitle>
                <CCardText>
                    {text}
                </CCardText>
                <CButton className="w-full" href={buttonHref}>See Details</CButton>
            </CCardBody>
        </Wrapper>
    )
}

export default CareerPathCard
