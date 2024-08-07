import { ButtonOutlined, ButtonSolid, ContainerCardSection, Spacing } from "../../../components";
import React from "react";
import { BrowserView } from "react-device-detect";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../../../wrappers/user-page/UserCreateFormWrapper";
import InputTextArea from "../../../components/inputs/InputTextArea";
import FeaturedIcon from "../../../../src/assets/images/Featured icon.png"
import { CAvatar, CModalBody, CModalHeader } from "@coreui/react";
import { FaChevronDown } from "react-icons/fa";

const ValidateSubmissionFormModal = ({ show, onClose, selectedData }) => {
    
    const [initialState, setInitialState] = React.useState([]);
    const { postVerifikasiFormProposal, toggleVerifikasiModal } = useAppContext();

    const handleTolak = async (e) => {
        await postVerifikasiFormProposal({ id: selectedData?.id, catatan_log: initialState.catatan_log, status: 0 });
    }

    const handleSetuju = async (e) => {
        await postVerifikasiFormProposal({ id: selectedData?.id, catatan_log: initialState.catatan_log, status: 1 });
    }

    const handleChange = (e) => {
        const list = initialState;
        setInitialState({ ...list, [e.target.name]: e.target.value });
    }
    
    // console.log(initialState);
    // console.log(show);
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
                    </CModalHeader>
                    <CModalBody>
                        <div className="col-start-start w-full">
                            <span className='title'>VERIFIKASI</span>
                            <span className='title-description'>PERMINTAAN BARU</span>
                        </div>
                        <Spacing height={"2.25rem"}/>
                        <span className="subtitle">Diajukan oleh:</span>
                        <Spacing height={"1.25rem"}/>
                        
                        <div className="row-start-start">
                            <CAvatar style={{ width:'4.15rem', height:'4.15rem', backgroundColor: 'rgb(179, 190, 204)' }} />
                            <Spacing width={"1.25rem"}/>
                            
                            <div className="col-start-start">
                                <span className="subtitle">{selectedData?.kelompok_masyarakat}</span>
                                <span className="description" style={{ fontWeight: 'bold' }}>{selectedData?.nama_pic}</span>
                                <span className="description">{selectedData?.email_pic}</span>
                            </div>
                        </div>
                        <Spacing height="1.25rem" />

                        <span className="sublabel">Paket diajukan: </span>
                        <Spacing height="1.25rem" />

                        <div className="row-start-start">
                            <div className="col-start-start w-full">
                                <span className="sublabel">Tema</span>
                                <span className="label" style={{ fontWeight:'bold' }}>
                                    {`${selectedData?.tematik_kegiatan} ${selectedData?.sub_tematik_kegiatan}`}
                                </span>
                            </div>
                            <div className="col-start-start w-full">
                                <span className='description' style={{ fontWeight: 'bold' }}>Tanggal Kegiatan</span>
                                <span className='description'>
                                    {selectedData?.tanggal_akhir_verifikasi}
                                </span>
                            </div>
                            <div className="col-start-start w-full">
                                <span className='description' style={{ fontWeight: 'bold' }}>Rencana Kegiatan</span>
                                <span className='description'>
                                    {selectedData?.tanggal_pengajuan}
                                </span>
                            </div>
                        </div>
                        <Spacing height="1.25rem" />

                        <div className="row-start-start">
                            <div className="col-start-start w-full">
                                <span className='subtitle' style={{ fontWeight: 'bold' }}>{selectedData?.jenis_kegiatan}</span>
                                <span className="sublabel">
                                    {selectedData?.jumlah}
                                </span>
                                <Spacing height="0.5rem" />
                                <span className="description" style={{ fontWeight: 'bold' }}>
                                    #{selectedData?.nomor_pengajuan}
                                </span>
                            </div>

                            <div className="col-start-start w-full">
                                <span className="description" style={{ fontWeight:'bold' }}>Lokasi</span>
                                <span className="description">
                                    {selectedData?.lokasi}
                                </span>
                            </div>

                            <div className="col-start-start w-full">
                                <Spacing width={'15px'}/>
                            </div>
                        </div>
                        <Spacing height="2.5rem" />

                        <div className="w-full">
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
                                        disabled
                                        label={'Buka'}
                                    />
                                    
                                    <Spacing width="2.5rem" />

                                    <ButtonOutlined 
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        disabled
                                        label={'Simpan'}
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
                                        disabled
                                        label={'Buka'}
                                    />
                                    
                                    <Spacing width="2.5rem" />

                                    <ButtonOutlined 
                                        color={'var(--color-semiblack)'}
                                        height={'1.85rem'}
                                        width={'30%'}
                                        disabled
                                        label={'Simpan'}
                                    />
                                </div>
                            </ContainerCardSection>
                        </div>
                        <Spacing height="1.5rem" />
                        <div>
                            <span className="label"> <FaChevronDown width={'12px'} /> Attachment </span>
                            <Spacing height="0.95rem" />
                            <div className="row-start-center w-full">
                                <img src={FeaturedIcon} width={'40px'}></img>
                                <span className="description" style={{ fontWeight:'bold', marginLeft:'0.5rem' }}>{selectedData?.document[0]?.file_name}</span>
                            </div>
                            <hr></hr>
                            <span className="description" style={{ fontWeight:'bold' }}> Catatan </span>
                            <Spacing height="0.5rem" />
                            <InputTextArea 
                                placeholder={'Enter a description...'}
                                rows={4}
                                name={'catatan_log'}
                                onBlur={(e) => handleChange(e)}
                            />
                        </div>
                        <Spacing height="6.5rem" />
                        <div className="row-between-start w-full">
                            <ButtonOutlined 
                                label={'Tolak'} 
                                className={'w-full'} 
                                width={'25%'} 
                                height={'2.75rem'} 
                                fontSize={'12px'}
                                onClick={() => {
                                    handleTolak();
                                    toggleVerifikasiModal();
                                }}
                                borderRadius={'9px'}
                                color={'var(--color-black)'}
                                borderColor={'var(--color-black)'} />

                            <ButtonSolid 
                                label={'Setujui'} 
                                className={'w-full'} 
                                width={'25%'} 
                                onClick={() => {
                                    handleSetuju();
                                    toggleVerifikasiModal();
                                }}
                                height={'2.75rem'} 
                                borderRadius={'9px'}
                                bgColor={'var(--color-primary-dark)'}
                                fontSize={'12px'} />
                        </div>
                    </CModalBody>
                </Wrapper>
            </BrowserView>
        </>
    )
}

export default ValidateSubmissionFormModal
