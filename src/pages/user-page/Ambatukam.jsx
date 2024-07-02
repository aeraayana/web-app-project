import Wrapper from "../../wrappers/user-page/AmbatukamPageWrapper";
import AmbatunatContainerCard from "../../pages/user-page/local-components/AmbatunatContainerCard"
import {
  MembershipTable,
  MembershipSubscriptionCard,
} from "./local-components";

import {
  ButtonOutlined,
  ButtonSolid,
  InputTextSearch,
  Spacing,
} from "../../components";
import { useEffect, useState } from "react";
import circlePlusOutlineIcon from "./../../assets/images/circle-plus-outline.svg";

const Ambatukam = () => {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //     setInterval(() => {
  //         setTime(new Date());
  //     }, 60000);
  // }, []);

  const actionOnClick = ({ membership }) => {
    // console.log(`MEMBERSHIP => ${ membership }`);
  };

  return (
    <Wrapper>
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
      <div className="col-start-center w-full">
        <div className="row-between-start w-full">
          <MembershipSubscriptionCard
            name={"REKAPITULASI"}
            width={"50%"}
            height={"200px"}
            isBestValue={true}
            onClick={() => actionOnClick("Premium 1")}
          />
        </div>
        <Spacing height="2.5rem" />
      </div>
      <div className="row-start-stretch">
        <div className=" flex-grow-1 d-flex flex-column">
          <h3 className="title-pengajuan-baru">PENGAJUAN BARU</h3>
          <div class="card m-2">
            <div class="card-body" style={{ backgroundColor: '#ced4da', }}>
              <h5 class="card-title">Verifikasi</h5>
              <AmbatunatContainerCard
                Title={"Ambatukam"}
                Description={"This might just be the nut i need, oooh"}
                ReportTime={"30/05/2024 16:08"}
                DeadlineTime={"30/05/3024 16:08"} 
                BorderColor={"orange"}/>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <h3 className="title-pra-kegiatan">PRA-KEGIATAN</h3>
          <div class="card  m-2">
            <div class="card-body" style={{ backgroundColor: '#ced4da', }}>
              <h5 class="card-title">Verifikasi</h5>
              <AmbatunatContainerCard
                Title={"Ambatukam"}
                Description={"This might just be the nut i need, oooh"}
                ReportTime={"30/05/2024 16:08"}
                DeadlineTime={"30/05/3024 16:08"} 
                BorderColor={"lightgreen"}/>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <h3 className="title-kegiatan">KEGIATAN</h3>
          <div class="card  m-2">
            <div class="card-body" style={{ backgroundColor: '#ced4da', }}>
              <h5 class="card-title">Verifikasi</h5>
              <AmbatunatContainerCard
                Title={"Ambatukam"}
                Description={"This might just be the nut i need, oooh"}
                ReportTime={"30/05/2024 16:08"}
                DeadlineTime={"30/05/3024 16:08"}
                BorderColor={"green"}/>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 d-flex flex-column">
          <h3 className="title-pasca-kegiatan">PASCA KEGIATAN</h3>
          <div class="card  m-2">
            <div class="card-body" style={{ backgroundColor: '#ced4da', }}>
              <h5 class="card-title">Verifikasi</h5>
              <AmbatunatContainerCard
                Title={"Ambatukam"}
                Description={"This might just be the nut i need, oooh"}
                ReportTime={"30/05/2024 16:08"}
                DeadlineTime={"30/05/3024 16:08"}
                BorderColor={"darkgreen"}/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Ambatukam;
