import { CSpinner } from "@coreui/react";
import React from "react";
import styled from "styled-components";

function RekapitulasiPengajuanCard({ tipe, judul, data, value }) {

  const green = tipe !== 'var(--color-error)' ? 'var(--color-green)' : tipe;
  
  const Wrapper = styled.div`
    width: 100%;
    background-image: white;
  
    .container {
      border-left: 2px solid ${tipe};
      margin: 0.6rem;
    }

    .percentage-badge {
      color: ${green ? green : 'var(--color-primary)'};
      border: 1px solid ${green ? green : 'black'};
      background-color: ${green ? green.replace(')', '-light)') : 'black'};
      font-size: var(--font-size-small-2);
      border-radius: 5px;
    }

    .card-title {
      color: ${tipe ? tipe : 'var(--color-primary)'};
      border: 1px solid ${tipe ? tipe : 'black'};
      background-color: ${tipe ? tipe.replace(')', '-light)') : 'black'};
      font-size: var(--font-size-small-2);
      border-radius: 5px;
      padding: 0.15rem 0.35rem;
      width: 72%;
      display: inline;
    }
  `

  if(!value.data){
    return(
      <Wrapper>
        <CSpinner />
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <p className="card-title mb-2">{judul}</p>
      <div className="row-start-start">
        <div className="container">
            <p>Bulan ini</p>
            <p className="fw-bold fs-4">{value.data[`${'jumlahPengajuan'.concat(data)}BulanIni`]?? 0}</p>
            <p className="percentage-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                </svg>
                {!isNaN(Math.floor(value.data[`${'jumlahPengajuan'.concat(data)}BulanIni`]/value.data[`${'jumlahPengajuan'.concat(data)}BulanSebelumnya`])) ?? 0} %
            </p>
        </div>
        <div className="container">
          <p>SDHI</p>
          <p className="fw-bold fs-4">{value.data[`${'jumlahPengajuan'.concat(data)}Sdhi`]?? 0}</p>
          <p> &nbsp; </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default RekapitulasiPengajuanCard