import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";

export default function Navbar() {
  const { auth, logout } = useStore(state => ({ auth: state.auth, logout: state.logout }));
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">Warehouse Dashboard</Link>
          <div className="hidden md:flex gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/bots" className="hover:underline">Bots</Link>
            <Link to="/allocate" className="hover:underline">Allocate</Link>
            <Link to="/queue" className="hover:underline">Queue</Link>
            <Link to="/analytics" className="hover:underline">Analytics</Link>
            <Link to="/map" className="hover:underline">Map</Link>
          </div>
        </div>

        <div>
          {auth.loggedIn ? (
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-700">{auth.user?.name ?? "User"}</div>
              <button className="text-sm px-3 py-1 border rounded" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="text-sm px-3 py-1 border rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
