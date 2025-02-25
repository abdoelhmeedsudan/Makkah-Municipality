import React from "react";
import { DgaCard } from "platformscode-new-react";

function ServicesSectionCard({ cards }) {
  return (
    <div className="flex gap-[16px] md:-translate-x-[calc(100%/4-16px+(16px/4))] xl:-translate-x-[calc(100%/4-16px+(16px/4))/2]">
      {cards.map((card, i) => (
        <DgaCard
          key={i.toString()}
          cardTitle={`عنوان البطاقة ${card}`}
          description={`وصف البطاقة رقم ${card}`}
          primaryActionLabel="إجراء"
          secondaryActionLabel="تفاصيل"
        />
      ))}
    </div>
  );
}

export default ServicesSectionCard;
