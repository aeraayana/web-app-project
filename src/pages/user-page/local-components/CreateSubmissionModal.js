import styled from "styled-components";
import { CFormCheck, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { ButtonOutlined, ButtonSolid, ChoiceBoxStringWithPrompt, ContainerCardSection, InputTextWithPrompt, InputTextWithPromptPostLabel, Spacing } from "../../../components";
import React, { useEffect } from "react";
import Pana from "../../../assets/images/landing/pana.png";
import Papa from "../../../assets/images/landing/papa.png";
import Amico from "../../../assets/images/landing/amico.png";
import Vector from "../../../assets/images/landing/Vector.png";
import VectorBlack from "../../../assets/images/landing/VectorBlack.png";
import Protect from "../../../assets/images/landing/protect.png";
import Sun from "../../../assets/images/landing/sun.png";
import Planting from "../../../assets/images/landing/planting.png";
import Water from "../../../assets/images/landing/water.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BrowserView, MobileView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";

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
    Protect,
    Sun,
    Planting,
    Water,
]

const dummyData = [
    {
        "tematik_description": "Kegiatan Folu Goes to School diperuntukkan sekolah Adiwiyata setara SMA dan dibawahnya bertujuan untuk peningkatan pengetahuan, kesadaran, dan partisipasi terhadap perubahan iklim dan mitigasi berbasis lahan. Lingkup mencakup sosialisasi, pelatihan, aksi.",
    },
    {
        "tematik_description": "Folu Terra (Kesejahteraan Rakyat) dapat diikuti penerima Kalpataru, Pemuda, dan komunitas lainnya. Kegiatan yang dicakup seperti sampah, energi, dan DAS/ekoriparian. Jenis kegiatan dapat berupa aksi bersih lingkungan.",
    },
    {
        "tematik_description": "Kegiatan ini menyasar kelompok penerima Kalpataru, pemuda, dan kelompok masyarakat lainnya.  Kegiatan-kegiatan ini mencakup tema seperti sampah, pariwisata, kesehatan, energi, dan penghijauan dengan lingkup jenis kegiatan diantaranya sosialisasi dan aksi.",
    },
]

const Wrapper = styled(CModal)`
    padding: 2.5rem 5.5rem 2.5rem 5.5rem;
    
    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-semiblack);
    }

    .title-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);
        color: var(--color-semiblack);
        letter-spacing: 2px;
    }

    .subtitle-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        letter-spacing: 2px;
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);   /* 24px */
        color: #667085;
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-black);
        padding: 20px;
        width: 85%;
        height: 100%; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .break {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 85%;
    }

    .price-tag{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
        padding: 20px;
        margin: 1rem;
        height: 200px; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .modal-body {
        padding: 2rem 3.55rem;
    }

    input[type="checkbox"] {
        font: inherit;
        width: 1.75em;
        height: 1.75em;
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]:checked {
        transform: scale(1);
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        background-color: var(--color-primary);
    }
`

const MobileWrapper = styled(CModal)`
    padding: 0rem;

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-semiblack);
    }

    .title-description{
        font-family: var(--font-family-primary);
        letter-spacing: 2px;
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);
        color: var(--color-semiblack);
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);   /* 24px */
        color: #667085;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        &:focus{
            outline: none !important;
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
        }
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-black);
        padding: 20px;
        width: 85%;
        height: 100%; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .description-checkbox{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
        padding: 20px;
        width: 100%;
        height: 100%; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .break {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }

    .price-tag{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
        padding: 20px;
        margin: 0.25rem;
        height: 200px; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    input[type="checkbox"] {
        font: inherit;
        width: 1.75em;
        height: 1.75em;
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]:checked {
        transform: scale(1);
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        background-color: var(--color-primary);
    }
`

