import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex w-max mx-auto gap-3 px-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
        {data?.map((item: IGenre) => (
          <div
            key={item.id}
            className="px-4 py-1.5 bg-gray-100 dark:bg-slate-800 text-sm rounded-full whitespace-nowrap cursor-pointer border border-transparent hover:border-[#C61F1F] hover:bg-[#C61F1F] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Genre);
