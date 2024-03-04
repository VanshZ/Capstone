"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactDOM from 'react-dom';

type PropertyData = {
  imgSrc?: string;
  images?: string[];
  price?: number;
  rentZestimate?: number;
  address?: {
    streetAddress?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  description?: string;
};

const ROICalculatorPopup = ({ property, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg overflow-auto max-h-[85%] w-full max-w-[60%] mx-auto">
        {/* Close button for better UX */}
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
            aria-label="Close"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="p-4">
          <ROICalculator property={property} />
        </div>
      </div>
    </div>,
    document.body
  );
};

const PropertyDetails = ({ params }: { params: { address: string } }) => {
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    if (params.address) {
      fetchHouseData(params.address);
    }
  }, [params.address]);

  const fetchHouseData = async (address: string) => {
    const propertyOptions = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/property',
      params: { zpid: address },
      headers: {
        'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
      },
    };
  
    const imagesOptions = {
      method: 'GET',
      url: 'https://zillow-com1.p.rapidapi.com/images',
      params: { zpid: address },
      headers: {
        'X-RapidAPI-Key': 'c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
      },
    };
  
    try {
      const propertyResponse = await axios.request(propertyOptions);
      const imagesResponse = await axios.request(imagesOptions);
  
      // Assuming imagesResponse.data contains an array of image URLs
      const images = imagesResponse.data.images || [];
  
      setProperty({ ...propertyResponse.data, images });
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : (property?.images?.length || 1) - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < (property?.images?.length || 1) - 1 ? prevIndex + 1 : 0
    );
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleOpenCalculator = () => setShowCalculator(true);
  const handleCloseCalculator = () => setShowCalculator(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {property ? (
        <>
          <div className="flex flex-wrap mt-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {/* Fixed-height container for the image carousel */}
            <div className="w-full md:w-3/4 relative" style={{ height: '500px' }}> {/* Adjust the height as needed */}
              {property.images && property.images.length > 0 && (
                <img
                  src={property.images[currentImageIndex]}
                  alt={`Property ${currentImageIndex}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

              {/* Navigation Buttons, absolutely positioned */}
              {property.images && property.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
                    aria-label="Previous image"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
                    aria-label="Next image"
                  >
                    &gt;
                  </button>
                </>
              )}
            </div>



            <div className="w-full md:w-3/4 p-4 flex flex-col justify-between">
  <div className="w-full md:w-7/8 p-4 flex flex-col justify-between">
    <div className="flex justify-between items-center">
      {/* Property Details with Purchase Price */}
      <div>
        <h1 className="text-4xl font-bold">
          ${property.price ? new Intl.NumberFormat('en-US').format(property.price) : 'N/A'}
        </h1>
        <p className="text-lg mb-4">
          {property.address ? `${property.address.streetAddress}, ${property.address.city}, ${property.address.state} ${property.address.zipcode}` : 'Address not available'}
        </p>
      </div>

      {/* Analyze Button */}
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={handleOpenCalculator}
      >
        Analyze
      </button>
    </div>

    <div className={`description ${!showFullDescription ? 'line-clamp-15' : ''}`}> {/* Conditional class for line clamping */}
      {property.description || 'Description not available'}
    </div>
    {property.description && (
      <button onClick={toggleDescription} className="text-blue-500 hover:text-blue-700 mt-2">
        {showFullDescription ? 'Read Less' : 'Read More'}
      </button>
    )}
  </div>
</div>

          </div>

          {showCalculator && (
            <ROICalculatorPopup property={property} onClose={handleCloseCalculator} />
          )}
        </>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>

  );
};

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="py-2 w-full text-left font-semibold bg-gray-200 rounded-md mb-2" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className="mb-4">{children}</div>}
    </div>
  );
};

const ROICalculator = ({ property }) => {
  // Initialize state for each property attribute
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [closingCost, setClosingCost] = useState(4000);
  const [interestRate, setInterestRate] = useState(4.0);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyRent, setMonthlyRent] = useState(property.rentZestimate || 0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [propertyTax, setPropertyTax] = useState(300);
  const [insurance, setInsurance] = useState(1000);
  const [purchasePrice, setPurchasePrice] = useState(property.price || 0);

  useEffect(() => {
    setMonthlyRent(property.rentZestimate || 0);
    setPurchasePrice(property.price || 0);
  }, [property.rentZestimate, property.price]);

  // Calculate derived values
  const downPayment = (downPaymentPercent / 100) * purchasePrice;
  const loanAmount = purchasePrice - downPayment;
  const monthlyMortgage = loanAmount > 0 ? calculateMortgage(loanAmount, interestRate, loanTerm) : 0;
  const grossOperatingIncome = (monthlyRent + otherIncome) * 12;
  const totalOperatingExpenses = (propertyTax + insurance) * 12;
  const netOperatingIncome = grossOperatingIncome - totalOperatingExpenses;
  const cashFlowBeforeTaxes = netOperatingIncome - (monthlyMortgage * 12);
  const capRate = (netOperatingIncome / purchasePrice) * 100;

  // Function to calculate monthly mortgage payment
  function calculateMortgage(principal: number, annualRate: number, years: number) {
    const monthlyRate = annualRate / 100 / 12;
    const payments = years * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    return isFinite(monthly) ? monthly : 0;
  }

  return (
    <div className="roi-calculator p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">ROI Calculator</h2>

      {/* Form fields for input */}
      <div className="space-y-4">
        <InputField label="Purchase Price ($)" value={purchasePrice} onChange={(e: { target: { value: any; }; }) => setPurchasePrice(Number(e.target.value))} />
        <InputField label="Down Payment (%)" value={downPaymentPercent} onChange={(e: { target: { value: any; }; }) => setDownPaymentPercent(Number(e.target.value))} />
        <InputField label="Closing Cost ($)" value={closingCost} onChange={(e: { target: { value: any; }; }) => setClosingCost(Number(e.target.value))} />
        <InputField label="Interest Rate (%)" value={interestRate} onChange={(e: { target: { value: any; }; }) => setInterestRate(Number(e.target.value))} />
        <InputField label="Loan Term (years)" value={loanTerm} onChange={(e: { target: { value: any; }; }) => setLoanTerm(Number(e.target.value))} />
        <InputField label="Monthly Rent ($)" value={monthlyRent} onChange={(e: { target: { value: any; }; }) => setMonthlyRent(Number(e.target.value))} />
        <InputField label="Other Income ($/month)" value={otherIncome} onChange={(e: { target: { value: any; }; }) => setOtherIncome(Number(e.target.value))} />
        <InputField label="Property Tax ($/month)" value={propertyTax} onChange={(e: { target: { value: any; }; }) => setPropertyTax(Number(e.target.value))} />
        <InputField label="Insurance ($/month)" value={insurance} onChange={(e: { target: { value: any; }; }) => setInsurance(Number(e.target.value))} />
      </div>

      {/* Display calculated values */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3 text-gray-700">Investment Metrics</h3>
        <p>Down Payment: ${downPayment.toFixed(2)}</p>
        <p>Loan Amount: ${loanAmount.toFixed(2)}</p>
        <p>Monthly Mortgage: ${monthlyMortgage.toFixed(2)}</p>
        <p>Net Operating Income: ${netOperatingIncome.toFixed(2)}</p>
        <p>Cash Flow Before Taxes: ${cashFlowBeforeTaxes.toFixed(2)}</p>
        <p>CAP Rate: {capRate.toFixed(2)}%</p>
      </div>
    </div>
  );
};



// Helper component for input fields
const InputField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="number"
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      value={value}
      onChange={onChange}
    />
  </div>
);

// Function to calculate monthly mortgage payment
function calculateMortgage(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const payments = years * 12;

  const x = Math.pow(1 + monthlyRate, payments);
  const monthly = (principal * x * monthlyRate) / (x - 1);
  return isFinite(monthly) ? monthly : 0;
}

export default PropertyDetails;