import Wrapper from '../../wrappers/user-page/UserSignUpMandatory3PageWrapper'
import React, { useEffect } from 'react';
import { 
    ContainerCardSection,
    ButtonSolid,
    ButtonOutlined,
    InputTextWithPrompt,
    Spacing,
    InputTextWithPromptPostLabel,
} from '../../components'

import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { BsPlusCircle, BsTrash } from 'react-icons/bs'

const UserTrainingFrequency = () => {
    const { getOneData } = useAppContext()
    const { id } = useParams()
    const [userData, setUserData] = useState();
    
    useEffect(() => {
        if (!id) return
        getUserData(id);
    },[id]);

    const getUserData = async (id) => {
        const data = await getOneData('users', id);
        if (!data || data.length === 0) return;
        setUserData(data);
    }

    return (
        (userData) ? <UserTrainingFrequencyComponent user={ userData } /> : <></>
    )
}

const UserTrainingFrequencyComponent = ({user}) => {

    const { createData, updateData, deleteData } = useAppContext();

    const navigate = useNavigate();

    const defaultState = user.training_frequencies ? user.training_frequencies : {
        training: '',
        frequency: '',
        description: '',
    }

    const [formState, setFormState] = useState(user.training_frequencies ? user.training_frequencies : [defaultState]);

    const [deletedList, setDeletedList] = useState([]);
    
    const handleChange = (e, index) => {
        const list = formState
        if(e.target.value !== ''){
            formState[index][e.target.name] = e.target.value
            setFormState([...list])
        }
    }

    const handleAddAnswers = () => {
        setFormState([...formState, { training: '', frequency: '', description:'', }])
    }

    const handleRemoveQuestions = (index) => {
        const list = formState;
        const deleteItem = list.splice(index, 1);
        setDeletedList([...deletedList, deleteItem[0]])
        setFormState([...list]);
    }

    const handleSubmit = () => {
        for (const item of deletedList) {
            deleteData(item._id, 'users/training-frequencies')
        }
        if(user.training_frequencies.length !== 0){
            formState.map((element) => {
                updateData(element, `users/training-frequencies/${element._id}`, "success update informasi pengguna");
            })
        } else {
            formState.map((element) => {
                createData(element, "users/training-frequencies", "Success tambah informasi pengguna");
            })
        }
        // navigate(`/profile/${user._id}`, { replace: true })
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
                {formState ? formState.map((element, index) => (
                    <>
                        <InputTextWithPrompt width="52.625rem" 
                            prompt={"Training"} type={"text"} id={"training"} name={"training"} placeholder={element.training} onBlur={(e) => handleChange(e, index)} />    {/* 842px */}
                        <Spacing height="0.75rem" />    {/* 12px */}
                        <InputTextWithPromptPostLabel width="46.1875rem" postWidth={"6.25rem"}
                            prompt={"Frequency"} postLabel={"Hour Per Week"} type={"text"} id={"frequency"} name={"frequency"} placeholder={element.frequency} onBlur={(e) => handleChange(e, index)} />     {/* 307px 8px 100px */}
                        <Spacing height="0.75rem" />    {/* 12px */}
                        <InputTextWithPrompt width="52.625rem" 
                            prompt={"Description"} type={"text"} id={"description"} name={"description"} placeholder={element.description} onBlur={(e) => handleChange(e, index)} />    {/* 842px */}
                        {/* 12px */}
                        <Spacing height="0.75rem" />    {/* 12px */}
                        <ButtonOutlined label='Discard' secondary iconPost={<BsTrash/>} width='60%' onClick={() => handleRemoveQuestions(index)} />
                    </>
                )) : <></>}
                <Spacing height="0.75rem" />    {/* 12px */}
                <ButtonOutlined label='Add Sport Participation' iconPost={<BsPlusCircle/>} width='60%' onClick={() => handleAddAnswers()} />
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

export default UserTrainingFrequency