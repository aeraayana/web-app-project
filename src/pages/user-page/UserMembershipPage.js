import Wrapper from '../../wrappers/user-page/UserMembershipPageWrapper'
import { 
    MembershipTable,
    MembershipSubscriptionCard
} from './local-components'

import { 
    ButtonOutlined,
    ButtonSolid,
    InputTextSearch,
    Spacing,
} from '../../components'
import { useEffect, useState } from 'react';
import circlePlusOutlineIcon from './../../assets/images/circle-plus-outline.svg'


const UserMembershipPage = () => {

    const [time, setTime] = useState(new Date());

    // useEffect(() => {
    //     setInterval(() => {
    //         setTime(new Date());
    //     }, 60000);
    // }, []);


    const actionOnClick = ({ membership }) => {
        // console.log(`MEMBERSHIP => ${ membership }`);
    }

    return (
        <Wrapper>
            <div className="row-start-end w-full">
                <div className='col-start-start w-full'>
                    <span className='title-description'>Halo, SDN 06 SAWAHLUNTO</span>
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
                        isBestValue={false}
                        onClick={ () => actionOnClick("Premium 1") } />
                    <ButtonSolid hoverColor={'var(--color-primary-dark)'} thickness='0.0625rem' borderColor={'var(--color-disable)'} label={"Buat Pengajuan"} height={'200px'} width={'20%'} color="grey" icon={<img src={circlePlusOutlineIcon} />} bgColor={"var(--color-disable-light)"} />
                    <MembershipSubscriptionCard 
                        name={"DRAFT PENGAJUAN"}
                        width={"25%"}
                        isEmpty
                        height={"200px"}
                        isBestValue={false}
                        onClick={ () => actionOnClick("Premium 3") } />
                </div>
                <Spacing height="2.5rem"/>
            </div>
            <div className="row-start-end w-full">
                <div className='col-start-start w-full'>
                    <span className='subtitle'>Riwayat Kegiatan</span>
                    <Spacing height="0.5rem"/>
                    <InputTextSearch placeholder="Masukkan Kata Kunci" width="21.875rem" onKeyDown={(e) => 
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
    )
}

export default UserMembershipPage