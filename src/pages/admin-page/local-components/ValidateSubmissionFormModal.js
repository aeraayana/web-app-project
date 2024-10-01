import React from "react";
import axios from "axios";
import { ButtonSolid, ChoiceBoxStringWithPrompt, InputText, InputTextSearch, InputTextWithPrompt, Spacing } from "../../../components";
import { BrowserView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import { CAvatar, CModalBody, CModalHeader } from "@coreui/react";
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from "../../../configs/constants";
import { toast, ToastContainer } from "react-toastify";
import Wrapper from "../../../wrappers/admin-page/AdminPageWrapper";

const ValidateSubmissionFormModal = ({ show, onClose, selectedData }) => {

    let initialState = {
        pengajuan_kegiatan_id: selectedData?.id,
    };

    const { bank } = useAppContext();

/////////////////////////////////////////////////////////////////////////////////////////////////

    const handleChange = (e) => {
        let list = initialState;        
        list[e.target.name] = e.target.value;
    }

    const handleSetuju = async () => {
        try {
            const response = await axios.post(
                `${HOST_URL}detailInformasiPencairan`, initialState, {
                headers: {
                    Accept: 'application/json',
                    id: CLIENT_ID,
                    secret: CLIENT_ID_SECRET,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })

            if (response) {
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )

                window.location.reload();
            }
        } catch (error) {
            toast.error(
                <div>s
                    <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Terjadi kendala jaringan. [Parsing data failed]</span>
                </div>, { position: toast.POSITION.TOP_CENTER, theme: 'colored' }
            );
        }
    }
    
    return (
        <>
            <BrowserView>
                <ToastContainer />
                <Wrapper
                    style={{ padding: '0.5rem 0.5rem 0.5rem 0.55rem' }}
                    size="xl"
                    scrollable
                    alignment="center"
                    className="w-full"
                    visible={show}
                    onClose={onClose}
                >
                    <CModalHeader>
                    </CModalHeader>
                    <CModalBody style={{ padding: '0.75rem 2.5rem' }}>
                        <div className="col-start-start w-full">
                            <span className='title'>PEMBIAYAAN</span>
                            <span className='title-description'>PENCAIRAN DANA TERMIN I</span>
                        </div>

                        <Spacing height={"1.75rem"}/>
                        
                        <div>
                            <span className="label">Diajukan oleh:</span>
                            <Spacing height={"1.25rem"}/>
                        </div>


                        <div className="w-full" style={{ padding: '0rem 3rem 0rem 0rem' }}>
                            <div className="row-between-start w-full">
                                <div className="row-start-start">
                                    <CAvatar style={{ width:'4.15rem', height:'4.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                                    <Spacing width={"1.25rem"}/>
                                    
                                    <div className="col-start-start">
                                        <span className="description">{selectedData?.kelompok_masyarakat}</span>
                                        <span className="description-label">{selectedData?.nama_pic}</span>
                                        <span className="subtitle">{selectedData?.email_pic}</span>
                                    </div>

                                    <Spacing width={"3.25rem"}/>
                                
                                    <div className="col-start-start">
                                        <span className='description'>{selectedData?.jenis_kegiatan}</span>
                                        <span className="description-alt" style={{ fontWeight: 400 }}>
                                            {selectedData?.jumlah}
                                        </span>
                                        <span className="subtitle-alt" style={{ fontWeight: 600 }}>
                                            #{selectedData?.nomor_pengajuan}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="col-start-start">
                                    <span className="description-alt" >Tanggal unggah</span>
                                    <span className="subtitle-alt" style={{ fontWeight: 400 }}>
                                        {selectedData?.tanggal_pengajuan}
                                    </span>
                                </div>
                            </div>

                            <Spacing height="1.25rem" />
                            
                            <div className="row-around-start w-full">
                                <div className="w-full">
                                    <Spacing height={"2.25rem"}/>
                                    <span className="label">Disetujui oleh:</span>
                                    <Spacing height={"0.75rem"}/>
                                    
                                    <div className="row-between-start">
                                        <div className="row-start-start">
                                            <CAvatar style={{ width:'3.15rem', height:'3.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                                            <Spacing width={"1.25rem"}/>
                                            
                                            <div className="col-start-start">
                                                <span className="description">{selectedData?.nama_verifikator}</span>
                                                <span className="description-alt" style={{ fontWeight: 400 }}>Pemilik Kegiatan 1</span>
                                            </div>
                                        </div>
                                        <div className="col-start-start">
                                            <span className="description-alt">Tanggal Verifikasi</span>
                                            <span className="subtitle-alt">{selectedData?.tanggal_verifikasi}</span>
                                        </div>
                                    </div>
                                </div>

                                <Spacing width={'43.33%'} />

                                <div className="w-full">
                                    <Spacing height={"2.25rem"}/>
                                    <span className="label">&nbsp;</span>
                                    <Spacing height={"0.75rem"}/>
                                    
                                    <div className="row-between-start">
                                        <div className="row-start-start">
                                            <CAvatar style={{ width:'3.15rem', height:'3.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                                            <Spacing width={"1.25rem"}/>
                                            
                                            <div className="col-start-start">
                                                <span className="description">{selectedData?.nama_validator}</span>
                                                <span className="description-alt" style={{ fontWeight: 400 }}>Koordinator</span>
                                            </div>
                                        </div>
                                        <div className="col-start-start">
                                            <span className="description-alt">Tanggal Validasi</span>
                                            <span className="subtitle-alt">{selectedData?.tanggal_validasi}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <Spacing height="2.5rem" />

                        <span className='title-description'>DETAIL INFORMASI PENCAIRAN</span>

                        <Spacing height={"1.75rem"}/>

                        <ChoiceBoxStringWithPrompt 
                            className={'w-full'}
                            prompt={"Provinsi"} 
                            options={bank?.data} 
                            id={"nama_bank"} 
                            height={'2.25rem'} 
                            name={"master_data_bank_id"} 
                            value={initialState?.master_data_bank_id} 
                            onBlur={(e) => handleChange(e)} />

                        <Spacing height={"0.75rem"}/>

                        <InputTextWithPrompt 
                            width={"100%"}
                            prompt={"Nomor Rekening Giro"} 
                            type={"text"} 
                            inputHeight={'2.25rem'} 
                            id={"nomor_rekening"} 
                            name={"nomor_rekening"}
                            defaultValue={initialState?.nomor_rekening} 
                            onBlur={(e) => handleChange(e)} />

                        <Spacing height={"0.75rem"}/>

                        <InputTextWithPrompt 
                            width={"100%"}
                            prompt={"Nama Pemilik Rekening"} 
                            type={"text"} 
                            inputHeight={'2.25rem'} 
                            id={"nama_pemilik_rekening"} 
                            name={"nama_pemilik_rekening"}
                            defaultValue={initialState?.nama_pemilik_rekening} 
                            onBlur={(e) => handleChange(e)} />  

                        <Spacing height={"2.25rem"}/>
                        
                        <span className='description'>Jumlah dana disetujui</span>
                        <InputText
                            width={"100%"}
                            type={"text"} 
                            inputHeight={'2.25rem'} 
                            id={"alamat_kegiatan_ext"} 
                            name={"alamat_kegiatan_ext"}
                            disabled
                            defaultValue={initialState?.alamat_kegiatan_ext} 
                            onBlur={(e) => handleChange(e)} />  

                        <Spacing height={"0.75rem"}/>

                        <span className='description'>Dana belum dicairkan</span>
                        <InputText
                            width={"100%"}
                            type={"text"} 
                            inputHeight={'2.25rem'} 
                            id={"alamat_kegiatan_ext"} 
                            name={"alamat_kegiatan_ext"}
                            disabled
                            defaultValue={initialState?.alamat_kegiatan_ext} 
                            onBlur={(e) => handleChange(e)} />  

                        <Spacing height={"0.75rem"}/>

                        <span className='description'>Jumlah pencairan Termin I</span>
                        <InputTextSearch
                            type="email"
                            id="nilai_penyaluran"
                            name="nilai_penyaluran"
                            icon={<div className="description">{((initialState?.value - selectedData?.pencairan_disetujui)/selectedData?.pencairan_disetujui)?? 0}%</div>}
                            value={initialState?.nilai_penyaluran}
                            onChange={handleChange}
                            className="w-full"/>

                        <Spacing height={"0.75rem"}/>

                        <InputTextWithPrompt 
                            width={'33%'}
                            prompt={"Tanggal pencairan"} 
                            type={"date"} 
                            id={"tanggal_penyaluran"} 
                            name={"tanggal_penyaluran"} 
                            inputHeight={'2.25rem'} 
                            errorMessage={initialState?.tanggal_penyaluran === '' ? 'Tanggal kegiatan harus diisi' : ''}
                            value={initialState?.tanggal_penyaluran} 
                            onChange={handleChange} />     

                        <Spacing height={"2.75rem"}/>

                        <div className="row-center-center w-full">
                            
                            <ButtonSolid 
                                label={'Konfirmasi Pengiriman'} 
                                className={'w-full'} 
                                width={'47%'} 
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
