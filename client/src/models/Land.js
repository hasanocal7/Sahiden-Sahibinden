import React, { useState, useEffect } from "react";
import axios from "axios";

function Land() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahiden-sahibinden-production.up.railway.app/api/ads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setData(response.data);
          setLoading(false);
        } else {
          setError("API yanıtı beklenen dizi yapısında değil.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Veri alınamadı. Lütfen daha sonra tekrar deneyin.");
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div className="container">Veri yükleniyor...</div>;
  }

  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="container">
      <ul>
        {data.map((product) => (
          <div key={product.id}>
            <b>Başlık: </b>
            {product.title}
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Land;
