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

const MembershipTable = () => {

    const Wrapper = styled(ContainerCardSection)`
        height: 30rem;
        width: 100%; 
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
            padding-left: 1.25rem;
        }
    `;

    return (
        <Wrapper >
            <CTable hover style={{ overflow: "hidden" }}>
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
                        <CTableDataCell width={"12%"}>
                            {'130192847'}
                        </CTableDataCell>
                        <CTableDataCell width={'17%'}>
                            {'Sosialisasi: 20 Orang'}
                        </CTableDataCell>
                        <CTableDataCell width={'4%'}>
                            {'6%'}
                        </CTableDataCell>
                        <CTableDataCell width={'14%'}>
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
                        </CTableDataCell>
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
    )
}

export default MembershipTable
