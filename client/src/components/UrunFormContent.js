import React, { useState } from "react";

const UrunFormContent = ({ handleFormChange, formValues }) => {
  const [baslik, setBaslik] = useState(formValues.baslik || "");
  const [value, setValue] = useState(formValues.detay || "");
  const [urunFiyati, setUrunFiyati] = useState(formValues.fiyat || "");

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const handlePasteInput = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    const onlyNumbers = pastedText.replace(/\D/g, "");
    document.exeCommand("insertText", false, onlyNumbers);
  };

  const handleInputChange = (event) => {
    const onlyNumbers = event.target.value.replace(/\D/g, "");
    setUrunFiyati(onlyNumbers);
    handleFormChange("fiyat", onlyNumbers);
  };

  return (
    <form>
      <div className="baslik">
        <label htmlFor="baslik">Ürün Başlığı:</label>
        <input
          type="text"
          id="baslik"
          value={baslik}
          onChange={(e) => {
            setBaslik(e.target.value);
            handleFormChange("baslik", e.target.value);
          }}
        />
      </div>

      <div className="detay">
        <label htmlFor="detay">Ürün Detayı:</label>
        <textarea
          id="detay"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            handleFormChange("detay", e.target.value);
          }}
        ></textarea>
      </div>

      <div className="adres">
        <label htmlFor="adres">Ürün Adresi:</label>
        <input
          type="text"
          id="adres"
          onChange={(e) => handleFormChange("adres", e.target.value)}
        />
      </div>

      <div className="fiyat">
        <label htmlFor="fiyat">Ürün Fiyatı:</label>
        <input
          type="text"
          id="fiyat"
          value={urunFiyati}
          onKeyPress={handleKeyPress}
          onPaste={handlePasteInput}
          onInput={handleInputChange}
        />
      </div>

      {value !== baslik && <p>Value ve Başlık Farklı!</p>}
    </form>
  );
};

export default UrunFormContent;
