import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { Rate } from "antd";
import React, { type FC } from "react";
import SkeletonMovieCard from "../SkeletonMovieCard/SkeletonMovieCard";

interface Props {
  data: undefined | IMovie[];
  loading: boolean;
  count?: number;
}

const MovieView: FC<Props> = ({ data, loading, count }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 grid gap-6 grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
        {loading ? (
          <SkeletonMovieCard count={count} />
        ) : (
          data?.map((movie: IMovie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-800"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  loading="lazy"
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3
                  title={movie.title}
                  className="text-[17px] font-semibold text-gray-900 dark:text-white line-clamp-1"
                >
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {movie.overview}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <Rate defaultValue={3} className="text-yellow-500 text-xs" />
                  <span className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                    {movie.vote_average}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default React.memo(MovieView);


