import logo from '../../assets/images/logo-crown.svg'
import logoPrimary from '../../assets/images/logo-crown-primary.svg'

const LogoCrown = ({ primary }) => {
  return <img src={ primary? logoPrimary : logo} alt='myhockeycrown' className='logo-crown' 
    style={{ 
      paddingBottom: "0.25rem",
    }} />
}

export default LogoCrown
