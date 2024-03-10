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

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Update input field values and validate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validation: Check for non-numeric and negative values
    if (isNaN(value) || value < 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Please enter a valid non-negative number.',
      }));
    } else {
      // Remove error if input is valid
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Submit handler to update submitted values and calculate metrics
  const handleSubmit = () => {
    // Check for errors before submitting
    if (Object.keys(errors).length === 0) {
      setSubmittedValues({ ...inputValues });
    } else {
      alert('Please correct the errors before submitting.');
    }
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
  } = inputValues;

  const downPayment = (downPaymentPercent / 100) * purchasePrice;
  const loanAmount = purchasePrice - downPayment;
  const monthlyMortgage = calculateMortgage(loanAmount, interestRate, loanTerm);
  const grossOperatingIncome = (monthlyRent + otherIncome) * 12;
  const totalOperatingExpenses = (propertyTax + insurance) * 12;
  const netOperatingIncome = grossOperatingIncome - totalOperatingExpenses;
  const cashFlowBeforeTaxes = netOperatingIncome - (monthlyMortgage * 12);
  const capRate = purchasePrice > 0 ? (netOperatingIncome / purchasePrice) * 100 : 0;

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex-grow space-y-4 md:w-2/3">
        <CollapsibleSection title="Purchase Details">
          <InputField name="purchasePrice" label="Purchase Price ($)" placeholder="0" value={inputValues.purchasePrice} onChange={handleChange} error={errors.purchasePrice} />
          <InputField name="downPaymentPercent" label="Down Payment (%)" placeholder="25" value={inputValues.downPaymentPercent} onChange={handleChange} error={errors.downPaymentPercent} />
          <InputField name="closingCost" label="Closing Cost ($)" placeholder="4000" value={inputValues.closingCost} onChange={handleChange} error={errors.closingCost} />
        </CollapsibleSection>

        <CollapsibleSection title="Loan Details">
          <InputField name="interestRate" label="Interest Rate (%)" placeholder="4.0" value={inputValues.interestRate} onChange={handleChange} error={errors.interestRate} />
          <InputField name="loanTerm" label="Loan Term (years)" placeholder="30" value={inputValues.loanTerm} onChange={handleChange} error={errors.loanTerm} />
        </CollapsibleSection>

        <CollapsibleSection title="Income">
          <InputField name="monthlyRent" label="Monthly Rent ($)" placeholder="0" value={inputValues.monthlyRent} onChange={handleChange} error={errors.monthlyRent} />
          <InputField name="otherIncome" label="Other Income ($/month)" placeholder="0" value={inputValues.otherIncome} onChange={handleChange} error={errors.otherIncome} />
        </CollapsibleSection>

        <CollapsibleSection title="Expenses">
          <InputField name="propertyTax" label="Property Tax ($/month)" placeholder="300" value={inputValues.propertyTax} onChange={handleChange} error={errors.propertyTax} />
          <InputField name="insurance" label="Insurance ($/month)" placeholder="1000" value={inputValues.insurance} onChange={handleChange} error={errors.insurance} />
        </CollapsibleSection>
        
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>Analyze</button>
      </div>

      <div className="md:w-1/3 pl-8">
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

const InputField = ({ name, label, value, onChange, placeholder, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      id={name}
      name={name}
      type="number"
      className="mt-1 block w-full max-w-xs border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-8 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={{ paddingLeft: '8px' }} // Adds space before the text in the input
    />
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
  </div>
);

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button className="py-2 w-full text-left font-semibold bg-gray-200 rounded-md mb-2" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className="space-y-4">{children}</div>}
    </div>
  );
};

export default FullPageROICalculator;
