import "../../styles/customer.css";

function CustomerList() {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="customer-container">
      <h2>Registered Customers</h2>

      {users.map((user, index) => (
        <div
          className="customer-card"
          key={index}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;