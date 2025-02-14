const PrivateRoute = ({ user, children }) => {
    return user ? children : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;
  