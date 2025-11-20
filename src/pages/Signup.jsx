import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ firstname: "", lastname: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/register", { ...form, role: "user" });
      alert("User created!");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Signup</h2>
      {["firstname", "lastname", "email", "password"].map((key) => (
        <input
          key={key}
          type={key === "password" ? "password" : "text"}
          placeholder={key}
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
          className="border p-2 w-full mb-2"
        />
      ))}
      <button onClick={handleSignup} className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
    </div>
  );
}
