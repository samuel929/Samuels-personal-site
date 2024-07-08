import { useEffect, useRef } from "react";

function AdComponent() {
  const adRef = useRef(null);
  useEffect(() => {
    if (adRef.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);
  return (
    <div className='w-full mx-auto overflow-hidden'>
      <div className='relative' style={{ paddingTop: "100%" }}>
        <ins
          ref={adRef}
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
