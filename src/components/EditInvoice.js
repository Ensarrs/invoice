import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";

const EditInvoice = () => {
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [invoice, setInvoice] = useState({
    clientName: "",
    amount: 0,
    status: "Unpaid",
    dueDate: "",
  });

  useEffect(() => {
    const invoiceToEdit = invoices.find((inv) => inv.id === id);
    if (invoiceToEdit) {
      setInvoice(invoiceToEdit);
    }
  }, [id, invoices]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? invoice : inv))
    );

    navigate("/"); 
  };

  return (
    <div className="container my-5">
      <h2>Edit Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Client Name</label>
          <input
            type="text"
            name="clientName"
            className="form-control"
            value={invoice.clientName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            className="form-control"
            value={invoice.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <select
            name="status"
            className="form-control"
            value={invoice.status}
            onChange={handleInputChange}
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={invoice.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditInvoice;
