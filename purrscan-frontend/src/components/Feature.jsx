import "../styles/Feature.css";

import background from "../assets/images/kotaknya4.svg";
import cat from "../assets/images/kucing-kupu.svg";

function Feature() {
  return (
    <section className="feature">
      <div className="feature-wrapper">
        <img src={background} alt="" className="feature-bg" />

        <div className="feature-overlay">
          <div className="feature-top">
            <img src={cat} alt="Cat" className="feature-cat" />

            <div className="feature-text">
              <h2>
                We more than just detection, we help you understand your cat's
                health.
              </h2>

              <p>
                Designed to help cat owners recognize common skin diseases
                quickly, understand the condition, and take the appropriate next
                steps.
              </p>
            </div>
          </div>

          <div className="feature-stats">
            <div className="stat">
              <h3>95.8%</h3>
              <span>Accuracy</span>
            </div>

            <div className="stat">
              <h3>8</h3>
              <span>Transformations</span>
            </div>

            <div className="stat">
              <h3>4</h3>
              <span>Disease Class</span>
            </div>

            <div className="stat">
              <h3>EfficientNet-B0</h3>
              <span>CNN Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
