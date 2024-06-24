import Wrapper from '../../wrappers/user-page/UserSignUpMandatory2PageWrapper'

import { 
    ContainerCardSection,
    ButtonSolid,
    ButtonOutlined,
    InputTextWithPrompt,
    ChoiceBoxStringWithPrompt,
    InputTextWithPromptPostLabel,
    Spacing,
} from '../../components'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { defaultModifiers } from '@popperjs/core/lib/popper-lite'

const UserSignUpMandatory2Page = () => {

    const { user } = useAppContext();
    
    const location = useLocation();
    const navigate = useNavigate();

    let defaultState = {
        role: user.role,
        position: user.position,
        shot: user.shot,
        gender: user.gender,
        height: user.height,
        weight_class: user.weight_class,
        weight: user.weight,
        date_of_birth: user.date_of_birth,
        age: user.age,
    }

    if(location.state){
        defaultState = {
            ...location.state,
        }
    }

    const [formState, setFormState] = useState(defaultState);

    const handleChange = (e) => {
        if(e.target.value !== ''){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    } 

    return (
        <Wrapper className='col-start-center'>
            <ContainerCardSection className="col-start-center" padding="2rem 6.875rem" >    { /* 32px 110px */}
                <div className='col-start-start w-full'>
                    <h1 class="title">Basic Profile</h1>
                    <Spacing height="0.25rem" />    {/* 4px */}
                    <p class="description">Update or fill your basic profile data.</p>
                </div>
                <Spacing height="2.25rem" />    {/* 36px */}
                <ChoiceBoxStringWithPrompt width="52.625rem" 
                    prompt={"Type"} options={['Athlete','Coach',]} id={"role"} name={"role"} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <div className='row-between-center'>
                    <InputTextWithPrompt width="25.9375rem"
                        prompt={"Position"} type={"text"} id={"position"} name={"position"} placeholder={formState.position} onBlur={(e) => handleChange(e)} />    {/* 415px */}
                    <Spacing width="0.75rem" />    {/* 12px */}
                    <InputTextWithPrompt width="25.9375rem"
                        prompt={"Shot"} type={"text"} id={"shot"} name={"shot"} placeholder={formState.shot} onBlur={(e) => handleChange(e)} />    {/* 415px */}
                </div>
                <Spacing height="0.75rem" />    {/* 12px */}
                <div className='row-between-center'>
                    <ChoiceBoxStringWithPrompt width="25.9375rem"
                        prompt={"Gender"} options={["Male","Female"]} id={"gender"} name={"gender"} value={formState.gender} onChange={(e) => handleChange(e)}  />    {/* 415px */}
                    <Spacing width="0.75rem" />    {/* 12px */}
                    <InputTextWithPromptPostLabel width="19.1875rem" postWidth={"6.25rem"}
                        prompt={"Height"} postLabel={"Feet"} type={"text"} id={"height"} name={"height"} placeholder={formState.height} onBlur={(e) => handleChange(e)} />     {/* 307px 8px 100px */}
                </div>
                <Spacing height="0.75rem" />    {/* 12px */}
                <div className='row-between-center'>
                    <ChoiceBoxStringWithPrompt width="25.9375rem"
                        prompt={"Weight Class"} options={["Light Weight","Heavy Weight"]} id={"weight_class"} name={"weight_class"} value={formState.weight_class} onChange={(e) => handleChange(e)} />    {/* 415px */}
                    <Spacing width="0.75rem" />    {/* 12px */}
                    <InputTextWithPromptPostLabel width="19.1875rem" postWidth={"6.25rem"}
                        prompt={"Weight"} postLabel={"lbs"} type={"number"} id={"weight"} name={"weight"} placeholder={formState.weight} onBlur={(e) => handleChange(e)} />     {/* 307px 8px 100px */}
                </div>
                <Spacing height="0.75rem" />    {/* 12px */}
                <div className='row-between-center'>
                    <InputTextWithPrompt width="25.9375rem"
                        prompt={"Date of Birth"} type={"date"} id={"date_of_birth"} name={"date_of_birth"} value={formState.date_of_birth} onChange={handleChange} />    {/* 415px */}
                    <Spacing width="0.75rem" />    {/* 12px */}
                    <InputTextWithPromptPostLabel width="19.1875rem" postWidth={"6.25rem"}
                        prompt={"Age"} postLabel={"Years Old"} type={"number"} id={"age"} name={"age"} placeholder={formState.age} onBlur={(e) => handleChange(e)} />    {/* 307px 8px 100px */}
                </div>

            </ContainerCardSection>
            <Spacing height="2.5rem" />    {/* 40px */}
            <section className='row-center-center'>
                <ButtonOutlined onClick={() => navigate(`/profile/${user._id}`, {replace: true})} secondary label="cancel" width="21.875rem" />   {/* 350px */}
                <Spacing width="1.25rem" />    {/* 20px */}
                <ButtonSolid onClick={() => navigate("/sign-up-mandatory-3", { state: formState })} label="Next" iconPost={<FaArrowRight/>}  width="21.875rem" />   {/* 350px */}
            </section>
        </Wrapper>
    )
}

export default UserSignUpMandatory2Page