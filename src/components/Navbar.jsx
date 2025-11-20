import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>

          {role === "admin" && (
            <Link 
              to="/admin/products" 
              className="text-lg hover:text-blue-400 transition-colors duration-300"
            >
              Admin Dashboard
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {token ? (
            <button 
              onClick={logout} 
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium shadow-md"
            >
              Logout
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-sm font-medium shadow-md"
              >
                Login
              </Link>

              <Link 
                to="/signup" 
                className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-lg text-sm font-medium shadow-md"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
