import { BsPlusCircle, BsTrash } from 'react-icons/bs';
import { ButtonOutlined, ButtonSolid, InputTextWithPrompt, InputFileWithPrompt, Spacing } from '../../components';
import Wrapper from '../../wrappers/admin-page/AdminGenerateBlastEmailPageWrapper';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { CButton, CCard } from '@coreui/react';
import { HOST_ASSET_URL } from '../../configs/constants';
import { CFormTextarea } from '@coreui/react';


const AdminGenerateBlastEmailPage = () => {

    const { createData, data, getOneData, updateData } = useAppContext();
    const { id } = useParams()
    const [inputTitle, setInputTitle] = useState({
        main_title: data.main_title?? '',
        tag_line: data.tag_line?? '',
    })
    const [inputSection, setInputSection] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!id) return
        getBlastEmailData(id);
    },[id]);

    const getBlastEmailData = async (id) => {
        const data = await getOneData('emailtemplates', id);
        if (!data || data.length === 0) return
        const dataTitle = inputTitle;
        dataTitle.main_title = data.main_title;
        dataTitle.tag_line = data.tag_line;
        setInputTitle(dataTitle);
        setInputSection(data.sections);
    }

    const handleGenerateEmail = async () => {
        if (!id) {
            const emailtemplates = await createData(inputTitle, "emailtemplates", "Success create template email")
            for(let i in inputSection){
                const formData = new FormData();
                formData.append('order_index', inputSection[i].order_index);
                formData.append('section_type', inputSection[i].section_type);
                if(inputSection[i].section_type === "image"){
                    formData.append('image', inputSection[i].image);
                } else {
                    formData.append('text', inputSection[i].text);
                }
                await createData(formData, `emailtemplates/section/${emailtemplates._id}`, "Success create template section")
            }
            return emailtemplates;    
        } else {
            await updateData(inputTitle, 'emailtemplates', 'Success update template section', id)
            for(let i in inputSection){
                const formData = new FormData();
                formData.append('order_index', inputSection[i].order_index);
                formData.append('section_type', inputSection[i].section_type);
                if(inputSection[i].section_type === "image" && inputSection[i].image){
                    formData.append('image', inputSection[i].image);
                } else if(inputSection[i].section_type === "text"){
                    formData.append('text', inputSection[i].text);
                } else {
                    continue;
                }
                if (inputSection[i]._id) {
                    await updateData(formData, `emailtemplates/section/${id}`, "Success update template section", inputSection[i]._id);
                } else {
                    await createData(formData, `emailtemplates/section/${id}`, "Success create template section")
                }
            }
            return {_id:id};
        }
    }

    const handleNext = async () => {
        const emailTemplates = await handleGenerateEmail();
        navigate(`/admin/generate-blast-email/${emailTemplates._id}/preview` , { replace: true });
    }
    const navigateToHome = () => {
        setTimeout(() => {
            navigate('/admin/generate-blast-email');
        }, 1000);
    }

    const handleInputMainTitle = (e) => {
        const input = inputTitle;
        input.main_title = e.target.value;
        setInputTitle(input);
    }

    const handleInputTagline = (e) => {
        const input = inputTitle;
        input.tag_line = e.target.value;
        setInputTitle(input);
    }

    const handleInputText = (e, index) => {
        const list = [...inputSection];
        list[index].text = e.target.value;
        setInputSection(list);
    }

    const handleInputFile = (e, index) => {
        const list = [...inputSection];
        list[index].image = e[0];
        setInputSection(list);
    }

    const handleAddSection = (e, type) => {
        setInputSection([...inputSection, { order_index: inputSection.length+1, section_type: type }])
    }

    const handleRemoveSection = (index) => {
        const list = [...inputSection]
        list.splice(index, 1)
        setInputSection(list)
    }

    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='w-full card p-5'>
                    <div className='w-full'>
                        <h1 className='title'>Create Email Template</h1>
                        <p>Create email template to be broadcast to users. You are able to customize the email to your needs.</p>
                    </div>
                    <Spacing height="2rem" />
                    <div className='w-full'>
                        <InputTextWithPrompt name='main_title' placeholder={inputTitle.main_title} onBlur={(e) => handleInputMainTitle(e)} width='100%' prompt='Main Title'/>
                    </div>
                    <Spacing height="2rem" />
                    <div className='w-full'>
                        <InputTextWithPrompt name='tagline' placeholder={inputTitle.tag_line} onBlur={(e) => handleInputTagline(e)} width='100%' prompt='Tagline'/>
                    </div>
                    <Spacing height="2rem" />
                </div>
                {
                    inputSection.map((item, index) => {
                        if (item.section_type === 'image') {
                            return (
                                <CCard className='w-full p-5'>
                                    <div className='w-full'>
                                        <InputFileWithPrompt value={item.image} onDrop={(acceptedFiles)=> {handleInputFile(acceptedFiles, index)}} type='image' className='w-full' prompt='Image'/>
                                        {/* <input type="file" onChange={(e) => handleInputFile(e, index)}/> */}
                                    </div>
                                    <Spacing height="2rem" />
                                    <div className='w-full d-flex justify-content-center'>
                                        <CButton variant='ghost' color='danger' onClick={() => handleRemoveSection(index)}>
                                            Discard This Section <BsTrash/>
                                        </CButton>
                                    </div>
                                </CCard>
                            )
                        } else {
                            return (
                                <CCard className='w-full p-5'>
                                    <div className='w-full'>
                                        <CFormTextarea name='text' value={item.text} onChange={(e) => handleInputText(e,index)} width='100%' rows={4} prompt='Text'/>
                                    </div>
                                    <Spacing height="2rem" />
                                    <div className='w-full d-flex justify-content-center'>
                                        <CButton variant='ghost' color='danger' onClick={() => handleRemoveSection(index)}>
                                            Discard This Section <BsTrash/>
                                        </CButton>
                                    </div>
                                </CCard>
                            )
                        }
                    })
                }
                <CCard className='w-full p-5'>
                    <div className='w-full text-center'>
                        <ButtonOutlined label='Add Article Section' iconPost={<BsPlusCircle />} width='20%' onClick={ e => handleAddSection(e, 'text') }/>
                        <ButtonOutlined label='Add Image Section' iconPost={<BsPlusCircle />} width='20%' className='ms-5' onClick={ e => handleAddSection(e, 'image') }/>
                    </div>
                </CCard>
                <div className='w-full text-center mt-4'>
                    <ButtonOutlined label='Cancel' coreUiColor='danger' color='red' width='20%' onClick={navigateToHome}/>
                    <ButtonSolid label='Next' iconPost={<HiOutlineArrowNarrowRight />} width='20%' className='ms-5' onClick={ handleNext }/>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminGenerateBlastEmailPage;
