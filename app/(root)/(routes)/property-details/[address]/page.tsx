"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

type PropertyData = {
  imgSrc?: string;
  price?: number;
  rentZestimate?: number; // Assuming this is monthly potential rental income
  address?: {
    streetAddress?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  description?: string;
};

const PropertyDetails = ({ params }: { params: { address: string } }) => {
  const [property, setProperty] = useState<PropertyData | null>(null);

  useEffect(() => {
    if (params.address) {
      fetchHouseData(params.address);
    }
  }, [params.address]);

  const fetchHouseData = async (address: string) => {
    const options = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/property',
      params: { zpid: address },
      headers: {
        'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90', // Replace with your environment variable
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setProperty(response.data);
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="container mx-auto px-4">
      {property ? (
        <>
          <div className="flex flex-wrap mt-2">
            {/* Adjust the width of the image container as needed */}
            <div className="w-1/2 p-4">
              <img
                src={property.imgSrc}
                alt="Property"
                className="rounded-lg w-10/12 h-auto shadow-lg"
              />
            </div>
            
            {/* Description container with padding */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold">
                  ${property.price ? new Intl.NumberFormat('en-US').format(property.price) : 'N/A'}
                </h1>
                <p className="text-lg">
                  {property.address ? `${property.address.streetAddress}, ${property.address.city}, ${property.address.state} ${property.address.zipcode}` : 'Address not available'}
                </p>
                <p className="mt-2 mb-8">{property.description || 'Description not available'}</p>
              </div>
            </div>
          </div>
          <ROICalculator property={property} />
        </>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
};

const ROICalculator = ({ property }: { property: PropertyData }) => {
    // State hooks for all input values that the user can modify
    const [downPaymentPercent, setDownPaymentPercent] = useState(25);
    const [closingCost, setClosingCost] = useState(4000); // Default value
    const [interestRate, setInterestRate] = useState(4.0); // Example interest rate
    const [loanTerm, setLoanTerm] = useState(30); // Example loan term in years
    const [monthlyRent, setMonthlyRent] = useState(property.rentZestimate || 0); // Default to rentZestimate if available
    const [otherIncome, setOtherIncome] = useState(0);
    const [propertyTax, setPropertyTax] = useState(300); // Default value
    const [insurance, setInsurance] = useState(1000); // Default value
  
    // Derived values that will update whenever the state changes
    const purchasePrice = property.price || 0; // Fallback to 0 if price is not available
    const downPayment = (downPaymentPercent / 100) * purchasePrice;
    const loanAmount = purchasePrice - downPayment;
    const monthlyMortgage = loanAmount > 0 ? calculateMortgage(loanAmount, interestRate, loanTerm) : 0;
    const grossOperatingIncome = monthlyRent * 12;
    const totalOperatingExpenses = (propertyTax + insurance) * 12;
    const netOperatingIncome = grossOperatingIncome - totalOperatingExpenses;
    const cashFlowBeforeTaxes = netOperatingIncome - (monthlyMortgage * 12);
    const capRate = (netOperatingIncome / purchasePrice) * 100;
  
    // Ensure the ROI calculation is displayed as a positive percentage
    const displayCapRate = capRate >= 0 ? capRate.toFixed(2) : 'N/A';
  
    // Function to handle the change of inputs
    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(Number(e.target.value));
    };
  
    
    return (
        <div className="roi-calculator">
          <h2 className="text-2xl font-semibold mb-4">ROI Calculator</h2>
    
          {/* Purchase Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Purchase Details</h3>
            <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <label htmlFor="purchasePrice">Purchase Price ($): </label>
            <input
              id="purchasePrice"
              type="number"
              value={purchasePrice}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
              readOnly
            />
            <label htmlFor="downPaymentPercent">Down Payment (%): </label>
            <input
              id="downPaymentPercent"
              type="number"
              value={downPaymentPercent}
              onChange={handleInputChange(setDownPaymentPercent)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
            <label htmlFor="closingCost">Closing Cost ($): </label>
            <input
              id="closingCost"
              type="number"
              value={closingCost}
              onChange={handleInputChange(setClosingCost)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
          </div>
          </div>
    
          {/* Loan Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Loan Details</h3>
            <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <label htmlFor="interestRate">Interest Rate (%): </label>
            <input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={handleInputChange(setInterestRate)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
            <label htmlFor="loanTerm">Loan Term (years): </label>
            <input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={handleInputChange(setLoanTerm)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
            </div>
          </div>
    
          {/* Rental Income */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Rental Income</h3>
            <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <label htmlFor="monthlyRent">Monthly Rent ($): </label>
            <input
              id="monthlyRent"
              type="number"
              value={monthlyRent}
              onChange={handleInputChange(setMonthlyRent)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
            <label htmlFor="otherIncome">Other Income ($/month): </label>
            <input
              id="otherIncome"
              type="number"
              value={otherIncome}
              onChange={handleInputChange(setOtherIncome)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
          </div>
          </div>
    
          {/* Operating Expenses */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Operating Expenses</h3>
            <div className="border-t-2 border-b-2 border-gray-300 py-4">
            <label htmlFor="propertyTax">Property Tax ($/month): </label>
            <input
              id="propertyTax"
              type="number"
              value={propertyTax}
              onChange={handleInputChange(setPropertyTax)}
              className="ml-2 mr-2 border-2 rounded border-gray-400 p-2"
            />
            <label htmlFor="insurance">Insurance ($/month): </label>
            <input
              id="insurance"
              type="number"
              value={insurance}
              onChange={handleInputChange(setInsurance)}
              className="ml-2 border-2 rounded border-gray-400 p-2"
            />
          </div>
          </div>

        {/* Investment Performance Metrics */}
        <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">Investment Performance Metrics</h3>
        <div className="border-t-2 border-b-2 border-gray-300 py-4">
          <p>Down Payment: ${downPayment.toLocaleString()}</p>
          <p>Loan Amount: ${loanAmount.toLocaleString()}</p>
          <p>Monthly Mortgage: ${monthlyMortgage.toFixed(2)}</p>
          <p>Gross Operating Income: ${grossOperatingIncome.toLocaleString()}</p>
          <p>Total Operating Expenses: ${totalOperatingExpenses.toLocaleString()}</p>
          <p>Net Operating Income (NOI): ${netOperatingIncome.toLocaleString()}</p>
          <p>Cash Flow Before Taxes: ${cashFlowBeforeTaxes.toFixed(2)}</p>
          <p>CAP Rate: {displayCapRate}%</p>
        </div>
      </div>
      </div>
    );
};

// Function to calculate monthly mortgage payment
function calculateMortgage(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const payments = years * 12;

  const x = Math.pow(1 + monthlyRate, payments);
  const monthly = (principal * x * monthlyRate) / (x - 1);
  return isFinite(monthly) ? monthly : 0;
}

export default PropertyDetails;
