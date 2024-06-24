import { 
    ButtonOutlined, 
    Hyperlink,
    Logo,
    LogoStar,
    ContainerOutlined,
    InputTextWithPrompt,
} from '../components'

import { Navbar } from './local-components'

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();

  const actionCreateAccount = () => {
    alert("Action Create Account");
  };

  return (
    <React.Fragment>
      {/* {user && <Navigate to='/' />} */}
      <Wrapper>
        {/* <nav>
          <Logo />
        </nav> */}
        <Navbar />
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
              bottle single-origin coffee chia. Aesthetic post-ironic venmo,
              quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
              narwhal.
            </p>
            <div className='col-start-start gap-3'>
              <div className="row-center-center gap-3">
                <Link to='/register' className='btn btn-hero'>
                  Login/Register
                </Link>
                <ButtonOutlined label="Login" width="240px" onClick={actionCreateAccount} />
                <Hyperlink label="Did you forgot your password?" width="240px" href="#" />
              </div>
              <div className="row-center-center gap-3">
                  <Logo />
                  <LogoStar />
                  <ContainerOutlined color="#CACACA">
                      <h3> Hello </h3>
                  </ContainerOutlined>
                  <InputTextWithPrompt prompt="Email" id="nama" name="nama" errorMessage="Incorrect password"></InputTextWithPrompt>
              </div>
            </div>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
