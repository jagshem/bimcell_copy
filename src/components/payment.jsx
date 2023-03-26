import React, { useState } from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCcv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCcvChange = (event) => {
    setCcv(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    //! form verilerini sunucuya gönderme
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Ödeme Yöntemi</h2>
      <form method="post" onSubmit={handleSubmit} className="payment-form">
        <div>
          <label htmlFor="cardHolderName" className="payment-label">
            Kart Sahibinin Adı Soyadı
          </label>
          <input
            name="cardHolderName"
            placeholder="Örn: Ahmet Yılmaz"
            type="text"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            className="payment-input"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="payment-label">
            Kredi Kartı Numarası
          </label>
          <input
            name="cardNumber"
            placeholder="Örn: 1234 1234 **** ****"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="payment-input"
          />
        </div>
        <div>
          <label htmlFor="ccv" className="payment-label">
            CCV Kodu
          </label>
          <input
            name="ccv"
            placeholder="Örn: 123"
            type="password"
            value={ccv}
            onChange={handleCcvChange}
            className="payment-input"
          />
        </div>
        <div>
          <label htmlFor="expiryDate" className="payment-label">
            Son Kullanma Tarihi
          </label>
          <input
            name="expiryDate"
            placeholder="Örn: 01/22"
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            className="payment-input"
          />
        </div>
        <button type="submit" className="payment-button">
          Ödeme Yap
        </button>
      </form>
    </div>
  );
}

export default Payment;
