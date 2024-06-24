import { CFormRange } from '@coreui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../wrappers/user-page/UserSignUpMandatory3PageWrapper';
import { ButtonOutlined, ButtonSolid, ContainerCardSection, Spacing } from '../../components';

const UserTrainingSkillset = () => {

    const { user, updateData } = useAppContext();

    const defaultState = {
        skating: user.skill_set?.skating?? 0,
        stick_handling: user.skill_set?.stick_handling?? 0,
        defense: user.skill_set?.defense?? 0,
        offense: user.skill_set?.offense?? 0,
        goal_tending: user.skill_set?.goal_tending?? 0,
    }

    const [formState, setFormState] = React.useState(defaultState);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (data) => {
        updateData(data, "users/update-skill-set", "update skillset pengguna berhasil")
        navigate(`/profile/${user._id}`)
    }

    return(
        <Wrapper className='col-start-center w-full'>
            <ContainerCardSection className="col-start w-full" padding="2rem 4.875rem" >
                <div className='col-start-start w-full'>
                    <h1 class="title">Skillset</h1>
                    <Spacing height="0.25rem" />    {/* 4px */}
                    <p class="description">fill in the level of your skillset</p>
                </div>
                <Spacing height="2.25rem" /> 
                <CFormRange min={0} max={10} name="skating" label="Skating" width="100%" defaultValue="0" value={formState.skating} id="skating" onChange={(e) => handleChange(e)} />
                <Spacing height="2.525rem" />
                <CFormRange min={0} max={10} name="stick_handling" label="Stickhandling" width="100%" defaultValue="0" value={formState.stick_handling} id="stick_handling" onChange={(e) => handleChange(e)} />
                <Spacing height="2.525rem" />
                <CFormRange min={0} max={10} name="defense" label="Defense" width="100%" defaultValue="0" id="defense" value={formState.defense} onChange={(e) => handleChange(e)} />
                <Spacing height="2.525rem" />
                <CFormRange min={0} max={10} name="offense" label="Offense" width="100%" defaultValue="0" id="offense" value={formState.offense} onChange={(e) => handleChange(e)} />
                <Spacing height="2.525rem" />
                <CFormRange min={0} max={10} name="goal_tending" label="Goal Tending" width="100%" defaultValue="0" value={formState.goal_tending} id="goal_tending" onChange={(e) => handleChange(e)} />
            </ContainerCardSection>
            <Spacing height="2.5rem" />    {/* 40px */}
            <section className='row-center-center'>
                <ButtonOutlined onClick={() => navigate(`/profile/${user._id}/`)} secondary label="Cancel" width="21.875rem" />   {/* 350px */}
                <Spacing width="1.25rem" />    {/* 20px */}
                <ButtonSolid onClick={() => handleSubmit(formState)} label="Confirm" width="21.875rem" />   {/* 350px */}
            </section>
        </Wrapper>
    )
}


export default UserTrainingSkillset