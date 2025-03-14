import { useState } from "react";
import vaultData from "../PackageData";
import VaultSelector from "../Utils/VaultSelector";
import { Icon } from "@iconify/react/dist/iconify.js";

import FadeUpAnimation from "../Animations/FadeUpAnimation";

const vaults = ["Spark", "Ignite", "Surge", "Titan", "Supreme"];

function Packages() {
  const [selectedMode, setSelectedMode] = useState(Object.keys(vaultData)[0]);

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  return (
    <section className="packages-section" id="packages-section">
      <div className="container max-width">
        <div className="header-container">
          <header>
            <FadeUpAnimation>
              <h5>
                OUR <span>PACKAGES</span>
              </h5>
              <h2>Choose your advantage</h2>
            </FadeUpAnimation>
          </header>
          <FadeUpAnimation>
            <VaultSelector
              vaultData={vaultData}
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
            />
          </FadeUpAnimation>
        </div>

        <FadeUpAnimation>
          <div className="packages--wrapper">
            {vaults.map((vault) => {
              const vaultInfo = vaultData[selectedMode][vault];
              const vaultClass = `${vault.toLowerCase()}-package`; // Example: spark-package, ignite-package

              return (
                <article key={vault} className={`package--item ${vaultClass}`}>
                  <div className="vault-description">
                    <span className="icon">
                      <Icon icon={vaultInfo.icon} width="24" height="24" />
                    </span>
                    <h4>{vault} Vault</h4>
                    <p className="vault-slogan">{vaultInfo.slogan}</p>
                  </div>

                  <div className="vault-package--list">
                    <h4 className="price">{vaultInfo.price}</h4>
                    <p className="vault-content">{vaultInfo.description}</p>

                    <div className="vault--values">
                      <ul>
                        <li>
                          Multiplier: <span>{vaultInfo.multiplier}</span>
                        </li>
                        <li>
                          Estimated Wallets: <span>{vaultInfo.wallets}</span>
                        </li>
                        <li>
                          Estimated Tx per Minute:{" "}
                          <span>{vaultInfo.txMin}</span>
                        </li>
                      </ul>

                      <a href="https://t.me/VolumeVaultBot">
                        <button className="btn cta--btn">
                          Get {vault.toLowerCase()} vault{" "}
                          <span>
                            <Icon
                              icon="ri:arrow-right-up-line"
                              className="arrow-icon"
                            />
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  );
}

export default Packages;
