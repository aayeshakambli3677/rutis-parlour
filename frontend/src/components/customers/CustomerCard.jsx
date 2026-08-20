function CustomerCard() {
  const profile = JSON.parse(
    localStorage.getItem("customerProfile")
  );

  if (!profile) {
    return <p>No Profile Saved Yet</p>;
  }

  return (
    <div className="customer-card">
      <h3>Customer Details</h3>

      <p>Name: {profile.name}</p>

      <p>Email: {profile.email}</p>

      <p>Phone: {profile.phone}</p>

      <p>Skin Type: {profile.skinType}</p>

      <p>Hair Type: {profile.hairType}</p>

      <p>Allergies: {profile.allergies}</p>

      <p>Preferred Service: {profile.preferredService}</p>
    </div>
  );
}

export default CustomerCard;