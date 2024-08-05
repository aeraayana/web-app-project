import styled from "styled-components";
import { CFormCheck, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { ButtonOutlined, ButtonSolid, ChoiceBoxStringWithPrompt, ContainerCardSection, InputText, InputTextWithPrompt, InputTextWithPromptPostLabel, Spacing } from "../../../components";
import React, { useEffect } from "react";
import Pana from "../../../assets/images/landing/pana.png";
import Papa from "../../../assets/images/landing/papa.png";
import Amico from "../../../assets/images/landing/amico.png";
import Vector from "../../../assets/images/landing/Vector.png";
import VectorBlack from "../../../assets/images/landing/VectorBlack.png";
import Protect from "../../../assets/images/landing/protect.png";
import Health from "../../../assets/images/landing/health.png";
import Trip from "../../../assets/images/landing/trip.png";
import Sun from "../../../assets/images/landing/sun.png";
import Planting from "../../../assets/images/landing/planting.png";
import Water from "../../../assets/images/landing/water.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BrowserView, MobileView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import MobileWrapper from "../../../wrappers/user-page/mobile/UserCreateFormMobileWrapper";
import InputTextArea from "../../../components/inputs/InputTextArea";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";

const WrapperChoiceBox = styled(CFormCheck)`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);
    padding-right: 1rem;
`

const imgUrls = [
    Pana,
    Amico,
    Papa,
]

const imgUrlPage2 = [
    Planting,
    Sun,
    Trip,
    Water,
    Protect,
    Health,
]

const numFormat = (number) => {
	return new Intl.NumberFormat("id-ID", { style: "decimal" }).format(number);
};

const CreateSubmissionModal = ({ show, onClose, index, setIndex }) => {
    const [initialState, setInitialState] = React.useState({
        nama_paket_kegiatan: '',
        proposal_kegiatan: '',
        ruang_lingkup_kegiatan: '',
        tujuan_kegiatan: '',
    })

    const getTotal = (item, elementName, itemName) => {
		let sum = 0;
        for(const [key, value] of Object.entries(item)){
            for(let i = 0; i < value.length; i += 1){
                sum += (value[i]?.[`${elementName}`] * value[i]?.[`${itemName}`]);
            }
        }

		return numFormat(sum);
	};

    const [dataForm, setDataForm] = React.useState([])
    const [confirm, setConfirm] = React.useState(false);
    const [postData, setPostData] = React.useState([]);

    const formData = new FormData();

    const { 
        tematikKegiatan, 
        getTematikKegiatan, 
        getSubTematikKegiatan, 
        getPaketKategoriData, 
        paketKategoriData,
        provinsi,
        getProvinsi,
        kecamatan,
        getKecamatan,
        kota,
        getKota,
        kelurahan,
        getKelurahan,
        toggleFormModal,
        showFormModal,
    } = useAppContext();

    const [data, setData] = React.useState(null);
    const [kategori, setKategori] = React.useState({ jenis_kegiatan: '' });

    React.useEffect(() => { 
        getTematikKegiatan();
    }, []);
    
    const handleGetTematikData = async(index) => {
        getTematikKegiatan();
        setIndex(index);
    }
    
    const handleGetSubTematikData = async (e, index) => {
        await getSubTematikKegiatan({ categoryId: e.id });
        setIndex(index);
    }
    
    const handleGetPaketKategoriData = async (e, index) => {
        if(!data){
            setData({ subId: e.id, id: e.tematik_kegiatan_id });
            Promise.all([
                getProvinsi(),
            ]);
        }
        await getPaketKategoriData({ id: e.tematik_kegiatan_id, subId: e.id });
        setKategori({ jenis_kegiatan: '' })
        setIndex(index);
    }

    const handleFormClose = () => {
        toggleFormModal();
        setIndex(1);
    }
    
    const handleChange = (e) => {
        const list = initialState;
        if(e.target.name === 'fileDocument'){
            formData.append('fileDocument', e.target.files[0]);
        } else {
            setInitialState({ ...list, [e.target.name]: e.target.value });
        }
    }

    const handleChangeProvinsi = async (e) => {
        const list = initialState;
        setInitialState({ ...list, [e.target.name]: e.target.value });
        await getKota({ id: e.target.value });
    }

    const handleChangeKabupaten = async (e) => {
        const list = initialState;
        setInitialState({ ...list, [e.target.name]: e.target.value });
        await getKecamatan({ id: e.target.value });
    }

    const handleChangeKecamatan = async (e) => {
        const list = initialState;
        setInitialState({ ...list, [e.target.name]: e.target.value });
        await getKelurahan({ id: e.target.value })
    }

    const handleChangeQty = async (n, e, idx) => {
        let list = dataForm;
        const r = new RegExp('[.]', 'g')
        list.komponen_rab[n][idx][e.target.name] = e.target.value.replace(r, '');
        setPostData({ ...list.komponen_rab })
        console.log(postData);
    }

    const handleCloseForm = async (e) => {
        axios.put(
            `https://uat.bpdlh.id/aksesdanalh/public/api/pengajuanKegiatan/${dataForm.id_pengajuan}`,
            { "komponen_rab": Object.values(postData).flat() },
            {
                headers: {
                    Accept: 'application/json',
                    id: '6684d93e8cb88',
                    secret: 'vc8U5EaZ3bUKV9ka4PsNLrpVGWZVVpyZsAhmnRWO',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }
        ).then(handleFormClose());
    }

    const handlePostForm = (e, index) => {
        try {
            formData.append('paket_kegiatan_id', e.paket_kegiatan_id);
            formData.append('ruang_lingkup_kegiatan', e.ruang_lingkup_kegiatan);
            formData.append('tujuan_kegiatan', e.tujuan_kegiatan);
            formData.append('proposal_kegiatan', e.proposal_kegiatan);
            formData.append('waktu_kegiatan', e.start_time.concat(` - ${e.end_time}`));
            formData.append('tanggal_kegiatan', `${e.tanggal_kegiatan} - ${e.tanggal_kegiatan}`);
            formData.append('alamat_kegiatan', e.alamat_kegiatan.concat(` ${e.alamat_kegiatan_ext}`));
            formData.append('kabupaten_kegiatan', e.kota_code);
            formData.append('kelurahan_kegiatan', e.kelurahan_code?? 1);
            formData.append('kecamatan_kegiatan', e.kecamatan_code);
            formData.append('provinsi_kegiatan', e.province_code);
            formData.append('judul_pengajuan_kegiatan', e.title);

            axios.post(
                'https://uat.bpdlh.id/aksesdanalh/public/api/pengajuanKegiatan',
                formData,
                {
                    headers: {
                        Accept: 'multipart/form-data',
                        id: '6684d93e8cb88',
                        secret: 'vc8U5EaZ3bUKV9ka4PsNLrpVGWZVVpyZsAhmnRWO',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            ).then((res) => {setDataForm(res.data.data)})
        } catch (error) {
            setIndex(1);
        }
        setIndex(index);
    }
    
    const handleCheck = (e) => {
        if(kategori.jenis_kegiatan === e.jenis_kegiatan){
            setKategori({ jenis_kegiatan: '' });
        }else{
            setKategori(e);
        }
    }

    return (
        <>
            <MobileView>
                <MobileWrapper
                    fullscreen
                    scrollable
                    alignment="center"
                    visible={showFormModal}
                    onClose={toggleFormModal}
                >
                    {index === 1 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">BUAT PENGAJUAN BARU</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH TEMA</span>
                                </div>
                                <div className='col-center-center w-full'>
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign:"center", fontSize: "16px" }}>Pilih tema yang anda ingin ajukan</span>
                                    <Spacing height="1.75rem" />
                                    {tematikKegiatan.data ? tematikKegiatan.data.map((n, idx) => (
                                        <>
                                            <div className="row-start-start description-subtitle" style={{ cursor:"pointer" }} onClick={() => handleGetSubTematikData(n, index + 1)}>
                                                <div style={{ marginRight: "10px" }}>
                                                    <img src={imgUrls[idx]}></img>
                                                </div>
                                                <div>
                                                    <span className="subtitle">{n.tematik_kegiatan}</span>
                                                    <Spacing height="0.7rem" />
                                                    <span className="description">{n.deskripsi_tematik}</span>
                                                </div>
                                            </div>
                                            <Spacing height="0.7rem" />
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                </div>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    }

                    {index === 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetTematikData(index - 1)}/>     
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH SUB TEMA</span>
                                </div>
                                <div className="col-start-start w-full">
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign: "center", fontSize: "16px" }}>Pilih subtema kegiatan yang anda ingin ajukan</span>
                                    <Spacing height="1.75rem" />
                                    
                                    {tematikKegiatan.data ? tematikKegiatan.data.map((n, idx) => (
                                        <>
                                            <div className="col-center-center price-tag w-full" style={{ cursor: "pointer" }} onClick={() => handleGetPaketKategoriData(n, index + 1)}>
                                                <img src={imgUrlPage2[idx]}></img>
                                                <span style={{ marginTop: "10px" }} className="subtitle">{n.sub_tematik_kegiatan}</span>
                                            </div>
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                    
                                </div>
                                <Spacing height="2.7rem" /> 
                            </CModalBody>
                        </>
                    }

                    {index === 3 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetSubTematikData(data, index - 1)}/>     
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH KEGIATAN</span>
                                </div>
                                <div className="col-start-start w-full">
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign: "center", fontSize: "16px" }}>Pilih salah satu paket kegiatan yang ingin anda ajukan </span>
                                    <Spacing height="1.75rem" />
                                    {paketKategoriData.data ? paketKategoriData.data.map((n, i) => (
                                        <>
                                            <div className="row-start-start description-subtitle" style={{ width:'100%' }}>
                                            
                                            <WrapperChoiceBox 
                                                className='center' 
                                                style={{ marginTop:'1.25rem', marginRight: '1rem', cursor: 'pointer' }} 
                                                id={`${n.jenis_kegiatan}-${i}`} 
                                                label="" 
                                                onClick={() => handleCheck(n)} 
                                                checked={kategori.jenis_kegiatan === n.jenis_kegiatan}/>

                                            <div className="col-center-center">
                                                <div className='row-start-start'>
                                                    <div style={{ marginTop:'0.75rem' }}>
                                                        <img height='38.33px' src={kategori.jenis_kegiatan ? Vector : VectorBlack}></img>
                                                    </div>
                                                    <div style={{ marginLeft:'2.5rem', marginTop:'0.75rem' }}>
                                                        <span style={{ fontSize:'var(--font-size-normal)', fontWeight:'var(--font-weight-semibold)'}}>{n.jenis_kegiatan}</span>
                                                    </div>
                                                </div>
                                                <Spacing height="1.25rem" />
                                                <ChoiceBoxStringWithPrompt 
                                                    prompt={n.jenis_kegiatan === "Penanaman Pohon" ? 'Jumlah Hectare' : 'Jumlah Peserta'} 
                                                    options={n.paket_kegiatan} 
                                                    id={'jumlah_peserta'}
                                                    height={'2.25rem'} 
                                                    // value={initialState?.}
                                                    name={'paket_kegiatan_id'} 
                                                    onChange={handleChange}/>
                                            </div>

                                        </div>
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                    <Spacing height="2.7rem" /> 
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>
                                    <div className="col-start-start w-full">
                                        <Spacing height="1.25rem" />
                                        <div className="row-between-center description-subtitle w-full" style={{ width:'100%' }}>
                                            <div className="col-start-start">
                                                    <span className="description" style={{ color: "var(--color-primary-dark)" }}>Rehabilitasi:</span>
                                                    <Spacing height="0.45rem" />
                                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                            </div>
                                            
                                            <div className="col-end-end w-full">
                                                <ButtonSolid 
                                                    onClick={() => setIndex(index + 1)} 
                                                    disabled={!kategori?.jenis_kegiatan}
                                                    label={'Mulai Pengajuan'} 
                                                    width={"6.75rem"} 
                                                    height={"4.75rem"} 
                                                    bgColor={"var(--color-primary-dark)"} />
                                            </div>
                                                
                                        </div>
                                    </div>
                                </div>
                                <Spacing height="2.7rem" /> 
                            </CModalBody>
                        </>
                    }

                    {index === 4 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetPaketKategoriData(data, index - 1)}/> ISI FORM PROPOSAL 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>

                                <div className='col-start-start w-full'>
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>

                                    <Spacing height="0.25rem" />   
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                </div>

                                <Spacing height="1.25rem" /> 
                                
                                <ContainerCardSection 
                                    style={{ width:"100%" }} 
                                    padding={'2.55rem'} 
                                    className="col-start-start w-full">    

                                    <span className='subtitle'>Detail Rencana Kegiatan</span>
                                    
                                    <Spacing height="1rem" />   
                                    
                                    <div className="w-full">
                                        <InputTextWithPrompt 
                                            width={"100%"} 
                                            prompt={"Judul Kegiatan"} 
                                            type={"text"} 
                                            id={"title"} 
                                            inputHeight={'2.25rem'} 
                                            name={"title"} 
                                            defaultValue={initialState?.title} 
                                            onBlur={(e) => handleChange(e)} />    {/* 415px */}
                                        <Spacing height="2.85rem" />   
                                    
                                        <span className='subtitle'>Lokasi Kegiatan</span>
                                        
                                        <Spacing height="1rem" />    

                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Provinsi"} 
                                            options={provinsi?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"province_code"} 
                                            value={parseInt(initialState?.province_code)} 
                                            onChange={(e) => handleChangeProvinsi(e)} />  
                                            
                                        <Spacing height="0.75rem" /> 
                                        
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kota/Kabupaten"} 
                                            disabled={kota.length === 0}
                                            options={kota?.data?.kota?? ['pilih kota/kabupaten']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kota_code"} 
                                            value={parseInt(initialState?.kota_code)} 
                                            onChange={(e) => handleChange(e)}  /> 
                                        
                                        <Spacing height="0.75rem" />
                                    
                                    
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kecamatan"} 
                                            disabled={kecamatan.length === 0}
                                            options={kecamatan?.data?.kecamatan?? ['pilih kecamatan']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kecamatan_code"} 
                                            value={parseInt(initialState?.kecamatan_code)} 
                                            onChange={(e) => handleChange(e)} /> 
                                        
                                        <Spacing height="0.75rem" /> 

                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kelurahan"} 
                                            disabled={kelurahan.length === 0}
                                            options={kelurahan?.data?.kelurahan?? ['pilih kelurahan']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kelurahan_code"} 
                                            value={parseInt(initialState?.kelurahan_code)} 
                                            onChange={(e) => handleChange(e)} />
                                    
                                        <Spacing height="2.15rem" />

                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={"Alamat Kegiatan"} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
                                            defaultValue={initialState?.alamat_kegiatan} 
                                            onBlur={(e) => handleChange(e)} />   
                                        
                                        <Spacing height="0.75rem" />  
                                        
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={""} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan_ext"} 
                                            name={"alamat_kegiatan_ext"} 
                                            defaultValue={initialState?.alamat_kegiatan_ext} 
                                            onBlur={(e) => handleChange(e)} />  
                                
                                        <Spacing height="1.95rem" />   

                                        <InputTextWithPrompt 
                                            className={'w-full'}
                                            prompt={"Tanggal Kegiatan"} 
                                            type={"date"} 
                                            id={"tanggal_kegiatan"} 
                                            name={"tanggal_kegiatan"} 
                                            value={initialState?.tanggal_kegiatan} 
                                            onChange={handleChange} />   

                                        <Spacing height="0.75rem" /> 

                                        <InputTextWithPrompt 
                                            className={'w-full'}
                                            prompt={"Waktu Kegiatan"} 
                                            type={"date"} 
                                            id={"waktu_kegiatan"} 
                                            name={"waktu_kegiatan"} 
                                            value={initialState?.waktu_kegiatan} 
                                            onChange={handleChange} />

                                        <div className="col-start-start w-full">
                                            <label className="label" htmlFor='time-range'> Waktu Kegiatan </label>
                                            <div class="time-range" style={{ width:"100%" }}>
                                                <input type="time" id="start-time" name="start_time" onBlur={(e) => handleChange(e)} defaultValue={initialState?.start_time}/>
                                                <span>-</span>
                                                <input type="time" id="end-time" name="end_time" onBlur={(e) => handleChange(e)} defaultValue={initialState?.end_time}/>
                                            </div>
                                        </div>

                                        <Spacing height="3.5rem" />
                                    
                                        <ButtonSolid 
                                            label="Berikutnya" 
                                            iconPost={<FaArrowRight/>} 
                                            className={'w-full'} />  
                                    </div>

                                </ContainerCardSection>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    }

                    {index === 5 && (
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => setIndex(index - 1)}/> ISI FORM PROPOSAL 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>

                                <div className='col-start-start w-full'>
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>

                                    <Spacing height="0.25rem" />   
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.jenis_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                </div>

                                <Spacing height="1.25rem" /> 
                                
                                <ContainerCardSection 
                                    style={{ width:"100%" }} 
                                    padding={'2.55rem'} 
                                    className="col-start-start w-full">    
                                    <span className='page-number'>HALAMAN 2 DARI 3</span>
                                    <span className='subtitle'>Proposal Kegiatan</span>
                                    
                                    <Spacing height="2.25rem" />   
                                    
                                    <div className="w-full">
                                        <InputTextArea
                                            prompt={"Latar belakang kegiatan"}
                                            id="proposal_kegiatan"
                                            name={"proposal_kegiatan"}
                                            subLabel={"Project Background"}
                                            rows={4}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>                                    

                                    <div className='w-full'>                                    
                                        <InputTextArea
                                            prompt={"Tujuan kegiatan"}
                                            id="tujuan_kegiatan"
                                            name={"tujuan_kegiatan"}
                                            subLabel={"Objectives"}
                                            rows={4}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>
                                    
                                    <div className='w-full'>                                    
                                        <InputTextArea
                                            prompt={"Ruang lingkup kegiatan"}
                                            id="ruang_lingkup_kegiatan"
                                            name={"ruang_lingkup_kegiatan"}
                                            rows={4}
                                            subLabel={"Scope of Work"}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>

                                    <div className='row-start-start w-full'>
                                        <Spacing height="2.85rem" />
                                    </div>

                                    <Spacing height="3.5rem" />
                                    
                                    <section className='row-between-start w-full'>
                                        <ButtonOutlined
                                            onClick={() => setIndex(index - 1)} 
                                            label="Previous"
                                            width={"47%"}
                                            iconPre={<FaArrowLeft/>} />

                                        <ButtonSolid 
                                            label="Berikutnya" 
                                            iconPost={<FaArrowRight/>} 
                                            onClick={() => handlePostForm(initialState, index + 1)}
                                            width={'47%'} />  
                                    </section>

                                </ContainerCardSection>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    )}
                </MobileWrapper>
            </MobileView>

            <BrowserView>
                <Wrapper
                    size="lg"
                    scrollable
                    alignment="center"
                    visible={showFormModal}
                    onClose={toggleFormModal}
                >
                    {index === 1 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">BUAT PENGAJUAN BARU</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH TEMA</span>
                                </div>
                                <div className='col-center-center w-full'>
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign:"center", fontSize: "16px" }}>Pilih tema yang anda ingin ajukan</span>
                                    <Spacing height="1.75rem" />
                                    {tematikKegiatan.data ? tematikKegiatan.data.map((n, idx) => (
                                        <>
                                            <div className="row-start-start description-subtitle" style={{ cursor:"pointer" }} onClick={() => handleGetSubTematikData(n, index + 1)}>
                                                <div style={{ marginRight: "10px" }}>
                                                    <img src={imgUrls[idx]}></img>
                                                </div>
                                                <div>
                                                    <span className="subtitle">{n.tematik_kegiatan}</span>
                                                    <Spacing height="0.7rem" />
                                                    <span className="description">{n?.deskripsi_tematik}</span>
                                                </div>
                                            </div>
                                            <Spacing height="0.7rem" />
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                </div>
                                <Spacing height="2.7rem" /> 
                            </CModalBody>
                        </>
                    }

                    {index === 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetTematikData(index - 1)}/> 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH SUB TEMA</span>
                                </div>
                                <div className="col-center-center">
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign: "center", fontSize: "16px" }}>Pilih subtema kegiatan yang anda ingin ajukan</span>
                                    <Spacing height="1.75rem" />
                                    <div className="break">
                                        {tematikKegiatan.data ? tematikKegiatan.data.map((n, idx) => (
                                            <>
                                                <div className="col-around-center price-tag w-full" style={{ cursor: "pointer" }} onClick={() => handleGetPaketKategoriData(n, index + 1)}>
                                                    <img style={{ width:'90px', height:'90px' }} src={imgUrlPage2[idx]}></img>
                                                    <span className="subtitle" style={{ fontSize:'16px', textAlign:'center' }}>{n.sub_tematik_kegiatan}</span>
                                                </div>
                                            </>
                                        )) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    }

                    {index === 3 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetSubTematikData(data, index - 1)}/>     
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH KEGIATAN</span>
                                </div>
                                <div className="col-start-start w-full">
                                    <Spacing height="1.25rem" />
                                    <span className='description' style={{ textAlign: "center", fontSize: "16px" }}>Pilih salah satu paket kegiatan yang ingin anda ajukan </span>
                                    <Spacing height="1.75rem" />
                                    {paketKategoriData.data ? paketKategoriData.data.map((n, i) => (
                                        <>
                                            <div className="row-between-start description-subtitle" style={{ width:'100%' }}>
                                            
                                                <div className="row-start-center">
                                                    <WrapperChoiceBox 
                                                        style={{ marginTop:'1.25rem', marginRight: '1.5rem', cursor: 'pointer' }} 
                                                        id={`${n.jenis_kegiatan}-${i}`} 
                                                        label=""
                                                        onClick={() => handleCheck(n)} 
                                                        checked={kategori.jenis_kegiatan === n.jenis_kegiatan}/>

                                                    <div className="row-start-center">
                                                        <div style={{ marginRight: "1.5rem", marginTop:'0.75rem' }}>
                                                            <img height='38.33px' src={kategori.jenis_kegiatan === n.jenis_kegiatan ? Vector : VectorBlack}></img>
                                                        </div>
                                                        <div style={{ marginTop:'0.75rem' }}>
                                                            <span style={{ fontSize:'var(--font-size-normal)', fontWeight:'var(--font-weight-semibold)'}}>{n.jenis_kegiatan}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ChoiceBoxStringWithPrompt 
                                                    disabled={kategori.jenis_kegiatan !== n.jenis_kegiatan}
                                                    className={'row-end-end'}
                                                    prompt={n.jenis_kegiatan === "Penanaman Pohon" ? 'Jumlah Hectare' : 'Jumlah Peserta'} 
                                                    options={n.paket_kegiatan} 
                                                    id={'jumlah_peserta'}
                                                    height={'2.25rem'} 
                                                    name={'paket_kegiatan_id'} 
                                                    onChange={handleChange}/>
                                            </div>
                                            <Spacing height="1.25rem" />
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                    <Spacing height="2.7rem" /> 
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>
                                    <div className="col-start-start w-full">
                                        <Spacing height="1.25rem" />
                                        <div className="row-between-start description-subtitle" style={{ width:'100%' }}>
                                            <div className="col-start-start">
                                                <span className="description" style={{ color: "var(--color-primary-dark)" }}>Rehabilitasi:</span>
                                                <Spacing height="0.45rem" />
                                                <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                            </div>
                                            
                                            <ButtonSolid 
                                                onClick={() => setIndex(index + 1)} 
                                                disabled={!kategori?.jenis_kegiatan}
                                                label={'Mulai Pengajuan'} 
                                                width={"9.5rem"} 
                                                height={"2.75rem"} 
                                                bgColor={"var(--color-primary-dark)"} />
                                                
                                        </div>
                                    </div>
                                </div>
                                <Spacing height="2.7rem" /> 
                            </CModalBody>
                        </>
                    }

                    {index === 4 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetPaketKategoriData(data, index - 1)}/> ISI FORM PROPOSAL 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>

                                <div className='col-start-start w-full'>
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>

                                    <Spacing height="0.25rem" />   
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                </div>

                                <Spacing height="1.25rem" /> 
                                
                                <ContainerCardSection 
                                    style={{ width:"100%" }} 
                                    padding={'2.55rem'} 
                                    className="col-start-start w-full">    
                                    <span className='page-number'>HALAMAN 1 DARI 3</span>
                                    <span className='subtitle'>Detail Rencana Kegiatan</span>
                                    
                                    <Spacing height="1rem" />   
                                    
                                    <div className="w-full">
                                        <InputTextWithPrompt 
                                            width={"100%"} 
                                            prompt={"Judul Kegiatan"} 
                                            type={"text"} 
                                            id={"title"} 
                                            name={"title"} 
                                            inputHeight={'2.25rem'} 
                                            defaultValue={initialState?.title} 
                                            onBlur={(e) => handleChange(e)} />    {/* 415px */}
                                        <Spacing height="2.85rem" />   
                                    </div>
                                    
                                    <span className='subtitle'>Lokasi Kegiatan</span>
                                    
                                    <Spacing height="1rem" />    

                                    <div className='row-between-center w-full'> 
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Provinsi"} 
                                            options={provinsi?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"province_code"} 
                                            value={parseInt(initialState?.province_code)} 
                                            onBlur={(e) => handleChangeProvinsi(e)} />  
                                        
                                        <Spacing width="4.75rem" /> 
                                        
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kota/Kabupaten"} 
                                            disabled={kota.length === 0}
                                            options={kota?.data?.kota?? ['pilih kota/kabupaten']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kota_code"} 
                                            value={parseInt(initialState?.kota_code)} 
                                            onChange={(e) => handleChangeKabupaten(e)}  /> 
                                    </div>
                                    
                                    <Spacing height="0.75rem" />
                                    
                                    <div className='row-start-start w-full'>
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kecamatan"} 
                                            disabled={kecamatan.length === 0}
                                            options={kecamatan?.data?.kecamatan?? ['pilih kecamatan']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kecamatan_code"} 
                                            value={parseInt(initialState?.kecamatan_code)} 
                                            onChange={(e) => handleChangeKecamatan(e)} /> 
                                        
                                        <Spacing width="4.75rem" />

                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kelurahan"}
                                            disabled={kelurahan.length === 0} 
                                            options={kelurahan?.data?.kelurahan?? ['pilih kelurahan']} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kelurahan_code"} 
                                            value={parseInt(initialState?.kelurahan_code)} 
                                            onChange={(e) => handleChange(e)} />
                                    </div>

                                    <Spacing height="2.15rem" />

                                    <div className="w-full">
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={"Alamat Kegiatan"} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
                                            defaultValue={initialState?.alamat_kegiatan} 
                                            onBlur={(e) => handleChange(e)} />   
                                        
                                        <Spacing height="0.75rem" />  
                                        
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={""} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan_ext"} 
                                            name={"alamat_kegiatan_ext"}
                                            defaultValue={initialState?.alamat_kegiatan_ext} 
                                            onBlur={(e) => handleChange(e)} />  
                                    </div>
                                    
                                    <Spacing height="1.95rem" />   

                                    <div className='row-between-center w-full'>
                                        <InputTextWithPrompt 
                                            className={'w-full'}
                                            prompt={"Tanggal Kegiatan"} 
                                            type={"date"} 
                                            id={"tanggal_kegiatan"} 
                                            name={"tanggal_kegiatan"} 
                                            value={initialState?.tanggal_kegiatan} 
                                            onChange={handleChange} />   

                                        <Spacing width="4.75rem" />

                                        <div className="col-start-start w-full">
                                            <label className="label" htmlFor='time-range'> Waktu Kegiatan </label>
                                            <div class="time-range" style={{ width:"100%" }}>
                                                <input type="time" id="start-time" name="start_time" onBlur={(e) => handleChange(e)} defaultValue={initialState?.start_time}/>
                                                <span>-</span>
                                                <input type="time" id="end-time" name="end_time" onBlur={(e) => handleChange(e)} defaultValue={initialState?.end_time}/>
                                            </div>
                                        </div>
                                    </div>

                                    <Spacing height="3.5rem" />
                                    
                                    <section className='row-end-end w-full'>
                                        <ButtonSolid 
                                            label="Berikutnya" 
                                            iconPost={<FaArrowRight/>} 
                                            onClick={() => setIndex(index + 1)}
                                            width={'47%'} />  
                                    </section>

                                </ContainerCardSection>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    }

                    {index === 5 && (
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => setIndex(index - 1)}/> ISI FORM PROPOSAL 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>

                                <div className='col-start-start w-full'>
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>

                                    <Spacing height="0.25rem" />   
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                </div>

                                <Spacing height="1.25rem" /> 
                                
                                <ContainerCardSection 
                                    style={{ width:"100%" }} 
                                    padding={'2.55rem'} 
                                    className="col-start-start w-full">    
                                    <span className='page-number'>HALAMAN 2 DARI 3</span>
                                    <span className='subtitle'>Proposal Kegiatan</span>
                                    
                                    <Spacing height="2.25rem" />   
                                    
                                    <div className="w-full">
                                        <InputTextArea
                                            prompt={"Latar belakang kegiatan"}
                                            id="proposal_kegiatan"
                                            name={"proposal_kegiatan"}
                                            subLabel={"Project Background"}
                                            rows={4}
                                            onBlur={(e) => handleChange(e)}
                                            defaultValue={initialState.proposal_kegiatan}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>                                    

                                    <div className='w-full'>                                    
                                        <InputTextArea
                                            prompt={"Tujuan kegiatan"}
                                            id="tujuan_kegiatan"
                                            name={"tujuan_kegiatan"}
                                            subLabel={"Objectives"}
                                            rows={4}
                                            onBlur={(e) => handleChange(e)}
                                            defaultValue={initialState.tujuan_kegiatan}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>
                                    
                                    <div className='w-full'>                                    
                                        <InputTextArea
                                            prompt={"Ruang lingkup kegiatan"}
                                            id="ruang_lingkup_kegiatan"
                                            name={"ruang_lingkup_kegiatan"}
                                            subLabel={"Scope of Work"}
                                            rows={4}
                                            onBlur={(e) => handleChange(e)}
                                            defaultValue={initialState.ruang_lingkup_kegiatan}
                                            textLimit={"(40 - 250 kata)"} />
                                        <Spacing height="1.85rem" />
                                    </div>

                                    <div className='col-start-start w-full'>
                                        {/* <input type="file" onInput={(e) => handleChange(e)} /> */}
                                        <InputTextWithPrompt 
                                            className={'w-full'}
                                            name={"fileDocument"}
                                            width={"100%"}
                                            inputHeight={"3.125rem"}
                                            id={'fileDocument'}
                                            type={'file'}
                                            prompt={"Lampiran"}
                                            onChange={handleChange}
                                        />
                                        <input type="hidden" onChange={(e) => console.log(e)}/>
                                        <span className="description-label">pdf/jpg/jpeg/png maksimum 10 MB per file</span>
                                    </div>

                                    <Spacing height="3.5rem" />
                                    
                                    <section className='row-between-start w-full'>
                                        <ButtonOutlined
                                            onClick={() => setIndex(index - 1)} 
                                            label="Kembali"
                                            width={"47%"}
                                            iconPre={<FaArrowLeft/>} />

                                        <ButtonSolid 
                                            label="Berikutnya" 
                                            iconPost={<FaArrowRight/>} 
                                            onClick={() => handlePostForm(initialState, index + 1)}
                                            width={'47%'} />  
                                    </section>

                                </ContainerCardSection>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    )}

                    {index === 6 && (
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description">
                                    <FaArrowLeft style={{ cursor: "pointer" }} onClick={() => setIndex(index - 1)}/> ISI FORM PROPOSAL 
                                </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div className="col-start-start">
                                    <span className='page-number'>HALAMAN 3 DARI 3</span>
                                    <span className='subtitle'>Rencana Anggaran Biaya</span>
                                    <span className="description">{`${kategori.jenis_kegiatan} ${kategori.paket_kegiatan?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${kategori.jenis_kegiatan === "Penanaman Pohon" && kategori.jenis_kegiatan ? 'Hectare' : 'Orang'}`}</span>
                                </div>
                                
                                <Spacing height="2.25rem" />   
                                
                                <CTable borderless>
                                    <CTableHead>
                                        <CTableRow className="table-head">
                                            <CTableHeaderCell>No.</CTableHeaderCell>
                                            <CTableHeaderCell>Deskripsi</CTableHeaderCell>
                                            <CTableHeaderCell>Satuan</CTableHeaderCell>
                                            <CTableHeaderCell>Harga Unit</CTableHeaderCell>
                                            <CTableHeaderCell>Jumlah</CTableHeaderCell>
                                            {kategori.jenis_kegiatan === 'Pelatihan' && <CTableHeaderCell>Membership</CTableHeaderCell>}
                                            <CTableHeaderCell>Harga Total</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody className='position-relative px-5'>
                                        {dataForm.komponen_rab ? Object.keys(dataForm.komponen_rab).map((n, i) => (
                                            <>
                                                <CTableRow className="outer-row">
                                                    <CTableDataCell>
                                                        {String.fromCharCode((i + 65))}
                                                    </CTableDataCell>
                                                    <CTableDataCell>
                                                        {n}
                                                    </CTableDataCell>
                                                    <CTableDataCell />
                                                    <CTableDataCell />
                                                    <CTableDataCell />
                                                    <CTableDataCell />
                                                </CTableRow>
                                                
                                                {dataForm.komponen_rab[`${n}`].map((rowDetails, idx) => (
                                                    <>
                                                        <CTableRow className="inner-row w-full">
                                                            <CTableDataCell align="right">{idx + 1}</CTableDataCell>
                                                            <CTableDataCell>
                                                                {rowDetails.jenis_komponen_rab?? '-'}
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                {rowDetails.satuan?? '-'}
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                <InputTextWithPrompt
                                                                    inputHeight={'1.75rem'}
                                                                    width={'6.65rem'}
                                                                    name={`harga_unit`}
                                                                    defaultValue={new Intl.NumberFormat('id-ID').format(
                                                                        postData ? postData[n]?.[idx]?.harga_unit : rowDetails.harga_unit,
                                                                    )?? '-'}
                                                                    onBlur={(e) => handleChangeQty(n, e, idx)}
                                                                />
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                <InputTextWithPrompt
                                                                    inputHeight={'1.75rem'}
                                                                    width={'6.25rem'}
                                                                    name={`qty`}
                                                                    defaultValue={new Intl.NumberFormat('id-ID').format(
                                                                        postData ? postData[n]?.[idx]?.qty : rowDetails.qty,
                                                                    )?? '-'}
                                                                    onBlur={(e) => handleChangeQty(n, e, idx)}
                                                                />
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                {new Intl.NumberFormat('id-ID').format(
                                                                    rowDetails.qty * rowDetails.harga_unit,
                                                                )?? '-'}
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                    </>
                                                ))}
                                            </>
                                        )) : (
                                            <></>
                                        )}
                                    </CTableBody>
                                </CTable>
                                <div 
                                    style={{ 
                                        borderTop:'2px solid var(--color-disable)', 
                                        borderBottom:'2px solid var(--color-disable)',
                                        padding:'0.225rem',
                                        backgroundColor: 'var(--color-disable-light)',
                                    }}
                                    className="row-end-start w-full" 
                                >
                                    <span className="subtitle">TOTAL</span>
                                    <Spacing width={'4.45rem'}/>
                                    <span className="subtitle">{getTotal(postData, 'harga_unit', 'qty')}</span>
                                </div>
                                <Spacing height="2.5rem" />
                                
                                <section className='col-center-center w-full'>
                                    <div className="row-center-start w-full" style={{ padding:'0 2.25rem' }}>
                                        <CFormCheck style={{ width: "1.575rem" }} checked={confirm} onClick={() => setConfirm(!confirm)}></CFormCheck>
                                        <Spacing width={"1.75rem"}/>
                                        <span className="description">Dengan ini saya menyatakan bahwa informasi yang disampaikan adalah benar dan bahwa kegiatan ini belum didanai oleh program lain</span>
                                    </div>
                                    <Spacing height={'1.85rem'}/>
                                    <ButtonSolid 
                                        label="Kirim Pengajuan" 
                                        disabled={!confirm}
                                        onClick={() => {
                                            handleCloseForm()
                                        }}
                                        width={'25%'} />  
                                </section>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    )}
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default CreateSubmissionModal
