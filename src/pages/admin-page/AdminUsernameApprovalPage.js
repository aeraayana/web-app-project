import { CNav, CNavItem, CNavLink, CSpinner } from '@coreui/react';
import { ButtonSolid, ChoiceBoxStringWithPrompt, InputTextWithPrompt, Spacing } from '../../components';
import Wrapper from '../../wrappers/admin-page/AdminUsernameApprovalPageWrapper';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { useDebouncedCallback } from 'use-debounce';
import { CPagination, CPaginationItem, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import AdminUsernameApprovalRowDetails from './AdminUsernameApprovalRowDetails';

const initialState = {
    username: '',
    role: '',
    email: '',
    gender: '',
    membership: '',
}

const AdminUsernameApprovalPage = () => {

    const {users, changePage, sortColumn, totalUsers, getAllUsers, isLoading, manageUser, setSearch } = useAppContext();
    const [searchValue, setSearchValue] = useState(initialState);
    const [activePage, setActivePage] = useState(1)
    const [activeTab, setActiveTab] = useState(0)
    const [columnFilter, setColumnFilter] = useState([])
    const [columnSorter, setColumnSorter] = useState(null)
    const [records, setRecords] = useState([])
    const [firstLoad, isFirstLoad] = useState(true);

    const roles = ['', 'admin', 'coach', 'athlete', 'scout', 'school', 'public', 'association']

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

    useEffect(getUsers, [activePage, columnFilter, columnSorter, activeTab, searchValue])
    
    const getAllPendingUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('pending-username')
        setRecords(totalUsers)
    }

    const getAllApprovedUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('approved-username')
        setRecords(totalUsers)
    }

    const getAllRejectedUsers = async () => {
        if (firstLoad) {
            await clearSearchandSort()
            isFirstLoad(false)
        }
        await getAllUsers('rejected-username')
        setRecords(totalUsers)
    }

    const approveUser = async (_id) =>{
        await manageUser(_id, 'update-username', 'Username approved!', { status: 'approved' })
        getUsers()
    }

    const rejectUser = async (_id) =>{
        await manageUser(_id, 'update-username', 'Username rejected!', { status: 'rejected' })
        getUsers()
    }

    const pendingUser = async (_id) =>{
        await manageUser(_id, 'update-username', 'Username pending!', { status: 'pending' })
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
    
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(records / 10); i++){
        pageNumbers.push(i);
    }

    const handleChange = async (e) => {
        debounced(e.target.value, e.target.name);
    } 


    return (
        <React.Fragment>
            <Wrapper className="col-start-center w-full">
                <div className='row-between-center w-full' > 
                    <h1 className='title'>Username Approval</h1>
                    <ButtonSolid label="Add User" width="8.125rem" height="2.5rem" />    {/**w=130px h=40px */}
                </div>
                <div className='d-flex flex-row w-full'>
                    <div style={{width:'100%', marginTop:'2.2rem', padding:'0 0.45rem'}}>
                        <InputTextWithPrompt
                            inputHeight={'2.65rem'} onChange={handleChange} name={'username'} placeholder={searchValue.username === '' ? 'search username...' : searchValue.username} ></InputTextWithPrompt>
                    </div>
                    <div style={{width:'100%', padding:'0 0.45rem'}}>
                        <ChoiceBoxStringWithPrompt
                            prompt={'role'} height={'2.65rem'} options={roles} name={'role'} onChange={handleChange}></ChoiceBoxStringWithPrompt>
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
                                {isLoading? <CSpinner color="info" /> : users?.map((n) => (
                                    <>
                                        <AdminUsernameApprovalRowDetails
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

                        {/* <CSmartTable
                            columns={columns}
                            loading={isLoading}
                            columnFilter={{
                                external: true,
                            }}
                            columnSorter={{
                                external: true,
                            }}
                            items={users}
                            pagination={{
                                external: true,
                            }}
                            paginationProps={{
                                activePage: activePage,
                                pages: Math.ceil(records / 10) || 1,
                                align: 'center'
                            }}
                            tableProps={{
                                hover: true,
                                responsive: true,
                            }}
                            onActivePageChange={(activePage) => setActivePage(activePage)}
                                onColumnFilterChange={(filter) => {
                                setActivePage(1)
                                setColumnFilter(filter)
                            }}
                            onSorterChange={(sorter) => setColumnSorter(sorter)}
                            scopedColumns={{
                                action: (item) =>{
                                    return (
                                        <td className="py-2" style={{ textAlign: 'center' }}>
                                            {(activeTab === 0) ?
                                                <>
                                                    <CButton size="sm" color="danger" onClick={() => {
                                                        rejectUser(item._id)
                                                    }}>
                                                        Reject
                                                    </CButton>
                                        
                                                    <CButton size="sm" color="info" style={{ marginLeft: '0.5rem' }} onClick={() => {
                                                        approveUser(item._id)
                                                    }}>
                                                        Approve
                                                    </CButton>
                                                </> :
                                                <CButton size="sm" color="info" variant='outline' style={{ marginLeft: '0.5rem' }} onClick={() => {
                                                    pendingUser(item._id)
                                                }}>
                                                    Make Pending
                                                </CButton>
                                            }
                                        </td>
                                    )
                                },
                                username: (item) => {
                                    return(
                                        <td>
                                            {item.username ?? '-'}
                                        </td>
                                    )
                                },
                                role: (item) => {
                                    return(
                                        <td>
                                            {item.role ?? '-'}
                                        </td>
                                    )
                                },
                                email: (item) => {
                                    return(
                                        <td>
                                            {item.email ?? '-'}
                                        </td>
                                    )
                                },
                                gender: (item) => {
                                    return(
                                        <td>
                                            {item.gender ?? '-'}
                                        </td>
                                    )
                                },
                                membership: (item) =>{
                                    return(
                                        <td>
                                            {item.membership ?? '-'}
                                        </td>
                                    )
                                },
                            }}
                            
                        /> */}
                    </div>
                  </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default AdminUsernameApprovalPage;
