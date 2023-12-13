import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../style/PhotoUpload.css"; 

const PhotoUpload = ({ photos, setPhotos }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [deletedIndex, setDeletedIndex] = useState(null); // Silinen görselin index'ini takip etmek için

  const onDrop = (acceptedFiles) => {
    // Dosya türü ve boyut kontrolü yapılıyor
    const filteredFiles = acceptedFiles.filter((file) => {
      const isImage =
        file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png";
      const isSizeValid = file.size <= 20 * 1024 * 1024; // 20 MB'a kadar olan dosyalar
  
      if (!isImage) {
        console.log("Geçersiz dosya türü:", file.type);
        setErrorMessage("Yalnızca jpg, jpeg ve png uzantılı dosyaları kabul ediyoruz.");
      } else if (!isSizeValid) {
        setErrorMessage("Dosya boyutu 20 MB'ı geçemez.");
      } else {
        setErrorMessage(""); // Hata yoksa hata mesajını temizle
      }
  
      return isImage && isSizeValid;
    });

    if (deletedIndex !== null) {
      // Eğer bir görsel silinmişse, silinenin yerine yeni görseli ekle
      const updatedPhotos = [...photos];
      updatedPhotos[deletedIndex] = filteredFiles[0];
      setPhotos(updatedPhotos);
      setDeletedIndex(null); // Silinen index'i temizle
    } else {
      // Yeni görsel ekleyin
      setPhotos([...photos, ...filteredFiles]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 20 * 1024 * 1024, // 20 MB'a kadar olan dosyaları kabul et
    accept: "image/jpeg, image/jpg, image/png", // Sadece belirtilen uzantılardaki dosyaları kabul et
  });

  const deletePhoto = (index) => {
    // Görseli sil
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
    setDeletedIndex(index); // Silinen görselin index'ini güncelle
  };

  return (
    <div className="mb-3 photo-upload-container">
      <label className="form-label">Ürün Fotoğrafları</label>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <p>
          Fotoğrafları sürükleyip bırakın veya buraya tıklayarak dosya seçin.
        </p>
        <p style={{ fontSize: '12px', color: '#888' }}>
          (Maksimum dosya boyutu: 20 MB, sadece jpg, jpeg ve png uzantılı dosyalar)
        </p>
        {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>}
      </div>
      <div className="uploaded-photos">
        <h4>Yüklenen Fotoğraflar:</h4>
        <ul>
          {photos.map((photo, index) => (
            <li key={index}>
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded ${index}`}
                className="uploaded-photo"
              />
              <button onClick={() => deletePhoto(index)} className="delete-button">
                <span role="img" aria-label="Trash Can">
                  🗑️
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoUpload;
