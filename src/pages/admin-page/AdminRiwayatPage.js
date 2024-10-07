import React from "react";
import RiwayatTable from "./local-components/RiwayatTable";
import { ChoiceBoxStringWithPrompt, ContainerCardSection, InputTextSearch, Spacing } from "../../components";
import Wrapper from "../../wrappers/user-page/UserAdminPageWrapper";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import axios from "axios";
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from "../../configs/constants";
import { toast, ToastContainer } from "react-toastify";
import { useAppContext } from "../../context/appContext";
import { CSpinner } from "@coreui/react";

const AdminRiwayatPage = () => {

    const { logoutUser } = useAppContext();
    
    const [selectedData, setSelectedData] = React.useState();
    const [flag, setFlag] = React.useState('Semua');

    const [initialState, setInitialState] = React.useState({
        tahapanKegiatan: '',
    });

    const [dataTahapan, setDataTahapan] = React.useState({});

    const getData = async () => {
        try {
            const response = await axios.get(
                `${HOST_URL}getTahapanKegiatan/`, {
                headers: {
                    Accept: 'application/json',
                    id: CLIENT_ID,
                    secret: CLIENT_ID_SECRET,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });

            if (response) {
                toast.success(
                    <div className="col-start-start">
                        <span className="description" style={{ fontWeight: 'bold', color:'white' }}>Berhasil</span>
                        <span className="description" style={{ color:'white' }}>GET Request Successful</span>
                    </div>, { position: toast.POSITION.TOP_RIGHT, theme: 'colored' }
                )
                setDataTahapan(response.data);
            }
        } catch (error) {
            logoutUser();
        }
    }

    React.useEffect(() => { 
        getData();
    }, [])

    const styles = {
        textTransform: 'none', 
        '&.Mui-selected': { color: 'var(--color-primary)' },
        fontWeight: 'bold',
        fontFamily: 'var(--font-family-primary)',
        minHeight:'0px',
        padding:'8px'
    }
    
    const handleChange = (e, val) => {
        setFlag(val)
    }

    const handleSearch = (e) => {
        let list = initialState;
        list[e.target.name] = e.target.value;

        setInitialState({ ...list });
        console.log(initialState);
    }

    return(
        <Wrapper>
            <ToastContainer />
            <div className="col-start-start w-full">
                <span className='title' style={{ color:'var(--color-primary-dark)' }}>Riwayat</span>
                <span className='price-tag' style={{ fontWeight:400 }}>RIWAYAT KEGIATAN PEMBIAYAAN HIBAH</span>
            </div>

            <Spacing height={'1.75rem'} />
            
            <TabContext value={flag}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', minHeight:'0px' }}>
                    <TabList
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: 'var(--color-primary-dark)',
                            },
                            minHeight:'0px'
                        }} 
                        onChange={handleChange} 
                        aria-label="lab API tabs example"
                    >
                        <Tab sx={styles} label="Seluruh" value="Semua" />
                        <Tab sx={styles} label="Berjalan" value="Berjalan" />
                        <Tab sx={styles} label="Selesai" value="Selesai" />
                        <Tab sx={styles} label="Ditolak" value="Ditolak" />
                    </TabList>
                </Box>

                <Spacing height={'1.75rem'}/>
                <div style={{ padding: '0px 24px' }}>
                    <ContainerCardSection className={'row-start-start w-full'}>
                        <div className="col-start-start">
                            <span className='label' style={{ paddingBottom: "0.5rem" }}>Pencarian</span>
                            <InputTextSearch
                                type={"text"}
                                id={"search"}
                                name={"search"}
                                width={'20rem'}
                                height={'2.25rem'}
                                placeholder={'Masukkan kata kunci...'}
                                defaultValue={initialState?.search}
                                onKeyDown={(e) => 
                                    {
                                        if (e.key === "Enter") {
                                            console.log(e.target.value);
                                            handleSearch(e)
                                        }
                                    }} 
                                />
                        </div>
                        
                        <Spacing width={'2.25rem'}/>
                        
                        {dataTahapan ? (
                            <ChoiceBoxStringWithPrompt
                                prompt={"Tahap Kegiatan"}
                                disabled={dataTahapan.length === 0} 
                                options={dataTahapan?.data?? ['pilih tahap kegiatan']} 
                                id={"deskripsi_kegiatan"} 
                                height={'2.25rem'} 
                                name={"tahapanKegiatan"} 
                                value={initialState?.tahapanKegiatan} 
                                onChange={(e) => handleSearch(e)} />
                        ) : (
                            <CSpinner />
                        )}

                    </ContainerCardSection>
                </div>

                <TabPanel value="Semua">
                    <RiwayatTable 
                        setSelectedData={setSelectedData} 
                        selectedData={selectedData} 
                        flag={flag} 
                        search={initialState.search} 
                        tahapanKegiatan={initialState.tahapanKegiatan}/>
                </TabPanel>

                <TabPanel value="Berjalan">
                    <RiwayatTable 
                        setSelectedData={setSelectedData} 
                        selectedData={selectedData} 
                        flag={flag} 
                        search={initialState.search} 
                        tahapanKegiatan={initialState.tahapanKegiatan}/>
                </TabPanel>
                
                <TabPanel value="Selesai">
                    <RiwayatTable 
                        setSelectedData={setSelectedData} 
                        selectedData={selectedData} 
                        flag={flag} 
                        search={initialState.search} 
                        tahapanKegiatan={initialState.tahapanKegiatan}/>
                </TabPanel>

                <TabPanel value="Ditolak">
                    <RiwayatTable 
                        setSelectedData={setSelectedData} 
                        selectedData={selectedData} 
                        flag={flag} 
                        search={initialState.search} 
                        tahapanKegiatan={initialState.tahapanKegiatan}/>
                </TabPanel>
            </TabContext>

            <Spacing height={"1.75rem"}/>
        </Wrapper>
    )
}


export default AdminRiwayatPage;