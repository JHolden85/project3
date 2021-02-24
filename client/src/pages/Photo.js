import React, { useState } from "react";
import ImageUploader from "react-images-upload";
const fileReader = new FileReader();

export default function PhotoComponent() {
  const [photo, setPhoto] = useState([]);
  const [photoPreview, setPhotoPreview] = useState({ url: "" });

  const onDrop = (picture) => {
    const blob = new Blob(picture);
    fileReader.readAsDataURL(blob);
    fileReader.addEventListener("load", function () {
      console.log(fileReader.result);
      setPhotoPreview({ url: fileReader.result });
    });
    setPhoto({ blob });
  };

  const handleSubmit = () => {
    fileReader.readAsBinaryString(photo.blob);
  };

  return (
    <>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <h1>PREVIEW</h1>
      {photoPreview.url && <img src={photoPreview.url} alt="preview" />}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
