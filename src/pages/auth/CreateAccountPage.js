import Wrapper from '../../wrappers/auth/CreateAccountPageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    ButtonSolid,
    InputTextWithPrompt,
    Spacing,
    ChoiceBoxStringWithPrompt,
    Hyperlink
} from '../../components'
import RadioChoiceBoxWithPrompt from '../../components/choicebox/RadioChoiceBoxWithPrompt';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWrapper from '../../wrappers/auth/mobile/CreateAccountPageWrapperMobile';

const roleOptions = ['Pilih Jenis Kelompok', '','','',''];
const idOptions = ['KTP', 'SIM', 'Kartu Mahasiswa']

const initialState = {
    jenisKelompokMasyarakat: roleOptions[0],
    nama: '',
    jenisId: idOptions[0],
    userId: '',
    noTelp: '',
    email: '',
}

const CreateAccountPage = () => {
    document.body.style = 'background-image: linear-gradient(145deg, var(--color-primary-dark), var(--color-primary-light));';

    const { 
        registerUser, 
        isLoading, 
        kelompokMasyarakat, 
        getKelompokMasyarakat,
        namaKelompokMasyarakat,
        getNamaKelompokMasyarakat 
    } = useAppContext();

    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );
    
    // console.log(values)

    const actionSignInClick = () => {
        navigate("/sign-in");        
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 

    const handleJenisChange = async (e) => {
        await getNamaKelompokMasyarakat({ id: e.target.value })
    }

    const actionCreateAccountClick = async (e) => {
        e.preventDefault();
        const { userId, noTelp, email, namaKelompokMasyarakat, jenisId, nama } = values;

        const success = await registerUser({ 
            category: namaKelompokMasyarakat, email: email, name: nama, identity_type: jenisId, identity_number: userId, phone_number: noTelp });
        if( success ){
            navigate("/layanan-masyarakat/sign-in");        
        }
    }

    React.useEffect(() => {
        // eslint-disable-next-line
        getKelompokMasyarakat();
    }, []);

    return (
        <React.Fragment>
            <MobileView>
            {/* {token && <Navigate to='/' />} */}
                <MobileWrapper className='d-flex justify-content-center w-full'> 
                    <section className='input-container rounded col-center w-1/4' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                        <div className='col-center-center'>
                            <h1 className='title' style={{ color:"var(--color-primary)", width:"80%" }}>Daftar Akun</h1>
                        </div>
                        <article className='col-center-center w-full h-1/4'>
                            <Spacing height="0.01rem" />
                            <Spacing height="2.5rem" />   {/* 16px */}
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <ChoiceBoxStringWithPrompt
                                    className="w-full"
                                    id="jenis_kelompok_masyarakat"
                                    name="jenisKelompokMasyarakat"
                                    prompt="Jenis Kelompok Masyarakat"
                                    options={kelompokMasyarakat.data}
                                    onChange={handleJenisChange} />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <ChoiceBoxStringWithPrompt
                                    className="w-full"
                                    id="jenis_kelompok_masyarakat"
                                    name="jenisKelompokMasyarakat"
                                    prompt="Jenis Kelompok Masyarakat"
                                    options={namaKelompokMasyarakat.data}
                                    onChange={handleChange} />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="nama"
                                    prompt="Nama Penanggung Jawab"
                                    id="nama"
                                    placeholder='contoh: Budi Hendrawan'
                                    name="nama"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <RadioChoiceBoxWithPrompt 
                                    name='jenisId'
                                    options={idOptions}
                                    onChange={handleChange}
                                    prompt='Jenis Identitas'
                                    className='w-full'
                                    color={'var(--color-primary-dark)'}
                                    value={values?.jenisId}
                                    />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt
                                    type="userId"
                                    prompt="Nomor Identitas"
                                    id="userId"
                                    name="userId"
                                    placeholder="Masukkan 16 Digit Angka"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="noTelp"
                                    prompt="Nomor HP"
                                    id="noTelp"
                                    name="noTelp"
                                    placeholder='contoh: 08128128121'
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="email"
                                    prompt="Email"
                                    id="email"
                                    placeholder='contoh: budihen@gmail.com'
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="2.75rem" />   {/* 44px */}
                                <ButtonSolid className="w-full" 
                                    label="Register"
                                    hoverColor={'white'}
                                    color={'white'} 
                                    disabled={isLoading}
                                    onClick={actionCreateAccountClick} />
                            </form>
                        </article>
                        <article className='col-center-center w-full'>
                            <Spacing height="1rem" />   {/* 16px */}
                            <p className='description-subtitle' style={{ textAlign: "center" }}>
                                Sudah Punya Akun? <Hyperlink label="Login" small={'14px'} onClick={actionSignInClick} />
                            </p>
                        </article>
                    </section>
                </MobileWrapper>
            </MobileView>
            <BrowserView>
                {/* {token && <Navigate to='/' />} */}
                <Wrapper className='d-flex justify-content-center w-full'> 
                    <section className='input-container rounded col-center w-1/4' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                        <div className='col-center-center'>
                            <h1 className='title' style={{ color:"var(--color-primary)", width:"80%" }}>Daftar Akun</h1>
                        </div>
                        <article className='col-center-center w-full h-1/4'>
                            <Spacing height="0.01rem" />
                            <Spacing height="2.5rem" />   {/* 16px */}
                            <form className='col-start-start' style={{ width: "80%" }}>
                                <ChoiceBoxStringWithPrompt
                                    className="w-full"
                                    id="jenis_kelompok_masyarakat"
                                    name="jenisKelompokMasyarakat"
                                    prompt="Jenis Kelompok Masyarakat"
                                    options={kelompokMasyarakat.data}
                                    onChange={handleJenisChange} />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <ChoiceBoxStringWithPrompt
                                    className="w-full"
                                    id="kelompok_masyarakat"
                                    name="namaKelompokMasyarakat"
                                    prompt="Nama Kelompok Masyarakat"
                                    options={namaKelompokMasyarakat.data}
                                    onChange={handleChange} />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="nama"
                                    prompt="Nama Penanggung Jawab"
                                    id="nama"
                                    placeholder='contoh: Budi Hendrawan'
                                    name="nama"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <RadioChoiceBoxWithPrompt 
                                    name='jenisId'
                                    options={idOptions}
                                    onChange={handleChange}
                                    prompt='Jenis Identitas'
                                    className='w-full'
                                    color={'var(--color-primary-dark)'}
                                    value={values?.jenisId}
                                    />
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt
                                    type="userId"
                                    prompt="Nomor Identitas"
                                    id="userId"
                                    name="userId"
                                    placeholder="Masukkan 16 Digit Angka"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="noTelp"
                                    prompt="Nomor HP"
                                    id="noTelp"
                                    name="noTelp"
                                    placeholder='contoh: 08128128121'
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="1.25rem" />   {/* 20px */}
                                <InputTextWithPrompt 
                                    type="email"
                                    prompt="Email"
                                    id="email"
                                    placeholder='contoh: budihen@gmail.com'
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full"/>
                                <Spacing height="2.75rem" />   {/* 44px */}
                                <ButtonSolid className="w-full" 
                                    label="Register"
                                    hoverColor={'white'}
                                    color={'white'} 
                                    disabled={isLoading}
                                    onClick={actionCreateAccountClick} />
                            </form>
                        </article>
                        <article className='col-center-center w-full'>
                            <Spacing height="1rem" />   {/* 16px */}
                            <p className='description-subtitle' style={{ textAlign: "center" }}>
                                Sudah Punya Akun? <Hyperlink label="Login" small={'14px'} onClick={actionSignInClick} />
                            </p>
                        </article>
                    </section>
                </Wrapper>
            </BrowserView>
        </React.Fragment>
    );
};

export default CreateAccountPage;
