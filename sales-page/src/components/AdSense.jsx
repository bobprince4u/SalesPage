// src/components/AdSense.js
import React, { useEffect } from "react";

const AdSense = ({ adSlot, adFormat = "auto", className = "" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client="ca-pub-5429302295241294"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;

{
  /*<!-- ken1 -->
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-5429302295241294"
      data-ad-slot="4625870242"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>*/
}
