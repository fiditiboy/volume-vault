import React from "react";

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="max-width container">
        <header>
          <h6>
            Why Your Project Needs <span>VolumeVault</span>
          </h6>
          <h2>Give your token the edge it deserves</h2>
        </header>

        <main className="bento-grid--container">
          <article>
            <div className="content-container content--1">
              <img src="" alt="" />
            </div>
            <div className="content-container content--2">
              <div className="text-content">
                <h3>Unmatched Speed – Results in Record Time</h3>
                <p>
                  Don’t waste months waiting for growth. With VolumeVault,
                  results are swift, driving your project forward faster than
                  you ever thought possible
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className="content-container content--3">
              <div className="text-content">
                <h3>
                  Tailored to Top Chains – Built for Solana, BNB, and Base
                </h3>
                <p>
                  No generic solutions here. VolumeVault is specifically
                  engineered for Solana, Sui, and Base projects, ensuring
                  seamless execution and maximum impact.
                </p>
              </div>

              <div className="img-content">
                <img src="" alt="" />
              </div>
            </div>

            <div className="content-container content--4">
              <div className="sub__content-container sub__content--1">
                <div className="text-content">
                  <h3>Drive FOMO – Create Urgency and Excitement</h3>
                  <p>
                    Nothing drives traders like fear of missing out. Our volume
                    boosts spark market buzz, turning your project into a
                    must-have token.
                  </p>
                </div>
              </div>
              <div className="sub__content-container sub__content--2">
                <div className="text-content">
                  <h3>Exclusive Support – Your Success, Our Priority</h3>
                  <p>
                    When you work with VolumeVault, you gain access to an elite
                    team dedicated to your success. We’re with you every step of
                    the way.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="content-container content--5">
              <div className="text-content">
                <h3>Scalable Solutions – Grow Without Limits</h3>
                <p>
                  From ambitious startups to market leaders, VolumeVault scales
                  with your goals. Start where you are and grow without
                  restrictions
                </p>
              </div>
              <div className="img-content">
                <img src="" alt="" />
              </div>
            </div>

            <div className="content-container content--6">
              <img src="" alt="" />
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}

export default FeaturesSection;
