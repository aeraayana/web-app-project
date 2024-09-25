import Wrapper from '../../wrappers/user-page/UserMembershipPageWrapper'
import { 
    MembershipTable,
    MembershipSubscriptionCard
} from './local-components'

import { 
    ButtonSolid,
    InputTextSearch,
    Spacing,
} from '../../components'
import React, { useEffect, useState } from 'react';
import circlePlusOutlineIcon from './../../assets/images/circle-plus-logo.png'
import circlePlusSmallIcon from './../../assets/images/circle-plus-small.png'
import CreateSubmissionModal from './local-components/CreateSubmissionModal';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import MobileWrapper from '../../wrappers/user-page/mobile/UserMembershipMobilePageWrapper';
import { useAppContext } from '../../context/appContext';
import DraftPengajuanCard from './local-components/DraftPengajuanCard';
import DetailKegiatanModal from './local-components/DetailKegiatanModal';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from '../../configs/constants';

const UserMembershipPage = () => {

    const [time, setTime] = useState(new Date());

    const { 
        dataProgress,
        getDataProgressKegiatan,
        showFormModal, 
        toggleFormModal, 
        showDetailProgressModal,
        toggleDetailProgressModal,
        validDateRange,
        getRangeOpening,
        getDataDraft,
        dataDraft,
    } = useAppContext();

    const formData = new FormData();
    const [dataRab, setDataRab] = useState(null);

    useEffect(() => {
        Promise.all([
            getDataProgressKegiatan(),
            getRangeOpening(),
            getDataDraft(),
        ])
    }, []);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                toggleFormModal();
                toggleDetailProgressModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    //UNCOMMENT WHEN BUILDING ON REGISTRATION DAYS
    const handleOpenModal = () => {
        if(dataProgress?.data?.length === 0 || dataProgress?.length === 0){
            if(!(new Date() > new Date(`${validDateRange.data.tanggal_awal} ${validDateRange.data.jam_awal}`) && new Date() < new Date(`${validDateRange.data.tanggal_akhir} ${validDateRange.data.jam_akhir}`))){
                toast.error(
                    <div className='col-center-center'>
                        <span style={{ fontSize: 'var(--font-size-big)' }} className="label">Menu Dinonaktifkan</span>
                        <span style={{ fontSize: 'var(--font-size-big)'}} className="description">Diluar tanggal layanan pengajuan dibuka</span>
                    </div>, { position: toast.POSITION.TOP_LEFT, className: 'toast-message' }
                )
            }else{
                toggleFormModal();
            }
        }else{
            toast.error(
                <div className='col-center-center'>
                    <span style={{ fontSize: 'var(--font-size-big)' }} className="label">Menu Dinonaktifkan</span>
                    <span style={{ fontSize: 'var(--font-size-big)'}} className="description">Anda masih memiliki kegiatan yang berlangsung</span>
                </div>, { position: toast.POSITION.TOP_LEFT, className: 'toast-message' }
            )
        } 
    }

    const handleOpenMobile = () => {
        toast.error(
            <div className='col-center-center'>
                <span style={{ fontSize: 'var(--font-size-normal)' }} className="label">Menu Dinonaktifkan</span>
                <span style={{ fontSize: 'var(--font-size-normal)'}} className="description">Saat ini aplikasi versi mobile belum tersedia, silakan menggunakan perangkat laptop atau komputer</span>
            </div>
        )
    }
    
    // const handleOpenModal = () => {
    //     toggleFormModal(!showFormModal);
    // }

    useEffect(() => {
        axios.get(`${HOST_URL}getNotification`, {
            headers:{
                "Content-Type": "application/json",
                id: CLIENT_ID,
                secret: CLIENT_ID_SECRET,
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            if(res.data.length > 0 && res.data.data){
                toast.success(
                    <div className="col-start-start w-full">
                        <span style={{ fontSize: 22 }} className="label">{res.data.data[0].data.message_header}</span>
                        <span style={{ fontSize: 20 }} className="description">{res.data.data[0].data.message_body}</span>
                    </div>, { position: toast.POSITION.TOP_LEFT, className: 'toast-message' }
                )
            }else{
                <></>
            }
        })
    }, [])

    const [index, setIndex] = useState(1);

    const actionOnClick = () => {
        if(dataDraft){
            formData.append('paket_kegiatan_id', dataDraft.data.paket_kegiatan_id);
            formData.append('ruang_lingkup_kegiatan', dataDraft.data.ruang_lingkup_kegiatan);
            formData.append('tujuan_kegiatan', dataDraft.data.tujuan_kegiatan);
            formData.append('proposal_kegiatan', dataDraft.data.proposal_kegiatan);
            formData.append('waktu_kegiatan', dataDraft.data.waktu_kegiatan);
            formData.append('tanggal_kegiatan', dataDraft.data.tanggal_kegiatan);
            formData.append('alamat_kegiatan', dataDraft.data.alamat_kegiatan);
            formData.append('kabupaten_kegiatan', dataDraft.data.kabupaten_kegiatan);
            formData.append('kelurahan_kegiatan', dataDraft.data.kelurahan_kegiatan?? 1);
            formData.append('kecamatan_kegiatan', dataDraft.data.kecamatan_kegiatan);
            formData.append('provinsi_kegiatan', dataDraft.data.provinsi_kegiatan);
            formData.append('judul_pengajuan_kegiatan', dataDraft.data.judul_pengajuan_kegiatan);
            formData.append('nomor_pengajuan', dataDraft.data.nomor_pengajuan);
    
            axios.post(
                `${HOST_URL}pengajuanKegiatan`,
                formData,
                {
                    headers: {
                        Accept: 'multipart/form-data',
                        id: '6684d93e8cb88',
                        secret: 'vc8U5EaZ3bUKV9ka4PsNLrpVGWZVVpyZsAhmnRWO',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            ).then((res) => setDataRab(res.data.data))
            .finally(() => {
                toggleFormModal();
                setIndex(6);
            });
        }
    }

    return (
        <>
        <MobileView>
            <MobileWrapper>
                <DetailKegiatanModal show={!showDetailProgressModal} onClose={toggleDetailProgressModal} data={dataProgress}/>
                <CreateSubmissionModal dataDraft={dataRab} show={!showFormModal} onClose={toggleFormModal} index={index} setIndex={setIndex} /> 
                <div className="row-center-end w-full">
                    <div className='col-start-start w-full'>
                        <span className='title-description'>Halo, </span>
                        <div>
                            <span className='title' style={{ fontWeight: "bold" }}>{JSON.parse(localStorage.getItem('user_data'))?.kelompok_masyarakat}</span>
                        </div>
                        <span className='description'> 
                            {time.toLocaleString("id-ID", {
                                weekday:"long",
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                            })}
                        </span>
                    </div>
                </div>
                <Spacing height="1rem"/>
                <div className='col-start-center w-full'>
                    <div className='w-full'>
                        <MembershipSubscriptionCard 
                            name={"PROGRESS KEGIATAN"}
                            width={"100%"}
                            bgColor={"var(--color-disable-light)"}
                            isEmpty
                            onClick={toggleDetailProgressModal}
                            height={"170px"}
                            isBestValue={false}
                        />
                    </div>
                    <Spacing height="0.5rem"/>
                    <div className='w-full'>
                        <ButtonSolid onClick={() => handleOpenMobile()} hoverColor={'var(--color-primary-dark)'} 
                            thickness='0.0625rem' borderColor={'var(--color-disable)'} 
                            label={"Buat Pengajuan"} height={'70px'} width={'100%'} color="grey" 
                            iconPre={<img src={circlePlusSmallIcon} />} bgColor={"var(--color-disable-light)"} />
                    </div>
                    <Spacing height="0.5rem"/>
                    <div className='w-full'>
                        <MembershipSubscriptionCard 
                            name={"DRAFT PENGAJUAN"}
                            width={"100%"}
                            bgColor={"var(--color-white)"}
                            isEmpty
                            height={"90px"}
                            isBestValue={false}
                            onClick={ () => actionOnClick("Premium 3") } />
                    </div>
                    <Spacing height="1.5rem"/>
                </div>
                <div className="row-start-end w-full">
                    <div className='col-start-start w-full'>
                        <span className='subtitle'>RIWAYAT KEGIATAN</span>
                        <Spacing height="0.5rem"/>
                        <InputTextSearch placeholder="Masukkan Kata Kunci..." width={"80%"} onKeyDown={(e) => 
                        {
                            if (e.key === "Enter") {
                                //console.log("ggmu")
                                // setSearch(e.target.value, "full_name", "contains")
                                // navigate("/search", { replace: true })
                            }
                        }}/>
                        <Spacing height="1.5rem"/>
                        <MembershipTable />
                    </div>
                </div>
            </MobileWrapper>
        </MobileView>
        <BrowserView>
            <Wrapper>
                <ToastContainer />
                <DetailKegiatanModal show={!showDetailProgressModal} onClose={toggleDetailProgressModal} data={dataProgress}/>
                <CreateSubmissionModal dataDraft={dataRab} show={!showFormModal} onClose={toggleFormModal} index={index} setIndex={setIndex} /> 
                <div className="row-start-between w-full">
                    <div className='col-start-start w-full'>
                        <div>
                            <span className='title-description'>Halo, </span>
                            <span className='title' style={{ fontWeight: "bold" }}>{JSON.parse(localStorage.getItem('user_data'))?.kelompok_masyarakat}</span>
                        </div>
                        <span className='description'> 
                            {time.toLocaleString("id-ID", {
                                weekday:"long",
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                            })}
                        </span>
                    </div>
                </div>
                <Spacing height="1rem"/>
                <div className='col-start-center w-full'>
                    <div className='row-between-start w-full'>
                        <MembershipSubscriptionCard 
                            name={"PROGRESS KEGIATAN"}
                            width={"100%"}
                            height={'255px'}
                            bgColor={"var(--color-disable-light)"}
                            isBestValue={false}
                            onClick={toggleDetailProgressModal} />
                        
                        <Spacing width={'1.3rem'}/>
                        
                        <ButtonSolid onClick={() => handleOpenModal()} hoverColor={'var(--color-primary-dark)'} 
                            thickness='0.0625rem' borderColor={'var(--color-disable)'} 
                            borderRadius={'20px'}
                            label={"Buat Pengajuan"} height={'255px'} width={'25%'} color="grey" 
                            icon={<img src={circlePlusOutlineIcon} />} bgColor={"var(--color-disable-light)"} />

                        <Spacing width={'1.3rem'}/>
                        
                        <DraftPengajuanCard 
                            name={"DRAFT PENGAJUAN"}
                            width={"45%"}
                            height={'255px'}
                            bgColor={"var(--color-white)"}
                            isEmpty={(dataDraft.data?.length === 0)}
                            onClick={ () => actionOnClick() } />
                    </div>
                    <Spacing height="2.5rem"/>
                </div>
                <div className="row-start-end w-full">
                    <div className='col-start-start w-full'>
                        <span className='subtitle'>RIWAYAT KEGIATAN</span>
                        <Spacing height="0.5rem"/>
                        <InputTextSearch placeholder="Masukkan Kata Kunci..." width="21.875rem" onKeyDown={(e) => 
                        {
                            if (e.key === "Enter") {
                                //console.log("ggmu")
                                // setSearch(e.target.value, "full_name", "contains")
                                // navigate("/search", { replace: true })
                            }
                        }}/>
                        <Spacing height="1.5rem"/>
                        <MembershipTable />
                    </div>
                </div>
            </Wrapper>
        </BrowserView>
        </>
    )
}

export default UserMembershipPage