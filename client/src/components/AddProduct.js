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

      const response = await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/ads",
        updatedFormData,
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
                <option value="1+1">1+1</option>
                <option value="2+1">2+1</option>
                <option value="3+1">3+1</option>
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
                Balkon Sayısı:
              </label>
              <select
              
                id="balcony"
                name="balcony"
                className="form-select"
                value={formData.balcony}
                onChange={handleChange}
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
