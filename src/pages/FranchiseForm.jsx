import React from "react";
import Forms from "../components/forms/Forms";
import FranchiseImg from "../assets/image/Furniture images/FranchiseInquiry.png";

const FranchiseForm = () => {
  return (
    <>
      <Forms
        title="Franchise Inquiry"
        issueType="Franchise"
        image={FranchiseImg}
      />
    </>
  );
};

export default FranchiseForm;
