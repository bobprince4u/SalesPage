import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//pl28125963.effectivegatecpm.com/74/57/60/745760b898f7edaf2d3bd43824740c57.js";
    script.async = true;

    const container = document.getElementById("adsterra-container");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div
      id="adsterra-container"
      style={{
        margin: "40px 0",
        textAlign: "center",
      }}
    ></div>
  );
};

export default AdsterraAd;
