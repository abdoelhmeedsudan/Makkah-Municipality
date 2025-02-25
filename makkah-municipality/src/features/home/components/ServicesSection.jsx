import React, { useEffect, useState } from 'react';
import ServicesSectionCard from './ServicesSectionCard';

function ServicesSection() {
  const numberInView = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState([]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  useEffect(() => {
    const start = currentIndex * numberInView;
    const end = start + numberInView;
    setInView(cards.slice(start, end));
  }, [currentIndex]);

  const totalPages = Math.ceil(cards.length / numberInView);

  return (
    <section className="mt-[24px] bg-[#F9FAFB] py-[40px]">
      <h1 className="display-sm-bold text-[#161616] mb-4">خدمات الأكثر استخدمًا </h1>
      <p className="text-md-regular text-[#161616] mb-8">
      توفر أمانة العاصمة المقدسة خدمات متنوعة للجهات الحكومية و لخدمات الافراد ومنسوبي الأمانة
      </p>
      <ServicesSectionCard cards={inView} />
      
      <div className="mt-8 flex justify-center items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i.toString()}
            className={`w-4 h-4 rounded-full cursor-pointer ${i === currentIndex ? 'bg-green-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
