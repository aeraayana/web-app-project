import React from 'react'
import { CModal } from '@coreui/react';
import styled from 'styled-components';
import { Spacing } from '../../../components';

export default function UserAdminContainerCard({ data, BorderColor }) {
    const Wrapper = styled.div`
        width: 100%;
        
        .description-subtitle{
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-normal);
            font-size: var(--font-size-normal);
            border-left: 2px solid ${BorderColor};
            padding: 0.5rem;
            background-color: white;
            &:hover {
                color: var(--color-primary-dark);
                background-color: white;
                border-color: var(--color-primary-dark);
            },
        } 

        .card-title{
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-normal-2);
            color: var(--color-black);
        }

        .card-subtitle{
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-normal);   
            color: var(--color-black);     
        }

        .card-text-content{
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-normal);
            font-size: var(--font-size-normal);  
            color: var(--color-black);  
        }
    `

    return (
        <Wrapper>
            <div className='w-full'>
                {data ? (
                    <div className="description-subtitle">
                        <p className="card-title">{data.kelompok_masyarakat}</p>
                        <Spacing height={"0.35rem"}/>
                        <p className="card-subtitle">{data.tematik_kegiatan}</p>
                        <Spacing height={"0.35rem"}/>
                        <p className='card-text-content'>{`${data.jenis_kegiatan} ${data.jumlah}`}</p>
                        <p style={{fontSize: "15px"}} className='fw-bold text-end'>Due: {data.tanggal_akhir_verifikasi}</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </Wrapper>
    )
}
