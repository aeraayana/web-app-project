import Wrapper from '../../wrappers/user-page/UserSignUpMandatory1PageWrapper'

import { 
    ContainerCardSection,
    Spacing,
} from '../../components'

import { CAvatar } from '@coreui/react'
import { useAppContext } from '../../context/appContext'
import { FaRegStar } from 'react-icons/fa'
import { CButton } from '@coreui/react'
import { HiDotsVertical } from 'react-icons/hi'
import { useEffect } from 'react'

const UserNotificationPage = () => {

    const { user, data, getNotificationUsername, updateUserViewRule } = useAppContext()

    useEffect(() => {
        getNotificationUsername()
    })

    const getUsername = (user_view_rule_id) => {
        let username = '';
        if (!data) return '';
        for (let i = 0; i < data.length; i++){
            if (data[i]._id == user_view_rule_id) {
                username = data[i].username
            }
        }
        return username
    }

    const updateViewRule = async (status, user_view_rule_id) => {
        await updateUserViewRule(status, user_view_rule_id)
    }

    return (
        <Wrapper className='col-start-center'>
            {
                (user && user.notifications && user.notifications.length > 0)?
                    user.notifications.map((item, index) => {
                        if (item.notification_type === 'approval_verified_page')
                            return (
                                <>
                                    <ContainerCardSection className="row-start-center w-75 position-relative" padding="2rem 3rem" >    { /* 32px 110px */}
                                        <CAvatar style={{
                                            width: '4rem', /* 145px */
                                            height: '4rem', /* 145px */
                                        }}>
                                            <FaRegStar size='4rem'/>
                                        </CAvatar>
                                        <Spacing width="2rem" />    {/* 20px */}
                                        <section>Verified badge requested to system. Please wait for the approval, it may take up to 3-4 days.</section>
                                        <CButton variant='ghost' color='dark' className='position-absolute top-0 end-0 mt-2 me-2'><HiDotsVertical/></CButton>
                                    </ContainerCardSection>
                                    <Spacing height="2.5rem" />    {/* 40px */}
                                </>
                            )
                        else if (item.notification_type === 'profile_view')
                            return (
                                <>
                                    <ContainerCardSection className="row-start-center w-75 position-relative" padding="2rem 3rem" >    { /* 32px 110px */}
                                        <CAvatar style={{
                                            backgroundColor: 'gray',
                                            width: '4rem', /* 145px */
                                            height: '4rem', /* 145px */
                                        }} />
                                        <Spacing width="2rem" />    {/* 20px */}
                                        <section><strong>{ getUsername(item.user_view_rule_id) }</strong> viewed your profile.</section>
                                        <CButton variant='ghost' color='dark' className='position-absolute top-0 end-0 mt-2 me-2'><HiDotsVertical/></CButton>
                                    </ContainerCardSection>
                                    <Spacing height="2.5rem" />
                                </>
                            )
                        else if (item.notification_type === 'profile_view_request')
                            return (
                                <>
                                    <ContainerCardSection className="row-start-center w-75 position-relative" padding="2rem 3rem" >    { /* 32px 110px */}
                                        <CAvatar style={{
                                            backgroundColor: 'gray',
                                            width: '4rem', /* 145px */
                                            height: '4rem', /* 145px */
                                        }} />
                                        <Spacing width="2rem" />    {/* 20px */}
                                        <section className='text-wrap' style={{width:'65%'}}><strong>{getUsername(item.user_view_rule_id)}</strong> requested to see your profile. If you choose to accept they will be able to see everything on your profile that you allowed for Athletes.</section>
                                        <CButton variant='ghost' color='dark' className='position-absolute top-0 end-0 mt-2 me-2'><HiDotsVertical /></CButton>
                                        <Spacing width="2rem" />  
                                        <CButton color='danger' className='' onClick={updateViewRule('blocked', item.user_view_rule_id)}>Reject</CButton>
                                        <CButton color='info' className='ms-2' onClick={updateViewRule('approved', item.user_view_rule_id)}>Accept</CButton>
                                    </ContainerCardSection>
                                    <Spacing height="2.5rem" />
                                </>                
                            )
                    }) :
                    <ContainerCardSection className="row-start-center w-75 position-relative" padding="2rem 3rem" >    { /* 32px 110px */}
                        <CAvatar style={{
                            width: '4rem', /* 145px */
                            height: '4rem', /* 145px */
                        }}>
                            <FaRegStar size='4rem'/>
                        </CAvatar>
                        <Spacing width="2rem" />    {/* 20px */}
                        <section>You don't have any notification</section>
                    </ContainerCardSection>
            }
            
        </Wrapper>
    )
}

export default UserNotificationPage