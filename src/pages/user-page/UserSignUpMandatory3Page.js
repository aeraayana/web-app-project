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

const UserSignUpMandatory3Page = () => {

    const { user, updateProfile } = useAppContext();

    const location = useLocation();
    const navigate = useNavigate();

    const defaultState = {
        ...location.state,
        play_style: user.play_style,
        player_comparison: user.player_comparison,
        favourite_player: user.favourite_player,
        current_team: user.current_team,
        last_season_team: user.last_season_team,
        favourite_team: user.favourite_team,
        favourite_equipment_brand: user.favourite_equipment_brand
    }

    const [formState, setFormState] = useState(defaultState);
    
    const handleChange = (e) => {
        if(e.target.value !== ''){
            setFormState({ ...formState, [e.target.name]: e.target.value});        
        }
    }

    const handleSubmit = () => {
        updateProfile(formState);
        navigate(`/profile/${user._id}/`)
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
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Play Style"} type={"text"} id={"play_style"} name={"play_style"} placeholder={formState.play_style} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Player Comparison"} type={"text"} id={"player_comparison"} name={"player_comparison"} placeholder={formState.player_comparison} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Favourite Player"} type={"text"} id={"favourite_player"} name={"favourite_player"} placeholder={formState.favourite_player} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Current Team"} type={"text"} id={"current_team"} name={"current_team"} placeholder={formState.current_team} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Last Season's Team"} type={"text"} id={"last_season_team"} name={"last_season_team"} placeholder={formState.last_season_team} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Favourite Team"} type={"text"} id={"favourite_team"} name={"favourite_team"} placeholder={formState.favourite_team} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="52.625rem" 
                    prompt={"Favourite Equipment Brand"} type={"text"} id={"favourite_equipment_brand"} name={"favourite_equipment_brand"} placeholder={formState.favourite_equipment_brand} onBlur={(e) => handleChange(e)} />    {/* 842px */}
                <Spacing height="0.75rem" />    {/* 12px */}

            </ContainerCardSection>
            <Spacing height="2.5rem" />    {/* 40px */}
            <section className='row-center-center'>
                <ButtonOutlined onClick={() => navigate("/sign-up-mandatory-2", {state: formState})} label="Previous" width="21.875rem" iconPre={<FaArrowLeft/>} />   {/* 350px */}
                <Spacing width="1.25rem" />    {/* 20px */}
                <ButtonSolid onClick={() => handleSubmit(formState)} label="Confirm" width="21.875rem" />   {/* 350px */}
            </section>
        </Wrapper>
    )
}

export default UserSignUpMandatory3Page