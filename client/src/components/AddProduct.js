import "../style/AddProduct.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoUpload from "./PhotoUpload";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const token = localStorage.getItem("token");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [province, setProvince] = useState("");
  const [distcrict, setDistcrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSub_Category] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const [roomCount, setRoomCount] = useState("");
  const [squareMeters, setSquareMeters] = useState("");
  const [landSquareMeters, setLanSquareMeters] = useState("");
  const [balconyCount, setBalconyCount] = useState("");
  
  const [zoning_status, setZoning_Status] = useState("");
  const [parcel_no, setParcel_No] = useState("");
  const [island_no, setIsland_No] = useState("");
  const [m2, set_M2] = useState("");

  const [ram, setRam] = useState("");
  const [cpu, setCpu] = useState("");
  const [hdd, setHdd] = useState("");
  const [displayCard, setDisplayCard] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [resolution, setResolution] = useState("");
  const [situation, setSituation] = useState("");

  const [carBrand, setCarBrand] = useState("");
  const [carSeries, setCarSeries] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carFuel, setCarFuel] = useState("");
  const [carGear, setCarGear] = useState("");
  const [carKM, setCarKM] = useState("");
  const [caseType, setCaseType] = useState("");

  const [motorBrand, setMotorBrand] = useState("");
  const [motorSeries, setMotorSeries] = useState("");
  const [motorYear, setMotorYear] = useState("");
  const [motorFuel, setMotorFuel] = useState("");
  const [motorGear, setMotorGear] = useState("");
  const [motorKM, setMotorKM] = useState("");
  const [motorType, setMotorType] = useState("");
  
  const [operating_system, setOperating_System] = useState("");
  const [internal_memory, setInternal_Memory] = useState("");
  const [phoneScreenSize, setPhoneScreenSize] = useState("");

  const [image, setImage] = useState([]);
  const notify = () => toast("Ürün Yüklendi");

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      alert("Lütfen bir kategori seçin.");
      return;
    }
    

    try {

      const formData = new FormData();
  
      
      formData.append("title", title);
      formData.append("description", description);
      formData.append("province", province);
      formData.append("distcrict", distcrict);
      formData.append("neighborhood", neighborhood);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("sub_category", sub_category);
      
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // await axios.post(
      //   "https://sahiden-sahibinden-production.up.railway.app/api/ads",
      //   formData,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      const HousingData = new FormData();

      HousingData.append("roomCount", roomCount);
      HousingData.append("squareMeters", squareMeters);
      HousingData.append("landSquareMeters", landSquareMeters);
      HousingData.append("balconyCount", balconyCount);
      HousingData.append("zoning_status", zoning_status);
      HousingData.append("parcel_no", parcel_no);
      HousingData.append("island_no", island_no);
      HousingData.append("m2", m2);
      
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        HousingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const ComputerData = new FormData();

      ComputerData.append("ram", ram);
      ComputerData.append("cpu", cpu);
      ComputerData.append("hdd", hdd);
      ComputerData.append("displayCard", displayCard);
      ComputerData.append("screenSize", screenSize);
      ComputerData.append("resolution", resolution);
      ComputerData.append("situation", situation);
      
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        ComputerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const CarData = new FormData();

      CarData.append("carBrand", carBrand);
      CarData.append("carSeries", carSeries);
      CarData.append("carYear", carYear);
      CarData.append("carFuel", carFuel);
      CarData.append("carGear", carGear);
      CarData.append("carKM", carKM);
      CarData.append("caseType", caseType);
      
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        CarData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

     const MotorData = new FormData();

      MotorData.append("motorBrand", motorBrand);
      MotorData.append("motorSeries", motorSeries);
      MotorData.append("motorYear", motorYear);
      MotorData.append("motorFuel", motorFuel);
      MotorData.append("motorGear", motorGear);
      MotorData.append("motorKM", motorKM);
      MotorData.append("motorType", motorType);
      
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        MotorData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const PhoneData = new FormData();

      PhoneData.append("operating_system", operating_system);
      PhoneData.append("internal_memory", internal_memory);
      PhoneData.append("phoneScreenSize", phoneScreenSize);
  
      await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        formData,
        PhoneData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const response = await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("Başarılı istek:", response.data);
      notify();
    } catch (error) {
      console.error("İstek hatası:", error);
    }
  
    console.log("Yüklenen Fotoğraflar:", image);
    setImage([]);
  
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setProvince("");
    setDistcrict("");
    setNeighborhood("");
    setPrice("");
    setCategory("");
    setSub_Category("");
    setSubCategories([]);
    setRoomCount("");
    setSquareMeters("");
    setBalconyCount("");
    setZoning_Status("");
    setParcel_No("");
    setIsland_No("");
    setLanSquareMeters("");
    set_M2("");
    setRam("");
    setCpu("");
    setHdd("");
    setDisplayCard("");
    setScreenSize("");
    setResolution("");
    setSituation("");
    setCarBrand("");
    setCarSeries("");
    setCarYear("");
    setCarFuel("");
    setCarGear("");
    setCarKM("");
    setCaseType("");

    setMotorBrand("");
    setMotorSeries("");
    setMotorYear("");
    setMotorFuel("");
    setMotorGear("");
    setMotorKM("");
    setMotorType("");

    setInternal_Memory("");
    setOperating_System("");
    setPhoneScreenSize("");

    setImage([]);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSub_Category("");

    switch (selectedCategory) {
      case "property":
        setSubCategories(["Konut", "Land"]);
        break;
      case "vehicle":
        setSubCategories(["Car", "Motorcycle"]);
        break;
      case "electronic":
        setSubCategories(["Computer", "Telephone"]);
        break;
      default:
        setSubCategories([]);
    }
  };

  return (
    <div className="addProductContainer container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h2 className="mb-4 text-center">Ücretsiz Ürün Yükle</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <PhotoUpload image ={image } setImage={setImage} />
            

            {/* Title */}
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
            {/* description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Ürün Detayı:
              </label>
              <textarea
                type="text"
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* price  */}
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

            {/* İl  */}
            <div className="mb-3">
              <label htmlFor="province" className="form-label">
                İl:
              </label>
              <textarea
                id="province"
                className="form-control"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
              />
            </div>

            {/* İlçe  */}
            <div className="mb-3">
              <label htmlFor="distcrict" className="form-label">
                İlçe:
              </label>
              <textarea
                id="distcrict"
                className="form-control"
                value={distcrict}
                onChange={(e) => setDistcrict(e.target.value)}
                required
              />
            </div>

            {/* neighborhood */}
            <div className="mb-3">
              <label htmlFor="neighborhood" className="form-label">
                Mahalle:
              </label>
              <textarea
                id="neighborhood"
                className="form-control"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
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
                <option value="property">Emlak</option>
                <option value="vehicle">Vasıta</option>
                <option value="electronic">Elektronik</option>
              </select>
            </div>

            {category === "vehicle" && (
              <div className="mb-3">
                <div className="mb-3">
                  <label htmlFor="sub_category" className="form-label">
                    Alt Kategori:
                  </label>
                  <select
                    id="sub_category"
                    className="form-select"
                    value={sub_category}
                    onChange={(e) => setSub_Category(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Alt Kategori Seçiniz:
                    </option>
                    <option value="Car">Araba</option>
                    <option value="Motorcycle">Motorsiklet</option>
                  </select>
                </div>

                {sub_category === "Car" && (
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="carBrand" className="form-label">
                        Marka
                      </label>
                      <select
                        id="carBrand"
                        className="form-select"
                        value={carBrand}
                        onChange={(e) => setCarBrand(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Marka Seçiniz:
                        </option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                      </select>
                    </div>
                    {carBrand === "Mercedes" && (
                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="carSeries" className="form-label">
                            Mercedes Seri Seçiniz:
                          </label>
                          <select
                            id="carSeries"
                            className="form-select"
                            value={carSeries}
                            onChange={(e) => setCarSeries(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Seri Seçiniz:
                            </option>
                            <option value="S-Series">S-Serisi</option>
                            <option value="C-Series">C-Serisi</option>
                            <option value="E-Series">E-Serisi</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="carYear" className="form-label">
                            Yıl Seçiniz:
                          </label>
                          <select
                            id="carYear"
                            className="form-select"
                            value={carYear}
                            onChange={(e) => setCarYear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yıl Seçiniz:
                            </option>
                            <option value="car2023">2023</option>
                            <option value="car2022">2022</option>
                            <option value="car2021">2021</option>
                            <option value="car2020">2020</option>
                            <option value="car2019">2019</option>
                            <option value="car2018">2018</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="carFuel" className="form-label">
                            Yakıt Tipi Seçiniz:
                          </label>
                          <select
                            id="carFuel"
                            className="form-select"
                            value={carFuel}
                            onChange={(e) => setCarFuel(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yakıt Tipi Seçiniz:
                            </option>
                            <option value="carGasoline">Benzin</option>
                            <option value="carDiesel">Diesel</option>
                            <option value="carElectricity">Electricity</option>
                            <option value="carLPG">LPG</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="carGear" className="form-label">
                            Vites Seçiniz:
                          </label>
                          <select
                            id="carGear"
                            className="form-select"
                            value={carGear}
                            onChange={(e) => setCarGear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Vites Seçiniz:
                            </option>
                            <option value="manualGear">Manuel</option>
                            <option value="autoGear">Otomatik</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="carKM" className="form-label">
                            KM Giriniz:
                          </label>
                          <input
                            type="number"
                            id="carKM"
                            className="form-control"
                            value={carKM}
                            onChange={(e) => setCarKM(e.target.value)}
                            required
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="caseType" className="form-label">
                            Kasa Tipi Seçiniz:
                          </label>
                          <select
                            id="caseType"
                            className="form-select"
                            value={caseType}
                            onChange={(e) => setCaseType(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Kasa Tipi Seçiniz:
                            </option>
                            <option value="carSedan">Sedan</option>
                            <option value="carHatchback">Hatchback</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {carBrand === "Audi" && (
                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="carSeries" className="form-label">
                            Audi Seri Seçiniz:
                          </label>
                          <select
                            id="carSeries"
                            className="form-select"
                            value={carSeries}
                            onChange={(e) => setCarSeries(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Seri Seçiniz:
                            </option>
                            <option value="A8">A8</option>
                            <option value="R8">R8</option>
                            <option value="90Serisi">90 Serisi</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="carYear" className="form-label">
                            Yıl Seçiniz:
                          </label>
                          <select
                            id="carYear"
                            className="form-select"
                            value={carSeries}
                            onChange={(e) => setCarYear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yıl Seçiniz:
                            </option>
                            <option value="car2023">2023</option>
                            <option value="car2022">2022</option>
                            <option value="car2021">2021</option>
                            <option value="car2020">2020</option>
                            <option value="car2019">2019</option>
                            <option value="car2018">2018</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="carFuel" className="form-label">
                            Yakıt Tipi Seçiniz:
                          </label>
                          <select
                            id="carFuel"
                            className="form-select"
                            value={carFuel}
                            onChange={(e) => setCarFuel(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yakıt Tipi Seçiniz:
                            </option>
                            <option value="carGasoline">Gasoline</option>
                            <option value="carDiesel">Dizel</option>
                            <option value="carElectricity">Elektrik</option>
                            <option value="carLPG">LPG</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="carGear" className="form-label">
                            Vites Seçiniz:
                          </label>
                          <select
                            id="carGear"
                            className="form-select"
                            value={carGear}
                            onChange={(e) => setCarGear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Vites Seçiniz:
                            </option>
                            <option value="manualGear">Manuel</option>
                            <option value="autoGear">Otomatik</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="carKM" className="form-label">
                            KM Giriniz:
                          </label>
                          <input
                            type="number"
                            id="carKM"
                            className="form-control"
                            value={carKM}
                            onChange={(e) => setCarKM(e.target.value)}
                            required
                          ></input>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="caseType" className="form-label">
                            Kasa Tipi Seçiniz:
                          </label>
                          <select
                            id="caseType"
                            className="form-select"
                            value={caseType}
                            onChange={(e) => setCaseType(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Kasa Tipi Seçiniz:
                            </option>
                            <option value="carSedan">Sedan</option>
                            <option value="carHatchback">Hatchback</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {sub_category === "Motorcycle" && (
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="motorBrand" className="form-label">
                        Marka
                      </label>
                      <select
                        id="motorBrand"
                        className="form-select"
                        value={motorBrand}
                        onChange={(e) => setMotorBrand(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Marka Seçiniz:
                        </option>
                        <option value="Honda">Honda</option>
                        <option value="Yamaha">Yamaha</option>
                      </select>
                    </div>

                    {motorBrand === "Honda" && (
                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="motorSeries" className="form-label">
                            Honda Seri Seçiniz:
                          </label>
                          <select
                            id="motorSeries"
                            className="form-select"
                            value={motorSeries}
                            onChange={(e) => setMotorSeries(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Honda Seri Seçiniz:
                            </option>
                            <option value="CBR650R">CBR650R</option>
                            <option value="CBR1000RR-RFirebladeSP">
                              CBR1000RR-R Fireblade SP
                            </option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorYear" className="form-label">
                            Yıl Seçiniz:
                          </label>
                          <select
                            id="motorYear"
                            className="form-select"
                            value={motorYear}
                            onChange={(e) => setMotorYear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yıl Seçiniz:
                            </option>
                            <option value="motor2023">2023</option>
                            <option value="motor2022">2022</option>
                            <option value="motor2021">2021</option>
                            <option value="motor2020">2020</option>
                            <option value="motor2019">2019</option>
                            <option value="motor2018">2018</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorFuel" className="form-label">
                            Yakıt Tipi Seçiniz:
                          </label>
                          <select
                            id="motorFuel"
                            className="form-select"
                            value={motorFuel}
                            onChange={(e) => setMotorFuel(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yakıt Tipi Seçiniz:
                            </option>
                            <option value="motorGasoline">Gasoline</option>
                            <option value="motorDiesel">Diesel</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="motorGear" className="form-label">
                            Vites Seçiniz:
                          </label>
                          <select
                            id="motorGear"
                            className="form-select"
                            value={motorGear}
                            onChange={(e) => setMotorGear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Vites Seçiniz:
                            </option>
                            <option value="manualTransmission">Manuel</option>
                            <option value="automaticTransmission">
                              Otomatik
                            </option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="motorKM" className="form-label">
                            KM Giriniz:
                          </label>
                          <input
                            type="number"
                            id="motorKM"
                            className="form-control"
                            value={motorKM}
                            onChange={(e) => setMotorKM(e.target.value)}
                            required
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorType" className="form-label">
                            Kasa Tipi Seçiniz:
                          </label>
                          <select
                            id="motorType"
                            className="form-select"
                            value={motorType}
                            onChange={(e) => setMotorType(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Kasa Tipi Seçiniz:
                            </option>
                            <option value="motorSupersport">
                              Süpersport Motosiklet
                            </option>
                            <option value="motorScooter">
                              Scooter Motosiklet
                            </option>
                          </select>
                        </div>
                      </div>
                    )}
                    {motorBrand === "Yamaha" && (
                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="carSeries" className="form-label">
                            Yamaha Seri Seçiniz:
                          </label>
                          <select
                            id="carSeries"
                            className="form-select"
                            value={carSeries}
                            onChange={(e) => setCarSeries(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yamaha Seri Seçiniz:
                            </option>
                            <option value="XSR900GP">XSR900 GP</option>
                            <option value="XSR900">XSR900</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorYear" className="form-label">
                            Yıl Seçiniz:
                          </label>
                          <select
                            id="motorYear"
                            className="form-select"
                            value={motorYear}
                            onChange={(e) => setMotorYear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yıl Seçiniz:
                            </option>
                            <option value="motor2023">2023</option>
                            <option value="motor2022">2022</option>
                            <option value="motor2021">2021</option>
                            <option value="motor2020">2020</option>
                            <option value="motor2019">2019</option>
                            <option value="motor2018">2018</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorFuel" className="form-label">
                            Yakıt Tipi Seçiniz:
                          </label>
                          <select
                            id="motorFuel"
                            className="form-select"
                            value={motorFuel}
                            onChange={(e) => setMotorFuel(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Yakıt Tipi Seçiniz:
                            </option>
                            <option value="motorGasoline">Gasoline</option>
                            <option value="motorDiesel">Diesel</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="motorGear" className="form-label">
                            Vites Seçiniz:
                          </label>
                          <select
                            id="motorGear"
                            className="form-select"
                            value={motorGear}
                            onChange={(e) => setMotorGear(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Vites Seçiniz:
                            </option>
                            <option value="manualTransmission">Manuel</option>
                            <option value="automaticTransmission">
                              Otomatik
                            </option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="motorKM" className="form-label">
                            KM Giriniz:
                          </label>
                          <input
                            type="number"
                            id="motorKM"
                            className="form-control"
                            value={motorKM}
                            onChange={(e) => setMotorKM(e.target.value)}
                            required
                          ></input>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="motorType" className="form-label">
                            Kasa Tipi Seçiniz:
                          </label>
                          <select
                            id="motorType"
                            className="form-select"
                            value={motorType}
                            onChange={(e) => setMotorType(e.target.value)}
                            required
                          >
                            <option value="" disabled>
                              Kasa Tipi Seçiniz:
                            </option>
                            <option value="motorSupersport">
                              Süpersport Motosiklet
                            </option>
                            <option value="motorScooter">
                              Scooter Motosiklet
                            </option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {category === "electronic" && (
              <div>
                <div className="mb-3">
                  <label htmlFor="sub_category" className="form-label">
                    Alt Kategori:
                  </label>
                  <select
                    id="sub_category"
                    className="form-select"
                    value={sub_category}
                    onChange={(e) => setSub_Category(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Alt Kategori Seçiniz:
                    </option>
                    <option value="Computer">Bilgisayar</option>
                    <option value="Telephone">Telefon</option>
                  </select>
                </div>

                {sub_category === "Computer" && (
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
                        <option value="300GB">300 GB</option>
                        <option value="500GB">500 GB</option>
                        <option value="1TB">1 TB</option>
                        <option value="2TB">2 TB</option>
                        <option value="8TB">8 TB</option>
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
                        <option value="GeForce_RTX_4070Ti">
                          GeForce RTX 4070 Ti
                        </option>
                        <option value="MSI_GeForce_RTX_4070">
                          GeForce RTX 4070
                        </option>
                        <option value="GeForce_RTX_4060Ti">
                          GeForce RTX 4060 Ti
                        </option>
                        <option value="GeForce_RTX_4060">
                          GeForce RTX 4060
                        </option>
                        <option value="GeForce_RTX_3070">
                          GeForce RTX 3070
                        </option>
                        <option value="GeForce_RTX_3060Ti">
                          GeForce RTX 3060 Ti
                        </option>
                        <option value="GeForce_RTX_3060">
                          GeForce RTX 3060
                        </option>
                        <option value="GeForce_RTX_3050">
                          GeForce RTX 3050
                        </option>
                        <option value="GeForce_GTX_1650">
                          GeForce GTX 1650
                        </option>
                        <option value="GeForce_GTX_1630">
                          GeForce GTX 1630
                        </option>
                        <option value="GeForce_GTX_1050Ti">
                          GeForce GTX 1050 Ti
                        </option>
                        <option value="GeForce_GT_030">GeForce GT 030</option>
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
                        <option value="Zero">Sıfır</option>
                        <option value="availableForUse">Kullanılabilir</option>
                      </select>
                    </div>
                  </div>
                )}

                {sub_category === "Telephone" && (
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="ram" className="form-label">
                        RAM Bellek:
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
                      <label htmlFor="operating_system" className="form-label">
                        İşletim Sistemi:
                      </label>
                      <select
                        id="operating_system"
                        className="form-select"
                        value={operating_system}
                        onChange={(e) => setOperating_System(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          İşletim Sistemi:
                        </option>
                        <option value="IOS">iOS</option>
                        <option value="Android">Android</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="internal_memory" className="form-label">
                        Dahilli Hafıza
                      </label>
                      <select
                        id="internal_memory"
                        className="form-select"
                        value={internal_memory}
                        onChange={(e) => setInternal_Memory(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Dahilli Hafıza
                        </option>
                        <option value="16GB">16 GB</option>
                        <option value="32GB">32 GB</option>
                        <option value="64GB">64 GB</option>
                        <option value="128GB">128 GB</option>
                        <option value="1TB">1 TB</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phoneScreenSize" className="form-label">
                        Ekran Boyutu
                      </label>
                      <select
                        id="phoneScreenSize"
                        className="form-select"
                        value={phoneScreenSize}
                        onChange={(e) => setPhoneScreenSize(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Ekran Boyutu Seçiniz:
                        </option>
                        <option value="4.7inc">4.7 inç</option>
                        <option value="6.1inc">6.1 inç</option>
                        <option value="6.7inc">6.7 inç</option>
                        <option value="6.8inc">6.8 inç</option>
                        <option value="6.9inc">6.9 inç</option>
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
                        <option value="Zero">Zero</option>
                        <option value="availableForUse">availableForUse</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {category === "property" && subCategories.length > 0 && (
              <>
                <div className="mb-3">
                  <label htmlFor="sub_category" className="form-label">
                    Alt Kategori:
                  </label>
                  <select
                    id="sub_category"
                    className="form-select"
                    value={sub_category}
                    onChange={(e) => setSub_Category(e.target.value)}
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

                {sub_category === "Konut" && (
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
                      <label htmlFor="m2" className="form-label">
                        Metrekare Brüt (m²):
                      </label>
                      <input
                        type="number"
                        id="m2"
                        className="form-control"
                        value={m2}
                        onChange={(e) => set_M2(e.target.value)}
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

                {sub_category === "Land" && (
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
                      <label htmlFor="zoning_status" className="form-label">
                        İmar Durumu:
                      </label>
                      <select
                        id="zoning_status"
                        className="form-select"
                        value={zoning_status}
                        onChange={(e) => setZoning_Status(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          İmar Durumu Seçiniz:
                        </option>
                        <option value="Ada">Ada</option>
                        <option value="Housing">Konut</option>
                        <option value="Tarla">Tarla</option>
                        <option value="Zeytinlik">Zeytinlik</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="parcel_no" className="form-label">
                        Ada Numarası:
                      </label>
                      <input
                        type="number"
                        id="parcel_no"
                        className="form-control"
                        value={parcel_no}
                        onChange={(e) => setParcel_No(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="island_no" className="form-label">
                        Parsel Numarası:
                      </label>
                      <input
                        type="number"
                        id="island_no"
                        className="form-control"
                        value={island_no}
                        onChange={(e) => setIsland_No(e.target.value)}
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

              <button
                type="submit"
                className="btn productUploadButton"
                onClick={notify}
              >
                Ürün Yükle
                <Toaster />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
