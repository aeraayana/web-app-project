import Wrapper from '../../wrappers/user-page/UserHomePageWrapper';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import React from 'react';

const UserHomePage = () => {
    const { user } = useAppContext();

    console.log("USER HOME PAGE", user);

    return (
        <React.Fragment>
            {/* {user && <Navigate to='/' />} */}
            <Wrapper className='row-between-start w-full'>
                <h1>User Home Page</h1>
            </Wrapper>
        </React.Fragment>
    );
};

export default UserHomePage;
