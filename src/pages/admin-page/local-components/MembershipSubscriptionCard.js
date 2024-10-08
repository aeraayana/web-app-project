import styled from "styled-components";
import {
  // LogoCrown,
  // IconCheck,
  // IconUnCheck,
  ContainerCardArticle,
  Spacing,
} from "../../../components";
import RekapitulasiPengajuanCard from "./RekapitulasiPengajuanCard";
import { CProgress } from "@coreui/react";
import { useAppContext } from "../../../context/appContext";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

const ProgressValue = {
  0: 0,
  1: 6,
  2: 6,
  3: 21,
  4: 21,
}

const Dictionary = {
  0: "Draft",
  1: "Dalam Proses",
  2: "Dalam Proses",
  3: "Dalam Proses",
  4: "Dalam Proses",
}

const MembershipSubscriptionCard = ({
  name,
  isBestValue,
  value,
  onClick,
  width,
  bgColor,
  cardName,
  data,
  tipe,
  height,
}) => {
  const Wrapper = styled(ContainerCardArticle)`
    ${width && `width: ` + width + `;`}

    height: ${height ? height : '2.25rem'};

    font-family: var(--font-family-primary);
    font-size: var(--font-size-small-2);
    font-weight: var(--font-weight-normal);
    border: var(--color-disabled);

    h1, p, span {
      padding: 0;
      margin: 0;
    }

    .membership-tag {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-normal-2);
      font-weight: var(--font-weight-bold);
      letter-spacing: 2px;
      color: grey;
    }

    .price-tag {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-semi-big);
      font-weight: var(--font-weight-normal);
      color: grey;
    }

    .price-tag > span {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-normal);
    }

    span {
      font-weight: var(--font-weight-normal);
    }

    b {
      font-weight: var(--font-weight-semibold);
      color: black;
    }

    .progress-bar{
      accent-color: red;
      border-radius: 15px;
      width: 100%;
      min-height: 30px;
      border: 1px solid var(--color-disable);
      background-color: white;
    }

    .title-card{
      font-weight: var(--font-weight-extrabold);
      font-size: var(--font-size-semi-big);
      padding: 0.5rem;
      border-radius: 20px 0px 20px 0px;
      background-color: var(--color-primary-dark);
      color: white;
    }
  `;

  const { dataProgress, getDataProgressKegiatan } = useAppContext()

  React.useEffect(() => { getDataProgressKegiatan() }, [])

  return (
    <>
    
      <MobileView>
        <Wrapper
          border="var(--color-disable)"
          bgColor={bgColor}
          borderRadius="0.4rem"
          thickness={"0.05rem"}
          className={"col-start-start w-full"}
        >
          <h1 className="membership-tag">{name}</h1>
          {isBestValue && <RekapitulasiPengajuanCard tipe={tipe} judul={cardName} data={data} value={value} />}
          {isBestValue && <Spacing height="0.5rem" />}
          {!isBestValue && 
            <div className="row-center-start price-tag w-full" style={{ cursor:'pointer' }} onClick={onClick}>
              <Spacing height="1.7rem" />
              <span>Tidak ada {name.toLowerCase()}</span>
            </div>}
          <Spacing height="0.25rem" />
          <Spacing height="1rem" />
        </Wrapper>
      </MobileView>
      <BrowserView className="w-full">
        <Wrapper
          border="var(--color-disable)"
          bgColor={bgColor}
          borderRadius="0.4rem"
          thickness={"0.05rem"}
          className={"col-start-start w-full"}
        >
          <h1 className="membership-tag">{name}</h1>
          {isBestValue && <RekapitulasiPengajuanCard tipe={tipe} judul={cardName} data={data} value={value} />}
          {isBestValue && <Spacing height="0.5rem" />}
          {!isBestValue && 
            <div className="row-center-start price-tag w-full" style={{ cursor:'pointer' }} onClick={onClick}>
              {dataProgress?.data?.length === 0 || dataProgress?.length === 0 ? (
                <>
                  <Spacing height="1.7rem" />
                  <span>Tidak ada {name.toLowerCase()}</span>
                </>
              ) : (
                <>
                  <div className="col-start-start w-full">
                    <Spacing height="1.25rem" />
                    <div className="row-between-start w-full">
                      <span className="title-card">{dataProgress?.data[0].jenis_kegiatan} {dataProgress?.data[0].jumlah}</span>
                      <span className="label" style={{ fontWeight: 'bold' }}>#{dataProgress?.data[0].nomor_pengajuan}</span>
                    </div>
                    <div className="col-start-start w-full">
                      <Spacing height="1.45rem" />
                      <div className="row-between-start w-full" style={{ padding:'0rem 0.75rem' }}>
                        <span className="description-subtitle" style={{ fontWeight:400 }}>{Dictionary[dataProgress?.data[0].tahapan_pengajuan]}</span>
                        <span className="label">{ProgressValue[dataProgress?.data[0].tahapan_pengajuan]} %</span>
                      </div>
                      
                      <Spacing height="0.45rem" />
                      <CProgress color="warning" className="progress-bar" value={ProgressValue[dataProgress?.data[0].tahapan_pengajuan]} />
                      
                      <Spacing height="0.45rem" />
                      <div className="row-end-center w-full" style={{ padding:'0rem 0.75rem' }}>
                        <span className="description-subtitle" style={{ width:'55%' }}>Total dana diterima</span>
                        <span className="label">Rp {dataProgress?.data[0].dana_yang_dicairkan}</span>
                      </div>
                    </div>
                    
                  </div>
                </>
              )}
            </div>
          }
          <Spacing height="0.25rem" />
          <Spacing height="1rem" />
        </Wrapper>
      </BrowserView>
    </>
  );
};

export default MembershipSubscriptionCard;
