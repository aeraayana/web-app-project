import { BrowserRouter, Navigate, Routes, Route, HashRouter } from 'react-router-dom'

import { 
    LandingPage, 
    Error, 

    ProtectedRoute,     
    ProtectedAdminRoute,     
    
    CreateAccountPage,
    EmailSentPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    SignInPage,
    VerifyEmailPage,
    VerifyRegisterPage,
    
    UserHomePage,
    UserLayoutPage,
    UserMembershipPage,
} from './pages'

import ProtectedUserEditRoute from './pages/ProtectedUserEditRoute'
import UserAdminPage from './pages/user-page/UserAdminPage'
import BasicDocument from './pages/user-page/export-items/DownloadProposal';
import DocumentRab from './pages/user-page/export-items/DownloadRAB';
import AdminHomePage from './pages/admin-page/AdminHomePage';
import AdminRiwayatPage from './pages/admin-page/AdminRiwayatPage';



{/* <ProtectedRoute>
 <SharedLayout />
</ProtectedRoute> */}


function App() {
    return (
    <HashRouter>
        <Routes>
            <Route path='/layanan-masyarakat/' 
                element={
                    <ProtectedRoute> 
                        <UserLayoutPage />
                    </ProtectedRoute>
                }>

                <Route path='/layanan-masyarakat/dashboard-admin' element={<UserAdminPage />} />
                <Route index element={<UserMembershipPage/>}></Route>
                <Route path='/layanan-masyarakat/downloads' element={<UserHomePage />} />
                <Route path='/layanan-masyarakat/laporan-pdf' element={<BasicDocument />}/>
                <Route path='/layanan-masyarakat/laporan-rab/:id' element={<DocumentRab />}/>
                <Route path='/layanan-masyarakat/riwayat-pengajuan' element={< AdminRiwayatPage/>} />
                <Route path='/layanan-masyarakat/dashboard-bpdlh' element={< AdminHomePage/>} />
            </Route>
            <Route path='/layanan-masyarakat/create-account' element={<CreateAccountPage />} />
            <Route path='/layanan-masyarakat/email-sent' element={<EmailSentPage />} />
            <Route path='/layanan-masyarakat/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/layanan-masyarakat/sign-in' element={<SignInPage />} />
            <Route path='/layanan-masyarakat/verify-email' element={<VerifyEmailPage />} />
            <Route path='/layanan-masyarakat/landing' element={<LandingPage />} />
            <Route path='/layanan-masyarakat/reset-password/:serial' element={<ResetPasswordPage />} />
            <Route path='/layanan-masyarakat/verify-register/:serial' element={<VerifyRegisterPage />} />

            <Route path='*' element={<Navigate to="/layanan-masyarakat/" />} />
        </Routes>
    </HashRouter>
    )
}

export default App
