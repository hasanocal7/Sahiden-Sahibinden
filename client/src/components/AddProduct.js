import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../style/AddProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    province: "",
    distcrict: "",
    neighborhood: "",
    category: "",
    sub_category: "",

    room_count: "",
    m2_net: 0,
    m2_gross: 0,
    m2: 0,
    zoning_status: "",

    parcel_no: 0,
    island_no: 0,
    balcony: 0,

    series: "",
    year: "",
    model: "",
    fuel: "",
    brand:"",

    gear: "",
    km: "",
    case_type: "",
    traction: "",
    number_of_cyclinders: "",

    processor: "",
    ram: "",
    hdd: "",
    ssd: "",
    display_card: "",
    screen_size: "",
    resolution: "",

    operating_system: "",
    internal_memory: "",
    camera: "",
    front_camera: "",
    status: "",

    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = localStorage.getItem("token");

  const mapCategoryToApi = (category) => {
    const categoryMap = {
      Emlak: "Property",
      Vasıta: "Vehicle",
      Elektronik: "Electronics",
    };
    return categoryMap[category] || category;
  };

  const mapsub_categoryToApi = (sub_category) => {
    const sub_categoryMap = {
      Konut: "Housing",
      Arsa: "Land",
      Otomobil: "Car",
      Motosiklet: "Motorcycle",
      Bilgisayar: "Computer",
      Telefon: "Phone",
    };
    return sub_categoryMap[sub_category] || sub_category;
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedCategory = mapCategoryToApi(formData.category);
      const updatedsub_category = mapsub_categoryToApi(formData.sub_category);

      const updatedFormData = {
        ...formData,
        category: updatedCategory,

        sub_category: updatedsub_category,
      };

      const data = new FormData();

      for (const key in updatedFormData) {
        if (key === "images") {
          for (let i = 0; i < updatedFormData[key].length; i++) {
            data.append(`image`, updatedFormData[key][i]);
          }
        } else {
          data.append(key, updatedFormData[key]);
        }
      }
      console.log(data);
      const response = await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Başarılı istek:", response.data);
    } catch (error) {
      console.error("İstek hatası:", error);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      images: [],

      title: "",
      description: "",
      price: 0,
      province: "",
      distcrict: "",
      neighborhood: "",
      category: "",
      sub_category: "",
      room_count: "",
      m2_net: 0,
      m2_gross: 0,
      m2: 0,
      zoning_status: "",
      parcel_no: 0,
      island_no: 0,
      balcony: 0,

      series: "",
      year: "",
      model: "",
      fuel: "",
brand:"",
      gear: "",
      km: "",
      case_type: "",
      traction: "",
      number_of_cyclinders: "",

      processor: "",
      ram: "",
      hdd: "",
      ssd: "",
      display_card: "",
      screen_size: "",
      resolution: "",

      operating_system: "",
      internal_memory: "",
      camera: "",
      front_camera: "",
      status: "",
    });
  };

  const categoryOptions = ["Emlak", "Vasıta", "Elektronik"];

  const sub_category = {
    Emlak: ["Konut", "Arsa"],
    Vasıta: ["Otomobil", "Motosiklet"],
    Elektronik: ["Bilgisayar", "Telefon"],
  };

  const rendersub_categoryFields = () => {
    const { sub_category } = formData;

    const renderCarFields = () => {
      switch (formData.brand) {
        case "Audi":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                  <option value="A6">A6</option>
                  <option value="A7">A7</option>
                  <option value="A8">A8</option>
                  <option value="e-tron GT">e-tron GT</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="series" className="form-label">
                  Seri Seçiniz
                </label>
                <select
                  id="series"
                  name="series"
                  className="form-select"
                  value={formData.series}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seri Seçiniz:
                  </option>
                  <option value="A Serisi">A Serisi</option>
                  <option value="Audi RS e-tron GT">Audi RS e-tron GT</option>
                </select>
              </div>
            </>
          );
        case "Mercedes":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="AMG">AMG</option>
                  <option value="MAYBACH">MAYBACH</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="series" className="form-label">
                  Seri Seçiniz
                </label>
                <select
                  id="series"
                  name="series"
                  className="form-select"
                  value={formData.series}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seri Seçiniz:
                  </option>
                  <option value="S-Serisi">S-Serisi</option>
                  <option value="G-Serisi">G-Serisi</option>
                </select>
              </div>
            </>
          );
        default:
          return null;
      }
    };

    const renderMotorFields = () => {
      switch (formData.brand) {
        case "honda":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="Supersport">Supersport</option>
                  <option value="ADVENTURE">ADVENTURE</option>
                </select>
              </div>
            </>
          );
        case "kawasaki":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="Supersport">Supersport</option>
                  <option value="Naked">Naked</option>
                </select>
              </div>
            </>
          );
        default:
          return null;
      }
    };

    const renderPhoneFields = () => {
      switch (formData.brand) {
        case "apple":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="iPhone 11">iPhone 11</option>
                  <option value="iPhone 12">iPhone 12</option>
                  <option value="iPhone 13">iPhone 13</option>
                  <option value="iPhone 14">iPhone 14</option>
                  <option value="iPhone 15">iPhone 15</option>
                </select>
              </div>
            </>
          );

        case "xiaomi":
          return (
            <>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model Seçiniz
                </label>
                <select
                  id="model"
                  name="model"
                  className="form-select"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Model Seçiniz
                  </option>
                  <option value="redminot12">Redmi Not 12</option>
                  <option value="redminot13">Redmi Not 13</option>
                  <option value="redminot13pro">Redmi Not 13 Pro</option>
                  <option value="redminot14">Redmi Not 14</option>
                  <option value="redminot14pro">Redmi Not 14 Pro</option>
                  <option value="redminot15">Redmi Not 15</option>
                  <option value="redminot15pro">Redmi Not 15 Pro</option>
                </select>
              </div>
            </>
          );
      }
    };
    switch (sub_category) {
      case "Konut":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="room_count" className="form-label">
                Oda Sayısı:
              </label>
              <select
                id="room_count"
                name="room_count"
                className="form-select"
                value={formData.room_count}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Oda Sayısı Seçiniz:
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="m2_net" className="form-label">
                Metrekaresi (m²):
              </label>
              <input
                type="number"
                id="m2_net"
                name="m2_net"
                className="form-control"
                value={formData.m2_net}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="m2_gross" className="form-label">
                Metrekare Brüt (m²):
              </label>
              <input
                type="number"
                id="m2_gross"
                name="m2_gross"
                className="form-control"
                value={formData.m2_gross}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="balcony" className="form-label">
                Balkon Var Mı?
              </label>
              <select
                id="balcony"
                name="balcony"
                className="form-select"
                value={formData.balcony}
                onChange={handleChange}
                required
              >
                <option value="true">Evet</option>
                <option value="false">Hayır</option>
              </select>
            </div>
          </>
        );
      case "Arsa":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="m2" className="form-label">
                Metrekaresi (m²):
              </label>
              <input
                type="number"
                id="m2"
                name="m2"
                className="form-control"
                value={formData.m2}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zoning_status" className="form-label">
                İmar Durumu:
              </label>
              <select
                id="zoning_status"
                name="zoning_status"
                className="form-select"
                value={formData.zoning_status}
                onChange={handleChange}
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
              <label htmlFor="parcel_no" className="form-label">
                Ada Numarası:
              </label>
              <input
                type="number"
                id="parcel_no"
                name="parcel_no"
                className="form-control"
                value={formData.parcel_no}
                onChange={handleChange}
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
                name="island_no"
                className="form-control"
                value={formData.island_no}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      case "Otomobil":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Marka Seçiniz
              </label>
              <select
                id="brand"
                name="brand"
                className="form-select"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Marka Seçiniz:
                </option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>

                {renderCarFields()}
            <div className="mb-3">
              <label htmlFor="years" className="form-label">
                Yıl Giriniz:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="form-control"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fuel" className="form-label">
                Yakıt Tipi Seçiniz
              </label>
              <select
                id="fuel"
                name="fuel"
                className="form-select"
                value={formData.fuel}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Yakıt Tipi Seçiniz:
                </option>
                <option value="Benzin">Benzin</option>
                <option value="Dizel">Dizel</option>
                <option value="Elektrik">Elektrik</option>
                <option value="LPG">LPG</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="gear" className="form-label">
                Vites Tipi Seçiniz
              </label>
              <select
                id="gear"
                name="gear"
                className="form-select"
                value={formData.gear}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Vites Tipi Seçiniz
                </option>
                <option value="Manuel Vites">Manuel Vites</option>
                <option value="Otomatik Vites">Otomatik Vites</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="km" className="form-label">
                KM Giriniz:
              </label>
              <input
                type="number"
                id="km"
                name="km"
                className="form-control"
                value={formData.km}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="case_type" className="form-label">
                Kasa Tipi Seçiniz
              </label>
              <select
                id="case_type"
                name="case_type"
                className="form-select"
                value={formData.case_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Kasa Tipi Seçiniz:
                </option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="traction" className="form-label">
                Çekiş Türünü Seçiniz
              </label>
              <select
                id="traction"
                name="traction"
                className="form-select"
                value={formData.traction}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Çekiş Türünü Seçiniz:
                </option>
                <option value="Önden Çekişli">Önden Çekişli</option>
                <option value="Arkadan Çekişli">Arkadan Çekişli</option>
              </select>
            </div>
          </>
        );
      case "Motosiklet":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Marka Seçiniz
              </label>
              <select
                id="brand"
                name="brand"
                className="form-select"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Marka Seçiniz:
                </option>
                <option value="Honda">Honda</option>
                <option value="Kawasaki">Kawasaki</option>
              </select>
            </div>
            {renderMotorFields()}
            <div className="mb-3">
              <label htmlFor="km" className="form-label">
                KM Giriniz:
              </label>
              <input
                type="number"
                id="km"
                name="km"
                className="form-control"
                value={formData.km}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number_of_cyclinders" className="form-label">
                Silindir Sayısı Giriniz:
              </label>
              <input
                type="number"
                id="number_of_cyclinders"
                name="number_of_cyclinders"
                className="form-control"
                value={formData.number_of_cyclinders}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="years" className="form-label">
                Yıl Giriniz:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="form-control"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      case "Bilgisayar":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Marka Seçiniz
              </label>
              <select
                id="brand"
                name="brand"
                className="form-select"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Marka Seçiniz:
                </option>
                <option value="Acer">Acer</option>
                <option value="Asus">Asus</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="processor" className="form-label">
                İşlemci Seçiniz
              </label>
              <select
                id="processor"
                name="processor"
                className="form-select"
                value={formData.processor}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  İşlemci Seçiniz
                </option>
                <option value="AMD">AMD</option>
                <option value="INTEL">INTEL</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="ram" className="form-label">
                RAM Seçiniz
              </label>
              <select
                id="ram"
                name="ram"
                className="form-select"
                value={formData.ram}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  RAM Seçiniz:
                </option>
                <option value="2 GB">2 GB</option>
                <option value="4 GB">4 GB</option>
                <option value="8 GB">8 GB</option>
                <option value="16 GB">16 GB</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="hdd" className="form-label">
                Sabit Disk (HDD)
              </label>
              <select
                id="hdd"
                name="hdd"
                className="form-select"
                value={formData.balcony}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Sabit Disk (HDD):
                </option>
                <option value="Var">Var</option>
                <option value="Yok">Yok</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="ssd" className="form-label">
                SSD Seçiniz
              </label>
              <select
                id="ssd"
                name="ssd"
                className="form-select"
                value={formData.ssd}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  SSD Seçiniz:
                </option>
                <option value="128 GB">128 GB</option>
                <option value="240 GB">240 GB</option>
                <option value="480 GB">480 GB</option>
                <option value="500 GB">500 GB</option>
                <option value="1 TB">1 TB</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="display_card" className="form-label">
                Ekran Kartı Seçiniz
              </label>
              <select
                id="display_card"
                name="display_card"
                className="form-select"
                value={formData.display_card}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Ekran Kartı Seçiniz:
                </option>
                <option value="GeForce RTX 4070 Ti">GeForce RTX 4070 Ti</option>
                <option value="GeForce RTX 4070">GeForce RTX 4070</option>
                <option value="GeForce RTX 4060 Ti">GeForce RTX 4060 Ti</option>
                <option value="GeForce RTX 4060">GeForce RTX 4060</option>
                <option value="GeForce RTX 3070">GeForce RTX 3070</option>
                <option value="GeForce RTX 3060Ti">GeForce RTX 3060 Ti</option>
                <option value="GeForce RTX 3060">GeForce RTX 3060</option>
                <option value="GeForce RTX 3050">GeForce RTX 3050</option>
                <option value="GeForce GTX 1650">GeForce GTX 1650</option>
                <option value="GeForce GTX 1630">GeForce GTX 1630</option>
                <option value="GeForce GTX 1050Ti">GeForce GTX 1050 Ti</option>
                <option value="GeForce GT 030">GeForce GT 030</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="screen_size" className="form-label">
                Ekran Boyutu
              </label>
              <select
                id="screen_size"
                name="screen_size"
                className="form-select"
                value={formData.screen_size}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Ekran Boyutu Seçiniz:
                </option>
                <option value="13 inç">13 inç</option>
                <option value="15 inç">15 inç</option>
                <option value="17 inç">17 inç</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="resolution" className="form-label">
                Çözünürlük
              </label>
              <select
                id="resolution"
                name="resolution"
                className="form-select"
                value={formData.resolution}
                onChange={handleChange}
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
          </>
        );
      case "Telefon":
        return (
          <>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Marka Seçiniz
              </label>
              <select
                id="brand"
                name="brand"
                className="form-select"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Marka Seçiniz:
                </option>
                <option value="Apple">Apple</option>
                <option value="Xiaomi">Xiaomi</option>
              </select>
            </div>
            {renderPhoneFields()}
            <div className="mb-3">
              <label htmlFor="ram" className="form-label">
                RAM Seçiniz
              </label>
              <select
                id="ram"
                name="ram"
                className="form-select"
                value={formData.ram}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  RAM Seçiniz:
                </option>
                <option value="2 GB">2 GB</option>
                <option value="4 GB">4 GB</option>
                <option value="8 GB">8 GB</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="operating_system" className="form-label">
                İşletim Sistemi Seçiniz
              </label>
              <select
                id="operating_system"
                name="operating_system"
                className="form-select"
                value={formData.operating_system}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  İşletim Sistemi Seçiniz:
                </option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="internal_memory" className="form-label">
                Dahilli Hafıza Seçiniz
              </label>
              <select
                id="internal_memory"
                name="internal_memory"
                className="form-select"
                value={formData.internal_memory}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Dahilli Hafıza Seçiniz:
                </option>
                <option value="64 GB">64 GB</option>
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="camera" className="form-label">
                Kamera MP Seçiniz
              </label>
              <select
                id="camera"
                name="camera"
                className="form-select"
                value={formData.camera}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Kamera MP Seçiniz:
                </option>
                <option value="12 MP">12 MP</option>
                <option value="50 MP">50 MP</option>
                <option value="108 MP">108 MP</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="front_camera" className="form-label">
                Ön Kamera MP Seçiniz
              </label>
              <select
                id="front_camera"
                name="front_camera"
                className="form-select"
                value={formData.front_camera}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Ön Kamera MP Seçiniz:
                </option>
                <option value="12 MP">12 MP</option>
                <option value="16 MP">16 MP</option>
                <option value="40 MP">40 MP</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="screen_size" className="form-label">
                Ekran Boyutu Seçiniz
              </label>
              <select
                id="screen_size"
                name="screen_size"
                className="form-select"
                value={formData.screen_size}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Ekran Boyutu Seçiniz:
                </option>
                <option value="4.7 inç">4.7 inç</option>
                <option value="6.1 inç">6.1 inç</option>
                <option value="6.7 inç">6.7 inç</option>
                <option value="6.8 inç">6.8 inç</option>
                <option value="6.9 inç">6.9 inç</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Durumu
              </label>
              <select
                id="status"
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Durumu nedir
                </option>
                <option value="Sıfır">Sıfır</option>
                <option value="İkinci El">İkinci El</option>
              </select>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Yeni Ürün Ekle</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="images" className="form-label">
                      Görsel Seçiniz:
                    </label>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      className="form-control"
                      onChange={handleImageChange}
                      multiple
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Başlık:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Açıklama:
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Fiyat
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={Number(formData.price)}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="province" className="form-label">
                      İl
                    </label>
                    <input
                      className="form-control"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="distcrict" className="form-label">
                      İlçe
                    </label>
                    <input
                      className="form-control"
                      id="distcrict"
                      name="distcrict"
                      value={formData.distcrict}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="neighborhood" className="form-label">
                      Mahalle
                    </label>
                    <input
                      className="form-control"
                      id="neighborhood"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Kategori:
                    </label>
                    <select
                      className="form-select"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Kategori Seçiniz:
                      </option>
                      {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formData.category && (
                    <div className="mb-3">
                      <label htmlFor="sub_category" className="form-label">
                        Alt Kategori:
                      </label>
                      <select
                        className="form-select"
                        id="sub_category"
                        name="sub_category"
                        value={formData.sub_category}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Alt Kategori Seçiniz:
                        </option>
                        {sub_category[formData.category].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {rendersub_categoryFields()}

                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={resetForm}
                    >
                      Sıfırla
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Ürünü Yükle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
