import Wrapper from "../../wrappers/user-page/UserAdminPageWrapper";
import UserAdminContainerCard from "./local-components/UserAdminContainerCard"

import {
  Spacing,
} from "../../components";
import { useEffect, useState } from "react";
import MembershipSubscriptionCard from "./local-components/MembershipSubscriptionCard";

const UserAdminPage = () => {
  const [time, setTime] = useState(new Date());

  return (
    <Wrapper>
      <div style={{ height: '100%' }}>
        <div className="row-start-end w-full">
          <div className="col-start-start w-full">
            <span className="title-description">Halo, PGLHK PK1</span>
            <span className="description">
              {time.toLocaleString("id-ID", {
                weekday: "long",
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
        <Spacing height="1rem" />
        <div className="card-container w-full">
            <span className="price-tag" style={{ marginLeft: "1rem" }}>REKAPITULASI</span>
            <Spacing height={'0.565rem'} />
            <div className="row-around-start">
              <MembershipSubscriptionCard width={'30%'} bgColor="white" height={'140px'} isBestValue cardName={"PENYERAPAN DANA"} month={15} sdhi={0} percent={100} tipe={"var(--color-black)"} />
              <MembershipSubscriptionCard width={'22%'} bgColor="white" height={'140px'} isBestValue cardName={"PENGAJUAN MASUK"} month={15} sdhi={0} percent={100} tipe={"var(--color-yellow)"} />
              <MembershipSubscriptionCard width={'22%'} bgColor="white" height={'140px'} isBestValue cardName={"SELESAI"} month={15} sdhi={0} percent={100} tipe={"var(--color-green)"} />
              <MembershipSubscriptionCard width={'22%'} bgColor="white" height={'140px'} isBestValue cardName={"DIBATALKAN"} month={15} sdhi={0} percent={100} tipe={"var(--color-error)"} />
            </div>
        </div>
        <Spacing height="2.5rem" />
        <div className="row-start-stretch">
          <div className=" flex-grow-1 d-flex flex-column">
            <h3 className="title-pengajuan-baru">PENGAJUAN BARU</h3>
            <div class="card m-2">
              <div class="card-body" style={{ backgroundColor: 'rgba(248,251,251,255)', }}>
                <h5 class="card-title">Verifikasi</h5>
                <UserAdminContainerCard
                  Title={"UserAdminPage"}
                  Description={"This might just be the nut i need, oooh"}
                  ReportTime={"30/05/2024 16:08"}
                  DeadlineTime={"30/05/3024 16:08"}
                  BorderColor={"orange"} />
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column">
            <h3 className="title-pra-kegiatan">PRA-KEGIATAN</h3>
            <div class="card  m-2">
              <div class="card-body" style={{ backgroundColor: 'rgba(248,251,251,255)', }}>
                <h5 class="card-title">Verifikasi</h5>
                <UserAdminContainerCard
                  Title={"UserAdminPage"}
                  Description={"This might just be the nut i need, oooh"}
                  ReportTime={"30/05/2024 16:08"}
                  DeadlineTime={"30/05/3024 16:08"}
                  BorderColor={"lightgreen"} />
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column">
            <h3 className="title-kegiatan">KEGIATAN</h3>
            <div class="card  m-2">
              <div class="card-body" style={{ backgroundColor: 'rgba(248,251,251,255)', }}>
                <h5 class="card-title">Verifikasi</h5>
                <UserAdminContainerCard
                  Title={"UserAdminPage"}
                  Description={"This might just be the nut i need, oooh"}
                  ReportTime={"30/05/2024 16:08"}
                  DeadlineTime={"30/05/3024 16:08"}
                  BorderColor={"green"} />
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column">
            <h3 className="title-pasca-kegiatan">PASCA KEGIATAN</h3>
            <div class="card  m-2">
              <div class="card-body" style={{ backgroundColor: 'rgba(248,251,251,255)', }}>
                <h5 class="card-title">Verifikasi</h5>
                <UserAdminContainerCard
                  Title={"UserAdminPage"}
                  Description={"This might just be the nut i need, oooh"}
                  ReportTime={"30/05/2024 16:08"}
                  DeadlineTime={"30/05/3024 16:08"}
                  BorderColor={"darkgreen"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserAdminPage;
