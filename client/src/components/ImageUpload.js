import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedImage = acceptedFiles[0];
    setImage(selectedImage);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Tüm resim türlerini kabul et
    maxFiles: 1, // Bir dosya sınırlama
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Resmi sürükleyip bırakın veya tıklayarak seçin.</p>
      </div>
      {image && (
        <div style={imagePreviewStyles}>
          <p>Yüklenen Resim:</p>
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const imagePreviewStyles = {
  marginTop: "20px",
};

export default ImageUpload;
