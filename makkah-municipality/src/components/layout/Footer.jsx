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
            title: "Overview",
            links: [
              { name: "About [name of the portal]", target: "" },
              { name: "Privacy and terms of use", target: "" },
              { name: "How to use [name of the portal]", target: "" },
              { name: "News and events", target: "" },
              { name: "Service level agreement statistics", target: "" },
            ],
          },
          {
            title: "Important links",
            links: [
              { name: "National service portal", target: "" },
              { name: "Open government data", target: "" },
              {
                name: "National strategy for data & Artificial intelligence",
                target: "",
              },
              { name: "Open data portal", target: "" },
              { name: "E-Participation portal", target: "" },
            ],
          },
          {
            title: "Contact & support",
            links: [
              { name: "Customer hub", target: "" },
              { name: "Contact us", target: "" },
              { name: "Engage with Us", target: "" },
              { name: "Submit complaint", target: "" },
              { name: "Report corruption", target: "" },
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