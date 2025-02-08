const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Don't have an account? <a href="#" className="text-blue-400">Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  