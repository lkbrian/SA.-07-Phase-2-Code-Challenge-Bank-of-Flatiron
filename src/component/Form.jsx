import { useState } from "react";
function Form({ addTransaction }) {
  const [formData, setFormData] = useState({
    id:crypto.randomUUID(),
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addTransaction(formData);

    setFormData({
      id:"",
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((formDataPreviousState) => ({
      ...formDataPreviousState,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Enter description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
        required
        pattern="-?\d*"
        inputMode="numeric"
        title="Please enter a valid number."
      />

      <input type="submit" value="Add Transaction" />
    </form>
  );
}
export default Form;
