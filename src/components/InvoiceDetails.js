import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";

const InvoiceDetails = () => {
  const { invoices } = useContext(InvoiceContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const selectedInvoice = invoices.find((inv) => inv.id === id);
    if (selectedInvoice) {
      setInvoice(selectedInvoice);
    }
  }, [id, invoices]);

  if (!invoice) {
    return <div className="container my-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h2>Invoice Details</h2>
      <div className="mb-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Client Name: {invoice.clientName}</h5>
          <p className="card-text">Invoice ID: {invoice.id}</p>
          <p className="card-text">Amount: ${invoice.amount}</p>
          <p className="card-text">Status: {invoice.status}</p>
          <p className="card-text">Due Date: {invoice.dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
