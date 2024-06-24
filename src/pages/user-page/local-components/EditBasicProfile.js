import { CAvatar, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import { ButtonOutlined, ButtonSolid, ContainerCardSection, InputTextWithPrompt, Spacing } from "../../../components"
import { forwardRef, useImperativeHandle, useState } from "react";
import { useAppContext } from "../../../context/appContext";
import Dropzone from "react-dropzone";

const EditBasicProfile = forwardRef(({ isModal = false, handleOpenEditAvatar = () => { } }, ref) => {
    const { user, updateProfile } = useAppContext();
    const defaultState = {
        full_name: user.full_name,
        username: user.username,
        phone_number: user.phone_number,
        email: user.email,
        address: user.address,
        banner_color: user.banner_color,
        bio: user.bio,
    }

    const [formState, setFormState] = useState(defaultState);
    const [avatar, setAvatar] = useState({});

    const [uploadAvatarModalVisibility, setUploadAvatarModalVisibility] = useState(false);

    useImperativeHandle(ref, () => ({
        onSubmit(e) {
            const { full_name, username, phone_number, email, address, banner_color, bio } = formState;
            if (!full_name && !username && !phone_number && !email && !address && !banner_color && !bio) {
                return;
            }
            handleUpdate();
        },
        onCancel(e){
            setFormState(defaultState);
        },
    
    }))

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        await updateProfile(formState)
    }

    const renderUpdateAvatarModal = () => {

        const labelStyle = {
            height: "20rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: "2px",
            borderRadius: "1rem",
            borderStyle: "dashed",
            borderColor: "#cbd5e1",
            backgroundColor: "#f8fafc",
        }

        const sectionStyle = {
            height: "20rem",
            width:"52.625rem",
            maxWidth: "100%",
            textAlign: "center",
            position: "relative",
        }

        const handleConfirm = () => {
            const formData = new FormData();
            formData.append('images', avatar);
            updateProfile(formData);
            setUploadAvatarModalVisibility(false);
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
                        <Dropzone onDrop={acceptedFiles => {
                            setAvatar(acceptedFiles)
                        }}>
                            {({getRootProps, getInputProps}) => (
                                <section style={sectionStyle} className='m-3'>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} style={{ display: "none" }}/>
                                            <label id="label-file-upload" style={labelStyle}>
                                                <div>
                                                    <p>Drag and drop your file here or Upload a file</p>
                                                </div> 
                                            </label>
                                    </div>
                                </section>
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
    
    return (
        <>
            <CAvatar style={{
                backgroundColor: 'rgb(179, 190, 204)',
                width: '9.0625rem', /* 145px */
                height: '9.0625rem', /* 145px */
            }} />
            <Spacing height="1.25rem" />    {/* 20px */}
            <ButtonOutlined label="Add Profile Picture" width="16.375rem" onClick={() => {
                (isModal)? handleOpenEditAvatar() : setUploadAvatarModalVisibility(true)
            }} /> { /* 262px */}
            {(isModal)?<></>:renderUpdateAvatarModal()}
            <Spacing height="1.25rem" />    {/* 20px */}
            <div className='row-between-center'>
                <InputTextWithPrompt width="25.9375rem"
                    prompt={"Full Name"} type={"text"} id={"full_name"} name={"full_name"} placeholder={user.full_name || '-'} value={formState.full_name} onChange={handleChange} />    {/* 415px */}
                <Spacing width="0.75rem" />    {/* 12px */}
                <InputTextWithPrompt width="25.9375rem"
                    prompt={"Username"} type={"text"} id={"username"} name={"username"} placeholder={user.username || "-"} value={formState.username} onChange={handleChange} />    {/* 415px */}
            </div>
            <Spacing height="0.75rem" />    {/* 12px */}
            <InputTextWithPrompt width="52.625rem"
                prompt={"Phone Number"} type={"tel"} id={"phone_number"} name={"phone_number"} placeholder={user.phone_number || "-"} value={formState.phone_number} onChange={handleChange} />    {/* 842px */}
            <Spacing height="0.75rem" />    {/* 12px */}
            <InputTextWithPrompt width="52.625rem"
                prompt={"Email"} type={"email"} id={"email"} name={"email"} placeholder={user.email || "-"} value={formState.email} onChange={handleChange} />    {/* 842px */}
            <Spacing height="0.75rem" />    {/* 12px */}
            <InputTextWithPrompt width="52.625rem"
                prompt={"Address"} type={"text"} id={"address"} name={"address"} placeholder={user.address || "-"} value={formState.address} onChange={handleChange} />    {/* 842px */}
            <Spacing height="0.75rem" />    {/* 12px */}
            <InputTextWithPrompt width="52.625rem" inputHeight="3.4375rem"
                prompt={"Banner Color"} type={"color"} id={"banner_color"} name={"banner_color"} placeholder={user.banner_color || "-"} value={formState.banner_color} onChange={handleChange} />    {/* 842px, 55px */}
            <Spacing height="0.75rem" />    {/* 12px */}
            <InputTextWithPrompt width="52.625rem"
                prompt={"Bio"} type={"text"} id={"bio"} name={"bio"} placeholder={user.bio || "-"} value={formState.bio} onChange={handleChange} />    {/* 842px */}
        </>
    )
})

export default EditBasicProfile