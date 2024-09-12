import { CButton, CCard, CCardBody, CCardTitle, CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import { ButtonOutlined, InputTextWithPrompt, Spacing } from '../../../components';
import { BsFillTrashFill, BsPencilFill, BsPlusCircle, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import AssessmentTestQuestion from './AssesmentTestQuestion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useAppContext } from '../../../context/appContext';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin-top: 5px;
`

const Wrapper = styled.main`
`

const AdminCreateAssessmentTestAgePage = () => {

    const navigate = useNavigate();

    const { data, createData, updateData } = useAppContext();

    const successText = "data kategori age berhasil disimpan"

    const handleNextCategory = (input) => {
        const list = {};
        list.contents = input;
        list.category_name = "age";
        if(data.length === 0){
            createData(list, "questions", successText);
            setInputList([]);
        }else{
            list.category_name = "age";
            updateData(list, "questions", successText, data[1]?._id);
            setInputList([]);
        }
        navigate("/admin/create-assessment-test-3");
    }    
    
    const [inputList, setInputList] = React.useState([
        {
            content: '',
            options: [
                {
                    answer: '',
                    point: 0
                }
            ],
        }
    ]);

    // const getData = async () => {
    //     await setSearch("age", "category_name", "contains");
    // }
    
    // const getRecords = async () => {
    //     await getAllData("questions");
    //     getData();
    // }

    // const getRecord = () => {
    //     getRecords()
    //     setInputList(data);
    // }

    // React.useEffect(getRecord, []);
    
    //console.log(data);

    React.useEffect(() => { 
        if(data[1]?.contents){
            setInputList(data[1]?.contents)
        }
    }, [data])

    const handleAddQuestions = () => {
        setInputList([...inputList, { content: '', options: [{answer: '', point: 0}]}])
    }

    const handleRemoveQuestions = (index) => {
        const list = inputList
        list.splice(index, 1)
        setInputList([...list])
    }
    
    const handleAddAnswers = (index) => {
        const list = inputList
        inputList[index].options.push([{ answer: '', point: 0 } ])
        setInputList([...list])
    }
    
    const handleRemoveAnswer = (index, questionIndex) => {
        const list = inputList
        inputList[questionIndex].options.splice(index, 1)
        setInputList([...list])
    }

    const handleAnswerChange = (value, answerIndex, questionIndex) => {
        const list = inputList
        if(value !== ''){
            inputList[questionIndex].options[answerIndex].answer = value
            setInputList([...list])
        }
    }

    const handlePointChange = (value, answerIndex, questionIndex) => {
        const list = inputList
        if(value !== ''){
            inputList[questionIndex].options[answerIndex].point = value
            setInputList([...list])
        }
    }

    const handleQuestionContentChange = (value, questionIndex) => {
        const list = inputList
        if(value !== ''){
            inputList[questionIndex].content = value
            setInputList([...list])
        }
    }

    const renderQuestion = (question, questionIndex) => {
        //console.log(question)
        return (
            <AssessmentTestQuestion
                handleAddAnswers={handleAddAnswers}
                handleAnswerChange={handleAnswerChange}
                handlePointChange={handlePointChange}
                handleQuestionContentChange={handleQuestionContentChange}
                handleRemoveAnswer={handleRemoveAnswer}
                handleRemoveQuestions={handleRemoveQuestions}
                question={question}
                questionIndex={questionIndex}
            />
        )
    }

    return (
        <React.Fragment>
            <Wrapper>
                <CCard className='w-full'>
                    <CCardBody className='px-5'>
                        <CCardTitle>Set Profile Visibility</CCardTitle>
                        <Spacing height='1rem'/>
                        <StyledDiv>
                            <h5>
                                Create Questions
                            </h5>
                            <div>
                                create questions for the assessment result of every category. Each category must have at least 1 question
                                and each question must have at least 2 answers.
                            </div>
                            <h5 className="mt-5">
                                Category: Age
                            </h5>
                        </StyledDiv>
                        <div>
                            {
                                (inputList) ? inputList.map((item, index) => (
                                    renderQuestion(item, index)
                                )) :
                                <></>
                            }
                        </div>
                        <div className='text-center mt-5'>
                            <ButtonOutlined label='Add Questions' iconPost={<BsPlusCircle/>} width='60%' onClick={() => handleAddQuestions()} />
                        </div>
                    </CCardBody>
                </CCard>
                <div style={{ margin:"2rem 0px 12px 3rem" }}>
                    <ButtonOutlined className='mx-3' label='Cancel' secondary width='45%' onClick={() => navigate("/admin", { replace: true })} />
                    <ButtonOutlined label='Next' iconPost={<FaArrowRight/>} width='45%' onClick={() => handleNextCategory(inputList)} />
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminCreateAssessmentTestAgePage;