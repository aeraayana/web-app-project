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

const roleOptions = ['Pilih Jenis Kelompok', '','','',''];
const idOptions = ['KTP', 'SIM', 'Kartu Mahasiswa']

const initialState = {
    namaPenanggungJawab: '',
    namaKelompokMasyarakat: roleOptions[0],
    jenisKelompokMasyarakat: roleOptions[0],
    noTelp: '',
    email: '',
    userId: '',
    jenisId: idOptions[0],
}

const CreateAccountPage = () => {
    document.body.style = 'background-image: linear-gradient(var(--color-primary-dark), var(--color-primary));';

    const { user, registerUser, isLoading } = useAppContext();
    const navigate = useNavigate();
    const [values, setValues] = useState( initialState );

    const actionSignInClick = () => {
        navigate("/sign-in");        
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value});        
    } 

    const actionCreateAccountClick = async (e) => {
        e.preventDefault();
        const { userId, noTelp, email } = values;

        const success = await registerUser({ email: email, noTelp: noTelp, userId: userId });
        if( success ){
            navigate("/verify-email");        
        }
    }

    const actionChangeRole = (e) => {
        setValues({ ...values, jenisId: e.target.value});
    };

    return (
        <React.Fragment>
            {user && <Navigate to='/' />}
            <Wrapper className='d-flex justify-content-center w-full'> 
                <section className='input-container rounded col-center w-1/4' style={{ backgroundColor:"white", margin:"2.025rem" }}>
                    <article className='col-center w-full h-1/4'>
                        <Spacing height="0.01rem" />
                        <h1 className='title' style={{ color:"var(--color-primary)" }}>Daftar Akun</h1>
                        <Spacing height="2.5rem" />   {/* 16px */}
                        <form className='w-full'>
                            <ChoiceBoxStringWithPrompt
                                className="w-full"
                                id="jenisKelompokMasyarakat"
                                name="jenisKelompokMasyarakat"
                                prompt="Jenis Kelompok Masyarakat"
                                options={roleOptions}
                                onChange={actionChangeRole} />
                            <Spacing height="1.25rem" />   {/* 20px */}
                            <ChoiceBoxStringWithPrompt
                                className="w-full"
                                id="namaKelompokMasyarakat"
                                name="namaKelompokMasyarakat"
                                prompt="Nama Kelompok Masyarakat"
                                options={roleOptions}
                                onChange={actionChangeRole} />
                            <Spacing height="1.25rem" />
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
                                label="Login" 
                                disabled={isLoading}
                                onClick={actionCreateAccountClick} />
                        </form>
                    </article>
                    <article className='col-center-center w-full'>
                        <Spacing height="1rem" />   {/* 16px */}
                        <p className='description-subtitle' style={{ textAlign: "center" }}>
                            Sudah Punya Akun? <Hyperlink label="Login" onClick={actionSignInClick} />
                        </p>
                    </article>
                </section>
            </Wrapper>
        </React.Fragment>
    );
};

export default CreateAccountPage;
