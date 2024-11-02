import React from "react";
import ServiceDetail from "./detail";

const Detail = ({ params }: any) => {
  const { id } = params;
  return (
    <>
      <ServiceDetail id={id} />
    </>
  );
};

export default Detail;
