import { useEffect, useState } from "react";
import API from "../../services/api";

function CustomerCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await API.get("/auth/me");
        setProfile(response.data);
      } catch (error) {
        console.error("Customer profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <p>Loading customer details...</p>;
  }

  if (!profile) {
    return <p>Unable to load customer details.</p>;
  }

  return (
    <div className="customer-card">
      <h3>Customer Details</h3>

      <p>
        <strong>Name:</strong> {profile.full_name || "Not available"}
      </p>

      <p>
        <strong>Email:</strong> {profile.email || "Not available"}
      </p>

      <p>
        <strong>Role:</strong> {profile.role || "Customer"}
      </p>
    </div>
  );
}

export default CustomerCard;