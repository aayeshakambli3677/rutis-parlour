import { useState } from "react";
import "../../styles/customer.css";

function Profile() {
  const [profile, setProfile] = useState({
  name: "Aayesha Kambli",
  email: "aayesha@gmail.com",
  phone: "9876543210",
  skinType: "Combination",
  hairType: "Straight",
  allergies: "",
  preferredService: "",
});

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !profile.name ||
    !profile.email ||
    !profile.phone
  ) {
    alert("Please fill all required fields");
    return;
  }

  localStorage.setItem(
    "customerProfile",
    JSON.stringify(profile)
  );

  alert("Profile Updated Successfully");
};

const deleteProfile = () => {
  localStorage.removeItem(
    "customerProfile"
  );

  alert("Profile Deleted");
};

  return (
    <div className="customer-container">
      <h2>Beauty Profile</h2>

      <form
  className="customer-form"
  onSubmit={handleSubmit}
>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skinType"
          value={profile.skinType}
          onChange={handleChange}
        />

        <input
          type="text"
          name="hairType"
          value={profile.hairType}
          onChange={handleChange}
        />

        <input
  type="text"
  name="allergies"
  placeholder="Allergies"
  value={profile.allergies}
  onChange={handleChange}
/>

<input
  type="text"
  name="preferredService"
  placeholder="Preferred Service"
  value={profile.preferredService}
  onChange={handleChange}
/>

        <button type="submit">
          Save Profile
        </button>

        <button
  type="button"
  onClick={deleteProfile}
>
  Delete Profile
</button>
      </form>
    </div>
  );
}

export default Profile;