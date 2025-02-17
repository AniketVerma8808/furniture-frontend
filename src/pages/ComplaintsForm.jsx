import React from "react";
import Forms from "../components/forms/Forms";
import complaintsImg from "../assets/image/Furniture images/Complaint.png";

const ComplaintsForm = () => {
  return (
    <>
      <Forms title=" Complaint" issueType="Complaints" image={complaintsImg} />
    </>
  );
};

export default ComplaintsForm;
