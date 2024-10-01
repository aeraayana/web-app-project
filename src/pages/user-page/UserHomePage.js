import { FileDownloadOutlined } from '@mui/icons-material';
import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import React from 'react';
import PDFIcon from "../../assets/images/file type.png";
import PDFPanduan from '../../assets/LDML_Panduan Pengguna Layanan Dana Masyarakat untuk Lingkungan.pdf';
import DOCPerjanjian from '../../assets/DRAFT SURAT PERNYATAAN PENERIMA LAYANAN DANA MASYARAKAT 18092024 - Clean + safeguard REV (2).docx';
import DocIcon from "../../assets/images/file_type_doc.png";
import { Spacing } from '../../components';

const UserHomePage = () => {

    return (
        <React.Fragment>
            <Wrapper className='col-start-start w-full h-full' style={{ height: '100vh' }}>
                <span className='subtitle'>DOKUMEN DAN TEMPLATE</span>
                <Spacing height={'2.25rem'}/>
                <div className='row-between-center price-tag w-full' style={{ width: '70%' }}>
                    <div className='row-around-center'>
                        <img src={PDFIcon}></img>
                        <Spacing width={'1.25rem'}/>
                        <div className='col-start-start'>
                            <a href={PDFPanduan} className='label'>Panduan Pengguna Layanan Dana Masyarakat untuk Lingkungan</a>
                            <Spacing height={'0.45rem'}/>
                            <span>1.8 KB</span>
                        </div>
                    </div>
                    <FileDownloadOutlined />
                </div>

                <Spacing height={'2.25rem'}/>
                <div className='row-between-center price-tag w-full' style={{ width: '70%' }}>
                    <div className='row-start-center'>
                        <img src={DocIcon}></img>
                        <Spacing width={'1.25rem'}/>
                        <div className='col-start-start'>
                            <a href={DOCPerjanjian} className='label'>Dokumen Pertanggung Jawaban</a>
                            <Spacing height={'0.45rem'}/>
                            <span>1.8 KB</span>
                        </div>
                    </div>
                    <FileDownloadOutlined />
                </div>

            </Wrapper>
        </React.Fragment>
    );
};

export default UserHomePage;
