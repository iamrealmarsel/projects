import SwiperCore, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Slider.scss';

SwiperCore.use([Navigation]);

function Slider() {
  return (
    <Swiper id='main' spaceBetween={0} slidesPerView={1} navigation>
      <SwiperSlide>
        <img src='img/slider-1.png' alt='sneackers' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='img/slider-2.png' alt='sneackers' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='img/slider-3.png' alt='sneackers' />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
