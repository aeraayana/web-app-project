import { useAppContext } from '../context/appContext';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
const ProtectedUserEditRoute = ({ children }) => {
    const { user, userLoading } = useAppContext();
    const { id } = useParams();

  if (user._id !== id) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedUserEditRoute;