import React from "react";
import SectionCape from "../SectionCape";
import SectionProduct from '../SectionProduct';
import SectionAbout from "../SectionAbout";
import SectionContact from "../SectionContact";

export default function Content() {
  return(
    <div>
      <SectionCape />
      <SectionProduct />
      <SectionAbout />
      <SectionContact />
    </div>
  );
}