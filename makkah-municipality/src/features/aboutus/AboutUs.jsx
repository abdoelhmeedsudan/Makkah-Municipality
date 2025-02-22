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


function AboutUs() {
    const data=[
        {
          title: "About us",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "information-diamond",
        },
        {
          title: "Organizational Structure",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "hierarchy-square-02",
        },
        {
          title: "Strategy, Policies, and Regulations",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "strategy",
        },
        {
          title: "Budget and Expenditures",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "money-04",
        },
        {
          title: "Tenders and Procurements",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "validation-approval",
        },
        {
          title: "E-Participation",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "user-group",
        },
        {
          title: "Our Partners / Partnerships",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "city-02",
        },
        {
          title: "Sustainable Development",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "plant-01",
        },
        {
          title: "Careers",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "briefcase-06",
        },
        {
          title: "News and Events",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "news-01",
        },
        {
          title: "Contact Us",
          primaryActionLabel: "Action",
          secondaryActionLabel: "Action",
          showSecondaryAction: true,
          icon: "contact-02",
        },
      ]
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
            About The Entity
          </h1>
          <p className="text-md-regular text-[#161616]">
            The "About the Entity" page should serve as a landing page,
            allowing users to click on the "About the Entity" button on the
            homepage instead of selecting one of the topics displayed in the
            dropdown menu.
          </p>
        </div>
      </div>
    </div>

    <div className="px-[16px] md:px-[80px] py-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map(({ title, primaryActionLabel, icon }) => (
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