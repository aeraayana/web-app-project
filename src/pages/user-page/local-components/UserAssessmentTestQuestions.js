import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../../context/appContext";
 
const Wrapper = styled.section`
    border-radius: 1rem;    // 16px 
    width: 100%;    // 350px
    padding: 1.25rem;  // 20px
    z-index: 1;

    h1, a, span {
        padding: 0;
        margin: 1.25rem;
        color: black;
    }
`;

const StyledDiv = styled.div`
    
`;

const UserAssessmentTestQuestions = ({questions, index, handleAnswerChange, selectedOption}) => {

    // const { getAllData, data } = useAppContext();

    // const getData = async () => {
    //     await getAllData('assessments');
    // }

    // React.useEffect(() => {
    //     getData()
    // }, [])

    // console.log(data);

    const [formState, setFormState] = React.useState(questions[index]);
    React.useEffect(() => {
        setFormState(questions[index])
    }, [index])

    console.log(formState)

    return (
        <React.Fragment>
            <Wrapper>
                <CCard>
                    <h1>
                        {formState.category_name}
                    </h1>
                    {formState?.contents.map((question, index) => (
                        <div>
                            {console.log(question)}
                            <CCardHeader>
                                {`${index+1}. ${question.content}`}
                            </CCardHeader>
                            {question.options.map((choice, index) => (
                                <CCardBody>
                                    <CCard>
                                        <CCardBody>
                                            <div key={index} className="form-check">
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value={[choice.answer, choice.point, formState.category_name]}
                                                    checked={selectedOption.answer === choice.answer}
                                                    onChange={handleAnswerChange}
                                                    className="form-check-input"
                                                />
                                                <label className="form-check-label">{choice.answer}</label>
                                            </div>
                                        </CCardBody>
                                    </CCard>
                                </CCardBody>
                            ))}
                        </div>
                    ))}
                </CCard>
            </Wrapper>
        </React.Fragment>
    );
}
 
export default UserAssessmentTestQuestions;