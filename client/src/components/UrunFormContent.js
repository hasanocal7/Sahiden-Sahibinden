import React from "react";
import { Form } from "react-bootstrap";
const UrunFormContent = ({ handleFormChange, formValues }) => {
  return (
    <Form>
      <Form.Group controlId="formBaslik">
        <Form.Label>Başlık</Form.Label>
        <Form.Control
          type="text"
          placeholder="Başlık"
          value={formValues.baslik}
          onChange={(e) => handleFormChange("baslik", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDetay">
        <Form.Label>Detay</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Detay"
          value={formValues.detay}
          onChange={(e) => handleFormChange("detay", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formAdres">
        <Form.Label>Adres</Form.Label>
        <Form.Control
          type="text"
          placeholder="Adres"
          value={formValues.adres}
          onChange={(e) => handleFormChange("adres", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formFiyat">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control
          type="number"
          placeholder="Fiyat"
          value={formValues.fiyat}
          onChange={(e) => handleFormChange("fiyat", e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default UrunFormContent;
