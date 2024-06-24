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
    UserSignUpMandatory1Page,
    UserSignUpMandatory2Page,
    UserSignUpMandatory3Page,

    AdminHomePage,
    AdminLayoutPage,
    AdminGenerateBlastEmailPage,
    AdminMyHockeyUserListPage,
    AdminProfanityWordListPage,
    AdminUsernameApprovalPage,
    AdminVerifiedPartnerBadgeListPage,

    AdminEmailSentPage,
    AdminForgotPasswordPage,
    AdminResetPasswordPage,
    AdminSignInPage,
} from './pages'

import AdminCreateAssessmentTestLevelPage from './pages/admin-page/local-components/AssesmentTestCategoryLevel'
import AdminProfanityWordCreatePage from './pages/admin-page/AdminProfanityWordListCreate'
import UserNotificationPage from './pages/user-page/UserNotificationPage'
import UserProfilePage from './pages/user-page/UserProfilePage'
import UserTrainingPage from './pages/user-page/UserTrainingPage'
import UserVisibilityPage from './pages/user-page/UserVisibilityPage'
import UserSearchPage from './pages/user-page/UserSearchPage'
import UserVisibilityDenyPage from './pages/user-page/UserVisibilityDenyPage'
import UserSignUpMandatory4Page from './pages/user-page/UserSignUpMandatory4Page'
import UserCareerPathPage from './pages/user-page/UserCareerPathPage'
import UserCareerPathDetailPage from './pages/user-page/UserCareerPathDetailPage'
import AdminCreateAssessmentTestAgePage from './pages/admin-page/local-components/AssesmentTestCategoryAge'
import AdminCreateAssessmentTestTrainingPage from './pages/admin-page/local-components/AssesmentTestCategoryTraining'
import AdminCreateAssessmentTestOtherPage from './pages/admin-page/local-components/AssesmentTestCategoryOthers'
import UserTrainingInfoPage from './pages/user-page/UserTrainingInfoPage'
import UserTrainingFrequency from './pages/user-page/UserTrainingFrequency'
import UserTrainingSkillset from './pages/user-page/UserTrainingSkillset'
import UserAssessmentTest from './pages/user-page/UserAssessmentTest'
import AdminSendBlastEmailPage from './pages/admin-page/AdminSendBlastEmailPage'
import AdminBlastEmailPreviewPage from './pages/admin-page/AdminBlastEmailPreviewPage'
import ProtectedUserEditRoute from './pages/ProtectedUserEditRoute'


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

                <Route index element={<UserMembershipPage/>}></Route>
                <Route path='sign-up-mandatory-1' element={<UserSignUpMandatory1Page/>}/>
                <Route path='sign-up-mandatory-2' element={<UserSignUpMandatory2Page/>}/>
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
                </Route>    
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

            <Route path='/admin' >
                {/* <Route path='' element={<Navigate replace to="home" />} /> */}
                <Route path='' element={
                    <ProtectedAdminRoute>
                        <AdminLayoutPage />
                    </ProtectedAdminRoute>
                }>
                    <Route index element={<AdminHomePage/>}></Route>
                    <Route path="create-assessment-test-1" element={<AdminCreateAssessmentTestLevelPage/>}></Route>
                    <Route path="create-assessment-test-2" element={<AdminCreateAssessmentTestAgePage/>}></Route>
                    <Route path="create-assessment-test-3" element={<AdminCreateAssessmentTestTrainingPage/>}></Route>
                    <Route path="create-assessment-test-4" element={<AdminCreateAssessmentTestOtherPage/>}></Route>
                    <Route path="generate-blast-email">
                        <Route index element={<AdminGenerateBlastEmailPage />} />
                        <Route path=':id'>
                            <Route index element={<AdminGenerateBlastEmailPage/>} />    
                            <Route path="preview" element={<AdminBlastEmailPreviewPage/>}/>
                            <Route path="send" element={<AdminSendBlastEmailPage/>}/>
                        </Route>    
                    </Route>
                    <Route path="myhockey-user-list" element={<AdminMyHockeyUserListPage />}></Route>
                    <Route path='profanity-word-list'>
                        <Route index element={<AdminProfanityWordListPage />}></Route>                         
                        <Route path="create" element={<AdminProfanityWordCreatePage/>}></Route>    
                    </Route>
                    <Route path="username-approval" element={<AdminUsernameApprovalPage/>}></Route>
                    <Route path="verified-partner-badge-list" element={<AdminVerifiedPartnerBadgeListPage/>}></Route>
                </Route>
                <Route path='email-sent' element={<AdminEmailSentPage />} />
                <Route path='forgot-password' element={<AdminForgotPasswordPage />} />
                <Route path='sign-in' element={<AdminSignInPage />} />
                <Route path='reset-password/:serial' element={<AdminResetPasswordPage />} />
            </Route>


            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App