const CreateSubmissionModal = ({ show, onClose, index, setIndex }) => {
    const [initialState, setInitialState] = React.useState(null)

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
        bidangFolu,
        getLokasiBidangFolu,
    } = useAppContext();

    const [data, setData] = React.useState(null);
    const [kategori, setKategori] = React.useState({
        nama_paket_kegiatan: '',
    });

    console.log(initialState);

    React.useEffect(() => { 
        Promise.all([
            getProvinsi(),
            getTematikKegiatan(),
            getKecamatan(),
            getKota(),
            getLokasiBidangFolu(),
            getKelurahan(),
        ])
    }, []);

    const handleGetSubTematikData = async (e, index) => {
        // console.log(e);
        await getSubTematikKegiatan({ categoryId: e.id });
        setIndex(index);
    }
    
    const handleGetTematikData = async(index) => {
        getTematikKegiatan()
        setIndex(index);
    }
    
    const handleGetPaketKategoriData = async (e, index) => {
        if(!data){
            setData({ id: e.id, tematik_kegiatan_id: e.tematik_kegiatan_id });
        }
        await getPaketKategoriData({ categoryId: e.tematik_kegiatan_id, subId: e.id })
        setIndex(index);
    }
    
    const handleChange = (e) => {
        const list = initialState;
        setInitialState({ ...list, [e.target.name]: e.target.value });
    }
    
    const handleCheck = (e) => {
        if(kategori.nama_paket_kegiatan === e.nama_paket_kegiatan){
            setKategori({ nama_paket_kegiatan: '' });
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
                    visible={show}
                    onClose={onClose}
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
                                                    <span className="description">{dummyData[idx]?.tematik_description}</span>
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
                                                id={`${n.nama_paket_kegiatan}-${i}`} 
                                                label="" 
                                                onClick={() => handleCheck(n)} 
                                                checked={kategori.nama_paket_kegiatan === n.nama_paket_kegiatan}/>

                                            <div className="col-center-center">
                                                <div className='row-start-start'>
                                                    <div style={{ marginTop:'0.75rem' }}>
                                                        <img height='38.33px' src={kategori.nama_paket_kegiatan ? Vector : VectorBlack}></img>
                                                    </div>
                                                    <div style={{ marginLeft:'2.5rem', marginTop:'0.75rem' }}>
                                                        <span style={{ fontSize:'var(--font-size-normal)', fontWeight:'var(--font-weight-semibold)'}}>{n.nama_paket_kegiatan}</span>
                                                    </div>
                                                </div>
                                                <Spacing height="1.25rem" />
                                                <ChoiceBoxStringWithPrompt 
                                                    prompt={'Jumlah Peserta'} 
                                                    options={n.peserta} 
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
                                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.nama_paket_kegiatan} ${kategori.peserta?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${initialState?.paket_kegiatan_id === '' ? '' : 'Orang'}`}</span>
                                            </div>
                                            
                                            <div className="col-end-end w-full">
                                                <ButtonSolid 
                                                    onClick={() => setIndex(index + 1)} 
                                                    disabled={!initialState?.paket_kegiatan_id}
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
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.nama_paket_kegiatan} ${kategori.peserta?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${initialState?.paket_kegiatan_id === '' ? '' : 'Orang'}`}</span>
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
                                            placeholder={initialState?.title} 
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
                                            onBlur={(e) => handleChange(e)} />  
                                            
                                        <Spacing height="0.75rem" /> 
                                        
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kota/Kabupaten"} 
                                            options={kota?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kota_code"} 
                                            value={parseInt(initialState?.kota_code)} 
                                            onChange={(e) => handleChange(e)}  /> 
                                        
                                        <Spacing height="0.75rem" />
                                    
                                    
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kecamatan"} 
                                            options={kecamatan?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kecamatan_code"} 
                                            value={parseInt(initialState?.kecamatan_code)} 
                                            onChange={(e) => handleChange(e)} /> 
                                        
                                        <Spacing height="0.75rem" /> 

                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kelurahan"} 
                                            options={kelurahan?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kelurahan_code"} 
                                            value={parseInt(initialState?.kelurahan_code)} 
                                            onChange={(e) => handleChange(e)} />
                                    
                                    
                                        <Spacing height="0.75rem" /> 
                                    
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Lokasi Bidang FOLU"} 
                                            options={bidangFolu?.data} 
                                            id={"lokasi_bidang_folu"} 
                                            name={"folu_location"} 
                                            height={'2.25rem'} 
                                            value={initialState?.folu_location} 
                                            onBlur={(e) => handleChange(e)} />  
                                        
                                        <Spacing height="2.15rem" />

                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={"Alamat Kegiatan"} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
                                            placeholder={initialState?.alamat_kegiatan} 
                                            onBlur={(e) => handleChange(e)} />   
                                        
                                        <Spacing height="0.75rem" />  
                                        
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={""} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
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
                </MobileWrapper>
            </MobileView>

            <BrowserView>
                <Wrapper
                    size="lg"
                    scrollable
                    alignment="center"
                    visible={show}
                    onClose={onClose}
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
                                                    <span className="description">{dummyData[idx]?.tematik_description}</span>
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
                                                <div className="col-center-center price-tag" style={{ cursor: "pointer" }} onClick={() => handleGetPaketKategoriData(n, index + 1)}>
                                                    <img src={imgUrlPage2[idx]}></img>
                                                    <span style={{ marginTop: "10px" }} className="subtitle">{n.sub_tematik_kegiatan}</span>
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
                                            
                                            <WrapperChoiceBox 
                                                className='center' 
                                                style={{ marginTop:'1.25rem', marginRight: '1rem', cursor: 'pointer' }} 
                                                id={`${n.nama_paket_kegiatan}-${i}`} 
                                                label="" 
                                                onClick={() => handleCheck(n)} 
                                                checked={kategori.nama_paket_kegiatan === n.nama_paket_kegiatan}/>

                                            <div className="row-start-center">
                                                <div style={{ marginRight: "1.5rem", marginTop:'0.75rem' }}>
                                                    <img height='38.33px' src={kategori.nama_paket_kegiatan ? Vector : VectorBlack}></img>
                                                </div>
                                                <div style={{ marginRight: "9.25rem", marginTop:'0.75rem' }}>
                                                    <span style={{ fontSize:'var(--font-size-normal)', fontWeight:'var(--font-weight-semibold)'}}>{n.nama_paket_kegiatan}</span>
                                                </div>
                                            </div>

                                            <ChoiceBoxStringWithPrompt 
                                                prompt={'Jumlah Peserta'} 
                                                options={n.peserta} 
                                                id={'jumlah_peserta'}
                                                height={'2.25rem'} 
                                                name={'paket_kegiatan_id'} 
                                                onChange={handleChange}/>
                                        </div>
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
                                                <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.nama_paket_kegiatan} ${kategori.peserta?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${initialState?.paket_kegiatan_id ? 'Orang' : ''}`}</span>
                                            </div>
                                            
                                            <ButtonSolid 
                                                onClick={() => setIndex(index + 1)} 
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
                                    
                                    <span className="subtitle" style={{ color: "var(--color-primary-dark)" }} >{`${kategori.nama_paket_kegiatan} ${kategori.peserta?.filter((item) => item.id === initialState?.paket_kegiatan_id)[0]?.jumlah_peserta?? ''} ${initialState?.paket_kegiatan_id === '' ? '' : 'Orang'}`}</span>
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
                                            name={"title"} 
                                            inputHeight={'2.25rem'} 
                                            placeholder={initialState?.title} 
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
                                            onBlur={(e) => handleChange(e)} />  
                                        
                                        <Spacing width="4.75rem" /> 
                                        
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kota/Kabupaten"} 
                                            options={kota?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kota_code"} 
                                            value={parseInt(initialState?.kota_code)} 
                                            onChange={(e) => handleChange(e)}  /> 
                                    </div>
                                    
                                    <Spacing height="0.75rem" />
                                    
                                    <div className='row-start-start w-full'>
                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kecamatan"} 
                                            options={kecamatan?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kecamatan_code"} 
                                            value={parseInt(initialState?.kecamatan_code)} 
                                            onChange={(e) => handleChange(e)} /> 
                                        
                                        <Spacing width="4.75rem" />

                                        <ChoiceBoxStringWithPrompt 
                                            className={'w-full'}
                                            prompt={"Kelurahan"} 
                                            options={kelurahan?.data} 
                                            id={"name"} 
                                            height={'2.25rem'} 
                                            name={"kelurahan_code"} 
                                            value={parseInt(initialState?.kelurahan_code)} 
                                            onChange={(e) => handleChange(e)} />
                                    </div>
                                    
                                    <Spacing height="0.75rem" /> 
                                
                                    <ChoiceBoxStringWithPrompt 
                                        className={'w-full'} 
                                        width={'47%'}
                                        prompt={"Lokasi Bidang FOLU"} 
                                        options={bidangFolu?.data} 
                                        id={"lokasi_bidang_folu"} 
                                        height={'2.25rem'} 
                                        name={"folu_location"} 
                                        value={initialState?.folu_location} 
                                        onBlur={(e) => handleChange(e)} />  
                                    
                                    <Spacing height="2.15rem" />

                                    <div className="w-full">
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={"Alamat Kegiatan"} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
                                            placeholder={initialState?.alamat_kegiatan} 
                                            onBlur={(e) => handleChange(e)} />   
                                        
                                        <Spacing height="0.75rem" />  
                                        
                                        <InputTextWithPrompt 
                                            width={"100%"}
                                            prompt={""} 
                                            type={"text"} 
                                            inputHeight={'2.25rem'} 
                                            id={"alamat_kegiatan"} 
                                            name={"alamat_kegiatan"} 
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

                                        <InputTextWithPrompt 
                                            className={'w-full'}
                                            prompt={"Waktu Kegiatan"} 
                                            type={"date"} 
                                            id={"waktu_kegiatan"} 
                                            name={"waktu_kegiatan"} 
                                            value={initialState?.waktu_kegiatan} 
                                            onChange={handleChange} />    {/* 415px */}
                                    </div>

                                    <Spacing height="3.5rem" />
                                    
                                    <section className='row-end-end w-full'>
                                        <ButtonSolid 
                                            label="Berikutnya" 
                                            iconPost={<FaArrowRight/>} 
                                            width={'47%'} />  
                                    </section>

                                </ContainerCardSection>
                                <Spacing height="2.7rem" />
                            </CModalBody>
                        </>
                    }
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default CreateSubmissionModal
