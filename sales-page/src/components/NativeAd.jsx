import { useEffect } from "react";

const NativeAd = () => {
  useEffect(() => {
    // Clear old content (in case of re-render)
    const container = document.getElementById(
      "container-bc4e72841afc30cbf846f4a4a06a4901"
    );
    if (!container) return;

    container.innerHTML = ""; // Clear previous script if any

    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl28126322.effectivegatecpm.com/bc4e72841afc30cbf846f4a4a06a4901/invoke.js";

    container.appendChild(script);
  }, []);

  return (
    <div
      id="container-bc4e72841afc30cbf846f4a4a06a4901"
      style={{ textAlign: "center", margin: "40px 0" }}
    ></div>
  );
};

export default NativeAd;
