import React from "react";
import BlogSingleDetails from "./BlogDetails";

const BlogDetails = ({ params }: any) => {
  const { id } = params;
  return (
    <div>
      <BlogSingleDetails id={id} />
    </div>
  );
};

export default BlogDetails;
