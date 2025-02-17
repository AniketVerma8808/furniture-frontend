import React from "react";
import Forms from "../components/forms/Forms";
import PropertyImg from "../assets/image/Furniture images/RentYourProperty.png";

const PropertyForm = () => {
  return (
    <>
      <Forms
        title="Rent Your Property"
        issueType="Rent Your Property"
        image={PropertyImg}
      />
    </>
  );
};

export default PropertyForm;
