import React from "react";
import { DgaCarousel, DgaCarouselItem, DgaCard } from "platformscode-new-react";
import videoSource from "../../assets/videos/1.mp4";

function Slider() {
  return (
    <section className="mt-0 bg-[#F9FAFB]">
      <div className="relative h-[491px]">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* عنصر التدرج الذي يغطي كامل الحاوية */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(65.28deg, rgba(20, 87, 58, 0) -24.53%, #1B8354 62.51%)'
          }}
        >
          {/* المحتوى الذي تود عرضه فوق التدرج */}
          <div className="relative flex gap-[16px] md:-translate-x-[calc(100%/4-16px+(16px/4))] xl:-translate-x-[calc(100%/4-16px+(16px/4))/2]">
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
