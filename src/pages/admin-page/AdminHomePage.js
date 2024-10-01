import Wrapper from "../../wrappers/user-page/UserAdminPageWrapper";
import UserAdminContainerCard from "./local-components/UserAdminContainerCard"

import {
  ContainerCardSection,
  Spacing,
} from "../../components";
import { useEffect, useState } from "react";
import MembershipSubscriptionCard from "./local-components/MembershipSubscriptionCard";
import { useAppContext } from "../../context/appContext";
import PenyerapanDanaCard from "./local-components/PenyerapanDanaCard";
import ValidateSubmissionFormModal from "./local-components/ValidateSubmissionFormModal";

const AdminHomePage = () => {
  const { dataDashboard, 
    getDataPencairan, 
    getDataBank, 
    dataPencairan, 
    getDataDashboardVerifikator, 
    toggleVerifikasiModal, 
    showVerifikasiModal } = useAppContext();
  const [time, setTime] = useState(new Date());

  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
      Promise.all([
        getDataBank(),
        getDataPencairan(),
        getDataDashboardVerifikator(),
      ])
  }, [])

  const handleClick = (data) => {
    setSelectedData(data);
    toggleVerifikasiModal();
  }

  console.log(selectedData)

  return (
    <Wrapper>
      <ValidateSubmissionFormModal show={showVerifikasiModal} onClose={toggleVerifikasiModal} selectedData={selectedData} />
      
      <div style={{ height: '100%' }}>
        <div className="row-start-end w-full">
          <div className="col-start-start w-full">
            <div>
              <span className='title-description'>Halo, </span>
              <span className='title' style={{ fontWeight: "bold" }}>{JSON.parse(localStorage.getItem('user_data'))?.kelompok_masyarakat}</span>
            </div>
            <span className="description">
              {time.toLocaleString("id-ID", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}, {time.toLocaleString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>

          </div>
        </div>
        <Spacing height="1rem" />
        <div className="card-container w-full">
            <span className="price-tag" style={{ marginLeft: "1rem" }}>REKAPITULASI</span>
            <Spacing height={'0.565rem'} />
            <div className="row-around-start w-full">
              <PenyerapanDanaCard name={'PENYERAPAN DANA'} height={'140px'} width={'150%'} percent={'0'} danaTersalur={'0'} totalDana={'0'}/>
              <Spacing width={'0.25rem'}/>
              <MembershipSubscriptionCard width={'100%'} bgColor="white" height={'140px'} isBestValue cardName={"PENGAJUAN MASUK"} tipe={"var(--color-yellow)"} data={''} value={dataDashboard} />
              <Spacing width={'0.25rem'}/>
              <MembershipSubscriptionCard width={'100%'} bgColor="white" height={'140px'} isBestValue cardName={"SELESAI"} tipe={"var(--color-green)"} data={'Selesai'} value={dataDashboard} />
              <Spacing width={'0.25rem'}/>
              <MembershipSubscriptionCard width={'100%'} bgColor="white" height={'140px'} isBestValue cardName={"DIBATALKAN"} tipe={"var(--color-error)"} data={'Dibatalkan'} value={dataDashboard} />
            </div>
        </div>
        
        <Spacing height="2.5rem" />

        <div className="row-start-start">
          <div className=" col-start-start w-full">
            <h3 className="title-pengajuan-baru" style={{ width:'100%' }}>TERMIN I</h3>
            <Spacing height="1.25rem" />
            
            <ContainerCardSection secondary className='w-full'>
              <span className='page-number'>VERIFIKASI</span>
              <Spacing height="1.25rem" />

              {dataPencairan?.data && dataPencairan?.data?.length > 0 ? dataPencairan.data.map((n) => (
                <div className="w-full" onClick={() => handleClick(n)}>
                  <UserAdminContainerCard
                    data={n}
                    BorderColor={"orange"} />
                  <Spacing height={"1.25rem"}/>
                </div>
              )) : (
                <div className="description-subtitle">
                  <p className="card-title"></p>
                  <p className="card-subtitle">Belum ada data pengajuan</p>
                  <p className='card-text-content'></p>
                  <p style={{fontSize: "15px"}} className='fw-bold text-end'></p>
                </div>
              )}

            </ContainerCardSection>
          </div>
          
          <Spacing width="6.5rem" />

          <div className=" col-start-start w-full">
            <h3 className="title-pra-kegiatan" style={{ width:'100%' }}>TERMIN II</h3>
            <Spacing height="1.25rem" />

            <ContainerCardSection secondary className={'w-full'}>
              <span className='page-number'>VERIFIKASI</span>
              <Spacing height="1.25rem" />
              
              {/* {dataVerifikasi?.data && dataVerifikasi?.data?.length > 0 ? dataVerifikasi.data.map((n) => (
                <div className="w-full" onClick={() => handleClick(n)}>
                  <UserAdminContainerCard
                    data={n}
                    BorderColor={"orange"} />
                  <Spacing height={"1.25rem"}/>
                </div>
              )) : ( */}
                <div className="description-subtitle">
                  <p className="card-title"></p>
                  <p className="card-subtitle">Belum ada data pengajuan</p>
                  <p className='card-text-content'></p>
                  <p style={{fontSize: "15px"}} className='fw-bold text-end'></p>
                </div>
              {/* )} */}
            
            </ContainerCardSection>
          </div>
          
          <Spacing width="6.5rem" />

          <div className=" col-start-start w-full">
          </div>

          <Spacing width="6.5rem" />

          <div className=" col-start-start w-full">
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default AdminHomePage;
