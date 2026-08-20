import "../../styles/customer.css";

function MembershipDetails() {
  return (
    <div className="customer-container">
      <div className="customer-card">
        <h2>Membership Details</h2>

        <h3>Gold Membership</h3>

        <p>Discount: 15%</p>
        <p>Points Earned: 250</p>
        <p>Expiry Date: 31 Dec 2026</p>
      </div>
    </div>
  );
}

export default MembershipDetails;