import React from 'react'
import {DgaFooter} from 'platformscode-new-react'
function Footer() {
  return (
   <>
     <DgaFooter
        background="DarkGreen"
        NavLinks={true}
        groupLinks={[
          {
            title: "ملخص",
            links: [
              { name: "حول بوابة أمانة العاصمة المقدسة", target: "" },
              { name: "الخصوصية وشروط الاستخدام", target: "" },
              { name: "كيفية استخدام البوابة", target: "" },
              { name: "الأخبار والأحداث", target: "" },
              { name: "إحصائيات اتفاقية مستوى الخدمة", target: "" },
            ],
          },
          {
            title: "روابط مهمة",
            links: [
              { name: "بوابة الخدمة الوطنية", target: "" },
              { name: "البيانات الحكومية المفتوحة", target: "" },
              {
                name: "الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي",
                target: "",
              },
              { name: "بوابة البيانات المفتوحة", target: "" },
              { name: "بوابة المشاركة الإلكترونية", target: "" },
            ],
          },
          {
            title: "الاتصال والدعم",
            links: [
              { name: "رقم الهاتف : 25701 39555", target: "" },
              { name: "تواصل معنا", target: "" },
              { name: "شارك معنا", target: "" },
              { name: "تقديم شكوى", target: "" },
              { name: "الإبلاغ عن الفساد", target: "" },
            ],
          },
        ]}
        socialMediaTitle="Social Media"
        accessibilityTitle="accessibility Tools"
        socialMediaLinks={[
          {
            title: "any",
            target: "",
            // icon: <DgaIcon icon="linkedin-02" variant="stroke" type="rounded" />,
          },
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
        ]}
        accessibilityLinks={[
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
          {
            title: "any",
            target: "",
            // icon: <ArrowRight02Icon />,
          },
        ]}
        copyright="All Right Reserved For Digital Government Authority © 2024"
        basicLinks={[
          {
            name: "Sitemap",
            target: "#",
          },
          {
            name: "RSS",
            target: "#",
          },
          {
            name: "Mobile App",
            target: "#",
          },
        ]}
        extraLinks={[
          {
            name: "Developed and Maintained by [insert the name of the entity]",
            target: "#",
          },
        ]}
        bottomImages={[
          "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg",
          "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg",
        ]}
      />
   </>
  )
}

export default Footer