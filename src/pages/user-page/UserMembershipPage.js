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
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWrapper from '../../wrappers/user-page/mobile/UserMembershipMobilePageWrapper';
import { useAppContext } from '../../context/appContext';
import DraftPengajuanCard from './local-components/DraftPengajuanCard';
import DetailKegiatanModal from './local-components/DetailKegiatanModal';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from '../../configs/constants';


const UserMembershipPage = () => {

    const [time, setTime] = useState(new Date());

    // const [show, setShow] = useState(false);
    const { 
        dataProgress,
        getDataProgressKegiatan,
        showFormModal, 
        toggleFormModal, 
        showDetailProgressModal,
        toggleDetailProgressModal,
    } = useAppContext();

    useEffect(() => {
        getDataProgressKegiatan();
    }, [])

    useEffect(() => {
        axios.get(`${HOST_URL}getNotification`, {
            headers:{
                "Content-Type": "application/json",
                id: CLIENT_ID,
                secret: CLIENT_ID_SECRET,
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            toast.success(
                <div className="col-start-start w-full">
                    <span style={{ fontSize: 'var(--font-size-bigger)' }} className="label">{res.data.data[0].data.message_header}</span>
                    <span style={{ fontSize: 'var(--font-size-big)'}} className="description">{res.data.data[0].data.message_body}</span>
                </div>, { position: toast.POSITION.TOP_LEFT, className: 'toast-message' }
            )
        })
    }, [])

    const [index, setIndex] = useState(1);

    const actionOnClick = ({ membership }) => {
        console.log(`MEMBERSHIP => ${ membership }`);
    }

    return (
        <>
        <MobileView>
            <MobileWrapper>
                <DetailKegiatanModal show={showDetailProgressModal} onClose={toggleDetailProgressModal} data={dataProgress}/>
                <CreateSubmissionModal show={showFormModal} onClose={toggleFormModal} index={index} setIndex={setIndex} /> 
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
                        <ButtonSolid onClick={toggleFormModal} hoverColor={'var(--color-primary-dark)'} 
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
                                console.log("ggmu")
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
                <DetailKegiatanModal show={showDetailProgressModal} onClose={toggleDetailProgressModal} data={dataProgress}/>
                <CreateSubmissionModal show={showFormModal} onClose={toggleFormModal} index={index} setIndex={setIndex} /> 
                <div className="row-start-end w-full">
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
                        
                        <ButtonSolid onClick={toggleFormModal} hoverColor={'var(--color-primary-dark)'} 
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
                            isBestValue={false}
                            isEmpty
                            onClick={ () => actionOnClick("Premium 3") } />
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
                                console.log("ggmu")
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