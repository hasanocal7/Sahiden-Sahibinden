import "../style/AddProduct.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoUpload from "./PhotoUpload";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [roomCount, setRoomCount] = useState("");
  const [squareMeters, setSquareMeters] = useState("");
  const [landSquareMeters, setLanSquareMeters] = useState("");
  const [balconyCount, setBalconyCount] = useState("");
  const [buildingStatus, setBuildingStatus] = useState("");
  const [adaNumber, setAdaNumber] = useState("");
  const [parcelNumber, setParcelNumber] = useState("");
  const [squareMetersGross, setSquareMetersGross] = useState("");

  const [ram, setRam] = useState("");
  const [cpu, setCpu] = useState("");
  const [hdd, setHdd] = useState("");
  const [displayCard, setDisplayCard] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [resolution, setResolution] = useState("");
  const [situation, setSituation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert("Lütfen bir kategori seçin.");
      return;
    }
    console.log("Ürün eklendi:", {
      title,
      detail,
      address,
      price,
      category,
      roomCount,
      squareMeters,
      landSquareMeters,
      balconyCount,
      buildingStatus,
      adaNumber,
      parcelNumber,
      squareMetersGross,
      ram,
      cpu,
      hdd,
      displayCard,
      screenSize,
      resolution,
      situation,
    });

    console.log("Yüklenen Fotoğraflar:", photos);
    setPhotos([]);

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDetail("");
    setAddress("");
    setPrice("");
    setCategory("");
    setSubCategory("");
    setSubCategories([]);
    setRoomCount("");
    setSquareMeters("");
    setBalconyCount("");
    setBuildingStatus("");
    setAdaNumber("");
    setParcelNumber("");
    setLanSquareMeters("");
    setSquareMetersGross("");
    setRam("");
    setCpu("");
    setHdd("");
    setDisplayCard("");
    setScreenSize("");
    setResolution("");
    setSituation("");

    setPhotos([]);
  };

  const [photos, setPhotos] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory("");

    switch (selectedCategory) {
      case "emlak":
        setSubCategories(["Konut", "Arsa"]);
        break;
      case "vasita":
        setSubCategories(["Araba", "Motorsiklet"]);
        break;
      case "elektronik":
        setSubCategories(["Bilgisayar", "Telefon"]);
        break;
      default:
        setSubCategories([]);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h2 className="mb-4 text-center">Ücretsiz Ürün Yükle</h2>
          <form onSubmit={handleSubmit}>
            <PhotoUpload photos={photos} setPhotos={setPhotos} />

            <div className="mb-2">
              <label htmlFor="title" className="form-label">
                Ürün Başlığı:
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="detail" className="form-label">
                Ürün Detayı:
              </label>
              <input
                type="text"
                id="detail"
                className="form-control"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Adres:
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Fiyat:
              </label>
              <input
                type="number"
                id="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Kategori:
              </label>
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Kategori Seçiniz:
                </option>
                <option value="emlak">Emlak</option>
                <option value="vasita">Vasıta</option>
                <option value="elektronik">Elektronik</option>
              </select>
            </div>

            {category === "vasita" && (
              <div className="mb-3">
                <label htmlFor="subCategory" className="form-label">
                  Alt Kategori:
                </label>
                <select
                  id="subCategory"
                  className="form-select"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Alt Kategori Seçiniz:
                  </option>
                  <option value="Araba">Araba</option>
                  <option value="Motorsiklet">Motorsiklet</option>
                </select>
              </div>
            )}

            {category === "elektronik" && (
              <div>
                <div className="mb-3">
                  <label htmlFor="subCategory" className="form-label">
                    Alt Kategori:
                  </label>
                  <select
                    id="subCategory"
                    className="form-select"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Alt Kategori Seçiniz:
                    </option>
                    <option value="Bilgisayar">Bilgisayar</option>
                    <option value="Telefon">Telefon</option>
                  </select>
                </div>

                {subCategory === "Bilgisayar" && (
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="ram" className="form-label">
                        RAM:
                      </label>
                      <select
                        id="ram"
                        className="form-select"
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          RAM Seçiniz:
                        </option>
                        <option value="2GB">2 GB</option>
                        <option value="4GB">4 GB</option>
                        <option value="8GB">8 GB</option>
                        <option value="16GB">16 GB</option>
                        <option value="32GB">32 GB</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cpu" className="form-label">
                        İşlemci:
                      </label>
                      <select
                        id="cpu"
                        className="form-select"
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          İşlemci Seçiniz:
                        </option>
                        <option value="INTEL">INTEL</option>
                        <option value="AMD">AMD</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="hdd" className="form-label">
                        Harddisk
                      </label>
                      <select
                        id="hdd"
                        className="form-select"
                        value={hdd}
                        onChange={(e) => setHdd(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Hard Disk Seçiniz:
                        </option>
                        <option value="300 GB">300 GB</option>
                        <option value="500 GB">500 GB</option>
                        <option value="1 TB">1 TB</option>
                        <option value="2 TB">2 TB</option>
                        <option value="8 TB">8 TB</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="displayCard" className="form-label">
                        Ekran Kartı
                      </label>
                      <select
                        id="displayCard"
                        className="form-select"
                        value={displayCard}
                        onChange={(e) => setDisplayCard(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Ekran Kartı Seçiniz:
                        </option>
                        <option value="MSI GeForce RTX 4070 Ti">
                          MSI GeForce RTX 4070 Ti
                        </option>
                        <option value="MSI GeForce RTX 4070">
                          MSI GeForce RTX 4070
                        </option>
                        <option value="MSI GeForce RTX 4060 Ti">
                          MSI GeForce RTX 4060 Ti
                        </option>
                        <option value="MSI GeForce RTX 4060">
                          MSI GeForce RTX 4060
                        </option>
                        <option value="MSI GeForce RTX 3070">
                          MSI GeForce RTX 3070
                        </option>
                        <option value="MSI GeForce RTX 3060 Ti">
                          MSI GeForce RTX 3060 Ti
                        </option>
                        <option value="MSI GeForce RTX 3060">
                          MSI GeForce RTX 3060
                        </option>
                        <option value="MSI GeForce RTX 3050">
                          MSI GeForce RTX 3050
                        </option>
                        <option value="MSI GeForce GTX 1650">
                          MSI GeForce GTX 1650
                        </option>
                        <option value="MSI GeForce GTX 1630">
                          MSI GeForce GTX 1630
                        </option>
                        <option value="MSI GeForce GTX 1050 Ti">
                          MSI GeForce GTX 1050 Ti
                        </option>
                        <option value="MSI GeForce GT 1030">
                          MSI GeForce GT 1030
                        </option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="resolution" className="form-label">
                        Çözünürlük
                      </label>
                      <select
                        id="resolution"
                        className="form-select"
                        value={resolution}
                        onChange={(e) => setResolution(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Çözünürlük Seçiniz:
                        </option>
                        <option value="4k">4k</option>
                        <option value="1080p">1080p</option>
                        <option value="720p">720p</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="situation" className="form-label">
                        Durumunu Seçiniz:
                      </label>
                      <select
                        id="situation"
                        className="form-select"
                        value={situation}
                        onChange={(e) => setSituation(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Durumu
                        </option>
                        <option value="Sıfır">Sıfır</option>
                        <option value="Kullanılabilir">Kullanılabilir</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {category === "emlak" && subCategories.length > 0 && (
              <>
                <div className="mb-3">
                  <label htmlFor="subCategory" className="form-label">
                    Alt Kategori:
                  </label>
                  <select
                    id="subCategory"
                    className="form-select"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Alt Kategori Seçiniz:
                    </option>
                    {subCategories.map((subCat) => (
                      <option key={subCat} value={subCat}>
                        {subCat}
                      </option>
                    ))}
                  </select>
                </div>

                {subCategory === "Konut" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="roomCount" className="form-label">
                        Oda Sayısı:
                      </label>
                      <select
                        id="roomCount"
                        className="form-select"
                        value={roomCount}
                        onChange={(e) => setRoomCount(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Oda Sayısı Seçiniz:
                        </option>
                        <option value="1+1">1+1</option>
                        <option value="2+1">2+1</option>
                        <option value="3+1">3+1</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="squareMeters" className="form-label">
                        Metrekaresi (m²):
                      </label>
                      <input
                        type="number"
                        id="squareMeters"
                        className="form-control"
                        value={squareMeters}
                        onChange={(e) => setSquareMeters(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="squareMetersGross" className="form-label">
                        Metrekare Brüt (m²):
                      </label>
                      <input
                        type="number"
                        id="squareMetersGross"
                        className="form-control"
                        value={squareMetersGross}
                        onChange={(e) => setSquareMetersGross(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="balconyCount" className="form-label">
                        Balkon Sayısı:
                      </label>
                      <select
                        id="balconyCount"
                        className="form-select"
                        value={balconyCount}
                        onChange={(e) => setBalconyCount(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Balkon Sayısı Seçiniz:
                        </option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 ve üzeri</option>
                      </select>
                    </div>
                  </>
                )}

                {subCategory === "Arsa" && (
                  <>
                    <div className="mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor="landSquareMeters"
                          className="form-label"
                        >
                          Metrekaresi (m²):
                        </label>
                        <input
                          type="number"
                          id="landSquareMeters"
                          className="form-control"
                          value={landSquareMeters}
                          onChange={(e) => setLanSquareMeters(e.target.value)}
                          required
                        />
                      </div>
                      <label htmlFor="buildingStatus" className="form-label">
                        İmar Durumu:
                      </label>
                      <select
                        id="buildingStatus"
                        className="form-select"
                        value={buildingStatus}
                        onChange={(e) => setBuildingStatus(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          İmar Durumu Seçiniz:
                        </option>
                        <option value="Ada">Ada</option>
                        <option value="Konut">Konut</option>
                        <option value="Tarla">Tarla</option>
                        <option value="Zeytinlik">Zeytinlik</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="adaNumber" className="form-label">
                        Ada Numarası:
                      </label>
                      <input
                        type="number"
                        id="adaNumber"
                        className="form-control"
                        value={adaNumber}
                        onChange={(e) => setAdaNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="parcelNumber" className="form-label">
                        Parsel Numarası:
                      </label>
                      <input
                        type="number"
                        id="parcelNumber"
                        className="form-control"
                        value={parcelNumber}
                        onChange={(e) => setParcelNumber(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
              </>
            )}

            <div className="d-flex justify-content-between mb-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Sıfırla
              </button>
              <button type="submit" className="btn urunYukleButton">
                Ürün Yükle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;