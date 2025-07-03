import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm font-medium text-gray-300 dark:text-gray-400 hover:text-[#C61F1F] transition-colors duration-300"
        >
          View more
          <RightOutlined className="transition-transform group-hover:translate-x-1 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(View);
