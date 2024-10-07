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
            <Route path='/' 
                element={
                    <ProtectedRoute> 
                        <UserLayoutPage />
                    </ProtectedRoute>
                }>

                <Route path='/dashboard-admin' element={<UserAdminPage />} />
                <Route index element={<UserMembershipPage/>}></Route>
                <Route path='/downloads' element={<UserHomePage />} />
                <Route path='/laporan-pdf' element={<BasicDocument />}/>
                <Route path='/laporan-rab/:id' element={<DocumentRab />}/>
                <Route path='/riwayat-pengajuan' element={< AdminRiwayatPage/>} />
                <Route path='/dashboard-bpdlh' element={< AdminHomePage/>} />
            </Route>
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/email-sent' element={<EmailSentPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/verify-email' element={<VerifyEmailPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/reset-password/:serial' element={<ResetPasswordPage />} />
            <Route path='/verify-register/:serial' element={<VerifyRegisterPage />} />

            <Route path='*' element={<Error />} />
        </Routes>
    </HashRouter>
    )
}

export default App
