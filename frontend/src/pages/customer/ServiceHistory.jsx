import "../../styles/customer.css";

function ServiceHistory() {
  const services = [
    {
      service: "Hair Spa",
      date: "10 Aug 2026",
      amount: 1200,
    },
    {
      service: "Facial",
      date: "5 Aug 2026",
      amount: 800,
    },
    {
      service: "Hair Cut",
      date: "1 Aug 2026",
      amount: 400,
    },
  ];

  return (
    <div className="customer-container">
      <h2>Service History</h2>

      {services.map((item, index) => (
        <div
          key={index}
          className="customer-card"
        >
          <h3>{item.service}</h3>

          <p>Date: {item.date}</p>

          <p>Amount: ₹{item.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceHistory;