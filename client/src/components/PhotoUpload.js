import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../style/PhotoUpload.css"; 

const PhotoUpload = ({ photos, setPhotos }) => {
  const onDrop = (acceptedFiles) => {
    setPhotos([...photos, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoUpload;
