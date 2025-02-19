import React from 'react'
import {
    DgaBreadcrumbs,
    DgaButton,
    DgaCard,
    DgaDivider,
    DgaFeaturedIcon,
    DgaFooter,
    DgaHeaderActionBtn,
    DgaIcon,
    DgaNavHeader,
    DgaNavHeaderActions,
    DgaNavHeaderLink,
    DgaNavHeaderLogos,
    DgaNavHeaderMain,
    DgaNavHeaderMenu,
    DgaSecondNavHeader,
    DgaSecondNavHeaderActions,
    DgaSecondNavHeaderContent,
    DgaSecondNavHeaderItem,
  } from "platformscode-new-react";

function Header() {
  return (
   <>
    <DgaSecondNavHeader variant="gray">
        <DgaSecondNavHeaderActions>
          <DgaButton
            label="Button"
            variant="transparent"
            iconType="mic-01"
            size="sm"
            iconOnly
          ></DgaButton>
          <DgaButton
            label="Button"
            variant="transparent"
            iconType="zoom-out-area"
            size="sm"
            iconOnly
          ></DgaButton>
           <DgaButton
            label="Button"
            variant="transparent"
            iconType="zoom-in-area"
            size="sm"
            iconOnly
          ></DgaButton>
           <DgaButton
            label="Button"
            variant="transparent"
            iconType="view"
            size="sm"
            iconOnly
          ></DgaButton>
        </DgaSecondNavHeaderActions>
        <DgaSecondNavHeaderContent>
          <DgaSecondNavHeaderItem label="Cloudy">
            <DgaIcon icon="cloud" variant="stroke" type="rounded" />
          </DgaSecondNavHeaderItem>
          <DgaSecondNavHeaderItem label="21 Jan 2024">
            <DgaIcon icon="calendar-04" variant="stroke" type="rounded" />
          </DgaSecondNavHeaderItem>
          <DgaSecondNavHeaderItem label="2:30 PM">
            <DgaIcon icon="time-04" variant="stroke" type="rounded" />
          </DgaSecondNavHeaderItem>
          <DgaSecondNavHeaderItem label="Al-Riyadh">
            <DgaIcon icon="location-01" variant="stroke" type="rounded" />
          </DgaSecondNavHeaderItem>
        </DgaSecondNavHeaderContent>
      </DgaSecondNavHeader>
      <DgaNavHeader fullWidth divider>
        <DgaNavHeaderMain collapsed>
          <DgaNavHeaderLogos
            logoSrc="https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg"
            //   govSrc="https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg"
            logoLink="#"
            govLink="#"
          ></DgaNavHeaderLogos>
          <DgaNavHeaderMenu>
            <DgaNavHeaderLink
              label="Item  1"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  2"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  3"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  4"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  5"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  6"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
            <DgaNavHeaderLink
              label="Item  7"
              icon="arrow-down-01"
              subMenuBackground="Brand"
              subMenuFullWidth=""
            >
              {" "}
            </DgaNavHeaderLink>
          </DgaNavHeaderMenu>
        </DgaNavHeaderMain>
        <DgaNavHeaderActions>
          <DgaHeaderActionBtn
            label="Search"
            icon="search-01"
          ></DgaHeaderActionBtn>
          <DgaHeaderActionBtn
            label="عربي"
            icon="translation"
          ></DgaHeaderActionBtn>
          <DgaHeaderActionBtn label="Login" icon="user"></DgaHeaderActionBtn>
        </DgaNavHeaderActions>
      </DgaNavHeader>
   </>
  )
}

export default Header