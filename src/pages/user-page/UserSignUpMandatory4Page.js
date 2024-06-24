import Wrapper from '../../wrappers/user-page/UserSignUpMandatory3PageWrapper'

import { 
    ContainerCardSection,
    ButtonSolid,
    ButtonOutlined,
    InputTextWithPrompt,
    ChoiceBoxStringWithPrompt,
    Spacing,
} from '../../components'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { CAvatar } from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'

const UserSignUpMandatory4Page = () => {

    const { user, updateParent } = useAppContext();
    
    console.log(user);
    const navigate = useNavigate();

    let defaultState = {
        full_name: '',
        gender: '',
        date_of_birth: '',
        phone_number: '',
        second_phone_number: '',
        email: '',
    }
    if(user.parent){
        defaultState = {
            full_name: user.parent.full_name,
            gender: user.parent.gender,
            date_of_birth: user.parent.date_of_birth,
            phone_number: user.parent.phone_number,
            second_phone_number: user.parent.second_phone_number,
            email: user.parent.email,
        }
    }

    const [formState, setFormState] = useState(defaultState);
    
    const handleChange = (e) => {
        if(e.target.value !== ''){
            setFormState({ ...formState, [e.target.name]: e.target.value});        
        }
    }

    const handleSubmit = () => {
        updateParent(formState);
        navigate(`/profile/${user._id}`, { replace: true })
    }

    return (
        <Wrapper className='col-start-center'>
            <ContainerCardSection className="col-start-center" padding="2rem 6.875rem" >    { /* 32px 110px */}
                <div className='col-start-start w-full'>
                    <h1 class="title">Parent Information</h1>
                    <Spacing height="0.25rem" />    {/* 4px */}
                    <p class="description">Update or fill your parent information data.</p>
                </div>
                <Spacing height="2.25rem" />    {/* 36px */}
                <InputTextWithPrompt width="52.625rem"
                    prompt={"Full Name"} type={"text"} id={"full_name"} name={"full_name"} placeholder={formState.full_name} onBlur={(e) => handleChange(e)} />    {/* 415px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <div className='d-flex flex-row justify-content-around'>
                    <ChoiceBoxStringWithPrompt width="25.9375rem"
                            prompt={"Gender"} options={["Male","Female"]} id={"gender"} name={"gender"} value={formState.gender} onChange={(e) => handleChange(e)}  />    {/* 415px */}
                    <Spacing width="0.75rem" />    {/* 12px */}
                    <InputTextWithPrompt width="25.9375rem"
                            prompt={"Date of Birth"} type={"date"} id={"date_of_birth"} name={"date_of_birth"} value={formState.date_of_birth} onChange={handleChange} />    {/* 415px */}
                </div>
                <Spacing height="0.75rem" />
                <InputTextWithPrompt width="52.625rem"
                    prompt={"Phone Number"} type={"tel"} id={"phone_number"} name={"phone_number"} placeholder={formState.phone_number} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem"
                    prompt={"Phone Number"} type={"tel"} id={"second_phone_number"} name={"second_phone_number"} placeholder={formState.second_phone_number} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem"
                    prompt={"Email"} type={"email"} id={"email"} name={"email"} placeholder={formState.email} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}

            </ContainerCardSection>
            <Spacing height="2.5rem" />    {/* 40px */}
            <section className='row-center-center'>
                <ButtonOutlined secondary onClick={() => navigate(`/profile/${user._id}`)} label="Cancel" width="21.875rem" />   {/* 350px */}
                <Spacing width="1.25rem" />    {/* 20px */}
                <ButtonSolid onClick={() => handleSubmit(formState)} label="Confirm" width="21.875rem" />   {/* 350px */}
            </section>
        </Wrapper>
    )
}

export default UserSignUpMandatory4Page