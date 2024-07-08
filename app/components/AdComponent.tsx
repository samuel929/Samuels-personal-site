import { useEffect } from "react";

function AdComponent() {
  useEffect(() => {
    const handleLoad = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("Error loading AdSense ad:", error);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <div className='w-full mx-auto overflow-hidden'>
      <div className='relative' style={{ paddingTop: "100%" }}>
        <ins
          className='adsbygoogle absolute top-0 left-0 w-full h-full'
          style={{ display: "block" }}
          data-ad-client='ca-pub-3829158537608414'
          data-ad-slot='1857785535'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </div>
    </div>
  );
}

export default AdComponent;
