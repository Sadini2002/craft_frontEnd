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
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        {role === "admin" && <Link to="/admin/products">Admin</Link>}
      </div>
      <div>
        {token ? (
          <button onClick={logout} className="bg-red-500 px-2 py-1 rounded">Logout</button>
        ) : (
          <>
            <Link to="/login" className="mr-2">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
