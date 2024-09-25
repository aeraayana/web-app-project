import React from "react";
import moment from "moment";
import axios from "axios";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from "../../../configs/constants";
import { CFormCheck, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";
import { useAppContext } from "../../../context/appContext";
import { FaArrowLeft } from "react-icons/fa";
import { ButtonOutlined, ButtonSolid, InputTextWithPrompt, Spacing } from "../../../components";
import { CloudUploadOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";


const SuratKerjaModal = ({ show, onClose }) => {
    
    const { dataProgress, dataRiwayat, toggleDetailProgressModal, toggleSuratKerjaModal } = useAppContext();
    const dateComparison = dataProgress?.data[0]?.tanggal_kegiatan < new Date();
    
    const [options, setOptions] = React.useState(+ dateComparison);
    const [picture, setPicture] = React.useState([]);

    let initialState = {};
    const formData = new FormData();

    const handleChange = (e) => {
        let list = initialState;
        if(e.target.name === 'fileDocument'){
            const [file] = e.target.files;
            const { name: fileName, size } = file;
            const fileSize = (size / 1000).toFixed(2);
            const fileNameAndSize = `${fileName} - ${fileSize}KB`;
            document.querySelector('.file-name').textContent = fileNameAndSize;
            
            list[e.target.name] = e.target.files[0]
            initialState = list;
            setPicture((picture) => [...picture, file]);
        } else {
            list[e.target.name] = e.target.value;
            initialState = list;
        }
    }

    const handlePost = async () => {
        if(options === 1){
            formData.append('tanggal_kegiatan', `${initialState.tanggal_kegiatan} - ${initialState.tanggal_kegiatan}`);
            formData.append('waktu_kegiatan', `${initialState.start_time} - ${initialState.end_time}`);
        }
        formData.append('_method', 'PUT');
        formData.append('perjanjian_kerjasama', picture[0]);
        // console.log(initialState);
        try {
            const response = await axios.post(
                `${HOST_URL}informasiPencairanDana/${dataRiwayat?.data[dataRiwayat?.data?.length - 1].id}`, formData, {
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

    const handleReturn = () => {
        toggleSuratKerjaModal();
        toggleDetailProgressModal();
    }

    return (
        <Wrapper
            size="lg"
            scrollable
            alignment="center"
            visible={show}
            onClose={onClose}
        >
            <CModalHeader>
                <CModalTitle className="title-description">
                    <ButtonOutlined 
                        label="KEMBALI KE DETAIL KEGIATAN"
                        height={'2.65rem'}
                        className={'title-description'}
                        borderColor={'transparent'}
                        onClick={handleReturn}
                        iconPre={<FaArrowLeft/>} />
                </CModalTitle>
            </CModalHeader>
            <CModalBody>
                <div className="col-start-start">
                    <span className='page-number'>TAHAP 2</span>
                    <span className='subtitle'>Informasi Pencairan Dana</span>
                </div>

                <Spacing height={"2.25rem"}/>
                
                <div style={{ padding:'0.45rem' }}>
                    <div className="col-start-start">
                        <span className="label">Unggah Kontrak Perjanjian Kerja Sama yang sudah dimaterai dan ditandatangani</span>
                        <span className="sublabel">Unduh <a style={{ color:'var(--color-primary)'}} href="#/layanan-masyarakat">template perjanjian kerja sama.docx</a></span>
                    </div>
                </div>
                
                <Spacing height={"2.25rem"}/>
                {/* <label for="images" class="drop-container" id="dropcontainer">
                    <span class="drop-title">Drop files here</span>
                    or
                    <input type="file" id="images" accept="image/*" required/>
                </label> */}

                <label for="fileDocument" class="drop-container" id="dropcontainer" style={{ marginLeft:'1.25rem' }}>
                    <span class='drop-title' style={{ border: '1px solid var(--color-disable)', borderRadius: '6px', padding:'0.45rem' }}>
                        <CloudUploadOutlined sx={{ width:'40px', height:'40px' }}/>
                    </span>
                    <div class="row-center-center">
                        <input onChange={handleChange} type="file" style={{ opacity:'0', position:'absolute' }} id="fileDocument" class="file" name='fileDocument' accept="application/pdf"/>
                        <div className="col-center-center w-full" style={{ marginLeft:'1.25rem' }}>
                            <div>
                                <label for="file"><b style={{ color:'var(--color-primary)' }}>Klik untuk mengunggah</b> atau seret dan lepas</label>
                            </div>
                            <span class="description-label file-name"></span>
                            <span className="file">PNG, JPG, atau PDF (max. 1MB)</span>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </label>

                <Spacing height={"2.25rem"}/>

                <div style={{ padding:'0.45rem' }}>
                    <div className="col-start-start">
                        <span className="label">Unggah Kontrak Perjanjian Kerja Sama yang sudah dimaterai dan ditandatangani</span>
                        <Spacing height={"0.55rem"}/>
                        <span className="sublabel">Tanggal Kegiatan yang diajukan : &nbsp;<b>{moment(new Date(dataProgress?.data[0]?.tanggal_kegiatan)).format("DD MMMM yyyy")}</b></span>
                        {dateComparison && <span className="sublabel" style={{ fontStyle:'italic', color:'var(--color-error)' }}>Tanggal Kegiatan yang sebelumnya diajukan tidak valid. Mohon ubah tanggal kegiatan.</span>}
                    </div>

                    <Spacing height={'1.25rem'}/>

                    <div className="col-start-start">
                        <span className="sublabel" style={{ color:'var(--color-primary-dark)' }}>Ingin mengubah tanggal kegiatan?</span>
                        
                        <Spacing height={'0.25rem'}/>

                        <div className="row-start-start" style={{ gap:'10px' }}>
                            <CFormCheck type="radio" name="options" onChange={(e) => setOptions(parseInt(e.target.value))} autoComplete="off" label="Tidak" checked={options === 0}  value={0}/>
                            <CFormCheck type="radio" name="options" onChange={(e) => setOptions(parseInt(e.target.value))} autoComplete="off" label="Ya" checked={options === 1} value={1}/>
                        </div>
                    </div>

                    <Spacing height={'1.55rem'}/>

                    <div className="col-start-start">
                        <span className="sublabel" style={{ color:`${options ? 'var(--color-black)' : 'var(--color-disable)'}` }}>Pilih tanggal dan waktu kegiatan</span>
                        
                        <Spacing height={'0.75rem'}/>

                        <div className="row-start-start">
                            <InputTextWithPrompt 
                                className={'w-full'}
                                prompt={"Tanggal Kegiatan"} 
                                type={"date"} 
                                disabled={!options}
                                id={"tanggal_kegiatan"} 
                                name={"tanggal_kegiatan"} 
                                errorMessage={initialState?.tanggal_kegiatan === '' ? 'Tanggal kegiatan harus diisi' : ''}
                                value={initialState?.tanggal_kegiatan} 
                                onChange={handleChange} />   

                            <Spacing width="4.75rem" />

                            <div className="col-start-start w-full">
                                <label className="label" htmlFor='time-range' style={{ color:`${options? 'black' : 'var(--color-disable)'}`}}> Waktu Kegiatan </label>
                                <div class={`${options? 'time-range' : 'time-disabled'}`} style={{ width:"100%" }}>
                                    <input style={{ color:`${options? 'black' : 'white'}`}} type="time" id="start-time" name="start_time" onBlur={(e) => handleChange(e)} disabled={!options} defaultValue={initialState?.start_time}/>
                                    <span style={{ color:`${options? 'black' : 'white'}`}}>-</span>
                                    <input style={{ color:`${options? 'black' : 'white'}`}} type="time" id="end-time" name="end_time" onBlur={(e) => handleChange(e)} disabled={!options} defaultValue={initialState?.end_time}/>
                                </div>
                            </div>
                        </div>

                        <Spacing height={"4.25rem"}/>

                        <section className='row-center-center w-full'>
                            <ButtonOutlined 
                                label="Kembali" 
                                width={'25%'}
                                height={'2.65rem'}
                                color={'black'}
                                onClick={handleReturn}
                                iconPre={<FaArrowLeft/>} />

                            <Spacing width={'10%'}/>

                            <ButtonSolid 
                                label="Kirim" 
                                width={'25%'}
                                height={'2.65rem'}
                                onClick={handlePost} />  
                        </section>
                    </div>
                </div>
            </CModalBody>
        </Wrapper>
    )
}

export default SuratKerjaModal
