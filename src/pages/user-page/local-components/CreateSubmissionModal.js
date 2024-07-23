import styled from "styled-components";
import { CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { Spacing } from "../../../components";
import React, { useEffect } from "react";
import Pana from "../../../assets/images/landing/pana.png";
import { FaArrowLeft } from "react-icons/fa";
import { BrowserView, MobileView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";

const dummyData = [
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "tematik_kegiatan": "FOLU GOES TO SCHOOL",
        "tematik_description": "Kegiatan Folu Goes to School diperuntukkan sekolah Adiwiyata setara SMA dan dibawahnya bertujuan untuk peningkatan pengetahuan, kesadaran, dan partisipasi terhadap perubahan iklim dan mitigasi berbasis lahan. Lingkup mencakup sosialisasi, pelatihan, aksi.",
    },
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "tematik_kegiatan": "FOLU TERRA",
        "tematik_description": "Folu Terra (Kesejahteraan Rakyat) dapat diikuti penerima Kalpataru, Pemuda, dan komunitas lainnya. Kegiatan yang dicakup seperti sampah, energi, dan DAS/ekoriparian. Jenis kegiatan dapat berupa aksi bersih lingkungan.",
    },
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "tematik_kegiatan": "FOLU BIODIVERSITY",
        "tematik_description": "Kegiatan ini menyasar kelompok penerima Kalpataru, pemuda, dan kelompok masyarakat lainnya.  Kegiatan-kegiatan ini mencakup tema seperti sampah, pariwisata, kesehatan, energi, dan penghijauan dengan lingkup jenis kegiatan diantaranya sosialisasi dan aksi.",
    },
]

const dummySubData = [
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "sub_tematik_kegiatan": "Penghijauan",
    },
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "sub_tematik_kegiatan": "Energi Terbarukan",
    },
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "sub_tematik_kegiatan": "Pemulihan Sampah",
    },
    {
        "id": "562e4f13-57fd-4c1f-8b72-18b90c11a8ee",
        "sub_tematik_kegiatan": "Sampah",
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
`

const CreateSubmissionModal = ({ show, onClose, index, setIndex }) => {
    // const [index, setIndex] = React.useState(i);
    const { tematikKegiatan, getTematikKegiatan } = useAppContext();

    React.useEffect(() => {getTematikKegiatan()},[])
    console.log(tematikKegiatan);

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
                    {index == 1 && 
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
                                    {dummyData ? dummyData.map((n) => (
                                        <>
                                            <div className="row-start-start description-subtitle" style={{ cursor:"pointer" }} onClick={() => setIndex(index + 1)}>
                                                <div style={{ marginRight: "10px" }}>
                                                    <img src={Pana}></img>
                                                </div>
                                                <div>
                                                    <span className="subtitle">{n.tematik_kegiatan}</span>
                                                    <Spacing height="0.7rem" />
                                                    <span className="description">{n.tematik_description}</span>
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

                    {index == 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description"><FaArrowLeft style={{ cursor: "pointer" }} onClick={() => setIndex(index-1)}/> </CModalTitle>
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
                                        {dummySubData ? dummySubData.map((n) => (
                                            <>
                                                <div className="col-center-center price-tag" style={{ cursor: "pointer" }} onClick={() => setIndex(index + 1)}>
                                                    <img src={Pana}></img>
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
                    {index == 1 && 
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
                                    {dummyData ? dummyData.map((n) => (
                                        <>
                                            <div className="row-start-start description-subtitle" style={{ cursor:"pointer" }} onClick={() => setIndex(index + 1)}>
                                                <div style={{ marginRight: "10px" }}>
                                                    <img src={Pana}></img>
                                                </div>
                                                <div>
                                                    <span className="subtitle">{n.tematik_kegiatan}</span>
                                                    <Spacing height="0.7rem" />
                                                    <span className="description">{n.tematik_description}</span>
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

                    {index == 2 && 
                        <>
                            <CModalHeader>
                                <CModalTitle className="title-description"><FaArrowLeft style={{ cursor: "pointer" }} onClick={() => setIndex(index-1)}/> </CModalTitle>
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
                                        {dummySubData ? dummySubData.map((n) => (
                                            <>
                                                <div className="col-center-center price-tag" style={{ cursor: "pointer" }} onClick={() => setIndex(index + 1)}>
                                                    <img src={Pana}></img>
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
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default CreateSubmissionModal
