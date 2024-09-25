import { ButtonOutlined, ButtonSolid, ContainerCardSection, Spacing } from "../../../components";
import React from "react";
import { BrowserView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import InputTextArea from "../../../components/inputs/InputTextArea";
import FeaturedIcon from "../../../../src/assets/images/Featured icon.png"
import FileType from "../../../../src/assets/images/file type.png"
import { CAvatar, CModalBody, CModalHeader } from "@coreui/react";
import { FaChevronDown } from "react-icons/fa";
import { MoreVertOutlined } from "@mui/icons-material";
import ExcelExport from "../export-items/ExportExcelFromData";
import axios from "axios";
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from "../../../configs/constants";
import { Menu, MenuItem } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const ValidateSubmissionFormModal = ({ show, selectedData }) => {
    const [dataForm, setDataForm] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const role = JSON.parse(localStorage.getItem("user_data")).role_user;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const formData = new FormData();

    const handleDownloadAttached = (e) => {
        const newWindow = window.open(`/aksesdanalh/public/storage/${e}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        setAnchorEl(null);
    }

    React.useEffect(() => {
        if(show){
            axios.get(`${HOST_URL}getDataRab/${selectedData.id}`, {
                headers: {
                    Accept: 'application/json',
                    id: CLIENT_ID,
                    secret: CLIENT_ID_SECRET,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((res) => {
                setDataForm(res.data.data);
            })
        }
    }, [selectedData])

    const handleDownloadPdf = () => {
        const newWindow = window.open('#/layanan-masyarakat/laporan-pdf', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        localStorage.setItem('data', JSON.stringify(selectedData));
    }

    const handleDownloadRab = () => {
        const newWindow = window.open(`#/layanan-masyarakat/laporan-rab/${selectedData.id}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    
    let initialState = [];
    const { postVerifikasiFormProposal, postValidasiFormProposal, toggleVerifikasiModal, showVerifikasiModal } = useAppContext();

/////////////////////////////////////////////////////////////////////////////////////////////////

    const handleChange = (e) => {
        let list = initialState;
        if(e.target.name === 'fileDocument'){

            const [file] = e.target.files;
            
            console.log(file);
            
            const { name: fileName, size } = file;
            const fileSize = (size / 1000).toFixed(2);
            const fileNameAndSize = `${fileName} - ${fileSize}KB`;
            document.querySelector('.file-name').textContent = fileNameAndSize;
            
            formData.append('file_sk', e.target.files[0]);
            console.log('a');
        } else {
            list[e.target.name] = e.target.value;
        }
    }

    const handleTolak = async (e) => {
        if('approver' === JSON.parse(localStorage.getItem('user_data')).role_user){
            const response = await postValidasiFormProposal({ id: selectedData?.id, catatan_log: initialState.catatan_log, status: 0 });
            if(response) {  
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )  
                window.location.reload();
            }else{
                toast.error(
                    <div>
                        <span className="label">Terjadi kendala jaringan. [Parsing data failed]</span>
                    </div>, { position: toast.POSITION.TOP_CENTER, theme: 'colored' }
                )
            }
        }else{
            const response = await postVerifikasiFormProposal({ id: selectedData?.id, catatan_log: initialState.catatan_log, status: 0 });
            if(response) {  
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )
                window.location.reload();
            }else{
                toast.error(
                    <div>
                        <span className="label">Terjadi kendala jaringan. [Parsing data failed]</span>
                    </div>, { position: toast.POSITION.TOP_CENTER, theme: 'colored' }
                )
            }
        }
    }

    const handleSetuju = async (e) => {
        if('approver' === JSON.parse(localStorage.getItem('user_data')).role_user){
            formData.append('catatan_log', initialState.catatan_log);
            formData.append('_method', "PUT");
            formData.append('status', 1);

            const response = await postValidasiFormProposal({ id: selectedData?.id, formData });
            if(response) {  
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )
                window.location.reload();  
            }
            else{
                toast.error(
                    <div>
                        <span className="label">Terjadi kendala jaringan. [Parsing data failed]</span>
                    </div>, { position: toast.POSITION.TOP_CENTER, theme: 'colored' }
                )
            }
        }else{
            const response = await postVerifikasiFormProposal({ id: selectedData?.id, catatan_log: initialState.catatan_log, status: 1 });
            if(response) {  
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )  
                window.location.reload();
            }
            else{
                toast.error(
                    <div>
                        <span className="label">Catatan wajib di isi saat menolak pengajuan. [Parsing data failed]</span>
                    </div>, { position: toast.POSITION.TOP_CENTER, theme: 'colored' }
                )
            }
        }
    }
    
    return (
        <>
            <BrowserView>
                <ToastContainer />
                <Wrapper
                    size="lg"
                    scrollable
                    alignment="center"
                    visible={showVerifikasiModal}
                    onClose={toggleVerifikasiModal}
                >
                    <CModalHeader>
                    </CModalHeader>
                    <CModalBody>
                        <div className="col-start-start w-full">
                            <span className='title'>{role === 'approver' ? 'VERIFIKASI' : 'VALIDASI'}</span>
                            <span className='title-description'>PERMINTAAN BARU</span>
                        </div>
                        <Spacing height={"2.25rem"}/>
                        <span className="subtitle">Diajukan oleh:</span>
                        <Spacing height={"1.25rem"}/>
                        
                        <div className="row-start-start">
                            <CAvatar style={{ width:'4.15rem', height:'4.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                            <Spacing width={"1.25rem"}/>
                            
                            <div className="col-start-start">
                                <span className="subtitle">{selectedData?.kelompok_masyarakat}</span>
                                <span className="description" style={{ fontWeight: 'bold' }}>{selectedData?.nama_pic}</span>
                                <span className="description">{selectedData?.email_pic}</span>
                            </div>
                        </div>
                        <Spacing height="1.25rem" />

                        <span className="description">Paket diajukan: </span>
                        <Spacing height="1.25rem" />

                        <div className="row-start-start">
                            <div className="col-start-start w-full">
                                <span className='description' style={{ fontWeight: 'bold' }}>Tema</span>
                                <span className="label" style={{ fontWeight:'bold' }}>
                                    {`${selectedData?.tematik_kegiatan} ${selectedData?.sub_tematik_kegiatan}`}
                                </span>
                            </div>
                            <div className="col-start-start w-full">
                                <span className='description' style={{ fontWeight: 'bold' }}>Tanggal Kegiatan</span>
                                <span className='description'>
                                    {selectedData?.tanggal_pengajuan}
                                </span>
                            </div>
                            <div className="col-start-start w-full">
                                <span className='description' style={{ fontWeight: 'bold' }}>Rencana Kegiatan</span>
                                <span className='description'>
                                    {selectedData?.rencana_kegiatan}
                                </span>
                            </div>
                        </div>
                        <Spacing height="1.25rem" />

                        <div className="row-start-start">
                            <div className="col-start-start w-full">
                                <span className='subtitle' style={{ fontWeight: 'bold' }}>{selectedData?.jenis_kegiatan}</span>
                                <span className="sublabel">
                                    {selectedData?.jumlah}
                                </span>
                                <Spacing height="0.5rem" />
                                <span className="description" style={{ fontWeight: 'bold' }}>
                                    #{selectedData?.nomor_pengajuan}
                                </span>
                            </div>

                            <div className="col-start-start w-full">
                                <span className="description" style={{ fontWeight:'bold' }}>Lokasi</span>
                                <span className="description">
                                    {selectedData?.lokasi}
                                </span>
                            </div>

                            <div className="col-start-start w-full">
                                <Spacing width={'15px'}/>
                            </div>
                        </div>
                        <Spacing height="2.5rem" />

                        <div className="w-full">
                            <ContainerCardSection style={{ width:'80%' }}>
                                <div className="row-start-center w-full">
                                    <img src={FeaturedIcon} width={'40px'}></img>
                                    <span className="description" style={{ fontWeight:'bold', marginLeft:'0.5rem' }}>Proposal_13019248.pdf</span>
                                </div>
                                <hr></hr>
                                <div className="row-center-center w-full">
                                    <ButtonOutlined
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        onClick={() => handleDownloadPdf()}
                                        label={'Buka'}
                                    />
                                </div>
                            </ContainerCardSection>
                        </div>
                        <Spacing height="1.5rem" />

                        <div className="w-full">
                            <ContainerCardSection style={{ width:'80%' }}>
                                <div className="row-start-center w-full">
                                    <img src={FeaturedIcon} width={'40px'}></img>
                                    <span className="description" style={{ fontWeight:'bold', marginLeft:'0.5rem' }}>RAB_13019248.pdf</span>
                                </div>
                                <hr></hr>
                                <div className="row-center-center w-full">
                                    <ButtonOutlined
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        onClick={() => handleDownloadRab()}
                                        label={'Buka'}
                                    />

                                    <Spacing width={'3rem'} />

                                    {dataForm && (
                                        <ExcelExport data={Object.entries(dataForm.komponen_rab)}/>
                                    )}
                                </div>
                            </ContainerCardSection>
                        </div>
                        <Spacing height="1.5rem" />
                        <div>
                            <span className="label"> <FaChevronDown width={'12px'} /> Unggahan </span>
                            <Spacing height="0.95rem" />
                            {selectedData?.document[0] && (
                                <div className="col-center-center w-full" style={{ width:'30%', border: '1px solid var(--color-disable)', borderRadius: '5px', padding: '20px 0px', textWrap: "balance" }}>
                                    <img src={FileType} height={'60px'} width={'60px'}></img>
                                    <div className="row-around-center">
                                        <span className="description" style={{ width: '60%', fontWeight:'bold', marginTop:'1.25rem', textWrap: "balance" }}>{selectedData?.document[0]?.file_name}</span>
                                        <MoreVertOutlined onClick={handleClick}/>
                                        <Menu
                                            id="demo-positioned-menu"
                                            aria-labelledby="demo-positioned-button"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                                transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={() => handleDownloadAttached(selectedData.document[0].file_path)}>Download</MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            )}

                            {role === 'approver' && (
                                <div>
                                    <Spacing height={"2.25rem"}/>
                                    <span className="subtitle">Diverifikasi oleh:</span>
                                    <Spacing height={"0.75rem"}/>
                                    
                                    <div className="row-between-start">
                                        <div className="row-start-start">
                                            <CAvatar style={{ width:'3.15rem', height:'3.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                                            <Spacing width={"1.25rem"}/>
                                            
                                            <div className="col-start-start">
                                                <span className="subtitle">{selectedData?.kelompok_masyarakat}</span>
                                                <span className="description">Pemilik Kegiatan 1</span>
                                            </div>
                                        </div>
                                        <div className="col-start-start">
                                            <span className="subtitle">Tanggal Verifikasi</span>
                                            <span className="description">{selectedData?.tanggal_verifikasi}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <hr></hr>
                            <span className="subtitle">Unggah SK</span>
                            <Spacing height={'0.45rem'} />
                            {role === 'approver' && (
                                <div class="file-input">
                                    <input onChange={handleChange} type="file" style={{ opacity:'0', position:'absolute' }} id="fileDocument" class="file" name='fileDocument' accept="application/pdf"/>
                                    <div className="col-start-start w-full" style={{ marginLeft:'1.25rem' }}>
                                        <div 
                                            className="row-start-start" 
                                            style={{ border:'1px solid var(--color-semiblack)', borderRadius:'6px', padding: '0.45rem 1.25rem' }}
                                        >
                                            <CloudUploadOutlinedIcon />
                                            <Spacing width={'0.45rem'} />
                                            <label for="file">Unggah File</label>
                                        </div>
                                        <span class="description-label file-name"></span>
                                        <span className="description-label">File format PDF max. 5MB</span>
                                    </div>
                                </div>
                            )}

                            <Spacing height="1.5rem" />
                            <span className="description" style={{ fontWeight:'bold' }}> Comments </span>
                            <Spacing height="0.5rem" />
                            <InputTextArea 
                                placeholder={'Enter a description...'}
                                rows={4}
                                name={'catatan_log'}
                                onBlur={(e) => handleChange(e)}
                            />
                        </div>
                        <Spacing height="2.5rem" />
                        <div className="row-between-start w-full">
                            <ButtonOutlined 
                                label={'Tolak'} 
                                className={'w-full'} 
                                width={'19%'} 
                                height={'2.75rem'} 
                                fontSize={'12px'}
                                onClick={() => {
                                    handleTolak();
                                }}
                                borderRadius={'9px'}
                                color={'var(--color-black)'}
                                borderColor={'var(--color-black)'} />

                            <ButtonSolid 
                                label={'Setujui'} 
                                className={'w-full'} 
                                width={'19%'} 
                                onClick={() => {
                                    handleSetuju();
                                }}
                                height={'2.75rem'} 
                                borderRadius={'9px'}
                                bgColor={'var(--color-primary-dark)'}
                                fontSize={'12px'} />
                        </div>
                    </CModalBody>
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default ValidateSubmissionFormModal
