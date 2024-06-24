import { BsPlusCircle, BsTrash } from 'react-icons/bs';
import { ButtonOutlined, ButtonSolid, InputText, Spacing } from '../../components';
import Wrapper from '../../wrappers/admin-page/AdminProfanityWordListPageWrapper';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CFormInput } from '@coreui/react';
import { CButton } from '@coreui/react';
import { useAppContext } from '../../context/appContext';

const AdminProfanityWordCreatePage = () => {
    const navigate = useNavigate();
    const [inputList, setInputList] = useState([{ word: '' }]);
    const {createData, isLoading} = useAppContext();

    const handleInputChange = (e, index) => {
        const list = [...inputList]
        list[index].word = e.target.value
        setInputList(list)
    }

    const handleAddWord = () => {
        if (inputList.length === 10)
            return
        setInputList([...inputList, { word: '' }])
    }

    const handleRemoveWord = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    const handleConfirm = async () => {
        await inputList.forEach(async (item) => {
            if (item.word === '')
                return;

            await setTimeout(async () => {
                await createData(item, 'profanitywordlists', 'Success create new profanity word!');
             }, 1000);
        })
        navigateToProfanityList();
    }

    const navigateToProfanityList = () => {
        setTimeout(() => {
            navigate('/admin/profanity-word-list');
        }, 1000);
    }

    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='w-full card p-5'>
                    <div className='w-full'>
                        <h1 className='title'>Add Word to Profanity List</h1>
                        <p>Please specify the words you would like to put in the profanity list. You can add up to 10 words at once.</p>
                    </div>
                    <Spacing height="2rem" />
                    {
                        inputList.map((item, index) => {
                            return (
                                <>
                                    <div className='w-full d-flex flex-row justify-content-between'>
                                        <CFormInput name='word' autoFocus value={item.word} onChange={(e) => handleInputChange(e, index)} width='95%'/>
                                        <CButton variant='ghost' color='danger' onClick={() => handleRemoveWord(index)}>
                                            <BsTrash/>
                                        </CButton>
                                    </div>
                                    <Spacing height="2rem" />
                                </>
                            )
                        })
                    }
                    <div className='text-center'>
                        <ButtonOutlined label='Add Word' iconPost={<BsPlusCircle/>} width='60%' onClick={ handleAddWord } disabled={inputList.length === 10}/>
                    </div>
                </div>
                <div className='w-full text-center mt-4'>
                    <ButtonOutlined label='Cancel' coreUiColor='danger' color='red' width='20%' onClick={navigateToProfanityList}/>
                    <ButtonSolid label='Confirm' width='20%' className='ms-5' onClick={ handleConfirm }/>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminProfanityWordCreatePage;
