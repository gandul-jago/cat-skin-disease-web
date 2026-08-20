import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Catrun from "../assets/images/cat-result.svg";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { result, image } = location.state || {};

  useEffect(() => {
    // Cek apakah halaman dibuka karena refresh
    const navigationEntry = performance.getEntriesByType("navigation")[0];

    if (navigationEntry?.type === "reload") {
      window.location.href = "/";
    }
  }, []);

  if (!result) {
    return null;
  }

  return (
    <div className="result-page">
      <div className="result-card">
        <button
          className="result-close"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ×
        </button>

        <div className="result-top">
          <img src={Catrun} alt="Cat illustration" className="cat-result" />

          <div className="result-intro">
            <h1>{result.prediction}</h1>
            <p>{result.description}</p>
          </div>
        </div>

        <div className="result-info">
          <div className="cat-info">
            <h3>Know more about your cat!</h3>

            {image && (
              <img
                src={image}
                alt="Uploaded cat"
                className="result-cat-image"
              />
            )}

            <div className="prediction-result">
              <span>Prediction</span>

              <h2>{result.prediction}</h2>

              <p>Confidence: {result.confidence}%</p>
            </div>
          </div>

          <div className="info-cards">
            <div className="info-card symptoms">
              <h4>Symptoms</h4>

              <ul>
                {result.symptoms?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card causes">
              <h4>Causes</h4>

              <ul>
                {result.causes?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card prevention">
              <h4>Prevention</h4>

              <ul>
                {result.prevention?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          className="scan-another-btn"
          onClick={() => {
            navigate("/");

            setTimeout(() => {
              document.getElementById("prediction")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 100);
          }}
        >
          Scan Another Photo
        </button>
      </div>
    </div>
  );
}

export default Result;
