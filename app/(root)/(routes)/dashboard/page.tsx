"use client"
import React, { useState } from 'react';

const FullPageROICalculator = () => {
  // State for input fields
  const [inputValues, setInputValues] = useState({
    downPaymentPercent: '',
    closingCost: '',
    interestRate: '',
    loanTerm: '',
    monthlyRent: '',
    otherIncome: '',
    propertyTax: '',
    insurance: '',
    purchasePrice: '',
  });

  // State for submitted values to calculate metrics
  const [submittedValues, setSubmittedValues] = useState({});

  // Update input field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Submit handler to update submitted values and calculate metrics
  const handleSubmit = () => {
    setSubmittedValues({ ...inputValues });
  };

  // Function to calculate monthly mortgage payment and other metrics
  const calculateMortgage = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const payments = years * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    return isFinite(monthly) ? monthly : 0;
  };

  // Calculate derived values using submitted values
  const {
    downPaymentPercent = 0,
    closingCost = 0,
    interestRate = 0,
    loanTerm = 0,
    monthlyRent = 0,
    otherIncome = 0,
    propertyTax = 0,
    insurance = 0,
    purchasePrice = 0,
  } = submittedValues;

  const downPayment = (downPaymentPercent / 100) * purchasePrice;
  const loanAmount = purchasePrice - downPayment;
  const monthlyMortgage = calculateMortgage(loanAmount, interestRate, loanTerm);
  const grossOperatingIncome = (monthlyRent + otherIncome) * 12;
  const totalOperatingExpenses = (propertyTax + insurance) * 12;
  const netOperatingIncome = grossOperatingIncome - totalOperatingExpenses;
  const cashFlowBeforeTaxes = netOperatingIncome - (monthlyMortgage * 12);
  const capRate = purchasePrice > 0 ? (netOperatingIncome / purchasePrice) * 100 : 0;

  return (
    <div className="container mx-auto p-4 flex">
      <div className="flex-grow space-y-4 w-2/3">
        {/* Collapsible sections for input fields */}
        <CollapsibleSection title="Purchase Details">
          <InputField name="purchasePrice" label="Purchase Price ($)" placeholder="0" value={inputValues.purchasePrice} onChange={handleChange} />
          <InputField name="downPaymentPercent" label="Down Payment (%)" placeholder="25" value={inputValues.downPaymentPercent} onChange={handleChange} />
          <InputField name="closingCost" label="Closing Cost ($)" placeholder="4000" value={inputValues.closingCost} onChange={handleChange} />
        </CollapsibleSection>

        <CollapsibleSection title="Loan Details">
          <InputField name="interestRate" label="Interest Rate (%)" placeholder="4.0" value={inputValues.interestRate} onChange={handleChange} />
          <InputField name="loanTerm" label="Loan Term (years)" placeholder="30" value={inputValues.loanTerm} onChange={handleChange} />
        </CollapsibleSection>

        <CollapsibleSection title="Income">
          <InputField name="monthlyRent" label="Monthly Rent ($)" placeholder="0" value={inputValues.monthlyRent} onChange={handleChange} />
          <InputField name="otherIncome" label="Other Income ($/month)" placeholder="0" value={inputValues.otherIncome} onChange={handleChange} />
        </CollapsibleSection>

        <CollapsibleSection title="Expenses">
          <InputField name="propertyTax" label="Property Tax ($/month)" placeholder="300" value={inputValues.propertyTax} onChange={handleChange} />
          <InputField name="insurance" label="Insurance ($/month)" placeholder="1000" value={inputValues.insurance} onChange={handleChange} />
        </CollapsibleSection>
        
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>Analyze</button>
      </div>

      <div className="w-1/3 pl-8">
        <h3 className="text-xl font-bold mb-3 text-gray-700">Investment Metrics</h3>
        <p>Down Payment: ${parseFloat(downPayment).toFixed(2)}</p>
        <p>Loan Amount: ${parseFloat(loanAmount).toFixed(2)}</p>
        <p>Monthly Mortgage: ${parseFloat(monthlyMortgage).toFixed(2)}</p>
        <p>Net Operating Income: ${parseFloat(netOperatingIncome).toFixed(2)}</p>
        <p>Cash Flow Before Taxes: ${parseFloat(cashFlowBeforeTaxes).toFixed(2)}</p>
        <p>CAP Rate: {parseFloat(capRate).toFixed(2)}%</p>
      </div>
    </div>
  );
};

const InputField = ({ name, label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      id={name}
      name={name}
      type="number"
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button className="py-2 w-full text-left font-semibold bg-gray-200 rounded-md mb-2" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default FullPageROICalculator;
