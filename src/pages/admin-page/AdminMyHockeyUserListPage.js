import Wrapper from '../../wrappers/admin-page/AdminMyHockeyUserListPageWrapper';
import React, { useEffect, useState } from 'react';

import {
    CNav,
    CNavItem,
    CNavLink,
    CTable,
    CTableHead, 
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CPaginationItem,
    CPagination,
    CSpinner,
} from '@coreui/react'

import { 
    ButtonSolid,
    Spacing,
    InputTextWithPrompt,
    ChoiceBoxStringWithPrompt
} from '../../components'
import { useAppContext } from '../../context/appContext';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';
import AdminMyHockeyUserListRowDetails from './AdminMyHockeyUserListRowDetails';

const initialState = {
    username: '',
    role: '',
}

const AdminMyHockeyUserListPage = () => {

    const {users, changePage, sortColumn, totalUsers, getAllUsers, manageUser, setSearch, isLoading } = useAppContext();
    const [searchValue, setSearchValue] = useState(initialState);
    const [activePage, setActivePage] = useState(1)
    const [activeTab, setActiveTab] = useState(0)
    const [columnFilter, setColumnFilter] = useState([])
    const [columnSorter, setColumnSorter] = useState(null)
    const [records, setRecords] = useState([])
    const [firstLoad, isFirstLoad] = useState(true);

    const roles = ['', 'admin', 'coach', 'athlete', 'scout', 'school', 'public', 'association']

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(records / 10); i++){
        pageNumbers.push(i);
    }

    const clearSearchandSort = async () => {
        await sortColumn('','')
        await setSearch('','','')
    }

    const getUsers = () => {
        changePage(activePage);
        if(columnSorter && columnSorter.column !== undefined){
            sortColumn(columnSorter.column, columnSorter.state);
        }
        if(activeTab === 0)
            getAllActiveUsers();
        else
            getAllSuspendedUsers();
    }

    useEffect(getUsers, [activePage, columnFilter, columnSorter, activeTab, records, searchValue]);
    
    const getAllActiveUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false);
        }
        await getAllUsers()
        setRecords(totalUsers)
    }

    const getAllSuspendedUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false);
        }
        await getAllUsers('suspended')
        setRecords(totalUsers)
    }

    const suspendUser = async (_id) =>{
        await manageUser(_id, 'suspend', 'User Suspended!', {suspended: true})
        getUsers()
    }

    const unsuspendUser = async (_id) =>{
        await manageUser(_id, 'unsuspend', 'User Unsuspended!', {suspended: false})
        getUsers()
    }

    const debounced = useDebouncedCallback(

        (value, name) => {
            if(value === ''){
                handleSearch('','','')
                setSearchValue({[name]: ''});
            } else {
                if (name === 'role') {
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
                <div className='row-between-center w-full'> 
                    <h1 className='title'>My Hockey User List</h1>
                    <ButtonSolid label="Add User" width="8.125rem" height="2.5rem" />    {/**w=130px h=40px */}
                </div>
                <div className='d-flex flex-row w-full'>
                    <div style={{width:'100%', marginTop:'2.2rem', padding:'0 0.25rem'}}>
                        <InputTextWithPrompt 
                            inputHeight={'2.65rem'} onChange={handleChange} name={'username'} placeholder={'search username...'} ></InputTextWithPrompt>
                    </div>
                    <div style={{width:'100%', padding:'0 0.25rem'}}>
                        <ChoiceBoxStringWithPrompt 
                            prompt={'role'} height={'2.65rem'} options={roles} name={'role'} onChange={handleChange}></ChoiceBoxStringWithPrompt>
                    </div>
                </div>
                <Spacing height="2rem" />
                <div className='col-start-start w-full'>  
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink onClick={() => setActiveTab(0)} active={activeTab===0} style={{borderLeft: 0}}>
                               Active User
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink onClick={() => setActiveTab(1)} active={activeTab===1}>Suspended User</CNavLink>
                        </CNavItem>
                    </CNav>
                    <div className='w-full'>
                        <CTable borderless>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell><></></CTableHeaderCell>
                                    <CTableHeaderCell>Username</CTableHeaderCell>
                                    <CTableHeaderCell>Role</CTableHeaderCell>
                                    <CTableHeaderCell>Email</CTableHeaderCell>
                                    <CTableHeaderCell>Gender</CTableHeaderCell>
                                    <CTableHeaderCell>Membership</CTableHeaderCell>
                                    <CTableHeaderCell>Verified</CTableHeaderCell>
                                    <CTableHeaderCell>Date Joined</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody className='position-relative px-5'>
                                {isLoading?<CSpinner color="info" /> : users.map((n) => (
                                    <>
                                        <AdminMyHockeyUserListRowDetails 
                                            rowDetails={n} 
                                            activeTab={activeTab} 
                                            suspend={suspendUser} 
                                            unsuspend={unsuspendUser}
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

export default AdminMyHockeyUserListPage;
