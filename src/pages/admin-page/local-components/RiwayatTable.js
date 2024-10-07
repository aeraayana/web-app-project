import styled from "styled-components";
import {
    ChoiceBoxString,
    ContainerCardSection,
    Hyperlink,
    Spacing
} from "../../../components";
import { CAvatar, CPagination, CPaginationItem, CProgress, CSpinner, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useAppContext } from "../../../context/appContext";
import React from "react";

const ProgressValue = {
    0: 0,
    1: 6,
    2: 6,
    3: 21,
    4: 21,
    5: 34,
    20: 0
}  

const Dictionary = {
    0: "Draft",
    1: "Dalam Proses",
    2: "Dalam Proses",
    3: "Dalam Proses",
    4: "Dalam Proses",
    5: "Dalam Proses",
    20: "Selesai Ditolak",
}

const RiwayatTable = ({ setSelectedData, selectedData, flag, search, page, perPage, tahapanKegiatan }) => {

    const Wrapper = styled(ContainerCardSection)`
        height: 30rem;
        width: 100%; 
        overflow: auto;

        .sticky-col {
            position: -webkit-sticky;
            position: sticky;
            background-color: white;
        }
        
        .progress-bar{
            accent-color: red;
            border-radius: 10px;
            width: 100%;
            min-height: 30px;
            border: 1px solid var(--color-disable);
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

    const { getDataRiwayatPengajuanAdmin, toggleRiwayatTableModal } = useAppContext();

    const handleClick = (e) => {
        setSelectedData({data: [e]});
        toggleRiwayatTableModal();
    }

    const [activePage, setActivePage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState('10');
    const [data, setData] = React.useState([]);

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(data.total / rowsPerPage); i++){
        pageNumbers.push(i);
    }

    const handleChange = (e) => {
        if(e < 1){
            setActivePage(1);
        }else if(e >= parseInt(pageNumbers[pageNumbers.length - 1])){
            setActivePage(pageNumbers.length);
        }else{
            setActivePage(e);
        }
    }

    const getData = async (flag, search, page, perPage, tahapanKegiatan) => {
        const response = await getDataRiwayatPengajuanAdmin({ flag, search, page, perPage, tahapanKegiatan });
        if(response) setData(response.data);
    }

    React.useEffect(() => {
        getData(flag, search, activePage, rowsPerPage, tahapanKegiatan);
    }, [flag, search, activePage, rowsPerPage, tahapanKegiatan]);
    
    if(data.length === 0){
        <Wrapper>
            <CSpinner />
        </Wrapper>
    }
    return (
        <>
            <div className="row-start-center">
                <span>Lihat</span> 
                <Spacing width={'0.5rem'}/>
                <ChoiceBoxString options={['10', '25', '50']} height={'2.25rem'} width={'4.25rem'} name={'rowsPerPage'} onChange={(e) => setRowsPerPage(e.target.value)}/> 
                <Spacing width={'0.5rem'}/>
                <span> Baris</span>
            </div>
            <Spacing height={'1.25rem'}/>
            <Wrapper padding={'0'}>
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>ID Pengajuan</CTableHeaderCell>
                            <CTableHeaderCell>Nama Kelompok</CTableHeaderCell>
                            <CTableHeaderCell>Jenis Kegiatan</CTableHeaderCell>
                            <CTableHeaderCell>Tahap Pengajuan</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Progress</CTableHeaderCell>
                            <CTableHeaderCell>Tema</CTableHeaderCell>
                            <CTableHeaderCell>Sub Tema</CTableHeaderCell>
                            <CTableHeaderCell>Penanggung Jawab</CTableHeaderCell>
                            <CTableHeaderCell>Tanggal Pengajuan</CTableHeaderCell>
                            <CTableHeaderCell>Tanggal Kegiatan</CTableHeaderCell>
                            <CTableHeaderCell>Tanggal Realisasi</CTableHeaderCell>
                            <CTableHeaderCell>Update Terakhir</CTableHeaderCell>
                            <CTableHeaderCell>Budget</CTableHeaderCell>
                            <CTableHeaderCell>Dana Dicairkan</CTableHeaderCell>
                            <CTableHeaderCell>% Pencairan</CTableHeaderCell>
                            <CTableHeaderCell></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {data?.data?.length === 0 ? (
                            <CSpinner />
                        ) : data?.data?.map((n) => (
                            <CTableRow>
                                <CTableDataCell className="sticky-col" style={{ zIndex:'999', position:"-webkit-sticky" }} width={'20%'}>
                                    {n.nomor_pengajuan}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.kelompok_masyarakat}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.jenis_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.tahapan_pengajuan}
                                </CTableDataCell>
                                <CTableDataCell >
                                    {n.status}
                                </CTableDataCell>
                                <CTableDataCell>
                                    <CProgress color="success" className="progress-bar" value={ProgressValue[n.status]}>{ProgressValue[n.status]}%</CProgress>
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.tematik_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell >
                                    {n.sub_tematik_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell>
                                    <div className="row-start-start">
                                        <CAvatar style={{ width:'2.15rem', height:'2.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />                            
                                        <Spacing width={'0.55rem'} />
                                        <div className="col-start-start">
                                            <span style={{ fontWeight:'bold' }}>{n.kelompok_masyarakat}</span>
                                            <span style={{ fontSize:11, color:'var(--color-semiblack)' }}>{n.pic_kelompok}</span>
                                        </div>
                                    </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n.tanggal_pengajuan}
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    {n.tanggal_kegiatan}
                                </CTableDataCell>
                                <CTableDataCell >
                                    {n.tanggal_realisasi}
                                </CTableDataCell>
                                <CTableDataCell width={'13%'}>
                                    {n.update_terakhir}
                                </CTableDataCell>
                                <CTableDataCell width={'2%'}>
                                    {n.dana_yang_disetujui}
                                </CTableDataCell>
                                <CTableDataCell width={'2%'}>
                                    {n.dana_yang_dicairkan}
                                </CTableDataCell>
                                <CTableDataCell width={'2%'}>
                                    {Math.floor(n.dana_yang_dicairkan / n.sisa_pencairan * 100)} %
                                </CTableDataCell>
                                <CTableDataCell width={'20%'}>
                                    <Hyperlink small={'14px'} label={'Lihat Detail'} onClick={() => handleClick(n)}/>
                                </CTableDataCell>
                            </CTableRow>
                        ))}
                        
                    </CTableBody>
                </CTable>
                
            </Wrapper>
            <Spacing height={'1.25rem'}/>
            <hr></hr>
            <div className='d-flex flex-row justify-content-center'>
                <CPagination>
                    <CPaginationItem style={{ margin:'0px 5px' }} onClick={() => handleChange(activePage - 1)}>{'<'}</CPaginationItem>
                    {pageNumbers.map((number) => (
                        <CPaginationItem 
                            onClick={() => handleChange(number)} 
                            active={number === activePage}
                            style={{ margin:'0px 5px' }}    
                        >
                            {number}
                        </CPaginationItem>
                    ))}
                    <CPaginationItem style={{ margin:'0px 5px' }} onClick={() => handleChange(activePage + 1)}>{'>'}</CPaginationItem>
                </CPagination>
            </div>
        </>
    )
}

export default RiwayatTable
