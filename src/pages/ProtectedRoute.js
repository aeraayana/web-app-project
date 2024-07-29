import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
const ProtectedRoute = ({ children }) => {
  const { token, userLoading } = useAppContext();

  if (!token) {
    return <Navigate to='/sign-in' />;
  }
  return children;
};

export default ProtectedRoute;
