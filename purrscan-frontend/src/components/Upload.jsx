import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Upload.css";

import NoteSvg from "../assets/images/Subtract.svg?react";
import UploadFrameSvg from "../assets/images/kotak-cam.svg?react";

function Upload() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Buka gallery / file explorer
  const handleTakePicture = () => {
    fileInputRef.current.click();
  };

  // Ketika gambar dipilih
  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      alert("File harus berupa JPG, JPEG, atau PNG.");
      event.target.value = "";
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();

        console.error("Backend error:", errorData);

        throw new Error(
          errorData.detail || `Request gagal (${response.status})`,
        );
      }

      const data = await response.json();

      console.log("Response API:", data);

      const imageUrl = URL.createObjectURL(file);

      navigate("/result", {
        state: {
          result: data,
          image: imageUrl,
        },
      });
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Gagal memproses gambar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="upload" id="prediction">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      {/* Judul Banner */}
      <div className="upload-title">
        <NoteSvg className="title-bg" aria-hidden="true" />

        <h2>
          Take Your Cat Picture
          <br />
          Right Here !
        </h2>
      </div>

      {/* Area Upload Frame */}
      <div className="upload-content">
        <div className="upload-area">
          <UploadFrameSvg className="upload-frame" aria-hidden="true" />
        </div>

        <button
          type="button"
          className="take-picture-btn"
          onClick={handleTakePicture}
          disabled={loading}
        >
          <span>{loading ? "Checking..." : "Take Picture"}</span>
        </button>
      </div>
    </section>
  );
}

export default Upload;
