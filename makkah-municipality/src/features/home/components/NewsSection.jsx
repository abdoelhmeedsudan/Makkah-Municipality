import React from 'react';
import {DgaCard} from 'platformscode-new-react'
import {guid } from '../../../services/Helper';



function NewsSection() {

  const  data=[
    {
      showFeaturedIcon: false,
      title: "إطلاق المخطط الإعلاني في مكة",
      description:
        "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
      image:
        "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      primaryActionLabel: "Read More",
      showSecondaryAction: false,
    },
    {
      showFeaturedIcon: false,
      title: "مظاهر الاحتفاء باليوم الوطني 94 في مكة",
      description:
        "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
      image:
        "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      primaryActionLabel: "Read More",
      showSecondaryAction: false,
    },
    {
      showFeaturedIcon: false,
      title: "لجنة إسكان الحجاج تدعو لمراجعة المكاتب الهندسية المعتمدة",
      description:
        "Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.",
      image:
        "https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg",
      primaryActionLabel: "Read More",
      showSecondaryAction: false,
    },
  ];
  return (
    <section className="mt-[24px]">
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map(
        ({
          showFeaturedIcon,
          title,
          description,
          image,
          primaryActionLabel,
          showSecondaryAction,
        }) => (
          <DgaCard
            key={guid()}
            cardTitle={title}
            description={description}
            image={image}
            showFeaturedIcon={showFeaturedIcon}
            primaryActionLabel={primaryActionLabel}
            showSecondaryAction={showSecondaryAction}
            // featuredIcon={<DgaIcon icon="mail-02" size={24} variant="stroke" type="rounded" color="#1B8354" />}
          />
        )
      )}
    </div>
  </section>
  )
}

export default NewsSection