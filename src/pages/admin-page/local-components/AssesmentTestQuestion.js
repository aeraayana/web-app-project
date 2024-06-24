import { CCol, CContainer } from "@coreui/react"
import { ButtonOutlined, InputTextWithPrompt, Spacing } from "../../../components"
import { BsFillTrashFill, BsPlusCircle, BsTrash } from "react-icons/bs"

const AssessmentTestQuestion = ({ question, questionIndex, handleQuestionContentChange, handleAnswerChange, handlePointChange, handleRemoveAnswer, handleAddAnswers, handleRemoveQuestions  }) => {
        return(
            <div className='my-4'>
                <div className='d-flex w-full'>
                    <Spacing width={"1%"}/>
                    <div style={{width: '25%'}} className='ms-3'>
                        Question
                    </div>
                    <div>
                        Answer
                    </div>
                </div>
                <div className='d-flex w-full'>
                    <div className='me-3'>
                        {questionIndex+1}.
                    </div>
                    <div style={{width: '25%'}}>
                        <textarea name={"content"} style={{ resize: "none", height: "15rem", width: "90%" }} onBlur={(e) => handleQuestionContentChange(e.target.value, questionIndex)} rows="3">{ question.content }</textarea>
                    </div>
                    <div className='d-flex flex-column ms-2' style={{width: "75%"}}>
                        {question.options.map((element, index) => (
                            <div className='d-flex w-full my-3 align-items-center' >
                                <div className='me-2'>
                                    {String.fromCharCode(97+index)}.
                                </div>
                                <div style={{ width:"70%"}}>
                                    <InputTextWithPrompt 
                                        type={"text"} id={"answers"} name={"answers"} placeholder={element.answer} width={"100%"} onBlur={(e) => handleAnswerChange(e.target.value, index, questionIndex)}></InputTextWithPrompt>
                                </div>
                                <Spacing width={'1%'}/>
                                <div className='ms-5 d-flex align-items-center' style={{ width:"15%" }}>
                                    <div className='me-2'>
                                        pts:
                                    </div>
                                    <InputTextWithPrompt 
                                        type={"text"} id={"point"} name={"point"} placeholder={element.point} onBlur={(e) => handlePointChange(e.target.value, index, questionIndex)}></InputTextWithPrompt>
                                </div>
                                <Spacing width={'1%'}/>
                                <div onClick={(e) => handleRemoveAnswer(index, questionIndex)}>
                                    <BsFillTrashFill/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <CContainer>
                    <div className="row justify-content-md-center">
                        <CCol xs lg={4}>
                            <ButtonOutlined label='Add Answer' className="w-full" iconPost={<BsPlusCircle/>} onClick={() => handleAddAnswers(questionIndex)} />
                        </CCol>
                        <CCol xs lg={4}>
                            <ButtonOutlined label='Remove Questions' className="w-full" secondary iconPost={<BsTrash/>} onClick={() => handleRemoveQuestions(questionIndex)} />
                        </CCol>
                    </div>
                </CContainer>
            </div>
        )
}

export default AssessmentTestQuestion
