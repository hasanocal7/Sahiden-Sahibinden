import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

function UserProduct() {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const response = await Axios.get('https://sahiden-sahibinden-production.up.railway.app/api/ads/userAds', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userProducts = response.data.ads;
        setUserProducts(userProducts);
      } catch (error) {
        console.error('Kullanıcı ürünleri alınamadı', error);
      }
    };

    fetchUserProducts();
  }, []); 

  const handleEdit = (productId) => {
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');

      await Axios.delete(`https://sahiden-sahibinden-production.up.railway.app/api/ads/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Ürün silme işlemi başarısız', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Ürünleriniz</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {userProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img src={product.image_url} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: {product.price}</p>
                  <button className="btn btn-primary" onClick={() => handleEdit(product.id)}>Düzenle</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Ürünü Sil</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProduct;
