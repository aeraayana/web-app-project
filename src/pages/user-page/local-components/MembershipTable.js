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

    // React.useEffect(() => {getDataRiwayatPengajuan()}, []);
    // console.log(dataRiwayat);

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
                        <CTableRow >
                            <CTableDataCell className="sticky-col" style={{ position:"-webkit-sticky"}} width={'20%'}>
                                {'Sosialisasi: 20 Orang'}
                            </CTableDataCell>
                            <CTableDataCell width={'5%'}>
                                {'6%'}
                            </CTableDataCell>
                            <CTableDataCell>
                                <JobInfo icon={<ArrowRotate />} text={"Dalam Proses"}/>
                            </CTableDataCell>
                            <CTableDataCell width={'20%'}>
                                {'Rp3.750.000'}
                            </CTableDataCell>
                            <CTableDataCell >
                                {'Rp15.000.000'}
                            </CTableDataCell>
                            <CTableDataCell width={'13%'}>
                                {'03 Jun 2024'}
                            </CTableDataCell>
                            <CTableDataCell width={'2%'}>
                                {'3 Hari'}
                            </CTableDataCell>
                            <CTableDataCell width={'20%'}>
                                <Hyperlink small={'14px'} label={'Lihat Detail'}/>
                            </CTableDataCell>
                        </CTableRow>
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
                        <CTableRow >
                            {/* <CTableDataCell width={"12%"}>
                                {'130192847'}
                            </CTableDataCell>
                            <CTableDataCell width={'17%'}>
                                {'Sosialisasi: 20 Orang'}
                            </CTableDataCell>
                            <CTableDataCell width={'4%'}>
                                {'6%'}
                            </CTableDataCell>
                            <CTableDataCell>
                                <JobInfo icon={<ArrowRotate />} text={"Dalam Proses"}/>
                            </CTableDataCell>
                            <CTableDataCell width={'17%'}>
                                {'Rp3.750.000'}
                            </CTableDataCell>
                            <CTableDataCell >
                                {'Rp15.000.000'}
                            </CTableDataCell>
                            <CTableDataCell width={'14%'}>
                                {'03 Jun 2024'}
                            </CTableDataCell>
                            <CTableDataCell width={'2%'}>
                                {'3 Hari'}
                            </CTableDataCell>
                            <CTableDataCell width={'17%'}>
                                <Hyperlink small={'14px'} label={'Lihat Detail'}/>
                            </CTableDataCell> */}
                        </CTableRow>
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
