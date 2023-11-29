import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UrunFormContent from "./UrunFormContent";

const UrunFormModal = ({ show, category, handleClose }) => {
  const [formValues, setFormValues] = useState({
    baslik: "",
    detay: "",
    adres: "",
    fiyat: "",
  });

  const handleUrunEkle = () => {
    const isFormValid =
      formValues.baslik && formValues.detay && formValues.adres && formValues.fiyat;

    if (isFormValid) {
      console.log("Ürün eklendi!", formValues);
      handleClose();
      // Form değerlerini sıfırla
      setFormValues({
        baslik: "",
        detay: "",
        adres: "",
        fiyat: "",
      });
    } else {
      console.log("Lütfen tüm alanları doldurun.");
    }
  };

  const handleFormChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`${category} Formu`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UrunFormContent
          formValues={formValues}
          handleFormChange={handleFormChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="primary" onClick={handleUrunEkle} type="button">
          Ürün Ekle
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UrunFormModal;