import { useEffect } from "react";

const NativeAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl28126322.effectivegatecpm.com/bc4e72841afc30cbf846f4a4a06a4901/invoke.js";

    const container = document.getElementById(
      "container-bc4e72841afc30cbf846f4a4a06a4901"
    );
    if (container) container.appendChild(script);
  }, []);

  return (
    <div
      id="container-bc4e72841afc30cbf846f4a4a06a4901"
      style={{ textAlign: "center", margin: "40px 0" }}
    ></div>
  );
};

export default NativeAd;
