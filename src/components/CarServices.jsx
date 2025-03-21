import React from 'react';

const CarServices = () => {
  const routes = [
    { from: "Pune", to: "Shirdi", price: 3500 },
    { from: "Pune", to: "Mahabaleshwar", price: 3000 },
    { from: "Pune", to: "Lonavala", price: 2500 },
    { from: "Pune", to: "Mumbai", price: 2800 },
    { from: "Pune", to: "Nashik", price: 3200 },
    { from: "Pune", to: "Kolhapur", price: 4200 },
    { from: "Pune", to: "Ahmednagar", price: 2500 },
    { from: "Pune", to: "Aurangabad", price: 3800 },
  ];

  return (
    <div className="price-list-container">
      <div className="header">
        <h1>BEST ONE WAY TAXI PRICES</h1>
        <p>For a one-way trip, pay for only one way.</p>
      </div>

      <div className="routes-container">
        {routes.map((route, index) => (
          <div key={index} className="route-item">
            <div className="route-details">
              <span className="route-name">
                <i className="fas fa-map-marker-alt"></i> {`${route.from} to ${route.to}`}
              </span>
              <span className="price">₹{route.price}*</span>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p className="disclaimer">* Indicative prices, it may vary</p>
        <div className="logo"><span className="highlight">श्री</span> टूर्स अँड ट्रॅव्हल्स</div>
      </div>

      <style>{`
        .price-list-container {
          max-width: 650px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
          background: #ffffff;
        //   border-radius: 20px    ;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          animation: fadeIn 1s ease-in-out;
        }

        .header {
          background: linear-gradient(45deg, #ff6f61, #ff9800);
          padding: 40px 20px;
          text-align: center;
          color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          animation: slideDown 0.8s ease-out;
        }

        .header h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 600;
        }

        .header p {
          margin: 10px 0 0;
          font-size: 18px;
        }

        .routes-container {
          padding: 30px 20px;
          background: #f0f0f0;
        }

        .route-item {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 15px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.5s forwards ease-out;
          transition: box-shadow 0.3s ease-in-out;
        }

        .route-item:nth-child(even) {
          animation-delay: 0.2s;
        }

        .route-item:nth-child(odd) {
          animation-delay: 0.4s;
        }

        .route-item:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .route-details {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .route-name {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease-in-out;
        }

        .route-name i {
          margin-right: 8px;
          color: #ff9800;
        }

        .route-name:hover {
          transform: scale(1.1); /* Zoom the text */
        }

        .price {
          font-size: 18px;
          font-weight: bold;
          color: #ff9800;
        }

        .footer {
          background: #2a2a40;
          padding: 25px;
          text-align: center;
        }

        .disclaimer {
          font-size: 14px;
          color: #aaa;
        }

        .logo {
          margin-top: 15px;
          font-size: 28px;
          font-weight: bold;
          color: #fff;
        }

        .highlight {
          color: #ff9800;
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 26px;
          }

          .route-item {
            font-size: 14px;
          }

          .price {
            font-size: 14px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CarServices;
