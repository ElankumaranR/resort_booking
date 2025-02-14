const Navbar = ({ user, admin }) => {
    return (
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <a href="/" className="text-lg font-bold">Resort Booking</a>
        <div>
          {user ? (
            <a href="/dashboard" className="mr-4">My Bookings</a>
          ) : (
            <a href="/login" className="mr-4">Login</a>
          )}
          {admin ? <a href="/admin">Admin</a> : <a href="/signup">Signup</a>}
        </div>
      </nav>
    );
  };
  
  export default Navbar;