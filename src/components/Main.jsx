import React, { useState } from "react";
import "./Main.css";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  //! React Spring kullanarak animasyonlu stil tanımları oluşturuyoruz.
  const bakiyeStyles = useSpring({
    opacity: showOptions ? 1 : 0, //? bakiye ve ödeme kısmının opacity'si 1 olacak şekilde animasyon yapıyoruz.
    height: showOptions ? "auto" : 0, //? eğer bakiye ve ödeme kısmı gösterilmeyecekse yüksekliği 0 yaparak, gizliyoruz.
    pointerEvents: showOptions ? "all" : "none", //? eğer bakiye ve ödeme kısmı gösterilmeyecekse, kullanıcıya tıklama işlemi yapmasını engelliyoruz.
  });

  function handleConfirmation() {
    if (selectedOption) {
      const message = `"${selectedOption} TL" telefon numaranıza yüklenecek. Ödemeye geçmek istiyor musunuz?`;

      if (window.confirm(message)) {
        navigate("/payment");
      }
    }
  }

  function handlePaymentClick() {
    handleConfirmation();
  }

  function handleChange(event) {
    setPhoneNumber(event.target.value);
    setShowOptions(event.target.value.length === 10);
  }

  function handleClick(option) {
    setSelectedOption(option);
    console.log(`Yüklenecek bakiye: ${option} TL`);
  }

  return (
    <div className="container">
      <label htmlFor="phoneNumber">Telefon Numarası</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        maxLength="10"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="555 555 55 55"
      />
      <animated.div className="bakiye" style={bakiyeStyles}>
        <h3>Bakiyelerimiz:</h3>
        <div className="son">
          <button
            onClick={() => handleClick(25)}
            className={selectedOption === 25 ? "selected" : ""}
          >
            25 TL
          </button>
          <button
            onClick={() => handleClick(35)}
            className={selectedOption === 35 ? "selected" : ""}
          >
            35 TL
          </button>
          <button
            onClick={() => handleClick(50)}
            className={selectedOption === 50 ? "selected" : ""}
          >
            50 TL
          </button>
        </div>
        <button
          onClick={() => handleClick(100)}
          className={selectedOption === 100 ? "selected" : ""}
        >
          100 TL
        </button>
        <button
          onClick={() => handleClick(150)}
          className={selectedOption === 150 ? "selected" : ""}
        >
          150 TL
        </button>
        <button
          onClick={() => handleClick(200)}
          className={selectedOption === 200 ? "selected" : ""}
        >
          200 TL
        </button>
        {selectedOption && <h3>Seçilen bakiye: {selectedOption} TL</h3>}
      </animated.div>
      {showOptions && (
        <animated.div style={bakiyeStyles}>
          <button onClick={handleConfirmation} className="payment-button">
            Ödemeye Geç
          </button>
          <p className="secure-message">
            Daha güvenli işlemler için 3D Secure ödememiz açılmıştır.
          </p>
        </animated.div>
      )}
    </div>
  );
}

export default Main;
