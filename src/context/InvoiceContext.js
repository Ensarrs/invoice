import React, { createContext, useState } from "react";

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([
    {
      id: "INV1",
      clientName: "Ensar Maliqi",
      amount: 500,
      status: "Paid",
      dueDate: "2024-12-31",
    },
  ]);

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices, deleteInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
