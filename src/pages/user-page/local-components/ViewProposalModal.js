import { ButtonOutlined, ContainerCardSection, Spacing } from "../../../components";
import React from "react";
import { BrowserView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import FeaturedIcon from "../../../../src/assets/images/Featured icon.png"
import FileType from "../../../../src/assets/images/file type.png"
import { CModalBody, CModalHeader, CModalTitle, CSpinner } from "@coreui/react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import ExcelExport from "../export-items/ExportExcelFromData";
import axios from "axios";
import { CLIENT_ID, CLIENT_ID_SECRET, HOST_URL } from "../../../configs/constants";
import { MoreVertOutlined } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

const ViewProposalModal = ({ show, onClose, selectedData }) => {

    // console.log(show);
    const [dataForm, setDataForm] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorAttach, setAnchorAttach] = React.useState(null);
    
    const openSk = Boolean(anchorEl);
    const openAttach = Boolean(anchorAttach);

    const handleClickSk = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickAttach = (event) => {
        setAnchorAttach(event.currentTarget);
    }

    const handleDownloadAttached = (e) => {
        console.log(e);
        const newWindow = window.open(`/aksesdanalh/public/storage/${e}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        setAnchorEl(null);
    }

    const handleDownloadSk = (e) => {
        console.log(e);
        const newWindow = window.open(`/aksesdanalh/public/storage/${e}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        setAnchorEl(null);
    }

    React.useEffect(() => {
        if(show){
            axios.get(`${HOST_URL}getDataRab/${selectedData.id}`, {
                headers: {
                    Accept: 'application/json',
                    id: CLIENT_ID,
                    secret: CLIENT_ID_SECRET,
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((res) => {
                setDataForm(res.data.data);
            })
        }
    }, [show])

    const handleDownloadPdf = () => {
        const newWindow = window.open('#/layanan-masyarakat/laporan-pdf', '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
        localStorage.setItem('data', JSON.stringify(selectedData));
    }

    const handleDownloadRab = () => {
        const newWindow = window.open(`#/layanan-masyarakat/laporan-rab/${selectedData.id}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    
    // const { toggleProposalModal, showProposalModal, toggleDetailProgressModal } = useAppContext();

/////////////////////////////////////////////////////////////////////////////////////////////////
    
    const handleReturn = () => {
        onClose();
    }

    if(selectedData.length === 0){
        return (
            <Wrapper
                size="lg"
                scrollable
                alignment="center"
                visible={show}
                onClose={onClose}
            >
                {show && (<CSpinner />)}
            </Wrapper>
        )
    }
    
    return (
        <>
            <BrowserView>
                <Wrapper
                    size="lg"
                    scrollable
                    alignment="center"
                    visible={show}
                    onClose={onClose}
                >
                    <CModalHeader>
                        <CModalTitle className="title-description">
                            <ButtonOutlined 
                                label="KEMBALI KE DETAIL KEGIATAN"
                                height={'2.65rem'}
                                className={'title-description'}
                                borderColor={'transparent'}
                                onClick={handleReturn}
                                iconPre={<FaArrowLeft/>} />
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className="w-full">
                            <div className="col-start-start">
                                <span className='page-number'>TAHAP 1</span>
                                <Spacing height={'0.2s5rem'}/>
                                <span className='subtitle'>Verifikasi dan Validasi</span>

                                <Spacing height={'1.25rem'}/>
                                <span className="description" style={{ fontSize:"var(--font-size-normal-2)"}}>Proposal diajukan: </span>
                            </div>
                            
                            <Spacing height={'1.25rem'}/>

                            <ContainerCardSection style={{ width:'80%' }}>
                                <div className="row-start-center w-full">
                                    <img src={FeaturedIcon} width={'40px'}></img>
                                    <span className="description" style={{ fontWeight:'bold', marginLeft:'0.5rem' }}>Proposal_13019248.pdf</span>
                                </div>
                                <hr></hr>
                                <div className="row-center-center w-full">
                                    <ButtonOutlined
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        onClick={() => handleDownloadPdf()}
                                        label={'Buka'}
                                    />
                                </div>
                            </ContainerCardSection>
                        </div>
                        <Spacing height="1.5rem" />

                        <div className="w-full">
                            <ContainerCardSection style={{ width:'80%' }}>
                                <div className="row-start-center w-full">
                                    <img src={FeaturedIcon} width={'40px'}></img>
                                    <span className="description" style={{ fontWeight:'bold', marginLeft:'0.5rem' }}>RAB_13019248.pdf</span>
                                </div>
                                <hr></hr>
                                <div className="row-center-center w-full">
                                    <ButtonOutlined
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        onClick={() => handleDownloadRab()}
                                        label={'Buka'}
                                    />

                                    <Spacing width={'3rem'} />

                                    {dataForm && (
                                        <ExcelExport data={Object.entries(dataForm.komponen_rab)}/>
                                    )}
                                </div>
                            </ContainerCardSection>
                        </div>
                        
                        <Spacing height="1.5rem" />
                        
                        <div>
                            <span className="subtitle"> <FaChevronDown width={'12px'} /> Unggahan </span>
                            {/* {console.log(selectedData?.document.find((item) => item.group === 'document'))} */}
                            <Spacing height="0.95rem" />
                            
                            {selectedData?.document.find((item) => item.group === 'document') && (
                                <div className="col-center-center w-full" style={{ width:'30%', border: '1px solid var(--color-disable)', borderRadius: '5px', padding: '20px 0px', textWrap: "balance" }}>
                                    <img src={FileType} height={'60px'} width={'60px'}></img>
                                    <div className="row-around-center">
                                        <span className="description" style={{ width: '60%', fontWeight:'bold', marginTop:'1.25rem', textWrap: "balance" }}>{selectedData?.document.find((item) => item.group === 'document')?.file_name}</span>
                                        <MoreVertOutlined onClick={handleClickAttach}/>
                                        <Menu
                                            id="demo-menu"
                                            aria-labelledby="demo-button"
                                            anchorEl={anchorAttach}
                                            open={openAttach}
                                            onClose={() => setAnchorAttach(null)}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                                transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <MenuItem onClick={() => handleDownloadAttached(selectedData?.document.find((item) => item.group === 'document')?.file_path)}>Download</MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            )}

                            <Spacing height={'2.25rem'} />

                            <div className="col-start-start">
                                <span className="description" style={{ fontSize:"var(--font-size-normal-2)"}}>Hasil verifikasi dan validasi:</span>
                                
                                <Spacing height={'0.75rem'}/>
                                
                                <span className="subtitle">Surat Keputusan</span>
                            </div>

                            <Spacing height={'0.45rem'} />

                            <div className="col-center-center w-full" style={{ width:'30%', border: '1px solid var(--color-disable)', borderRadius: '5px', padding: '20px 0px', textWrap: "balance" }}>
                                <img src={FileType} height={'60px'} width={'60px'}></img>
                                <div className="row-around-center">
                                    <span className="description" style={{ width: '60%', fontWeight:'bold', marginTop:'1.25rem', textWrap: "balance" }}>{selectedData?.document.find((item) => item.group === 'document_sk')?.file_name}</span>
                                    <MoreVertOutlined onClick={handleClickSk}/>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={openSk}
                                        onClose={() => setAnchorEl(null)}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={() => handleDownloadSk(selectedData?.document.find((item) => item.group === 'document_sk')?.file_path)}>Download</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                        </div>
                    </CModalBody>
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default ViewProposalModal
