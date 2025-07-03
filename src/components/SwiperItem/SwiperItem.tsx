// SwiperItem.tsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMovie } from "@/api/hooks/useMovie";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";

const SwiperItem = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies({ page: 1, without_genres: "18,36,27,10749" });
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <Swiper
        style={{
          // Customize navigation colors
          "--swiper-navigation-color": "#C61F1F",
          "--swiper-pagination-color": "#C61F1F",
        } as React.CSSProperties}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl main-swiper"
      >
        {data?.results?.map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-[320px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-xl">
              <img
                src={IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-swiper mt-4"
      >
        {data?.results?.map((movie: IMovie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-[60px] md:h-[70px] w-full rounded overflow-hidden relative">
              <img
                src={IMAGE_URL + movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-cover rounded opacity-50 group-hover:opacity-100 transition duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 hover:opacity-0 transition duration-200"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperItem);