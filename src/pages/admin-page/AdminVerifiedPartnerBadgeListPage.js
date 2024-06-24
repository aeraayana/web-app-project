import { CNav, CNavItem, CNavLink, CSpinner } from '@coreui/react';
import { ButtonSolid, ChoiceBoxStringWithPrompt, InputTextWithPrompt, Spacing } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../wrappers/admin-page/AdminVerifiedPartnerBadgeListPageWrapper';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { CPagination, CPaginationItem, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import AdminVerifiedPartnerBadgeListRowDetails from './AdminVerifiedPartnerBadgeListRowDetails.js';

const initialState = {
    username: '',
    role: '',
    email: '',
    gender: '',
    membership: '',
}

const AdminVerifiedPartnerBadgeListPage = () => {

    const {users, changePage, sortColumn, totalUsers, getAllUsers, manageUser, setSearch, isLoading } = useAppContext();
    const [searchValue, setSearchValue] = useState(initialState);
    const roles = ['', 'admin', 'coach', 'athlete', 'scout', 'school', 'public', 'association']
    const memberships = ['','premium 1', 'free', 'premium 2']
    const [activePage, setActivePage] = useState(1)
    const [activeTab, setActiveTab] = useState(0)
    const [columnFilter, setColumnFilter] = useState([])
    const [columnSorter, setColumnSorter] = useState(null)
    const [records, setRecords] = useState([])
    const [firstLoad, isFirstLoad] = useState(true);

    const clearSearchandSort = async () => {
        await sortColumn('','')
        await setSearch('','','')
    }

    const getUsers = () => {
        changePage(activePage)
        if(columnSorter && columnSorter.column !== undefined){
            sortColumn(columnSorter.column, columnSorter.state)
        }
        if(activeTab === 0)
            getAllPendingUsers()
        else if (activeTab === 1)
            getAllApprovedUsers()
        else
            getAllRejectedUsers()

    }
    
    useEffect(getUsers, [activePage, columnFilter, columnSorter, activeTab, records, searchValue]);
    
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(records / 10); i++){
        pageNumbers.push(i);
    }
    
    const getAllPendingUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('pending-badge')
        setRecords(totalUsers)
    }

    const getAllApprovedUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('approved-badge')
        setRecords(totalUsers)
    }

    const getAllRejectedUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('rejected-badge')
        setRecords(totalUsers)
    }

    const approveUser = async (_id) =>{
        await manageUser(_id, 'update-badge', 'User badge approved!', { status: 'approved' })
        getUsers()
    }

    const rejectUser = async (_id) =>{
        await manageUser(_id, 'update-badge', 'User badge rejected!', { status: 'rejected' })
        getUsers()
    }

    const pendingUser = async (_id) =>{
        await manageUser(_id, 'update-badge', 'User badge pending!', { status: 'pending' })
        getUsers()
    }
    
    const debounced = useDebouncedCallback(

        (value, name) => {
            if(value === ''){
                handleSearch('','','')
                setSearchValue({[name]: ''});
            } else {
                if (name === 'role' || name === 'membership') {
                    handleSearch(value, name, 'equals')
                } else {
                    handleSearch(value, name)
                }
                setSearchValue({[name]: value});
            }
        }, 500
    )
        
    const handleSearch = async (value, name, compare = 'contains') => {
        await setSearch(value, name, compare);
        await getUsers();
    }

    const handleChange = async (e) => {
        debounced(e.target.value, e.target.name);
    } 

    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='row-between-center w-full' > 
                    <h1 className='title'>Verified Partner Badge List</h1>
                    <ButtonSolid label="Add User" width="8.125rem" height="2.5rem" />    {/**w=130px h=40px */}
                </div>
                <div className='d-flex flex-row w-full'>
                    <div style={{width:'100%', marginTop:'2.2rem', padding:'0 0.45rem'}}>
                        <InputTextWithPrompt
                            inputHeight={'2.65rem'} onChange={handleChange} name={'username'} placeholder={searchValue.username === '' ? 'search username...' : searchValue.username} ></InputTextWithPrompt>
                    </div>
                    <div style={{width:'100%', padding:'0 0.45rem'}}>
                        <ChoiceBoxStringWithPrompt 
                            prompt={'roles'} height={'2.65rem'} options={roles} name={'roles'} onChange={handleChange}></ChoiceBoxStringWithPrompt>
                    </div>
                    <div style={{width:'100%', padding:'0 0.45rem'}}>
                        <ChoiceBoxStringWithPrompt 
                            prompt={'membership'} height={'2.65rem'} options={memberships} name={'membership'} onChange={handleChange}></ChoiceBoxStringWithPrompt>
                    </div>
                </div>
                <Spacing height="2rem" />
                <div className='col-start-start w-full'>  
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink onClick={() => setActiveTab(0)} active={activeTab===0} style={{borderLeft: 0}}>
                               Pending
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink onClick={() => setActiveTab(1)} active={activeTab===1}>Approved</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink onClick={() => setActiveTab(2)} active={activeTab===2}>Rejected</CNavLink>
                        </CNavItem>
                    </CNav>
                    <div className='w-full'>
                        <CTable borderless>
                            <CTableHead>
                                <CTableRow align='middle'>
                                    <CTableHeaderCell>Username</CTableHeaderCell>
                                    <CTableHeaderCell>Role</CTableHeaderCell>
                                    <CTableHeaderCell>Email</CTableHeaderCell>
                                    <CTableHeaderCell>Gender</CTableHeaderCell>
                                    <CTableHeaderCell>Membership</CTableHeaderCell>
                                    <CTableHeaderCell>Verified</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody className='position-relative px-5'>
                                {isLoading ? <CSpinner color="info" /> : users?.map((n) => (
                                    <>
                                        <AdminVerifiedPartnerBadgeListRowDetails
                                            rowDetails={n} 
                                            activeTab={activeTab} 
                                            reject={rejectUser}
                                            approve={approveUser}
                                            pending={pendingUser}
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
                  </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminVerifiedPartnerBadgeListPage;
