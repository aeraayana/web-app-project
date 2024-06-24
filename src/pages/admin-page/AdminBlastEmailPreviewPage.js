import { BsPlusCircle, BsTrash } from 'react-icons/bs';
import { ButtonOutlined, ButtonSolid, InputTextWithPrompt, InputFileWithPrompt, Spacing } from '../../components';
import Wrapper from '../../wrappers/admin-page/AdminGenerateBlastEmailPageWrapper';
import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { emailTemplate, imageTemplate, articleTemplate } from './local-components/email.template'
import { HOST_ASSET_URL } from '../../configs/constants';


const AdminBlastEmailPreviewPage = () => {

    const { data, getOneData } = useAppContext();
    const { id } = useParams();

    const navigate = useNavigate();

    const handleNext = async () => {
        navigate(`/admin/generate-blast-email/${data._id}/send` , { replace: true });
    }
    const navigateToBack = () => {
        setTimeout(() => {
            navigate(`/admin/generate-blast-email/${id}`);
        }, 1000);
    }

    useEffect(() => {
        if (!id) return
        getBlastEmailData(id);
    },[id]);

    const getBlastEmailData = async (id) => {
        await getOneData('emailtemplates', id);
    }
    

    const getEmailPreview = () => {
        if (data.length === 0) return '';

        const emailHtmlString = emailTemplate;
        let htmlContent = emailHtmlString.replace(/{{##EMAIL_TITLE##}}/gi, data.main_title);
        htmlContent = htmlContent.replace(/{{##EMAIL_TAGLINE##}}/gi, data.tag_line);
        let emailBody = '';
        for (let i = 1; i <= data.sections.length; i++) {
            const section = data.sections.find((item) => item.order_index == i)
            if (!section) continue;
            if (section.section_type === 'image') 
                emailBody += imageTemplate.replace(/{{##EMAIL_IMAGE##}}/gi, HOST_ASSET_URL+section.image_path);
            else
                emailBody += articleTemplate.replace(/{{##EMAIL_ARTICLE##}}/gi, section.text);
        }
        htmlContent = htmlContent.replace(/{{##EMAIL_CONTENT##}}/gi, emailBody);
        htmlContent = htmlContent.replace(/{{##USER_EMAIL##}}/gi, '[User’s Personal Email Address]');

        return htmlContent;
    }

    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='w-full card p-5'>
                    <div className='w-full'>
                        <h1 className='title'>Preview Email</h1>
                        <p>Recheck the email you've generated, you can click the previous button to go back to the previous section and fix any mistakes</p>
                    </div>
                    <Spacing height="2rem" />
                    <div className='w-full d-flex justify-content-center' dangerouslySetInnerHTML={{__html: getEmailPreview()}}>
                    </div>
                </div>
                <div className='w-full text-center mt-4'>
                    <ButtonOutlined label='Cancel' coreUiColor='danger' color='red' width='20%' onClick={navigateToBack}/>
                    <ButtonSolid label='Next' iconPost={<HiOutlineArrowNarrowRight />} width='20%' className='ms-5' onClick={ handleNext }/>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminBlastEmailPreviewPage;
