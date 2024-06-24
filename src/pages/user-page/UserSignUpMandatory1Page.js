import Wrapper from '../../wrappers/user-page/UserSignUpMandatory1PageWrapper'

import { 
    ButtonSolid,
    ButtonOutlined,
    Spacing,
    ContainerCardSection,
} from '../../components'

import { FaArrowRight } from 'react-icons/fa'
import { EditBasicProfile } from './local-components'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UserSignUpMandatory1Page = () => {
    const formRef = useRef(null)
    const navigate = useNavigate();

    const handleChange = (e) => {
        // setValues({ ...values, [e.target.name]: e.target.value});        
    }

    const handleNext = (e) => {
        formRef.current.onSubmit();
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    const handleSkip = () => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    return (
        <Wrapper className='col-start-center'>
            <ContainerCardSection className="col-start-center" padding="2rem 6.875rem" >    { /* 32px 110px */}
                <EditBasicProfile ref={formRef}/>
            </ContainerCardSection>
            <Spacing height="2.5rem" />    {/* 40px */}
            <section className='row-center-center'>
                <ButtonOutlined label="Skip This Step" width="21.875rem" secondary onClick={handleSkip} />   {/* 350px */}
                <Spacing width="1.25rem" />    {/* 20px */}
                <ButtonSolid label="Next" type={"submit"} iconPost={<FaArrowRight/>}  width="21.875rem" onClick={handleNext}/>   {/* 350px */}
            </section>
        </Wrapper>
    )
}

export default UserSignUpMandatory1Page