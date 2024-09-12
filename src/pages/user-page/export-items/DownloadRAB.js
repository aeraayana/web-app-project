import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from '../../../configs/constants';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { InputTextWithPrompt, Spacing } from '../../../components';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0rem 0rem 0rem 3.5rem;
    text-wrap: balance;
    word-wrap: break-word;
    height: 100vh;

    table{
        border: 1px solid var(--color-disable);
        border-radius: 16px 16px 0px 0px;
        border-collapse: separate;
        border-radius: 4px;
        border-spacing: 0px;
    }

    
    .outer-row > td{
        color: #FFFFFF;
        font-family: var(--font-family-primary);
        background-color: #979CA5;
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: center;
        }
    }

    .inner-row > td{
        color: var(--color-black);
        font-family: var(--font-family-primary);
        border-bottom: 1px solid var(--color-disable);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: right;
        }
    }
    
    .table-head > th{
        color: var(--color-black);
        font-family: var(--font-family-primary);
        border-bottom: 1px solid var(--color-disable);
        background-color: var(--color-disable-light);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: center;
        }
    }
`
const numFormat = (number) => {
	return new Intl.NumberFormat("id-ID", { style: "decimal" }).format(number);
};

const DocumentRab = ({ props }) => {
    const [dataForm, setDataForm] = React.useState([]);

    const id = useParams();

    const getTotal = (item, elementName, itemName) => {
		let sum = 0;
        for(const [key, value] of Object.entries(item)){
            for(let i = 0; i < value.length; i += 1){
                sum += (value[i]?.[`${elementName}`] * value[i]?.[`${itemName}`]);
            }
        }

		return numFormat(sum);
	};
    
    React.useEffect(() => {
        axios.get(`${HOST_URL}getDataRab/${id.id}`, {
            headers: {
                Accept: 'application/json',
                id: CLIENT_ID,
                secret: CLIENT_ID_SECRET,
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((res) => {
            setDataForm(res.data.data);
        })
    }, [])

    console.log(dataForm);
    return(
        <Wrapper>
            <CTable borderless>
                <CTableHead>
                    <CTableRow className="table-head">
                        <CTableHeaderCell>No.</CTableHeaderCell>
                        <CTableHeaderCell>Deskripsi</CTableHeaderCell>
                        <CTableHeaderCell>Satuan</CTableHeaderCell>
                        <CTableHeaderCell>Harga Unit</CTableHeaderCell>
                        <CTableHeaderCell>Jumlah</CTableHeaderCell>
                        {/* {kategori.jenis_kegiatan === 'Pelatihan' && <CTableHeaderCell>Membership</CTableHeaderCell>} */}
                        <CTableHeaderCell>Harga Total</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody className='position-relative px-5'>
                    {dataForm.komponen_rab ? Object.keys(dataForm.komponen_rab).map((n, i) => (
                        <>
                            <CTableRow className="outer-row">
                                <CTableDataCell>
                                    {String.fromCharCode((i + 65))}
                                </CTableDataCell>
                                <CTableDataCell>
                                    {n}
                                </CTableDataCell>
                                <CTableDataCell />
                                <CTableDataCell />
                                <CTableDataCell />
                                <CTableDataCell />
                            </CTableRow>
                            
                            {dataForm.komponen_rab[`${n}`].map((rowDetails, idx) => (
                                <>
                                    <CTableRow className="inner-row w-full">
                                        <CTableDataCell align="right">{idx + 1}</CTableDataCell>
                                        <CTableDataCell>
                                            {rowDetails.komponen_rab?? '-'}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {rowDetails.satuan?? '-'}
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <InputTextWithPrompt
                                                inputHeight={'1.75rem'}
                                                width={'6.65rem'}
                                                name={`harga_unit`}
                                                defaultValue={new Intl.NumberFormat('id-ID').format(
                                                    rowDetails.harga_unit,
                                                )?? '-'}
                                                disabled
                                            />
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <InputTextWithPrompt
                                                inputHeight={'1.75rem'}
                                                width={'6.25rem'}
                                                name={`qty`}
                                                defaultValue={new Intl.NumberFormat('id-ID').format(
                                                    rowDetails.qty,
                                                )?? '-'}
                                                disabled
                                            />
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            {new Intl.NumberFormat('id-ID').format(
                                                rowDetails.qty * rowDetails.harga_unit,
                                            )?? '-'}
                                        </CTableDataCell>
                                    </CTableRow>
                                </>
                            ))}
                        </>
                    )) : (
                        <></>
                    )}
                </CTableBody>
            </CTable>

            <div 
                style={{ 
                    borderTop:'2px solid var(--color-disable)', 
                    borderBottom:'2px solid var(--color-disable)',
                    padding:'0.225rem',
                    backgroundColor: 'var(--color-disable-light)',
                }}
                className="row-end-start w-full" 
            >
                <span className="subtitle">TOTAL</span>
                <Spacing width={'4.45rem'}/>
                <span className="subtitle">{getTotal(dataForm?.komponen_rab?? 0, 'harga_unit', 'qty')}</span>
            </div>
            <Spacing height="2.5rem" />
        </Wrapper>
    )
}

export default DocumentRab;