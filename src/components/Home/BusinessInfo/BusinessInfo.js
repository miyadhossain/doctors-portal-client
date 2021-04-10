import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";
const infoData = [
  {
    title: "Opening Hour",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    description: "Brooklyn, New York, USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact us now",
    description: "+12012121212",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
