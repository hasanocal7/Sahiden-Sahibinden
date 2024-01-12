import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import "../style/UserProduct.css";

function UserProduct() {
  const [userProducts, setUserProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    title: "",
    title: "",
    description: "",
    price: "",
    address:"",

    series: "",
    year: "",
    model: "",
    fuel: "",
    brand:"",
    gear: "",
    km: "",
    case_type: "",
    traction: "",

  });

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await Axios.get(
          "https://sahiden-sahibinden-production.up.railway.app/api/ads/userAds",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userProducts = response.data.ads;
        console.log(userProducts);
        setUserProducts(userProducts);
      } catch (error) {
        console.error("Kullanıcı ürünleri alınamadı", error);
      }
    };

    fetchUserProducts();
  }, []);

  const handleEdit = (productId) => {
    setEditProductId(productId);
    const editedProductData = async ()=> {
        
    }

    setEditedProduct(editedProductData);
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("token");

      await Axios.patch(
        `https://sahiden-sahibinden-production.up.railway.app/api/ads/${editProductId}`,
        editedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editProductId ? editedProduct : product
        )
      );

      setEditProductId(null);
    } catch (error) {
      console.error("Ürün düzenleme işlemi başarısız", error);
    }
  };

  const handleCancelEdit = () => {
    setEditProductId(null);
    setEditedProduct({
      title: "",
      title: "",
      description: "",
      price: "",
      address:"",

      series: "",
      year: "",
      model: "",
      fuel: "",
      brand:"",
      gear: "",
      km: "",
      case_type: "",
      traction: "",
    });
  };

  const handleInputChange = (e, key) => {
    setEditedProduct({
      ...editedProduct,
      [key]: e.target.value,
    });
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await Axios.delete(
        `https://sahiden-sahibinden-production.up.railway.app/api/ads/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Ürün silme işlemi başarısız", error);
    }
  };



  return (
    <div>
      <Navbar />
      <div>
        <h2 className="userProductTitle">Ürünleriniz</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {userProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img
                  src={`https://sahiden-sahibinden-production.up.railway.app/uploads/${product.image[0]}`}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(product.id)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Ürünü Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editProductId && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ürünü Düzenle</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleInputChange}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Ürün Başlığı</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.title}
                    onChange={(e) => handleInputChange(e, "title")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ürün Açıklaması</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.description}
                    onChange={(e) => handleInputChange(e, "description")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ürün Fiyatı</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.price}
                    onChange={(e) => handleInputChange(e, "price")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ürün Adresi:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.address}
                    onChange={(e) => handleInputChange(e, "address")}
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">Serisi:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.series}
                    onChange={(e) => handleInputChange(e, "series")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Yılı:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.year}
                    onChange={(e) => handleInputChange(e, "year")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Modeli:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.model}
                    onChange={(e) => handleInputChange(e, "model")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Yakıt Tipi:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedProduct.fuel}
                    onChange={(e) => handleInputChange(e, "fuel")}
                  />
                </div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  İptal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveEdit}
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProduct;
