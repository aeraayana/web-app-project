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
import { useEffect, useState } from 'react';
import circlePlusOutlineIcon from './../../assets/images/circle-plus-logo.png'
import circlePlusSmallIcon from './../../assets/images/circle-plus-small.png'
import CreateSubmissionModal from './local-components/CreateSubmissionModal';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWrapper from '../../wrappers/user-page/mobile/UserMembershipMobilePageWrapper';
import { useAppContext } from '../../context/appContext';


const UserMembershipPage = () => {

    const [time, setTime] = useState(new Date());
    const { showFormModal, toggleFormModal } = useAppContext();
    const [index, setIndex] = useState(1);

    // useEffect(() => {
    //     setInterval(() => {
    //         setTime(new Date());
    //     }, 60000);
    // }, []);

    // const handleShowModal = () => {
    //     setShowModal(!show);
    // }

    const actionOnClick = ({ membership }) => {
        console.log(`MEMBERSHIP => ${ membership }`);
    }

    return (
        <>
        <MobileView>
            <MobileWrapper>
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
                            height={"170px"}
                            isBestValue={false}
                            onClick={ () => actionOnClick("Premium 1") } />
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
                            width={"50%"}
                            isEmpty
                            height={"200px"}
                            bgColor={"var(--color-disable-light)"}
                            isBestValue={false}
                            onClick={ () => actionOnClick("Premium 1") } />
                        <ButtonSolid onClick={toggleFormModal} hoverColor={'var(--color-primary-dark)'} 
                            thickness='0.0625rem' borderColor={'var(--color-disable)'} 
                            label={"Buat Pengajuan"} height={'200px'} width={'20%'} color="grey" 
                            icon={<img src={circlePlusOutlineIcon} />} bgColor={"var(--color-disable-light)"} />
                        
                        <MembershipSubscriptionCard 
                            name={"DRAFT PENGAJUAN"}
                            width={"25%"}
                            isEmpty
                            height={"200px"}
                            bgColor={"var(--color-white)"}
                            isBestValue={false}
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