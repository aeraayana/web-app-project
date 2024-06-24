import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import Dropzone, { useDropzone } from 'react-dropzone'
import styled from 'styled-components';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useEffect, useRef, useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCarousel, CCarouselItem, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import { ButtonOutlined, ButtonSolid, InputTextWithPrompt, Spacing } from '../../components';
import { CAvatar, CButton } from '@coreui/react';
import { BsDot, BsPencilFill, BsPlus } from 'react-icons/bs';
import { EditBasicProfile } from './local-components';
import { HOST_ASSET_URL } from '../../configs/constants';

const ShareProfileWrapper = styled.section`
    border-radius: 1rem;    // 16px 
    width: 21.875rem;    // 350px
    padding: 1.25rem;    // 20px
    position: absolute;
    top: 4.75rem;    // 76px
    right: 2rem;    // 32px
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;

    h1, a, span {
        padding: 0;
        margin: 0;
        color: black;
    }

    a {
        width: 100%;
        cursor: pointer;
        text-decoration: none;
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-var-2);
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }
`;

const UserProfilePage = () => {
    const { user, getOneData } = useAppContext()
    const { id } = useParams()
    const [userData, setUserData] = useState();
    const [editable, isEditable] = useState(false)
    
    useEffect(() => {
        if (!id) return
        getUserData(id);
    },[id]);

    const getUserData = async (id) => {
        const data = await getOneData('users', id);
        if (!data || data.length === 0) return;
        setUserData(data);
        if (data._id === user._id)
            isEditable(true);
    }

    return (
        (userData) ? <UserProfileComponent user={ userData } isEditable={editable} /> : <></>
    )
}

