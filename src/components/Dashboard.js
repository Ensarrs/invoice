import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { invoices, deleteInvoice } = useContext(InvoiceContext);

  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 className="navbar-brand p-7">Invoice Dashboard</h1>
      </div>
      <div className="container my-5">
        <Link to="/add" className="btn btn-primary my-3">Add New Invoice</Link>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.clientName}</td>
                  <td>${invoice.amount}</td>
                  <td>{invoice.status}</td>
                  <td>{invoice.dueDate}</td>
                  <td>
                    <Link to={`/edit/${invoice.id}`} className="btn btn-success">Edit</Link>
                    <button className="btn btn-danger" onClick={() => deleteInvoice(invoice.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;