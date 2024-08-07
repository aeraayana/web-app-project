import { FileDownloadOutlined } from '@mui/icons-material';
import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import React from 'react';
import PDFIcon from "../../assets/images/file type.png";
import DocIcon from "../../assets/images/file_type_doc.png";
import { Spacing } from '../../components';

const UserHomePage = () => {

    const onPanduanClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "LDML_Panduan Pengguna Layanan Dana Masyarakat untuk Lingkungan.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const onLampiranClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "LDML_Dokumen Pertanggung Jawaban.docx"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const onPerjanjianClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "LDML_Perjanjian Kontrak Kerjasama.docx"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <React.Fragment>
            <Wrapper className='col-start-start w-full h-full' style={{ height: '100vh' }}>
                <span className='subtitle'>DOKUMEN DAN TEMPLATE</span>
                <Spacing height={'2.25rem'}/>
                <div className='row-between-center price-tag w-full' style={{ width: '70%', cursor:"pointer" }} onClick={onPanduanClick}>
                    <div className='row-around-center'>
                        <img src={PDFIcon}></img>
                        <Spacing width={'1.25rem'}/>
                        <div className='col-start-start'>
                            <span className='label'>Panduan Pengguna Layanan Dana Masyarakat untuk Lingkungan</span>
                            <Spacing height={'0.45rem'}/>
                            <span>1.8 KB</span>
                        </div>
                    </div>
                    <FileDownloadOutlined />
                </div>

                <Spacing height={'2.25rem'}/>
                <div className='row-between-center price-tag w-full' style={{ width: '70%', cursor:"pointer" }} onClick={onLampiranClick}>
                    <div className='row-start-center'>
                        <img src={DocIcon}></img>
                        <Spacing width={'1.25rem'}/>
                        <div className='col-start-start'>
                            <span className='label'>Dokumen Pertanggung Jawaban</span>
                            <Spacing height={'0.45rem'}/>
                            <span>1.8 KB</span>
                        </div>
                    </div>
                    <FileDownloadOutlined />
                </div>

                <Spacing height={'2.25rem'}/>
                <div className='row-between-center price-tag w-full' style={{ width: '70%', cursor:"pointer" }} onClick={onPerjanjianClick}>
                    <div className='row-start-center'>
                        <img src={DocIcon}></img>
                        <Spacing width={'1.25rem'}/>
                        <div className='col-start-start'>
                            <span className='label'>Perjanjian Kontrak Kerjasama</span>
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