const UserProfileComponent = ({ user, isEditable }) => {
    const { createData, updateProfile, updateData } = useAppContext();
    const editProfileRef = useRef(null)

    const [video, setVideo] = useState({
        file: null,
        title: '',
        description: '',
    });
    const [avatar, setAvatar] = useState([]);
    const [grades, setGrades] = useState([]);
    const [letterOfRecommendation, setLetterOfRecommendation] = useState([]);

    const videoList = video.file?.map((file) => (
        <li key={file.name}>
            <video width="400" height="240" controls>
                <source src={file.preview} type="video/mp4"></source>
                <source src={file.preview} type="video/ogg"></source>
                <source src={file.preview} type="video/wav"></source>
                Your browser does not support the video tag.
            </video>
        </li>
    ))

    const avatarList = avatar.map((file) => (
        <li key={file.name}>
            <img width="100%" src={file.preview}></img>
        </li>
    ));

    const gradesList = grades.map((file) => (
        <li key={file.name}>
            <img width="100%" src={file.preview}></img>
        </li>
    ));

    const lorList = letterOfRecommendation.map((file) => (
        <li key={file.name}>
            <img src={file.preview}></img>
        </li>
    ));

    const navigate = useNavigate();

    const refresh = () => {
        navigate(0)
    }

    const [editProfileModalVisibility, setEditProfileModalVisibility] = useState(false)
    const [uploadAcademicDocumentsModalVisibility, setUploadAcademicDocumentsModalVisibility] = React.useState(false);
    const [shareProfileModalVisibility, setShareProfileModalVisibility] = useState(false);
    const [highlightVideoModalVisibility, setHighlightVideoModalVisibility] = useState(false);
    const [uploadAvatarModalVisibility, setUploadAvatarModalVisibility] = useState(false);
    
    const renderHighlightVideoModal = () => {

        const DropzoneText = {
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
        };

        const dropzoneStyle = {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            marginTop: "2rem",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: "#eeeeee",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            outline: "none",
            transition: "border 0.24s ease-in-out",
            cursor: "pointer",
        };
          
        const activeDropzoneStyle = {
            borderColor: "#00adb5",
        };

        const handleChange = (e) => {
            setVideo({...video, [e.target.name]: e.target.value});
        }

        const handleConfirm = (file) => {
            // console.log(file)
            const formData = new FormData();
            formData.append('vid', file.file[0]);
            formData.append('title', file.title);
            formData.append('description', file.description);
            createData(formData, "users/highlight-videos", "Success upload highlight video");
            setHighlightVideoModalVisibility(false);
            refresh()
        }
    
        return(
            <CModal
                alignment="center"
                size='xl'
                backdrop="static"
                scrollable
                visible={highlightVideoModalVisibility}
                onClose={() => setHighlightVideoModalVisibility(false)}
                aria-labelledby="uploadHighlightVideo"
            >
                <CModalHeader>
                    <CModalTitle id="uploadHighlightVideo"></CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div className='d-flex flex-column align-items-center'>
                        <InputTextWithPrompt width="52.625rem"
                            prompt={"Title"} type={"title"} id={"title"} name={"title"} placeholder={video.title || "-"} onChange={(e) => handleChange(e)}/>    {/* 842px */}
                        <Dropzone onDrop={acceptedFiles => 
                            setVideo({...video, file: acceptedFiles })
                            }>
                                {({getRootProps, getInputProps, isDragActive}) => (
                                    <div
                                        style={
                                            isDragActive
                                            ? { ...dropzoneStyle, ...activeDropzoneStyle }
                                            : dropzoneStyle
                                        }
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        <p style={DropzoneText}>
                                            Drag and drop your files here, or click to select files
                                        </p>
                                        {video ? (
                                            <ul>{videoList}</ul>
                                        ) : (
                                            <ul></ul>
                                        )}
                                    </div>
                                )}
                        </Dropzone>
                        <InputTextWithPrompt width="52.625rem"
                            prompt={"Description"} type={"description"} id={"description"} name={"description"} placeholder={video.description || "-"} onChange={(e) => handleChange(e)}/>    {/* 842px */}
                        
                        <Spacing height="1.25rem" />
                        <section className='row-center-center'>
                            <ButtonOutlined label="Cancel" onClick={() => setHighlightVideoModalVisibility(false)} width="21.875rem" secondary />
                            <Spacing width="2.55rem" />
                            <ButtonSolid label="Confirm" onClick={() => handleConfirm(video)} width="21.875rem" />
                        </section>                            
                    </div>
                </CModalBody>
            </CModal>
        )
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////RENDER ACADEMIC DOCUMENT
    const renderAcademicDocumentModal = () => {

        const DropzoneText = {
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
        };

        const dropzoneStyle = {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            marginTop: "2rem",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: "#eeeeee",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            outline: "none",
            transition: "border 0.24s ease-in-out",
            cursor: "pointer",
        };
          
        const activeDropzoneStyle = {
            borderColor: "#00adb5",
        };

        const handleConfirm = () => {
            const formData = new FormData();
            for (let i = 0; i < grades.length; i++) {
                formData.append('grade', grades[i]);
            }
            for (let i = 0; i < letterOfRecommendation.length; i++) {
                formData.append('letter_of_recomendation', letterOfRecommendation[i]);
            }
            updateData(formData, "users/academy-document", "Success upload academic documents");
            setUploadAcademicDocumentsModalVisibility(false);
            refresh()
        }
    
        return(
            <CModal
                alignment="center"
                size='xl'
                backdrop="static"
                scrollable
                visible={uploadAcademicDocumentsModalVisibility}
                onClose={() => setUploadAcademicDocumentsModalVisibility(false)}
                aria-labelledby="uploadHighlightVideo"
            >
                <CModalHeader>
                    <div>
                    <CModalTitle id="uploadHighlightVideo">Upload Academic Document</CModalTitle>
                        <p>   
                            Upload a scanned academic documents to enhance your portfolio.
                        </p>
                    </div>
                </CModalHeader>
                <CModalBody>
                    <CCard style={{ borderColor: "white" }}>
                        <CCardHeader style={{ backgroundColor: "white" }}>
                            <h5>Grades</h5>
                        </CCardHeader>
                        <CCardBody>
                            <CCardText>
                                <div>
                                    upload a scanned document of your grades. File must be smaller than 2MB
                                </div>
                            </CCardText>
                            <div className='d-flex flex-column align-items-center'>
                                <Dropzone onDrop={acceptedFiles => 
                                    setGrades(
                                        acceptedFiles.map((file) => 
                                            Object.assign(file, { preview: URL.createObjectURL(file), })
                                        )    
                                    )
                                }>
                                    {({getRootProps, getInputProps, isDragActive}) => (
                                        <div
                                            style={
                                                isDragActive
                                                ? { ...dropzoneStyle, ...activeDropzoneStyle }
                                                : dropzoneStyle
                                            }
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <p style={DropzoneText}>
                                                Drag and drop your files here, or click to select files
                                            </p>
                                            <ul style={{width:"70%", overflow:"hidden"}}>{gradesList}</ul>
                                        </div>
                                    )}
                                </Dropzone>
                            <Spacing height="1.25rem" />                         
                            </div>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ borderColor: "white" }}>
                        <CCardHeader style={{ backgroundColor: "white" }}>
                            <h5>Letter of Recommendation</h5>
                        </CCardHeader>
                        <CCardBody>
                            <CCardText>
                                <div>
                                    upload a scanned document of your letter of recommendation. File must be smaller than 2MB
                                </div>
                            </CCardText>
                            <div className='d-flex flex-column align-items-center'>
                                <Dropzone onDrop={acceptedFiles => 
                                    setLetterOfRecommendation(
                                        acceptedFiles.map((file) => 
                                            Object.assign(file, { preview: URL.createObjectURL(file), })
                                        )
                                    )
                                }>
                                    {({getRootProps, getInputProps, isDragActive}) => (
                                        <div
                                            style={
                                                isDragActive
                                                ? { ...dropzoneStyle, ...activeDropzoneStyle }
                                                : dropzoneStyle
                                            }
                                            {...getRootProps()}
                                        >
                                            <input {...getInputProps()} />
                                            <p style={DropzoneText}>
                                                Drag and drop your files here, or click to select files
                                            </p>
                                            <ul style={{width:"70%", overflow:"hidden"}}>{lorList}</ul>
                                        </div>
                                    )}
                                </Dropzone>
                                <Spacing height="1.25rem" />                
                            </div>
                        </CCardBody>
                    </CCard>
                    <Spacing height="1rem" />
                    <section className='row-center-center'>
                        <ButtonOutlined label="Cancel" onClick={() => setUploadAcademicDocumentsModalVisibility(false)} width="21.875rem" secondary />
                        <Spacing width="2.55rem" />
                        <ButtonSolid label="Confirm" onClick={() => handleConfirm()} width="21.875rem" />
                    </section>   
                </CModalBody>
            </CModal>
        )
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////RENDER UPDATE AVATAR
    const renderUpdateAvatarModal = () => {

        const DropzoneText = {
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
        };

        const dropzoneStyle = {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            marginTop: "2rem",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: "#eeeeee",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            outline: "none",
            transition: "border 0.24s ease-in-out",
            cursor: "pointer",
        };
          
        const activeDropzoneStyle = {
            borderColor: "#00adb5",
        };

        const handleConfirm = () => {
            const formData = new FormData();
            for (let i = 0; i < avatar.length; i++) {
                formData.append('images', avatar[i]);
            }
            updateProfile(formData);
            setUploadAvatarModalVisibility(false);
            refresh();
        }

        return(
            <CModal
                alignment="center"
                size='xl'
                backdrop="static"
                scrollable
                visible={uploadAvatarModalVisibility}
                onClose={() => setUploadAvatarModalVisibility(false)}
                aria-labelledby="uploadAvatar"
            >
                <CModalHeader>
                    <CModalTitle>Profile Picture</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div className='d-flex flex-column align-items-center'>
                        <Dropzone onDrop={acceptedFiles => 
                            setAvatar(
                                acceptedFiles.map((file) => 
                                    Object.assign(file, { preview: URL.createObjectURL(file), })
                                )
                            )
                        }>
                            {({getRootProps, getInputProps, isDragActive}) => (
                                <div
                                    style={
                                        isDragActive
                                        ? { ...dropzoneStyle, ...activeDropzoneStyle }
                                        : dropzoneStyle
                                    }
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <p style={DropzoneText}>
                                        Drag and drop your files here, or click to select files
                                    </p>
                                    <ul style={{width:"70%", overflow:"hidden"}}>{avatarList}</ul>
                                </div>
                            )}
                        </Dropzone>
                        <Spacing height="1.25rem" />
                        <section className='row-center-center'>
                            <ButtonOutlined label="Cancel" onClick={() => setUploadAvatarModalVisibility(false)} width="21.875rem" secondary />
                            <Spacing width="2.55rem" />
                            <ButtonSolid label="Confirm" onClick={() => handleConfirm()} width="21.875rem" />
                        </section>                            
                    </div>
                </CModalBody>
            </CModal>
        )
    }
//////////////////////////////////////////////////////////////////////////////////////////////////RENDER SHARE PROFILE
    const renderShareProfile = () => {
        return(
            <ShareProfileWrapper style={{ display: shareProfileModalVisibility? "block" : "none" }} >
                <div className="w-full row-between-center link-row">
                    <a href="/assessment"> Export Profile as PDF </a>
                </div>
                {
                    isEditable ? 
                        <div className="w-full row-between-center link-row">
                            <a href={`/profile/${user._id}/visibility`}> Set Profile Visibility </a>
                        </div>
                        :
                        <></>
                }
            </ShareProfileWrapper>
        )
    }
/////////////////////////////////////////////////////////////////////////////////////////////////RENDER EDIT PROFILE
    const renderEditProfileModal = () => {
        const handleConfirm = () => {
            editProfileRef.current.onSubmit();
            setEditProfileModalVisibility(false);
            refresh();
        }

        return (
            <CModal
                alignment="center"
                size='xl'
                backdrop="static"
                scrollable
                visible={editProfileModalVisibility}
                onClose={() => setEditProfileModalVisibility(false)}
                aria-labelledby="editProfileModal"
            >
                <CModalHeader>
                    <CModalTitle id="editProfileModal"></CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div className='d-flex flex-column align-items-center'>
                        <EditBasicProfile ref={editProfileRef} isModal={true} handleOpenEditAvatar={() => {
                            setEditProfileModalVisibility(false)
                            setUploadAvatarModalVisibility(true)
                        } } />
                    </div>
                    <Spacing height="1.25rem" /> 
                    <section className='row-center-center'>
                        <ButtonOutlined label="Cancel" width="21.875rem" secondary />
                        <Spacing width="1.25rem" />
                        <ButtonSolid label="Confirm" width="21.875rem" onClick={handleConfirm} />
                    </section>
                </CModalBody>
            </CModal>
        )
    }
/////////////////////////////////////////////////////////////////////////////////////////////GET HIGHLIGHT CAROUSEL
    const getHighlightVideoCarouselItem = () => {
        let carouselItems = [];
        for (let i = 0; i < user.highlight_videos.length; i+=2){
            carouselItems.push(
                <CCarouselItem className='w-full mb-5'>
                    <div className='d-flex'>
                        <div style={{ width: '40%',margin:'0 2%'}}>
                            <video className='w-full' controls>
                                <source src={HOST_ASSET_URL + user.highlight_videos[i].video_path}></source>
                            </video>
                            <div>
                                <div><strong>{ user.highlight_videos[i].title }</strong></div>
                                <div>{ user.highlight_videos[i].description }</div>
                            </div>
                        </div>
                        {(user.highlight_videos?.length <= i+1) ? <></> : 
                            <div style={{width:'40%',margin:'0 2%'}}>
                                <video className='w-full' controls>
                                    <source src={HOST_ASSET_URL + user.highlight_videos[i+1].video_path}></source>
                                </video>
                                <div>
                                    <div><strong>{ user.highlight_videos[i+1].title }</strong></div>
                                    <div>{ user.highlight_videos[i+1].description }</div>
                                </div>
                            </div>
                        }
                    </div>
                </CCarouselItem>
            )
        }
        return carouselItems;
    }
/////////////////////////////////////////////////////////////////////////////////////////////GET ACADEMIC DOCUMENTS CAROUSEL
    
    return (
        <React.Fragment>
            <Wrapper className='row-center-start w-full mt-5'>
                <div style={{width: '65%'}}>
                    <CCard className='w-full'>
                        <CCardHeader style={{ backgroundColor: user.banner_color ?? 'rgb(179, 190, 204)', height:'5rem'}}></CCardHeader>
                        <CCardBody className='position-relative px-5'>
                            <CAvatar src={user.avatar ? HOST_ASSET_URL + user.avatar : null}
                                size='xl'
                            style={{ 
                                backgroundColor: 'rgb(179, 190, 204)', 
                                width: '7rem',  /* 60px */ 
                                height: '7rem',  /* 60px */
                                left: '5rem'
                                }} className='position-absolute top-0 translate-middle' />
                            {
                                isEditable ? 
                                    <>
                                        <CButton variant='outline' className='position-absolute top-0 end-0 m-3' onClick={() => setEditProfileModalVisibility(!editProfileModalVisibility)}> <BsPencilFill /> </CButton>
                                        {renderEditProfileModal()}
                                        {renderUpdateAvatarModal()}
                                    </>
                                    :
                                    <></>
                            }
                            <CCardTitle style={{marginTop:'3rem'}}>{ user.full_name|| user.email }</CCardTitle>
                            <CCardText>
                                <div>
                                    {user.username}
                                </div>
                            </CCardText>
                            <CCardText>
                                <div>
                                    {user.phone_number ?? ''} {(user.phone_number)? <BsDot/> : <></>} {user.email}
                                </div>
                                <div>
                                    {user.address}
                                </div>
                            </CCardText>
                            <ButtonSolid className='w-full' onClick={() => setShareProfileModalVisibility(!shareProfileModalVisibility)} label='Share Profile' />
                            {renderShareProfile()}
                        </CCardBody>
                    </CCard>
                    <Spacing height='1rem'/>
                    <CCard className='w-full'>
                        <CCardBody className='px-5'>
                            {
                                isEditable ?
                                    <>
                                        <CButton className='position-absolute top-0 end-0 mt-3' variant='outline' style={{marginRight: '5rem'}} 
                                        onClick={() => setHighlightVideoModalVisibility(!highlightVideoModalVisibility)}> <BsPlus /> </CButton>
                                        {renderHighlightVideoModal()}
                                        <CButton variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                                    </>
                                : <></>
                            }
                            <CCardTitle>Highlight Video</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText className='w-full'>
                                {
                                    user.highlight_videos && user.highlight_videos.length > 0 ?
                                        <CCarousel indicators dark>
                                            {getHighlightVideoCarouselItem()}
                                        </CCarousel>
                                    : 'User has not uploaded any file.'
                                }
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <Spacing height='1rem'/>
                    <CCard className='w-full'>
                        <CCardBody className='px-5'>
                            {
                                isEditable ? 
                                    <>
                                        <CButton variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                                    </> :
                                    <></>
                            }
                            <CCardTitle>Regular Season</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                User has not uploaded any file.
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <Spacing height='1rem'/>
                    <CCard className='w-full'>
                        <CCardBody className='px-5'>
                            {
                                isEditable ? 
                                    <>
                                        <CButton variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                                    </> :
                                    <></>
                            }
                            <CCardTitle>Training Information</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                <div className="d-flex flex-row justify-content-evenly w-full">
                                    {
                                        user.skill_set ? 
                                            <div className="d-flex flex-column" style={{width:"40%"}}>
                                                <CCard className='w-full'>
                                                    <CCardHeader style={{ backgroundColor: "white", borderColor: "white" }}>
                                                        <h5>Skillset</h5>
                                                    </CCardHeader>
                                                    <CCardBody className='w-full text-center'>
                                                        <ButtonSolid label={ user.skill_set ? "See Details" : "Fill Form" } onClick={() => navigate(`${ user.skill_set ? './training-information' : './training-information/edit' }`)} width='90%'/>
                                                    </CCardBody>
                                                </CCard>
                                            </div>
                                        :
                                            <></>
                                    }
                                    {
                                        user.training_frequencies && user.training_frequencies.length > 0 ? 
                                            <div className="d-flex flex-column" style={{ width: "40%" }}>
                                                <CCard className='w-full'>
                                                    <CCardHeader style={{ backgroundColor: "white", borderColor: "white" }}>
                                                        <h5>Training Frequency (Weekly)</h5>
                                                    </CCardHeader>
                                                    <CCardBody className='w-full text-center'>
                                                        <ButtonSolid label={user.training_frequencies ? "See Details" : "Fill Form" } onClick={() => navigate(`${ user.training_frequencies ? './training-frequency' : './training-frequency/edit' }`)} width='90%'/>
                                                    </CCardBody>
                                                </CCard>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {
                                        (!user.training_frequencies || user.training_frequencies.length <= 0) && !user.skill_set ?
                                            'User has not filled training information.'
                                            :
                                            <></>
                                    }
                                </div>
                            </CCardText>    
                        </CCardBody>
                    </CCard>
                    <Spacing height='1rem'/>
                    <CCard className='w-full'>
                        <CCardBody className='px-5'>
                            {
                                isEditable ? 
                                    <>
                                        <CButton 
                                            onClick={() => setUploadAcademicDocumentsModalVisibility(!uploadAcademicDocumentsModalVisibility)} 
                                            variant='outline' 
                                            className='position-absolute top-0 end-0 mt-3' 
                                            style={{marginRight: '5rem'}}> <BsPlus/> </CButton>
                                        <CButton 
                                            onClick={() => setUploadAcademicDocumentsModalVisibility(!uploadAcademicDocumentsModalVisibility)} 
                                            variant='outline' 
                                            className='position-absolute top-0 end-0 m-3'
                                        > <BsPencilFill /> </CButton>
                                        {renderAcademicDocumentModal()}
                                    </> :
                                    <></>
                            }
                            <CCardTitle>Academics</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                {
                                    user.academy_document ? 
                                        <CCarousel indicators dark>
                                            {
                                                    user.academy_document.grade_path ? 
                                                        <CCarouselItem className='w-full mb-5'>
                                                            <img className='w-full' src={HOST_ASSET_URL + user.academy_document?.grade_path} alt='Academy Grade' />
                                                        </CCarouselItem>
                                                    :
                                                        <></>
                                            }
                                            {
                                                    user.academy_document.letter_of_recomendation_path ?
                                                        <CCarouselItem className='w-full mb-5'>
                                                            <img className='w-full' src={HOST_ASSET_URL + user.academy_document?.letter_of_recomendation_path} alt='Letter of Recomendation'/>
                                                        </CCarouselItem>
                                                    :
                                                        <></>    
                                            }    
                                        </CCarousel>
                                    :
                                        'User has not uploaded any file.'
                                }
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </div>
                <div style={{width:'20%', marginLeft: '5%'}}>
                    <CCard className='w-full'>
                        <CCardBody className='px-3'>
                            {
                                isEditable ? 
                                    <>
                                        <CButton onClick={() => navigate("/sign-up-mandatory-2")} variant='outline' className='position-absolute top-0 end-0 m-3'> <BsPencilFill /> </CButton>
                                    </> :
                                    <></>
                            }
                            <CCardTitle>Profile</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                <div className='row-start-center'>
                                    <div className='w-50'>
                                        <div>
                                            <strong>
                                                Position
                                            </strong>
                                            <div>
                                                {user.position ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Height
                                            </strong>
                                            <div>
                                                {user.height ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Weight Class
                                            </strong>
                                            <div>
                                                {user.weight_class ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Date of Birth
                                            </strong>
                                            <div>
                                                {user.date_of_birth ?? '-'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-50'>
                                        <div>
                                            <strong>
                                                Shot
                                            </strong>
                                            <div>
                                                {user.shot ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Gender
                                            </strong>
                                            <div>
                                                {user.gender ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Weight
                                            </strong>
                                            <div>
                                                {user.weight ?? '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <strong>
                                                Age
                                            </strong>
                                            <div>
                                                {user.age ?? '-'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Coach
                                    </strong>
                                    <div>
                                        {user.coach ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Play Style
                                    </strong>
                                    <div>
                                        {user.play_style ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Player Comparison
                                    </strong>
                                    <div>
                                        {user.player_comparision ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Favourite Player
                                    </strong>
                                    <div>
                                        {user.favourite_player ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Current Team
                                    </strong>
                                    <div>
                                        {user.current_team ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Last Season's Team
                                    </strong>
                                    <div>
                                        {user.last_season_team ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Favourite Team
                                    </strong>
                                    <div>
                                        {user.favourite_team ?? '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Favourite Equipment Brand
                                    </strong>
                                    <div>
                                        {user.favourite_equipment_brand ?? '-'}
                                    </div>
                                </div>
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <Spacing height='1rem' />
                    <CCard className='w-full'>
                        <CCardBody className='px-3'>
                            {
                                isEditable ? 
                                    <>
                                        <CButton variant='outline' className='position-absolute top-0 end-0 m-3' onClick={() => navigate("/sign-up-mandatory-4")}> <BsPencilFill /> </CButton>
                                    </> :
                                    <></>
                            }
                            <CCardTitle>Parent Information</CCardTitle>
                            <Spacing height='1rem'/>
                            <CCardText>
                                <div>
                                    <strong>
                                        Full Name
                                    </strong>
                                    <div>
                                        {user.parent ? user.parent.full_name : '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Gender
                                    </strong>
                                    <div>
                                        {user.parent ? user.parent.gender : '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Date of Birth
                                    </strong>
                                    <div>
                                        {user.parent ? user.parent.date_of_birth : '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Phone Number
                                    </strong>
                                    <div>
                                        {user.parent ? user.parent.phone_number : '-'}
                                    </div>
                                </div>
                                <div>
                                    <strong>
                                        Email
                                    </strong>
                                    <div>
                                        {user.parent ? user.parent.email : '-'}
                                    </div>
                                </div>
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default UserProfilePage;
