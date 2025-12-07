import React, { useState } from "react";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useStore(state => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErr("Please fill both fields");
      return;
    }
    // simple client-side "auth"
    login({ name: email.split("@")[0], email });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-14">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded mb-3" />
          <label className="block mb-2 text-sm">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border px-3 py-2 rounded mb-4" />
          <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
