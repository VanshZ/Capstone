import React from 'react';

const Portfolio: React.FC = () => {
  // Placeholder data structure
  const data = Array(5).fill({
    name: "Property x",
    roi: "x%",
    closingCost: "$x.xx",
    noi: "$x.xx",
    cashFlow: "$x.xx" // Add Cash Flow values
  });

  // Inline styles

  const navbarStyles = {
    display: "flex",
    justifyContent: "center",
    width: '100%',
    padding: '30px'
  }
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '20px'
  };

  const tableStyles = {
    width: '100%',
    maxWidth: '800px', // Set a max-width for the table
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd', // Add a grey border around the table
    marginBottom: '40px', // Space between table and chart title
  };

  const cellStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center'
  };

  // SVG styles
  const svgStyles = {
    display: 'block',
    margin: 'auto',
    backgroundColor: '#f0f0f0', // Light grey background for the SVG
  };

  // SVG path for the line chart
  const linePath = "M50,150 L150,100 L250,120 L350,130 L450,90 L550,110";

  return (
    <div style={containerStyles}>
      <h1>Dashboard</h1>
      <h2>Comparison</h2>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={cellStyles}>Name</th>
            <th style={cellStyles}>ROI%</th>
            <th style={cellStyles}>Closing Cost($)</th>
            <th style={cellStyles}>NOI</th>
            <th style={cellStyles}>Cash Flow Before Taxes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={cellStyles}>{item.name}</td>
              <td style={cellStyles}>{item.roi}</td>
              <td style={cellStyles}>{item.closingCost}</td>
              <td style={cellStyles}>{item.noi}</td>
              <td style={cellStyles}>{item.cashFlow}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Chart Title */}
      <h3 style={{ margin: '20px 0' }}>ROI Comparison</h3>
      {/* SVG Chart */}
      <svg width="700" height="200" style={svgStyles}>
        <path d={linePath} stroke="blue" strokeWidth="2" fill="none" />
        {/* Horizontal line (x-axis) */}
        <line x1="50" y1="150" x2="650" y2="150" stroke="black" strokeWidth="1" />
        {/* Number line and tick marks */}
        {[...Array(6)].map((_, i) => (
          <g key={i} transform={`translate(${50 + i * 100}, 150)`}>
            <text y="30" textAnchor="middle" fontSize="12">{i + 1}</text>
            <line y1="5" y2="15" stroke="black" strokeWidth="1" />
          </g>
        ))}
      </svg>
      {/* Closing Cost Chart Title */}
      <h3 style={{ margin: '20px 0' }}>Closing Cost Comparison</h3>
      {/* SVG Chart for Closing Cost Comparison */}
      <svg width="700" height="300" style={{ display: 'block', margin: 'auto', backgroundColor: '#f0f0f0' }}>
        {/* Y-axis for the bar chart */}
        <line x1="50" y1="0" x2="50" y2="260" stroke="black" strokeWidth="1" />
        {/* Bars for the bar chart */}
        {Array.from({ length: 8 }, (_, i) => i + 1).map((number, index) => (
          <g key={index} transform={`translate(0, ${index * 30 + 20})`}>
            <rect x="50" width={number * 50} height="20" fill="red" />
            <text x={number * 50 + 60} y="15" fontSize="12" fill="black">{`${number}.xx`}</text>
          </g>
        ))}
        {/* Horizontal line (x-axis) */}
        <line x1="50" y1="250" x2="700" y2="250" stroke="black" strokeWidth="1" />
      </svg>
      {/* NOI Chart Title */}
      <h3 style={{ margin: '20px 0' }}>NOI Comparison</h3>
      {/* SVG Chart for NOI Comparison */}
      <svg width="700" height="300" style={{ display: 'block', margin: 'auto', backgroundColor: '#f0f0f0' }}>
        {/* Y-axis for the bar chart */}
        <line x1="50" y1="0" x2="50" y2="260" stroke="black" strokeWidth="1" />
        {/* Bars for the bar chart */}
        {Array.from({ length: 8 }, (_, i) => i + 1).map((number, index) => (
          <g key={index} transform={`translate(0, ${index * 30 + 20})`}>
            <rect x="50" width={number * 50} height="20" fill="blue" />
            <text x={number * 50 + 60} y="15" fontSize="12" fill="black">{`${number}.xx`}</text>
          </g>
        ))}
        {/* Horizontal line (x-axis) */}
        <line x1="50" y1="250" x2="700" y2="250" stroke="black" strokeWidth="1" />
      </svg>
      {/* Cash Flow Chart Title */}
      <h3 style={{ margin: '20px 0' }}>Cash Flow Comparison</h3>
      {/* SVG Chart for Cash Flow Comparison */}
      <svg width="700" height="300" style={{ display: 'block', margin: 'auto', backgroundColor: '#f0f0f0' }}>
        {/* Y-axis for the bar chart */}
        <line x1="50" y1="0" x2="50" y2="260" stroke="black" strokeWidth="1" />
        {/* Bars for the bar chart */}
        {Array.from({ length: 8 }, (_, i) => i + 1).map((number, index) => (
          <g key={index} transform={`translate(0, ${index * 30 + 20})`}>
            <rect x="50" width={number * 50} height="20" fill="green" />
            <text x={number * 50 + 60} y="15" fontSize="12" fill="black">{`${number}.xx`}</text>
          </g>
        ))}
        {/* Horizontal line (x-axis) */}
        <line x1="50" y1="250" x2="700" y2="250" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default Portfolio;