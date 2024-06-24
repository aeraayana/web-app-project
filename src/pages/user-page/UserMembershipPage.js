import Wrapper from '../../wrappers/user-page/UserMembershipPageWrapper'
import { 
    MembershipTable,
    MembershipSubscriptionCard
} from './local-components'

import { 
    Spacing,
} from '../../components'


const UserMembershipPage = () => {

    const actionOnClick = ({ membership }) => {
        // console.log(`MEMBERSHIP => ${ membership }`);
    }

    return (
        <Wrapper className='col-start-center'>
            <MembershipTable />
            <Spacing height="2.5rem"/> {/* 40px */}
            <div className='row-between-start'
                style={{ width: "80rem"}}>
                <MembershipSubscriptionCard 
                    name={"Premium 1"}
                    amount={"90"}
                    payValue={"103"}
                    isBestValue={false}
                    onClick={ () => actionOnClick("Premium 1") } />
                <MembershipSubscriptionCard 
                    name={"Premium 2"}
                    amount={"100"}
                    payValue={"103"}
                    isBestValue={false}
                    onClick={ () => actionOnClick("Premium 2") } />
                <MembershipSubscriptionCard 
                    name={"Premium 3"}
                    amount={"110"}
                    payValue={"103"}
                    isBestValue={true}
                    onClick={ () => actionOnClick("Premium 3") } />
            </div>
        </Wrapper>
    )
}

export default UserMembershipPage