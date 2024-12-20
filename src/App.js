import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddInvoice from "./components/AddInvoice";
import EditInvoice from "./components/EditInvoice";
import InvoiceDetails from "./components/InvoiceDetails";
import { InvoiceProvider } from "./context/InvoiceContext";

function App() {
  return (
    <InvoiceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddInvoice />} />
          <Route path="/edit/:id" element={<EditInvoice />} />
          <Route path="/details/:id" element={<InvoiceDetails />} />
        </Routes>
      </Router>
    </InvoiceProvider>
  );
}

export default App;
