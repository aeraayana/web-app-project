import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const ProtectedAdminRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if (!user) {
    return <Navigate to='/admin/sign-in' />;
  }
  if (user.role !== 'admin') {
    return <Navigate to='/' />
  }
  return children;
};

export default ProtectedAdminRoute;
