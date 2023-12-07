import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/UrunEkle.css";
import UrunFormModal from "./UrunFormModal";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ComputerIcon from "@mui/icons-material/Computer";

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
        <div className="kategoriCevre">Kategori Seçiniz</div>
        <div className="altKategori">
          <a id="emlak" href="#" onClick={() => handleCategoryClick("Emlak")}>
            <HomeIcon />
            Emlak
          </a>

          <a id="vasita" href="#" onClick={() => handleCategoryClick("Vasıta")}>
            <DirectionsCarFilledIcon />
            Vasıta
          </a>

          <a
            id="elektronik"
            href="#"
            onClick={() => handleCategoryClick("Elektronik")}
          >
            <ComputerIcon />
            Elektronik
          </a>
        </div>
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
