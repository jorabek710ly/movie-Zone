import { useGenre } from "@/api/hooks/useGenre";
import { useMovie } from "@/api/hooks/useMovie";
import Genre from "@/components/genre/Genre";
import MovieView from "@/components/movieView/MovieView";
import { Pagination } from "antd";
import React, { useState } from "react";

const Movies = () => {
  const [page, setPage] = useState(1);

  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const { data: genreData } = getGenres();
  const { data, isLoading } = getMovies({
    page,
    without_genres: "18,36,27,10749",
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-8">
      {/* Genre title */}
      <div className="mb-8">
       
        <Genre data={genreData?.genres.slice(0, 11)} />
      </div>

      {/* Movie view */}
      <div className="mb-12">
        <MovieView data={data?.results} loading={isLoading} count={12} />
      </div>

      {/* Pagination block */}
      <div className="w-full flex justify-center">
        <div className="bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
          <Pagination
            current={page}
            onChange={(pageNumber) => setPage(pageNumber)}
            total={data?.total_results || 500}
            pageSize={20}
            showSizeChanger={false}
            className="[&_.ant-pagination-item-active]:!bg-[#FF0000] [&_.ant-pagination-item-active]:!border-[#ff7373] [&_.ant-pagination-item-active]:!text-white [&_.ant-pagination-item]:!rounded-md [&_.ant-pagination-prev]:!text-[#c61f1f] [&_.ant-pagination-next]:!text-[#c61f1f]"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
