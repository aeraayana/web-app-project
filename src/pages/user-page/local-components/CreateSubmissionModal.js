import styled from "styled-components";
import { CFormCheck, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { ChoiceBoxStringWithPrompt, Spacing } from "../../../components";
import React, { useEffect } from "react";
import Pana from "../../../assets/images/landing/pana.png";
import Papa from "../../../assets/images/landing/papa.png";
import Amico from "../../../assets/images/landing/amico.png";
import Vector from "../../../assets/images/landing/Vector.png";
import Protect from "../../../assets/images/landing/protect.png";
import Sun from "../../../assets/images/landing/sun.png";
import Planting from "../../../assets/images/landing/planting.png";
import Water from "../../../assets/images/landing/water.png";
import { FaArrowLeft } from "react-icons/fa";
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
        font-weight: var(--font-weight-normal);
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
        border: 1px solid var(--color-disable);
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


    input[type="checkbox"] {
        appearance: none;
        background-color: #fff;
        font: inherit;
        color: currentColor;
        width: 1.75em;
        height: 1.75em;
        border: 0.1rem solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
    }
    
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid green;
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
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);   /* 24px */
        color: #667085;
        &:focus{
            outline: none !important;
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
        }
    }

    .description-subtitle{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
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
        width: 85%;
    }

    .price-tag{
        font-family: var(--font-family-secondary);
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

    input[type="checkbox"] {
        appearance: none;
        background-color: #fff;
        font: inherit;
        color: currentColor;
        width: 1.75em;
        height: 1.75em;
        border: 0.1rem solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
    }
    
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid green;
    }
`

const CreateSubmissionModal = ({ show, onClose, index, setIndex }) => {
    // const [index, setIndex] = React.useState(i);
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
    } = useAppContext();

    const [data, setData] = React.useState(null);
    const [kategori, setKategori] = React.useState({
        nama_paket_kegiatan: '',
    });

    React.useEffect(() => { 
        // getProvinsi()
        getTematikKegiatan()
        // getKecamatan()
        // getKota()
        // getKelurahan()
    }, []);

    console.log(kategori);

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
        setData({ subId: e.id, id: e.tematik_kegiatan_id });
        await getPaketKategoriData({ categoryId: e.tematik_kegiatan_id, subId: e.id })
        setIndex(index);
    }

    const handleChange = (e) => {

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
                                <Spacing height="2.7rem" /> {/* 4px */}
                            </CModalBody>
                        </>
                    }

                    {index === 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description"><FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetTematikData(index - 1)}/> </CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <div>
                                    <span className='title-description'>PILIH SUB TEMA</span>
                                </div>
                                <div className="col-start-center">
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
                                <Spacing height="2.7rem" /> {/* 4px */}
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
                                <Spacing height="2.7rem" /> {/* 4px */}
                            </CModalBody>
                        </>
                    }

                    {index === 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description"><FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetTematikData(index - 1)}/> </CModalTitle>
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
                                <Spacing height="2.7rem" /> {/* 4px */}
                            </CModalBody>
                        </>
                    }

                    {index === 3 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description"><FaArrowLeft style={{ cursor: "pointer" }} onClick={() => handleGetSubTematikData(data, index - 1)}/> </CModalTitle>
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
                                            <div className="row-between-start description-subtitle" style={{ width:'100%' }} onClick={() => setKategori(n)}>
                                            <WrapperChoiceBox className='center' style={{ marginTop:'1.525rem', marginRight: '1rem', cursor: 'pointer' }} id={`${n.nama_paket_kegiatan}-${i}`} label="" checked={kategori.nama_paket_kegiatan === n.nama_paket_kegiatan} defaultChecked/>
                                            <div className="row-start-center">
                                                <div style={{ marginRight: "3rem" }}>
                                                    <img src={Vector}></img>
                                                </div>
                                                <div style={{ marginRight: "5rem" }}>
                                                    <span className="subtitle">{n.nama_paket_kegiatan}</span>
                                                    <Spacing height="0.7rem" />
                                                    <span className="row-start-start description">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height='21' width='8.75' viewBox="0 0 320 512">
                                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                                        <p style={{ marginLeft:'1.5rem' }}>
                                                            Lihat Selengkapnya
                                                        </p>
                                                    </span>
                                                </div>
                                            </div>
                                            <ChoiceBoxStringWithPrompt prompt={'Jumlah Peserta'} options={n.peserta} id={'jumlah_peserta'} height={'2.25rem'} onChange={() => handleChange}/>
                                        </div>
                                        </>
                                    )) : (
                                        <></>
                                    )}
                                    <Spacing height="2.7rem" /> {/* 4px */}
                                    <span className='subtitle-description'>PAKET KEGIATAN</span>
                                </div>
                                <Spacing height="2.7rem" /> {/* 4px */}
                            </CModalBody>
                        </>
                    }
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default CreateSubmissionModal
