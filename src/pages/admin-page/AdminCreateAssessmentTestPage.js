import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react';
import Wrapper from '../../wrappers/admin-page/AdminCreateAssessmentTestPageWrapper';
import React from 'react';
import AssesmentTestCategoryLevel from './local-components/AssesmentTestCategoryLevel'
import { Spacing } from '../../components';
import { BsPencilFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin-top: 5px;
`

const AdminCreateAssessmentTestPage = () => {

    return (
        <React.Fragment>
            <Wrapper>
                <AssesmentTestCategoryLevel></AssesmentTestCategoryLevel>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminCreateAssessmentTestPage;
