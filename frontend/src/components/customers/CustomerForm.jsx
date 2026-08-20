import { useState } from "react";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <button>Save</button>
    </form>
  );
};

export default CustomerForm;