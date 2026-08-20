import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reset Link Sent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        Send Link
      </button>
    </form>
  );
};

export default ForgetPassword;