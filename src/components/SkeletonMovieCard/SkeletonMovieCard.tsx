import React, { type FC } from 'react';

interface Props {
  count?: number;
}

const SkeletonMovieCard: FC<Props> = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, inx) => (
          <div
            key={inx}
            className="animate-pulse bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
          >
            {/* Poster placeholder */}
            <div className="w-full h-64 bg-gray-200 dark:bg-slate-700 rounded-t-xl" />

            {/* Text lines */}
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-slate-600 rounded" />
              <div className="h-3 w-full bg-gray-300 dark:bg-slate-600 rounded" />
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-slate-600 rounded" />
              <div className="h-4 w-1/3 bg-gray-300 dark:bg-slate-600 rounded" />

              {/* Button-like skeleton */}
              <div className="mt-4 h-9 w-full bg-gray-300 dark:bg-slate-600 rounded-md" />
            </div>
          </div>
        ))}
    </>
  );
};

export default React.memo(SkeletonMovieCard);
