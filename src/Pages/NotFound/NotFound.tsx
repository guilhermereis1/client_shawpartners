import React from "react";
import { Result } from "antd";

const NotFound: React.FC = () => {
  return (
    <Result
      title="Page not found"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
};

export default NotFound;
