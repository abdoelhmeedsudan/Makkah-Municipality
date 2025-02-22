import React from 'react';
import {
    DgaBreadcrumbs,
    DgaDivider,
    DgaFooter,
    DgaHeaderActionBtn,
    DgaNavHeader,
    DgaNavHeaderActions,
    DgaNavHeaderLink,
    DgaNavHeaderLogos,
    DgaNavHeaderMain,
    DgaNavHeaderMenu,
    DgaSecondNavHeader,
    DgaSecondNavHeaderActions,
    DgaButton,
    DgaSecondNavHeaderContent,
    DgaIcon,
    DgaSecondNavHeaderItem,
  } from "platformscode-new-react";
  import '../../../node_modules/platformscode-new-react/dist/style.css'
import {aboutData} from '../../data/data'

function AboutUs() {
   
  return (
    <div className="overflow-hidden">
    <div className="w-full m-auto overflow-hidden bg-[#F7FDF9]">
      <div className="px-[16px] md:px-[80px] py-[40px]">
        <DgaBreadcrumbs
          items={[
            {
              path: "/",
              label: "Home",
              disabled: false,
            },
            {
              path: "/templates/customer-service",
              label: "About The Entity",
              disabled: true,
            },
          ]}
        />

        <div className="mt-[24px]">
          <h1 className="display-sm-bold text-[#161616] mb-4">
          الأمانة في سطور
          </h1>
          <p className="text-md-regular text-[#161616]">
          يعود تاريخ إنشاء أمانة العاصمة المقدسة إلى عام 1345هـ في عهد جلالة الملك عبد العزيز طيب الله ثراه بعد صدور أمر منه يرحمه الله بضم الهيئات البلدية في مكة المكرمة إلى إدارة واحدة ذات صلاحيات ومسؤوليات محددة
          بمسمى (أمانة العاصمة) وأطلق على رئيسها مسمى (أمين العاصمة) وفي عام 1397هـ أضيفت كلمة (المقدسة) إلى التسميتین.
          </p>
        </div>
      </div>
    </div>

    <div className="px-[16px] md:px-[80px] py-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {aboutData.map(({ title, primaryActionLabel, icon }) => (
          <div className="CustomCard p-[var(--spacing-xl,16px)] rounded-[16px] shadow-custom  bg-white flex flex-col items-start gap-[24px]">
            <div className="icon bg-[var(--Bg-icon-brand-light,#F3FCF6)] rounded-full p-[12px] flex items-center justify-center">
              <DgaIcon
                color="#1B8354"
                icon={icon}
                size={24}
                type="rounded"
                variant="stroke"
              />
            </div>
            <h3 className="text-[var(--text-display,#1F2A37)] text-[18px] font-[700] leading-[28px]">
              {title}
            </h3>
            <div className="ml-auto mt-auto">
              <DgaButton
                label={primaryActionLabel}
                size="lg"
                variant="secondary"
                iconOnly
                iconType="arrow-right-02"
                iconProps={{ type: "rounded", variant: "stroke" }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm-regular text-right text-[#161616] py-[16px] mt-[40px]">
        Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time
      </p>
    </div>
  </div>
  )
}

export default AboutUs