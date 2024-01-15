import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import GoogleMaps from "./GoogleMaps";
import axios from "axios";
import "../style/Ad.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

function Ilan() {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setcategory]= useState("");
  const [address, setAddress] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [id, setID]=useState("");
  const [room_count, setroom_count] = useState("");
  const [m2_net, setm2_net] = useState(0);
  const [m2_gross, setm2_gross] = useState(0);
  const [m2, setM2] = useState(0);
  const [zoning_status, setzoning_status] = useState("");
  const [parcel_no, setparcel_no] = useState(0);
  const [island_no, setisland_no] = useState(0);
  const [balcony, setBalcony] = useState(false);

  const [series, setSeries] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [gear, setGear] = useState("");
  const [km, setKm] = useState("");
  const [case_type, setcase_type] = useState("");
  const [traction, setTraction] = useState("");
  const [number_of_cyclinders, setnumber_of_cyclinders] = useState("");

  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [hdd, setHdd] = useState("");
  const [ssd, setSsd] = useState("");
  const [display_card, setdisplay_card] = useState("");
  const [screen_size, setscreen_size] = useState("");
  const [resolution, setResolution] = useState("");
  const [operating_system, setoperating_system] = useState("");
  const [internal_memory, setinternal_memory] = useState("");
  const [camera, setCamera] = useState("");
  const [front_camera, setfront_camera] = useState("");
  const [status, setStatus] = useState("");

  const [image, setImage] = useState([]);
  const handleLocationSelect = (location) => {
    
  };


  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://sahiden-sahibinden-production.up.railway.app/api/ads/${slug}/detay`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const ad = response.data.ad;
        
        
        setTitle(ad.title);
        setID(ad.id);
        setImage(ad.image || []);
        setPrice(ad.price);
        setDescription(ad.description);
        setAddress(ad.address);
        setcreatedAt(ad.createdAt);
        setcategory(ad.category);
        setroom_count(ad.room_count);
        setm2_gross(ad.m2_gross);
        setm2_net(ad.m2_net);
        setM2(ad.m2);
        setzoning_status(ad.zoning_status);
        setparcel_no(ad.parcel_no);
        setisland_no(ad.island_no);
        setBalcony(ad.balcony);
        setSeries(ad.series);
        setBrand(ad.brand);
        setYear(ad.year);
        setModel(ad.model);
        setFuel(ad.fuel);
        setGear(ad.gear);
        setKm(ad.km);
        setcase_type(ad.case_type);
        setTraction(ad.traction);
        setnumber_of_cyclinders(ad.number_of_cyclinders);

        setProcessor(ad.processor);
        setRam(ad.ram);
        setHdd(ad.hdd);
        setSsd(ad.ssd);
        setdisplay_card(ad.display_card);
        setscreen_size(ad.screen_size);
        setResolution(ad.resolution);
        setoperating_system(ad.operating_system);
        setinternal_memory(ad.internal_memory);
        setCamera(ad.camera);
        setfront_camera(ad.front_camera);
        setStatus(ad.status);

      
      } catch (error) {
        console.error("Verileri alınırken hata oluştu:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="adContainer container mt-4">
        <h2 className="adTitle">{title}</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="fotograf text-light p-4">
            <Carousel>
              {image.map((name, index) => (
                <Carousel.Item key={index}>
                <div key={index} className="fotograf text-light p-4">
                  <img
                    className="smallImage"
                    src={`https://sahiden-sahibinden-production.up.railway.app/uploads/${name}`}
                    alt={`Ürün Fotoğrafı ${index + 1}`}
                  />
                </div>
                 </Carousel.Item>
              ))}
               </Carousel>
            </div>

          </div>
          <div className="col-md-6">
            <div className="rightSide p-4">
              <div className="">
                <hr />
                <p className="feature">
                  <b>Özellikler</b>
                </p>
                <p>
                  <b>İlan Tarihi: </b>
                  {createdAt.split("T")[0]}
                </p>
                <p>
                  <b>İlan Numarası: </b>
                  {id}
                </p>
                <p>
                  <b>Ürün Kategorisi: </b>
                  {category}
                </p>
                <p>
                  <b>Fiyat: </b>
                  {price}
                </p>
                <p>
                  {" "}
                  <b>Adres: </b>
                  {address}
                </p>

                {room_count && (
                  <div>
                    <p>
                      <b>Oda Sayısı: </b>
                      {room_count}
                    </p>
                    <p>
                      <b>Metrekare: </b>
                      {m2_net}
                    </p>
                    <p>
                      <b>Metrekare Brüt: </b>
                      {m2_gross}
                    </p>
                    <p>
                      <b>Balkon Var Mı: </b>
                      {balcony ? "Evet" : "Hayır"}
                    </p>
                  </div>
                )}

                {parcel_no && (
                  <div>
                    <p>
                      <b>Parsel Numarası: </b>
                      {parcel_no}
                    </p>
                    <p>
                      <b>Ada Numarası: </b>
                      {island_no}
                    </p>
                    <p>
                      <b>Metrekare: </b>
                      {m2}
                    </p>
                    <p>
                      <b>İmar Durumu: </b> {zoning_status}
                    </p>
                  </div>
                )}

                {case_type && (
                  <div>
                    <p><b>Marka: </b>{brand}</p>

                    <p>
                      <b>Serisi: </b> {series}
                    </p>
                    <p>
                      <b>Modeli: </b> {model}
                    </p>
                    <p>
                      <b>Yıl: </b> {year}
                    </p>
                   
                    <p>
                      <b>Yakıt Tipi: </b> {fuel}
                    </p>
                    <p>
                      <b>Vites: </b> {gear}
                    </p>
                    <p>
                      <b>KM: </b> {km}
                    </p>
                    <p>
                      <b>Kasa Tipi: </b> {case_type}
                    </p>
                    <p>
                      <b>Çekiş: </b> {traction}
                    </p>
                  </div>
                )}

                {number_of_cyclinders && (
                  <div>
                    <p>
                      <b>Yıl: </b> {year}
                    </p>
                    <p><b>Marka: </b>{brand}</p>
                    <p>
                      <b>Modeli: </b> {model}
                    </p>
                    <p>
                      <b>KM: </b> {km}
                    </p>
                    <p>
                      <b>Silindir Sayısı: </b>
                      {number_of_cyclinders}
                    </p>
                  </div>
                )}

                {display_card && (
                  <div>
                    <p>
                      <b>İşlemci: </b> {processor}
                    </p>
                    <p>
                      {" "}
                      <b>RAM: </b> {ram}
                    </p>
                    <p>
                      {" "}
                      <b>HDD: </b> {hdd}
                    </p>
                    <p>
                      <b>SSD: </b> {ssd}
                    </p>
                    <p>
                      {" "}
                      <b>Ekran Kartı: </b> {display_card}
                    </p>
                    <p>
                      <b>Ekran Boyutu: </b> {screen_size}
                    </p>
                    <p>
                      {" "}
                      <b>Çözünürlük: </b> {resolution}
                    </p>
                  </div>
                )}

                {operating_system && (
                  <div>
                    <p>
                      <b>İşletim Sistemi: </b> {operating_system}
                    </p>
                    <p>
                      {" "}
                      <b>Dahilli Bellek: </b> {internal_memory}
                    </p>
                    <p>
                      <b>Kamera: </b> {camera}
                    </p>
                    <p>
                      <b>Ön Kamera: </b> {front_camera}
                    </p>
                    <p>
                      <b>Durumu: </b> {status}
                    </p>
                  </div>
                )}

                <hr />
                <p className="productDescription">
                  <b>Ürün Açıklaması</b>
                </p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="slider text-light p-4">
              Slider
              <hr />
              <div className="icon mt-4">
                <GoogleMaps address={address} onSelect={handleLocationSelect} />
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
    </>
  );
}

export default Ilan;
