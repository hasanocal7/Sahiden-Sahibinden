import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";

function ParentComponent() {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <h1>Parent Component</h1>
      {/* setPhotos fonksiyonunu PhotoUpload bileşenine iletiyoruz */}
      <PhotoUpload photos={photos} setPhotos={setPhotos} />
    </div>
  );
}

export default ParentComponent;
