import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      if (!data?.access_token) {
        alert("Login failed: token not received");
        return;
      }

      localStorage.setItem("token", data.access_token);

      login({
        email,
        token: data.access_token,
      });

      navigate("/customer-dashboard");
    } catch (error) {
      console.error("Login error:", error);

      alert(
        error.response?.data?.detail ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT DESIGN PANEL */}
        <div className="login-brand-panel">

          <div className="brand-content">

            <div className="brand-symbol">✦</div>

            <p className="brand-small">
              WELCOME TO
            </p>

            <h1>
              Ruti's
            </h1>

            <h2>
              Beauty Parlour
            </h2>

            <div className="brand-divider"></div>

            <p className="brand-description">
              Where beauty meets care.
              <br />
              Your personal beauty journey
              starts here.
            </p>

          </div>

          <div className="brand-bottom">
            ✨ Beauty • Care • Confidence
          </div>

        </div>


        {/* RIGHT LOGIN PANEL */}
        <div className="login-form-panel">

          <div className="login-form-content">

            <div className="mobile-brand">
              <span>✦</span>
              Ruti's Beauty Parlour
            </div>

            <h2>
              Welcome Back
            </h2>

            <p className="login-subtitle">
              Sign in to access your account
            </p>


            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="form-field">

                <label>
                  Email Address
                </label>

                <div className="input-box">

                  <span className="input-icon">
                    ✉
                  </span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}
              <div className="form-field">

                <label>
                  Password
                </label>

                <div className="input-box">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

              </div>


              {/* FORGOT PASSWORD */}
              <div className="forgot-row">

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      "/forget-password"
                    )
                  }
                >
                  Forgot Password?
                </button>

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading
                  ? "Signing in..."
                  : "Sign In"}
              </button>

            </form>


            {/* REGISTER */}
            <div className="create-account">

              <span>
                Don't have an account?
              </span>

              <button
                type="button"
                onClick={() =>
                  navigate("/register")
                }
              >
                Create an Account
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;