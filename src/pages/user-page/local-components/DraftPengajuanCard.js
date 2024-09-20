import styled from "styled-components";
import {
  // LogoCrown,
  // IconCheck,
  // IconUnCheck,
  ContainerCardArticle,
  Spacing,
} from "../../../components";
import RekapitulasiPengajuanCard from "./RekapitulasiPengajuanCard";
import { CProgress, CProgressBar } from "@coreui/react";
import { useAppContext } from "../../../context/appContext";
import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';

const ProgressValue = {
  "Dalam Proses Laporan Pasca Kegiatan": 6,
}

const DraftPengajuanCard = ({
  name,
  isBestValue,
  isEmpty,
  onClick,
  width,
  bgColor,
  cardName,
  month,
  sdhi,
  percent,
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

    .subtitle{
      font-family: var(--font-family-primary);
      font-size: var(--font-size-normal-2);
      font-weight: var(--font-weight-normal);
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

    .progress-bar{
      accent-color: red;
      border-radius: 15px;
      width: 100%;
      min-height: 30px;
      border: 1px solid var(--color-disable);
      background-color: var(--color-yellow) !important;
    }

    .title-card{
      font-weight: var(--font-weight-extrabold);
      font-size: var(--font-size-semi-big);
      padding: 0.5rem;
      border-radius: 20px 0px 20px 0px;
      background-color: var(--color-primary-dark);
      color: white;
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
  `;

  // console.log(bgColor);

  return (
    <Wrapper
      border="var(--color-disable)"
      bgColor={bgColor}
      borderRadius="0.4rem"
      thickness={"0.05rem"}
      className={"col-start-start w-full"}
    >
      <div className="col-start-start w-full">
        <h1 className="membership-tag">{name}</h1>
        {isBestValue && <RekapitulasiPengajuanCard Judul={cardName} Bulan={month} Persen={percent} SDHI={sdhi} Tipe={tipe}/>}
        {isBestValue && <Spacing height="0.5rem" />}
        <div className="row-center-center price-tag w-full">
          {isEmpty ? (
            <div className="col-center-center w-full">
              <Spacing height="3.7rem"/>
              <span className="subtitle" style={{ letterSpacing: 0 }}>Tidak ada {name.toLowerCase()}</span>
            </div>
          ) : (
            <div className="col-center-center w-full" onClick={onClick} style={{ cursor:'pointer' }}>
              <Spacing height="1.8rem"/>
              <EditNoteIcon sx={{ height:'80px', width:'80px' }}/>
              <span className='subtitle' style={{ letterSpacing: 0 }}>Klik untuk menyelesaikan draft pengajuan</span>
            </div>
          )}
        </div>
        <Spacing height="0.25rem" />
        <Spacing height="1rem" />
      </div>
    </Wrapper>
  );
};

export default DraftPengajuanCard;
