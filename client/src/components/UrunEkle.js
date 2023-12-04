import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/UrunEkle.css";
import UrunFormModal from "./UrunFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCar, faLaptopMedical } from "@fortawesome/free-solid-svg-icons";

const UrunEkle = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setShowModal(true);
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory("");
  };

  return (
    <>
      <div className="urunEkle">
        <a id="emlak" href="#" onClick={() => handleCategoryClick("Emlak")}>
          <FontAwesomeIcon icon={faHouse} />
          Emlak
        </a>

        <a id="vasita" href="#" onClick={() => handleCategoryClick("Vasıta")}>
          <FontAwesomeIcon icon={faCar} />
          Vasıta
        </a>

        <a
          id="elektronik"
          href="#"
          onClick={() => handleCategoryClick("Elektronik")}
        >
          <FontAwesomeIcon icon={faLaptopMedical} />
          Elektronik
        </a>
      </div>

      <UrunFormModal
        show={showModal}
        category={selectedCategory}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default UrunEkle;
