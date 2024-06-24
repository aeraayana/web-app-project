import React from "react";
import { useAppContext } from "../../context/appContext";
import UserAssessmentTestQuestions from "./local-components/UserAssessmentTestQuestions";
import { ButtonOutlined, ButtonSolid, Spacing } from "../../components";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
 
const UserAssessmentTest = () => {
    
    const navigate = useNavigate();

    const { data, getAllData, user, createData } = useAppContext();
    const [index, setIndex] = React.useState(0);

    const [selectedOption, setSelectedOption] = React.useState({
        answer: '',
        point: '',
    });

    const getQuestions = async () => {
        await getAllData("questions");
    }

    const getData = () => {
        getQuestions()
    }

    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => { getData() }, [])
    React.useEffect(() => {
        if(data.length !== 0){
            setQuestions(data);
        }
    })

    const handleAnswer = (e) => {
        setSelectedOption({
            answer: e.target.value.split(',')[0],
            point: e.target.value.split(',')[1],
            category_name: e.target.value.split(',')[2],
        });
        // console.log(selectedOption)
        createData(selectedOption, "assessments", "berhasil simpan jawaban")
    }

    const handleNext = () => {
        setIndex(index+1);
        return index;
    }
    
    // console.log(questions)

    const renderQuestions = (questions, index) => {
        return(
            <UserAssessmentTestQuestions questions={questions} index={index} handleAnswerChange={handleAnswer} selectedOption={selectedOption}></UserAssessmentTestQuestions>
        )
    }
 
    return (
        <React.Fragment>
            <div className="App d-flex flex-column align-items-center justify-content-center">
                <Spacing height="2rem" />
                    {questions.length !== 0 ? renderQuestions(questions, index) : <></>}
                <Spacing height="2rem"/>
                {index === 3 ? (
                    <ButtonOutlined label="Return to Profile" type={"submit"}  width="21.875rem" onClick={() => navigate(`/profile/${user._id}`)}/>
                ):( 
                    <div className="d-flex flex-row justify-content-between">
                        <ButtonOutlined label="Return to Profile" type={"submit"} width="21.875rem" onClick={() => navigate(`/profile/${user._id}`)}/>
                        <Spacing width="1.25rem"></Spacing>
                        <ButtonSolid label="Next" type={"submit"} iconPost={<FaArrowRight/>}  width="21.875rem" onClick={() => handleNext()}/>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
 
export default UserAssessmentTest;