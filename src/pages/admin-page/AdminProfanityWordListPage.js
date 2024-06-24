import { useNavigate } from 'react-router-dom';
import { ButtonSolid, InputTextWithPrompt, Spacing } from '../../components';
import Wrapper from '../../wrappers/admin-page/AdminProfanityWordListPageWrapper';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useAppContext } from '../../context/appContext';
import { CPagination, CPaginationItem, CSpinner, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import AdminProfanityWordListRowDetails from './AdminProfanityWordListRowDetails';

const initialState = {
    word: ''
}

const AdminProfanityWordListPage = () => {
    const navigate = useNavigate();
    const {data, changePage, sortColumn, totalData, getAllData, isLoading, deleteData, setSearch } = useAppContext();
    const [searchValue, setSearchValue] = useState(initialState);
    const [activePage, setActivePage] = useState(1)
    const [columnFilter, setColumnFilter] = useState([])
    const [columnSorter, setColumnSorter] = useState(null)
    const [records, setRecords] = useState([])
    const [firstLoad, isFirstLoad] = useState(true);

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(records / 10); i++){
        pageNumbers.push(i);
    }

    const clearSearchandSort = async () => {
        await sortColumn('','')
        await setSearch('','','')
    }

    const getWords = () => {
        changePage(activePage)
        if(columnSorter && columnSorter.column !== undefined){
            sortColumn(columnSorter.column, columnSorter.state)
        }
        getAllWords()
    }

    useEffect(getWords, [activePage, columnFilter, columnSorter, searchValue])
    
    const getAllWords = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false);
        }
        await getAllData('profanitywordlists')
        setRecords(totalData)
    }

    const removeWord = async (id) => {
        await deleteData(id, 'profanitywordlists')
        getWords()
    }

    const debounced = useDebouncedCallback(

        (value, name) => {
            if(value === ''){
                handleSearch('','','')
                setSearchValue({[name]: ''});
            }else{
                handleSearch(value, name)
                setSearchValue({[name]: value});
            }
        }, 500
    )
        
    const handleSearch = async (value, name, compare = 'contains') => {
        await setSearch(value, name, compare);
        await getWords();
    }

    const handleChange = async (e) => {
        debounced(e.target.value, e.target.name);
    } 
    
    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='row-between-center w-full'>
                    <div>
                        <h1 className='title' style={{marginBottom:'0.85rem'}}>Profanity Word List</h1>
                        <p>If user try to make a username containing any word within this list, their username will automatically be rejected. Admin can either add or remove words from this list.</p>
                    </div>
                    <div style={{position:'absolute', top:'6.25rem', right: '1.85rem'}}>
                        <ButtonSolid label="Add Word to List" width="13.5rem" height="2.5rem" onClick={() => {
                            setTimeout(() => {
                                navigate('/admin/profanity-word-list/create');
                            }, 1000);
                        }}/>    {/**w=130px h=40px */}
                    </div>
                </div>
                <div className='d-flex flex-row w-full'>
                    <div style={{width:'40%', marginTop:'0.85rem', padding:'0 0.25rem'}}>
                        <InputTextWithPrompt 
                            inputHeight={'2.65rem'} onChange={handleChange} name={'word'} placeholder={'search for word...'} ></InputTextWithPrompt>
                    </div>
                </div>
                <Spacing height="2rem" />
                <div className='w-full'>
                    <CTable borderless>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>Word</CTableHeaderCell>
                                <CTableHeaderCell>Date Added</CTableHeaderCell>
                                <CTableHeaderCell>Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody className='position-relative px-5'>
                            {isLoading? <CSpinner color="info" /> : data?.map((n) => (
                                <>
                                    <AdminProfanityWordListRowDetails
                                        rowDetails={n}
                                        remove={removeWord}
                                    />
                                </>
                            ))}
                        </CTableBody>
                    </CTable>
                    <div className='d-flex flex-row justify-content-center'>
                        <CPagination>
                            {pageNumbers.map((number) => (
                                <CPaginationItem onClick={(e) => setActivePage(parseInt(e.target.text))} active={number === activePage}>
                                    {number}
                                </CPaginationItem>
                            ))}
                        </CPagination>
                    </div>
            </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminProfanityWordListPage;
