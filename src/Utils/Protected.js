import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Protected(props) {
  const isAuthenticated = useSelector(state => state.sessionReducer.authenticated);

  if (!isAuthenticated)
    return <Navigate to="/" replace />;

  return props.children;
}

export default Protected;