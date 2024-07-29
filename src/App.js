import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

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


{/* <ProtectedRoute>
 <SharedLayout />
</ProtectedRoute> */}


function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' 
                element={
                    <ProtectedRoute> 
                        <UserLayoutPage />
                    </ProtectedRoute>
                }>

                <Route path='/admin' element={<UserAdminPage />} />
                <Route index element={<UserMembershipPage/>}></Route>
                {/* <Route path='dashboard-admin' element={<UserAdminPage/>}/> */}
                {/* <Route path='sign-up-mandatory-2' element={<UserSignUpMandatory2Page/>}/>
                <Route path='sign-up-mandatory-3' element={<UserSignUpMandatory3Page />}/>
                <Route path='sign-up-mandatory-4' element={<UserSignUpMandatory4Page />}/>
                <Route path='notifications' element={<UserNotificationPage />}/>
                <Route path='assessment' element={<UserAssessmentTest />}/>
                <Route path='career-path'>
                    <Route index element={<UserCareerPathPage/>}/>
                    <Route path='detail' element={<UserCareerPathDetailPage />}/>
                </Route>
                <Route path='settings' element={<UserSignUpMandatory3Page />}/>
                <Route path='/search' element={<UserSearchPage />}/>
                <Route path='/profile/:id'>
                    <Route index element={<UserProfilePage />} />
                        <Route path='visibility' element={
                            <ProtectedUserEditRoute>
                                <UserVisibilityPage />
                            </ProtectedUserEditRoute>
                        } />
                        <Route path='visibility/remove' element={
                            <ProtectedUserEditRoute>
                                <UserVisibilityDenyPage/>
                            </ProtectedUserEditRoute>
                        } />
                        <Route path='training-frequency/edit' element={
                            <ProtectedUserEditRoute>
                                <UserTrainingFrequency />
                            </ProtectedUserEditRoute>
                        } />
                        <Route path='training-information/edit' element={
                            <ProtectedUserEditRoute>
                                <UserTrainingSkillset />
                            </ProtectedUserEditRoute>
                        } />
                    <Route path='training-frequency' element={<UserTrainingPage />} />      
                    <Route path='training-information' element={<UserTrainingInfoPage/>}/>    
                </Route>     */}
                {/* <Route path='/forgot-password' element={<ForgotPasswordPage />} /> */}
                {/* <Route index element={<Stats />} />
                <Route path='all-jobs' element={<AllJobs />} />
                <Route path='add-job' element={<AddJob />} />
                <Route path='profile' element={<Profile />} /> */}
            </Route>
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/email-sent' element={<EmailSentPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/verify-email' element={<VerifyEmailPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/reset-password/:serial' element={<ResetPasswordPage />} />
            <Route path='/verify-register/:serial' element={<VerifyRegisterPage />} />

            {/* <Route path='/home' element={<UserHomePage />} /> */}



            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App
