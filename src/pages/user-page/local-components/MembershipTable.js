import styled from "styled-components";
import {
    ContainerCardSection,
    Spacing,
    ButtonSolid,
    Hyperlink
} from "../../../components";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import JobInfo from "../../../components/JobInfo";
import { FaArrowsAltH, FaFontAwesome } from "react-icons/fa";
import ArrowRotate from "../../../components/logo-icon/ArrowRotate";
import { isMobile, MobileView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import React from "react";

const MembershipTable = () => {

    const Wrapper = styled(ContainerCardSection)`
        height: 30rem;
        width: 100%; 
        overflow: auto;

        .sticky-col {
            position: -webkit-sticky;
            position: sticky;
            background-color: white;
        }

        table th:first-child {
            position: sticky;
            left: 0;
        }

        table td:first-child {
            position: sticky;
            left: 0;
        }

        tr {
            width: 1%;
            white-space: nowrap;
        }

        th {
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-normal);
            text-align: center;
        }

        td {
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-normal);
            font-size: 14px;
            color: var(--color-black);
            text-align: center;
            vertical-align: top;
        }

        .decription-cell{
            text-align: left;
        }
    `;

    const { dataRiwayat, getDataRiwayatPengajuan } = useAppContext();

    React.useEffect(() => {getDataRiwayatPengajuan()}, []);
    console.log(dataRiwayat);

    if (isMobile){
        return (
            <Wrapper padding={'0'}>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell className="sticky-col" style={{ position:"-webkit-sticky"}} >Jenis Kegiatan</CTableHeaderCell>
                            <CTableHeaderCell>Progress</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Dana Diterima</CTableHeaderCell>
                            <CTableHeaderCell>Budget</CTableHeaderCell>
                            <CTableHeaderCell>Tanggal</CTableHeaderCell>
                            <CTableHeaderCell>Durasi</CTableHeaderCell>
                            <CTableHeaderCell></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {dataRiwayat.length === 0 ? (
                            <> </>
                        ) : dataRiwayat.data.map((n) => (
                            <CTableRow>
                                <CTableDataCell className="sticky-col" style={{ position:"-webkit-sticky"}} width={'20%'}>
                                    {n.nomor_pengajuan}
                                </CTableDataCell>
                                <CTableDataCell width={'5%'}>
                                    {n.jenis_kegiatan}: {n.jumlah}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.persentase_pengajuan} %
                                </CTableDataCell>
                                <CTableDataCell>
                                    <JobInfo icon={<ArrowRotate />} text={n.tahapan_pengajuan}/>
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    {n.dana_yang_dicairkan}
                                </CTableDataCell>
                                <CTableDataCell >
                                    {n.dana_yang_disetujui}
                                </CTableDataCell>
                                <CTableDataCell width={'13%'}>
                                    {n.tanggal_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell width={'2%'}>
                                    {'1 Hari'}
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    <Hyperlink small={'14px'} label={'Lihat Detail'}/>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </Wrapper>
        )
    }
    return (
        <>
            <Wrapper padding={'0'}>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>ID Kegiatan</CTableHeaderCell>
                            <CTableHeaderCell>Jenis Kegiatan</CTableHeaderCell>
                            <CTableHeaderCell>Progress</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Dana Diterima</CTableHeaderCell>
                            <CTableHeaderCell>Budget</CTableHeaderCell>
                            <CTableHeaderCell>Tanggal</CTableHeaderCell>
                            <CTableHeaderCell>Durasi</CTableHeaderCell>
                            <CTableHeaderCell></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {dataRiwayat.length === 0 ? (
                            <> </>
                        ) : dataRiwayat.data.map((n) => (
                            <CTableRow>
                                <CTableDataCell className="sticky-col" style={{ position:"-webkit-sticky"}} width={'20%'}>
                                    {n.nomor_pengajuan}
                                </CTableDataCell>
                                <CTableDataCell width={'5%'}>
                                    {n.jenis_kegiatan}: {n.jumlah}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.persentase_pengajuan} %
                                </CTableDataCell>
                                <CTableDataCell>
                                    <JobInfo icon={<ArrowRotate />} text={n.tahapan_pengajuan}/>
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    {n.dana_yang_dicairkan}
                                </CTableDataCell>
                                <CTableDataCell >
                                    {n.dana_yang_disetujui}
                                </CTableDataCell>
                                <CTableDataCell width={'13%'}>
                                    {n.tanggal_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell width={'2%'}>
                                    {'1 Hari'}
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    <Hyperlink small={'14px'} label={'Lihat Detail'}/>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                        {/* {isLoading?<CSpinner color="info" /> : users.map((n) => (
                            <>
                                <AdminMyHockeyUserListRowDetails 
                                    rowDetails={n} 
                                    activeTab={activeTab} 
                                    suspend={suspendUser} 
                                    unsuspend={unsuspendUser}
                                />
                            </>
                        ))} */}
                    </CTableBody>
                </CTable>
            </Wrapper>
        </>
    )
}

export default MembershipTable
