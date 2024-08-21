import React, { useEffect } from "react";
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
  } from '@mui/lab';
import { BrowserView, MobileView } from "react-device-detect";
import MobileWrapper from "../../../wrappers/user-page/mobile/UserCreateFormMobileWrapper";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import { CModalBody, CModalHeader, CModalTitle } from "@coreui/react";
import { ButtonSolid, Hyperlink, Loading, Spacing } from "../../../components";
import moment from "moment";

const DetailKegiatanModal = ({ show, onClose, data }) => {
    
    if(data.length === 0){
        return(
            <Loading/>
        )
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
                    <CModalHeader>
                        <CModalTitle className="title-description" style={{ paddingLeft:'2rem' }}>DETAIL KEGIATAN</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className="row-around-start w-full">
                            <div className="col-start-start w-full">
                                <span className="title-description">DETAIL KEGIATAN</span>
                                <Spacing height={'2.85rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">PAKET KEGIATAN</span>
                                    <span className="title-thin" style={{ color:'var(--color-primary-dark)' }}>{data?.data[0]?.tematik_kegiatan}</span>
                                    <Spacing height={'0.75rem'}/>
                                    <span className="title" style={{ color:'var(--color-primary-dark)' }}>{data?.data[0]?.sub_tematik_kegiatan} {data?.data[0]?.jumlah}</span>
                                </div>
                                <Spacing height={'0.25rem'}/>
                                <span className="label" style={{ fontSize:'var(--font-size-normal)' }}>No. {data?.data[0]?.nomor_pengajuan}</span>
                                <Spacing height={'2.25rem'} />

                                <div className="col-start-start">
                                    <span className="page-number">DANA YANG DISETUJUI</span>
                                    <span className="subtitle" style={{ color:'var(--color-primary-dark)' }}>Rp. {data?.data[0]?.dana_yang_disetujui}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">DANA DICAIRKAN</span>
                                    <span className="subtitle">Rp. {data?.data[0]?.dana_yang_dicairkan}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">TANGGAL KEGIATAN</span>
                                    <span className="subtitle">{moment(new Date(data?.data[0]?.tanggal_kegiatan)).format("DD MMMM yyyy")}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                            </div>

                            <div id="progress-bar" className="row-start-start w-full">
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot style={{ width:'40px', height:'40px', backgroundColor:'var(--color-black)' }} />
                                        <TimelineConnector className="connector" />
                                        <TimelineDot style={{ width:'40px', height:'40px' }} />
                                    </TimelineSeparator>
                                </TimelineItem>
                                
                                <Spacing width={'2.25rem'}/>
                                
                                <div className="col-start-start">
                                    <div className="col-start-start">
                                        <span className="page-number">TAHAP 1</span>
                                        <span className="subtitle">Verifikasi dan Validasi</span>
                                        <Hyperlink className='hyperlink' label={'Lihat Proposal'}/>
                                        <span className="sublabel">Dalam proses</span>
                                    </div>
                                    <Spacing height={'2.25rem'}/>
                                    <div className="col-start-start">
                                        <span className="page-number">TAHAP 2</span>
                                        <span className="subtitle">Informasi pencairan dana</span>
                                        <ButtonSolid height={'2.25rem'} disabled label={'Form Pencairan Dana'} width={'12rem'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Spacing height="2.7rem" /> 
                    </CModalBody>
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
                    <CModalHeader>
                    </CModalHeader>
                    <CModalBody>
                        <div className="row-around-start w-full">
                            <div className="col-start-start w-full">
                                <span className="title-description">DETAIL KEGIATAN</span>
                                <Spacing height={'2.85rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">PAKET KEGIATAN</span>
                                    <span className="title-thin" style={{ color:'var(--color-primary-dark)' }}>{data?.data[0]?.tematik_kegiatan}</span>
                                    <Spacing height={'0.75rem'}/>
                                    <span className="title" style={{ color:'var(--color-primary-dark)' }}>{data?.data[0]?.sub_tematik_kegiatan} {data?.data[0]?.jumlah}</span>
                                </div>
                                <Spacing height={'0.25rem'}/>
                                <span className="label" style={{ fontSize:'var(--font-size-normal)' }}>No. {data?.data[0]?.nomor_pengajuan}</span>
                                <Spacing height={'2.25rem'} />

                                <div className="col-start-start">
                                    <span className="page-number">DANA YANG DISETUJUI</span>
                                    <span className="subtitle" style={{ color:'var(--color-primary-dark)' }}>Rp. {data?.data[0]?.dana_yang_disetujui}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">DANA DICAIRKAN</span>
                                    <span className="subtitle">Rp. {data?.data[0]?.dana_yang_dicairkan}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                                <div className="col-start-start">
                                    <span className="page-number">TANGGAL KEGIATAN</span>
                                    <span className="subtitle">{moment(new Date(data?.data[0]?.tanggal_kegiatan)).format("DD MMMM yyyy")}</span>
                                </div>
                                <Spacing height={'1.25rem'} />
                            </div>

                            <div id="progress-bar" className="row-start-start w-full">
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot style={{ width:'40px', height:'40px', backgroundColor:'var(--color-black)' }} />
                                        <TimelineConnector className="connector" />
                                        <TimelineDot style={{ width:'40px', height:'40px' }} />
                                    </TimelineSeparator>
                                </TimelineItem>
                                
                                <Spacing width={'2.25rem'}/>
                                
                                <div className="col-start-start">
                                    <div className="col-start-start">
                                        <span className="page-number">TAHAP 1</span>
                                        <span className="subtitle">Verifikasi dan Validasi</span>
                                        <Hyperlink className='hyperlink' label={'Lihat Proposal'}/>
                                        <span className="sublabel">Dalam proses</span>
                                    </div>
                                    <Spacing height={'2.25rem'}/>
                                    <div className="col-start-start">
                                        <span className="page-number">TAHAP 2</span>
                                        <span className="subtitle">Informasi pencairan dana</span>
                                        <ButtonSolid height={'2.25rem'} disabled label={'Form Pencairan Dana'} width={'12rem'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Spacing height="2.7rem" /> 
                    </CModalBody>
                </Wrapper>
            </BrowserView>
        </>  
    )
}

export default DetailKegiatanModal
