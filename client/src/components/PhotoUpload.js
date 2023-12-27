import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../style/PhotoUpload.css";

const PhotoUpload = ({ image, setImage }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [deletedIndex, setDeletedIndex] = useState(null);

  const uploadPhotos = (updatedPhotos) => {
    setImage(updatedPhotos);
  };

  const onDrop = (acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter((file) => {
      const isImage =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      const isSizeValid = file.size <= 20 * 1024 * 1024;

      if (!isImage) {
        console.log("Geçersiz dosya türü:", file.type);
        setErrorMessage(
          "Yalnızca jpg, jpeg ve png uzantılı dosyaları kabul ediyoruz."
        );
      } else if (!isSizeValid) {
        setErrorMessage("Dosya boyutu 20 MB'ı geçemez.");
      } else {
        setErrorMessage("");
      }

      return isImage && isSizeValid;
    });

    if (deletedIndex !== null) {
      const updatedPhotos = [...image];
      updatedPhotos[deletedIndex] = filteredFiles[0];
      uploadPhotos(updatedPhotos);
      setDeletedIndex(null);
    } else {
      uploadPhotos([...image, ...filteredFiles]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 20 * 1024 * 1024,
    accept: "image/jpeg, image/jpg, image/png",
  });

  const deletePhoto = (index) => {
    const updatedPhotos = [...image];
    updatedPhotos.splice(index, 1);
    uploadPhotos(updatedPhotos);
    setDeletedIndex(index);
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
        <p style={{ fontSize: "12px", color: "#888" }}>
          (Maksimum dosya boyutu: 20 MB, sadece jpg, jpeg ve png uzantılı
          dosyalar)
        </p>
        {errorMessage && (
          <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
        )}
      </div>
      <div className="uploaded-photos">
        <h4>Yüklenen Fotoğraflar:</h4>
        <ul>
          {image.map((photo, index) => (
            <li key={index}>
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded ${index}`}
                className="uploaded-photo"
              />
              <button
                onClick={() => deletePhoto(index)}
                className="delete-button"
              >
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
