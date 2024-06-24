import React from 'react';
import { useAppContext } from "../../context/appContext";
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Wrapper from '../../wrappers/admin-page/AdminGenerateBlastEmailPageWrapper';
import { ButtonOutlined, ButtonSolid, Spacing } from '../../components';
import { CFormCheck } from '@coreui/react';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';


const AdminSendBlastEmailPage = () => {

    const { data, getOneData, createData } = useAppContext();
    const { id } = useParams();

    const [roles, setRoles] = React.useState([]);
    const [checkRolesConfirmation, setCheckRolesConfirmation] = React.useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        if(e.target.checked){
            // console.log(roles);
            if(e.target.name === "all_roles"){
                setRoles(e.target.value.split(","));
            } else {
                setRoles([...roles, e.target.value]);
            }
        }
        if(!e.target.checked){
            // console.log(roles);
            setRoles(roles.filter((item) => item !== e.target.value));
            if(e.target.name === "all_roles"){
                setRoles([]);
            }
        }
    }

    const handleNext = () => {
        if(roles.length === 6){
            setCheckRolesConfirmation(true);
        }
        handleConfirm();
    }

    const handleConfirm = () => {
        createData({role: roles}, `emailtemplates/send-email/${id}`, "email berhasil dikirim")
        navigate(`/admin/` , { replace: true });
    }

    const renderConfirmation = () => {
        return(
            <CModal
                visible={checkRolesConfirmation}
                onClose={() => setCheckRolesConfirmation(false)}
            >
                <CModalHeader>
                    <CModalTitle></CModalTitle>
                </CModalHeader>
                    <CModalBody>
                        <p>This Email will be sent to <b>All Roles</b> are you sure you want to send this email?</p>
                    </CModalBody>
                <CModalFooter>
                    <ButtonOutlined secondary width={"10%"} onClick={() => setCheckRolesConfirmation(false)} label="no"></ButtonOutlined>
                    <ButtonSolid onClick={() => handleConfirm()} label="yes" width={"10%"}></ButtonSolid>
                </CModalFooter>
            </CModal>
        )
    }

    const navigateToBack = () => {
        setTimeout(() => {
            navigate(`/admin/generate-blast-email/${id}/preview`);
        }, 1000);
    }

    React.useEffect(() => {
        if (!id) return
        getBlastEmailData(id);
    },[id]);

    const getBlastEmailData = async (id) => {
        const data = await getOneData('emailtemplates', id);
        if (!data || data.length === 0) return
    }

    return(
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='w-full card p-5'>
                    <div className='w-full'>
                        <h1 className='title'>Blast Email</h1>
                        <p>Blast the email you've created based on available roles</p>
                    </div>
                    <Spacing height="2rem" />
                    <div className='container'>
                        <div className='row' style={{ width:"100%" }}>
                            <div className='col' style={{ width:"60%" }}>
                                <CFormCheck checked={roles.find((item) => item === "athlete")} onChange={(e) => handleChange(e)} inline id="athlete" value="athlete" label="Athlete"/>
                            </div>
                            <div className='col' style={{ width:"60%" }}>
                                <CFormCheck checked={roles.find((item) => item === "school")} onChange={(e) => handleChange(e)} inline id="school" value="school" label="School"/>
                            </div>
                            <div className='col' style={{ width:"60%" }}>
                                <CFormCheck checked={roles.find((item) => item === "admin")} onChange={(e) => handleChange(e)} inline id="admin" value="admin" label="Admin"/>
                            </div>  
                            <div className='col' style={{ width:"20%" }}>
                                <CFormCheck checked={roles.length === 6} onChange={(e) => handleChange(e)} inline name="all_roles" id="all_roles" value={["athlete", "school", "admin", "coach", "association", "scout"]} label="Send to All" />
                            </div>
                        </div>
                        <div className='row' style={{ width:"100%" }}>
                            <div className='col' style={{ width:"60%" }}> 
                                <CFormCheck checked={roles.find((item) => item === "coach")} onChange={(e) => handleChange(e)} inline id="coach" value="coach" label="Coach"/>
                            </div>
                            <div className='col' style={{ width:"60%" }}> 
                                <CFormCheck checked={roles.find((item) => item === "association")} onChange={(e) => handleChange(e)} inline id="association" value="association" label="Association"/>
                            </div>
                            <div className='col' style={{ width:"60%" }}> 
                                <CFormCheck checked={roles.find((item) => item === "scout")} onChange={(e) => handleChange(e)} inline id="scout" value="scout" label="Scout"/>
                            </div>
                            <div className='col' style={{ width:"20%" }}>
                            </div>
                        </div>
                    </div>
                        {/* <div className='d-flex flex-column' style={{ width:"20%" }}>
                            <CFormCheck inline name="all_roles" id="all_roles" value="athlete,school,admin,coach,association,scout" label="Send to All" />
                        </div> */}
                </div>
                <div className='w-full text-center mt-4'>
                    <ButtonOutlined label='Previous' iconPost={<HiOutlineArrowNarrowLeft />} coreUiColor='danger' color='red' width='20%' onClick={navigateToBack}/>
                    <ButtonSolid label='Finish' width='20%' className='ms-5' onClick={ handleNext }/>
                    {renderConfirmation()}
                </div>
            </Wrapper>
        </React.Fragment>
    )

}

export default AdminSendBlastEmailPage