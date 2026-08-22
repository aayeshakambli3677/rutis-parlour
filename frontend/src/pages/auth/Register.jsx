import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      alert("Registration Successful! Please login.");

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      alert(
        error.response?.data?.detail ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        {/* LEFT BRAND SECTION */}
        <div className="register-brand">

          <div className="register-logo">
            ✨
          </div>

          <p className="register-small">
            WELCOME TO
          </p>

          <h1>Ruti's</h1>

          <h2>Beauty Parlour</h2>

          <div className="register-line"></div>

          <p>
            Your beauty, our passion.
            <br />
            Experience beauty care made for you.
          </p>

        </div>


        {/* RIGHT FORM SECTION */}
        <div className="register-form-section">

          <div className="register-form-content">

            <h2>Create Account</h2>

            <p className="register-subtitle">
              Create your account to manage your appointments
              and beauty services.
            </p>


            <form onSubmit={handleSubmit}>

              {/* FULL NAME */}
              <div className="register-field">

                <label>Full Name</label>

                <div className="register-input">

                  <span>👤</span>

                  <input
                    type="text"
                    name="full_name"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}
              <div className="register-field">

                <label>Email Address</label>

                <div className="register-input">

                  <span>✉️</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}
              <div className="register-field">

                <label>Password</label>

                <div className="register-input">

                  <span>🔒</span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

                <small className="password-hint">
                  Password must be at least 6 characters.
                </small>

              </div>


              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="register-submit"
                disabled={loading}
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account →"}
              </button>

            </form>


            {/* LOGIN LINK */}
            <div className="register-login">

              <span>
                Already have an account?
              </span>

              <button
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;