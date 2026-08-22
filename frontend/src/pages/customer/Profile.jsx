import { useEffect, useState } from "react";
import "../../styles/customer.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    skinType: "",
    hairType: "",
    allergies: "",
    preferredService: "",
  });

  const [saved, setSaved] = useState(false);

  // Load saved profile
  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem("customerProfile")
    );

    if (savedProfile) {
      setProfile(savedProfile);
      setSaved(true);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profile.name || !profile.email || !profile.phone) {
      alert("Please fill Name, Email and Phone Number");
      return;
    }

    localStorage.setItem(
      "customerProfile",
      JSON.stringify(profile)
    );

    setSaved(true);

    alert("Profile saved successfully!");
  };

  const handleEdit = () => {
    setSaved(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile?"
    );

    if (!confirmDelete) return;

    localStorage.removeItem("customerProfile");

    setProfile({
      name: "",
      email: "",
      phone: "",
      skinType: "",
      hairType: "",
      allergies: "",
      preferredService: "",
    });

    setSaved(false);
  };

  // =========================
  // SAVED PROFILE
  // =========================

  if (saved) {
    return (
      <div className="profile-page">

        <div className="profile-header">
          <div>
            <p className="profile-label">MY ACCOUNT</p>
            <h2>My Beauty Profile</h2>
            <p>
              Manage your personal information and beauty preferences.
            </p>
          </div>

          <button
            className="profile-edit-btn"
            onClick={handleEdit}
          >
            ✏️ Edit Profile
          </button>
        </div>

        <div className="profile-card">

          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-main-info">
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
            <span className="profile-status">
              ✓ Profile Active
            </span>
          </div>

        </div>

        <div className="profile-details-grid">

          <div className="profile-detail-card">
            <span>📱</span>
            <div>
              <small>Phone Number</small>
              <strong>{profile.phone}</strong>
            </div>
          </div>

          <div className="profile-detail-card">
            <span>💆</span>
            <div>
              <small>Skin Type</small>
              <strong>
                {profile.skinType || "Not specified"}
              </strong>
            </div>
          </div>

          <div className="profile-detail-card">
            <span>💇</span>
            <div>
              <small>Hair Type</small>
              <strong>
                {profile.hairType || "Not specified"}
              </strong>
            </div>
          </div>

          <div className="profile-detail-card">
            <span>✨</span>
            <div>
              <small>Preferred Service</small>
              <strong>
                {profile.preferredService || "Not specified"}
              </strong>
            </div>
          </div>

        </div>

        <div className="profile-section-card">

          <h3>Beauty Preferences</h3>

          <div className="preference-row">
            <span>Allergies</span>
            <p>
              {profile.allergies || "No allergies mentioned"}
            </p>
          </div>

        </div>

        <div className="profile-actions">

          <button
            className="profile-delete-btn"
            onClick={handleDelete}
          >
            🗑 Delete Profile
          </button>

        </div>

      </div>
    );
  }

  // =========================
  // CREATE / EDIT PROFILE
  // =========================

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <p className="profile-label">CUSTOMER PROFILE</p>

          <h2>
            {profile.name
              ? "Update Your Profile"
              : "Create Your Beauty Profile"}
          </h2>

          <p>
            Tell us a little about yourself and your beauty preferences.
          </p>
        </div>
      </div>

      <form
        className="profile-form-card"
        onSubmit={handleSubmit}
      >

        <div className="profile-form-title">
          <div className="form-icon">
            👤
          </div>

          <div>
            <h3>Personal Information</h3>
            <p>Your basic contact information</p>
          </div>
        </div>

        <div className="profile-form-grid">

          <div className="profile-field">
            <label>Full Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field">
            <label>Email Address *</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field">
            <label>Phone Number *</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="profile-form-title second">
          <div className="form-icon">
            ✨
          </div>

          <div>
            <h3>Beauty Preferences</h3>
            <p>Help us understand your preferences</p>
          </div>
        </div>

        <div className="profile-form-grid">

          <div className="profile-field">
            <label>Skin Type</label>

            <select
              name="skinType"
              value={profile.skinType}
              onChange={handleChange}
            >
              <option value="">
                Select skin type
              </option>

              <option value="Normal">
                Normal
              </option>

              <option value="Dry">
                Dry
              </option>

              <option value="Oily">
                Oily
              </option>

              <option value="Combination">
                Combination
              </option>

              <option value="Sensitive">
                Sensitive
              </option>
            </select>
          </div>

          <div className="profile-field">
            <label>Hair Type</label>

            <select
              name="hairType"
              value={profile.hairType}
              onChange={handleChange}
            >
              <option value="">
                Select hair type
              </option>

              <option value="Straight">
                Straight
              </option>

              <option value="Wavy">
                Wavy
              </option>

              <option value="Curly">
                Curly
              </option>

              <option value="Coily">
                Coily
              </option>
            </select>
          </div>

          <div className="profile-field">
            <label>Preferred Service</label>

            <input
              type="text"
              name="preferredService"
              placeholder="e.g. Facial, Hair Spa"
              value={profile.preferredService}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field full-width">
            <label>Allergies / Special Notes</label>

            <textarea
              name="allergies"
              placeholder="Mention any allergies or special requirements..."
              value={profile.allergies}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="profile-form-footer">

          <p>
            🔒 Your information is stored securely.
          </p>

          <button
            type="submit"
            className="profile-save-btn"
          >
            ✓ Save Profile
          </button>

        </div>

      </form>

    </div>
  );
}

export default Profile;