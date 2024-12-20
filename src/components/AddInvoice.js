import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { InvoiceContext } from "../context/InvoiceContext";
import { useNavigate } from "react-router-dom";

const AddInvoice = () => {
  const { setInvoices } = useContext(InvoiceContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setInvoices((prev) => [
      ...prev,
      { ...data, id: `INV${prev.length + 1}` },
    ]);
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h2>Add Invoice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Client Name</label>
          <input
            type="text"
            className="form-control"
            {...register("clientName", { required: "Client Name is required" })}
          />
          {errors.clientName && <p className="text-danger">{errors.clientName.message}</p>}
        </div>
        <div className="mb-3">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            {...register("amount", { required: "Amount is required" })}
          />
          {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label>Status</label>
          <select className="form-control" {...register("status")}>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Due Date</label>
          <input
            type="date"
            className="form-control"
            {...register("dueDate", { required: "Due Date is required" })}
          />
          {errors.dueDate && <p className="text-danger">{errors.dueDate.message}</p>}
        </div>
        <button type="submit" className="btn btn-success">Add Invoice</button>
      </form>
    </div>
  );
};

export default AddInvoice;
